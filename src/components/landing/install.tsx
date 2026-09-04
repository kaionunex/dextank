import { CheckCircle2 } from "lucide-react";
import passo1 from "@/assets/passo-1.jpg";
import passo2 from "@/assets/passo-2.jpg";
import passo3 from "@/assets/passo-3.jpg";

const passos = [
  {
    img: passo1,
    n: "1",
    titulo: "Remova o bocal original",
    texto: "Com a chave da moto, retire a tampa e o acabamento original do tanque.",
  },
  {
    img: passo2,
    n: "2",
    titulo: "Encaixe o adaptador",
    texto: "Posicione o adaptador alinhando as setas de indicação com os furos do tanque.",
  },
  {
    img: passo3,
    n: "3",
    titulo: "Feche e pronto",
    texto: "Recoloque o bocal no adaptador, feche e retire a chave. Instalação concluída.",
  },
];

export function Install() {
  return (
    <section className="border-b border-border py-14" id="instalacao">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-display text-3xl text-foreground sm:text-4xl">
          Instalação em <span className="text-primary">3 passos</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Sem ferramenta especial, sem mecânico e sem alterar nada no tanque.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {passos.map((p) => (
            <article key={p.n} className="overflow-hidden rounded-xl border border-border bg-surface">
              <img
                src={p.img}
                alt={`Passo ${p.n}: ${p.titulo}`}
                width={800}
                height={600}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-5">
                <span className="font-display text-3xl text-primary">{p.n}</span>
                <h3 className="mt-1 font-display text-lg text-foreground">{p.titulo}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.texto}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 rounded-xl border border-border bg-surface px-5 py-4 text-center">
          <CheckCircle2 className="h-5 w-5 text-success" aria-hidden="true" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Compatibilidade garantida:</strong> compatível com
            Yamaha Fazer FZ15 2022, 2023, 2024, 2025 e 2026.
          </p>
        </div>
      </div>
    </section>
  );
}
