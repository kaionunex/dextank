import { Check, X, Wrench, Fuel, Puzzle, Sparkles, ShieldCheck, Timer } from "lucide-react";
import antes from "@/assets/antes.jpg";
import depois from "@/assets/depois.jpg";

export function BeforeAfter() {
  return (
    <section className="border-b border-border py-14" id="antes-depois">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-display text-3xl text-foreground sm:text-4xl">
          A diferença aparece <span className="text-primary">no primeiro posto</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Todo mundo que anda de FZ15 conhece a cena: chave na mão, tampa solta, fila atrás.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <article className="overflow-hidden rounded-xl border border-destructive/40 bg-surface">
            <div className="flex items-center gap-2 bg-destructive/15 px-4 py-2">
              <X className="h-4 w-4 text-destructive" aria-hidden="true" />
              <span className="font-display text-sm text-destructive">Antes</span>
            </div>
            <img
              src={antes}
              alt="Motociclista removendo com a chave o bocal original do tanque para abastecer"
              width={912}
              height={912}
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
            <ul className="space-y-2 px-4 py-4 text-sm text-muted-foreground">
              <li>Precisa da chave toda vez que for abastecer</li>
              <li>Tampa apoiada no tanque, arranhando a pintura</li>
              <li>Risco de esquecer ou derrubar o bocal no posto</li>
            </ul>
          </article>

          <article className="overflow-hidden rounded-xl border border-success/40 bg-surface">
            <div className="flex items-center gap-2 bg-success/15 px-4 py-2">
              <Check className="h-4 w-4 text-success" aria-hidden="true" />
              <span className="font-display text-sm text-success">Depois</span>
            </div>
            <img
              src={depois}
              alt="Bico de combustível abastecendo a moto com o adaptador articulado aberto para o lado"
              width={912}
              height={912}
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
            <ul className="space-y-2 px-4 py-4 text-sm text-muted-foreground">
              <li>Abre para o lado e fica preso na moto</li>
              <li>Tanque protegido, acabamento original preservado</li>
              <li>Abasteceu, fechou e seguiu viagem</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

const beneficios = [
  {
    icon: Fuel,
    titulo: "Abastece sem remover",
    texto: "Sistema articulado: a tampa abre para o lado e continua fixa na moto.",
  },
  {
    icon: Puzzle,
    titulo: "Encaixe perfeito",
    texto:
      "Projetado nas medidas exatas do tanque: compatível com Yamaha Fazer FZ15 2022, 2023, 2024, 2025 e 2026.",
  },
  {
    icon: Timer,
    titulo: "Instala em minutos",
    texto: "Passo a passo simples, sem furar, cortar ou levar em mecânico.",
  },
  {
    icon: ShieldCheck,
    titulo: "Protege o tanque",
    texto: "Fim da tampa apoiada na pintura e dos riscos ao redor do bocal.",
  },
  {
    icon: Sparkles,
    titulo: "Acabamento premium",
    texto: "Textura fosca que combina com o visual original da moto.",
  },
  {
    icon: Wrench,
    titulo: "Reversível",
    texto: "Não altera o tanque: se quiser, volta ao original a qualquer momento.",
  },
];

export function Benefits() {
  return (
    <section className="border-b border-border py-14" id="beneficios">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-display text-3xl text-foreground sm:text-4xl">
          Por que ele vale <span className="text-primary">cada centavo</span>
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((b) => (
            <div key={b.titulo} className="rounded-xl border border-border bg-surface p-5">
              <b.icon className="h-7 w-7 text-primary" aria-hidden="true" />
              <h3 className="mt-3 font-display text-lg text-foreground">{b.titulo}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Exclusivity() {
  return (
    <section className="border-b border-border bg-surface py-14">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="font-display text-sm uppercase tracking-widest text-primary">
          Não existe igual no mercado
        </p>
        <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">
          O único adaptador de bocal para o tanque de combustível da Yamaha FZ15
        </h2>
        <p className="mt-4 text-muted-foreground">
          O DEX Tank não é revenda de peça genérica: o projeto nasceu aqui, foi desenhado
          especificamente para o bocal da Yamaha FZ15 e é produzido pela nossa própria operação.
          Você não vai encontrar esse produto em nenhum outro fornecedor do mundo — nem original,
          nem paralelo.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            ["Projeto próprio", "Desenvolvido e testado na FZ15 real"],
            ["Produção própria", "Controle total de qualidade lote a lote"],
            ["Fornecedor único", "Estoque limitado por lote de produção"],
          ].map(([t, s]) => (
            <div key={t} className="rounded-xl border border-border bg-background p-4">
              <p className="font-display text-primary">{t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
