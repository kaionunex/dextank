import { Check, X, Wrench, Fuel, Puzzle, Sparkles, ShieldCheck, Timer } from "lucide-react";
import antes from "@/assets/antes.jpg";
import depois from "@/assets/depois.jpg";

export function BeforeAfter() {
  return (
    <section className="border-b border-border py-14" id="antes-depois">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
            DEX Tank Yamaha FZ15
          </p>
          <h2 className="mt-2 font-display text-3xl text-foreground sm:text-4xl">
            Transforme seu abastecimento
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Todo mundo que anda de FZ15 conhece a cena: chave na mão, tampa solta, fila atrás.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {/* BEFORE */}
          <div className="group relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-destructive/20 to-transparent blur-lg opacity-50 transition duration-500 group-hover:opacity-100" />
            <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface">
              <div className="relative aspect-square w-full overflow-hidden">
                <img
                  src={antes}
                  alt="Motociclista removendo com a chave o bocal original do tanque para abastecer"
                  width={912}
                  height={912}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale opacity-70 transition duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-destructive px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-destructive-foreground shadow-lg ring-1 ring-white/20">
                    <X className="h-3 w-3" aria-hidden="true" /> Antes
                  </span>
                </div>
              </div>
              <div className="flex flex-col p-6 sm:p-8">
                <h3 className="font-display text-lg text-destructive sm:text-xl">
                  Dificuldade e riscos
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2.5">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden="true" />
                    <span>Precisa da chave toda vez que for abastecer</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden="true" />
                    <span>Tampa apoiada no tanque, arranhando a pintura</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden="true" />
                    <span>Risco de esquecer ou derrubar o bocal no posto</span>
                  </li>
                </ul>
              </div>
            </article>
          </div>

          {/* AFTER */}
          <div className="group relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-primary/40 to-primary/0 blur-xl opacity-60 transition duration-500 group-hover:opacity-100" />
            <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-primary/20 bg-surface shadow-2xl shadow-black">
              <div className="relative aspect-square w-full overflow-hidden">
                <img
                  src={depois}
                  alt="Bico de combustível abastecendo a moto com o adaptador articulado aberto para o lado"
                  width={912}
                  height={912}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-success px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-success-foreground shadow-lg ring-1 ring-white/20">
                    <Check className="h-3 w-3" aria-hidden="true" /> Depois
                  </span>
                </div>
              </div>
              <div className="flex flex-col p-6 sm:p-8">
                <h3 className="font-display text-lg text-success sm:text-xl">
                  Tecnologia e praticidade
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-foreground">
                  <li className="flex items-start gap-2.5 font-medium">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                    <span>Abre para o lado e fica preso na moto</span>
                  </li>
                  <li className="flex items-start gap-2.5 font-medium">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                    <span>Tanque protegido, acabamento original preservado</span>
                  </li>
                  <li className="flex items-start gap-2.5 font-medium">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                    <span>Abasteceu, fechou e seguiu viagem</span>
                  </li>
                </ul>
              </div>
            </article>
          </div>
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
            ["Fornecedor único", "Lote de lançamento com estoque limitado"],
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
