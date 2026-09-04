import { Wrench, Timer, CheckCircle2 } from "lucide-react";
import { CtaButton } from "./cta";
import { PRODUTO } from "@/lib/landing";

const base = import.meta.env.BASE_URL;

const selos = [
  { icon: Wrench, texto: "Sem ferramentas" },
  { icon: Timer, texto: "Menos de 2 minutos" },
  { icon: CheckCircle2, texto: "Encaixe perfeito" },
];

export function VideoInstall() {
  return (
    <section className="border-b border-border py-14" id="video-instalacao">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-center font-display text-3xl leading-tight text-foreground sm:text-4xl">
          Veja instalado na FZ15 em menos de 2 minutos —{" "}
          <span className="text-primary">e nunca mais tire a tampa pra abastecer</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Sem ferramenta, sem mecânico e sem alterar nada no tanque. E o resultado deixa o visual da
          sua FZ15 muito mais limpo.
        </p>

        <div className="mt-8 overflow-hidden rounded-xl border border-border bg-surface shadow-2xl">
          <video
            controls
            playsInline
            preload="none"
            poster={`${base}videos/capa-instalacao.jpg`}
            className="aspect-video w-full"
          >
            <source src={`${base}videos/instalacao.mp4`} type="video/mp4" />
            Seu navegador não suporta a reprodução de vídeo.
          </video>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground sm:text-sm">
          {selos.map(({ icon: Icon, texto }) => (
            <span key={texto} className="inline-flex items-center gap-1.5">
              <Icon className="h-4 w-4 text-primary" aria-hidden="true" /> {texto}
            </span>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-md">
          <CtaButton href="#avaliacoes">VER QUEM JÁ INSTALOU</CtaButton>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            {PRODUTO.preco} à vista ou {PRODUTO.parcelas} no cartão
          </p>
        </div>
      </div>
    </section>
  );
}
