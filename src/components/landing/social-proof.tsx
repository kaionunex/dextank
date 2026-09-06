import { useEffect, useRef, useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import produto from "@/assets/produto-isolado.png";
import {
  NOMES,
  TEMPOS,
  UF_FALLBACK,
  UF_VIZINHAS,
  cidadeDaUf,
  detectarUf,
  pick,
} from "@/lib/social-proof";

type Aviso = { nome: string; local: string; tempo: string };

const PRIMEIRO_DELAY = 6000;
const VISIVEL_MS = 6000;

export function SocialProof() {
  const [aviso, setAviso] = useState<Aviso | null>(null);
  const [visivel, setVisivel] = useState(false);
  const fechado = useRef(false);

  useEffect(() => {
    let cancelado = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    let ufLocal: string | null = null;
    let ultimoLocal: string | undefined;
    let primeira = true;

    const proximoLocal = () => {
      let uf = ufLocal;
      if (!primeira) {
        const vizinhas = (ufLocal && UF_VIZINHAS[ufLocal]) || [];
        const sorteio = Math.random();
        if (ufLocal && sorteio < 0.5) uf = ufLocal;
        else if (vizinhas.length && sorteio < 0.8) uf = pick(vizinhas);
        else uf = pick(UF_FALLBACK);
      }
      const escolhida = uf ? cidadeDaUf(uf, ultimoLocal) : null;
      if (escolhida && uf) return `${escolhida}/${uf}`;
      const alt = pick(UF_FALLBACK);
      return `${cidadeDaUf(alt, ultimoLocal)}/${alt}`;
    };

    const mostrar = () => {
      if (cancelado || fechado.current) return;
      const local = proximoLocal();
      ultimoLocal = local;
      setAviso({
        nome: pick(NOMES),
        local,
        tempo: primeira ? "agora mesmo" : pick(TEMPOS),
      });
      primeira = false;
      setVisivel(true);
      timers.push(
        setTimeout(() => {
          if (cancelado) return;
          setVisivel(false);
          timers.push(setTimeout(mostrar, 25000 + Math.random() * 20000));
        }, VISIVEL_MS),
      );
    };

    void detectarUf().then((uf) => {
      if (cancelado) return;
      ufLocal = uf;
      timers.push(setTimeout(mostrar, PRIMEIRO_DELAY));
    });

    return () => {
      cancelado = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  if (!aviso) return null;

  return (
    <div
      aria-live="polite"
      className={`pointer-events-none fixed bottom-20 left-3 z-40 max-w-[19rem] transition-all duration-500 sm:bottom-5 sm:left-5 ${
        visivel ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <div className="pointer-events-auto relative flex items-center gap-3 rounded-xl bg-surface/95 p-2.5 pr-8 shadow-2xl ring-1 ring-border/60 backdrop-blur">
        <img
          src={produto}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-11 w-11 shrink-0 rounded-lg bg-background object-contain"
        />
        <div className="min-w-0 leading-tight">
          <p className="truncate text-sm font-semibold text-foreground">
            {aviso.nome} — {aviso.local}
          </p>
          <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-success" aria-hidden="true" />
            Acabou de comprar o Dex Tank
          </p>
          <p className="mt-0.5 text-[11px] text-muted-foreground/70">{aviso.tempo}</p>
        </div>
        <button
          type="button"
          aria-label="Fechar aviso"
          onClick={() => {
            fechado.current = true;
            setVisivel(false);
          }}
          className="absolute right-2 top-2 text-muted-foreground/60 transition-colors hover:text-foreground"
        >
          <X className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
