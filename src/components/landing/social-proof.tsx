import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Users, X } from "lucide-react";
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
const VISIVEL_MS = 8000;
const ONLINE_VISIVEL_MIN_MS = 5000;
const ONLINE_VISIVEL_MAX_MS = 10000;
const SCROLL_THRESHOLD = 120;
const COMPRA_APOS_ONLINE_MS = 5500;

function randomOnlineCount() {
  return Math.floor(Math.random() * 35) + 8; // 8 a 42
}

function randomOnlineDelay() {
  return (
    Math.floor(
      Math.random() * (ONLINE_VISIVEL_MAX_MS - ONLINE_VISIVEL_MIN_MS + 1),
    ) + ONLINE_VISIVEL_MIN_MS
  );
}

export function SocialProof() {
  const [aviso, setAviso] = useState<Aviso | null>(null);
  const [visivel, setVisivel] = useState(false);
  const [onlineVisivel, setOnlineVisivel] = useState(false);
  const [onlineCount, setOnlineCount] = useState(randomOnlineCount());
  const fechado = useRef(false);
  const onlineExibido = useRef(false);
  const compraIniciada = useRef(false);

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

    const mostrarCompra = () => {
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
          timers.push(setTimeout(mostrarCompra, 25000 + Math.random() * 20000));
        }, VISIVEL_MS),
      );
    };

    const iniciarCompras = async () => {
      if (compraIniciada.current || cancelado) return;
      compraIniciada.current = true;
      ufLocal = await detectarUf();
      if (cancelado) return;
      timers.push(setTimeout(mostrarCompra, COMPRA_APOS_ONLINE_MS));
    };

    const mostrarOnline = () => {
      if (onlineExibido.current || cancelado || fechado.current) return;
      onlineExibido.current = true;
      setOnlineCount(randomOnlineCount());
      setOnlineVisivel(true);
      timers.push(
        setTimeout(() => {
          if (cancelado) return;
          setOnlineVisivel(false);
          void iniciarCompras();
        }, randomOnlineDelay()),
      );
    };

    const onScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        mostrarOnline();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      cancelado = true;
      window.removeEventListener("scroll", onScroll);
      timers.forEach(clearTimeout);
    };
  }, []);

  const fechar = () => {
    fechado.current = true;
    setVisivel(false);
    setOnlineVisivel(false);
  };

  return (
    <>
      {onlineVisivel && (
        <div
          aria-live="polite"
          className="pointer-events-none fixed bottom-[110px] left-3 z-40 max-w-[19rem] transition-all duration-500 sm:bottom-[110px] sm:left-5 lg:bottom-5 translate-y-0 opacity-100"
        >
          <div className="pointer-events-auto flex items-center gap-2.5 rounded-xl bg-surface/95 px-3.5 py-2.5 shadow-2xl ring-1 ring-border/60 backdrop-blur">
            <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
              <Users className="h-4 w-4 shrink-0 text-success" aria-hidden="true" />
              <span className="absolute -right-0.5 -top-0.5 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
            </div>
            <p className="whitespace-nowrap text-sm font-semibold text-foreground">
              {onlineCount} pessoas estão vendo agora
            </p>
            <button
              type="button"
              aria-label="Fechar aviso"
              onClick={fechar}
              className="ml-1 text-muted-foreground/60 transition-colors hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      {visivel && aviso && (
        <div
          aria-live="polite"
          className={`pointer-events-none fixed bottom-[110px] left-3 z-40 max-w-[19rem] transition-all duration-500 sm:bottom-[110px] sm:left-5 lg:bottom-5 ${
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
                {aviso.tempo === "agora mesmo" ? "Acabou de comprar" : `Comprou ${aviso.tempo}`}
              </p>
            </div>
            <button
              type="button"
              aria-label="Fechar aviso"
              onClick={fechar}
              className="absolute right-2 top-2 text-muted-foreground/60 transition-colors hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
