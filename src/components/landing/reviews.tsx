import { Star, BadgeCheck } from "lucide-react";
import cliente1 from "@/assets/cliente-1.jpg";
import cliente2 from "@/assets/cliente-2.jpg";
import cliente3 from "@/assets/cliente-3.jpg";
import { PRODUTO } from "@/lib/landing";

const distribuicao = [
  [5, 92],
  [4, 6],
  [3, 1],
  [2, 0],
  [1, 1],
] as const;

const depoimentos = [
  {
    nome: "Rodrigo M.",
    cidade: "Campinas/SP",
    nota: 5,
    texto:
      "Instalei em menos de 10 minutos vendo o passo a passo. Abasteci no mesmo dia sem tirar o bocal, ficou perfeito na minha FZ15 2023.",
    foto: cliente1,
  },
  {
    nome: "Jonatas P.",
    cidade: "Belo Horizonte/MG",
    nota: 5,
    texto:
      "Encaixe justo, nada de folga. O acabamento combina com a moto, parece de fábrica. Valeu cada real.",
    foto: cliente2,
  },
  {
    nome: "Elaine S.",
    cidade: "Curitiba/PR",
    nota: 5,
    texto:
      "Comprei para o meu marido e ele amou. Chegou bem embalado e o suporte respondeu rápido quando perguntei sobre o ano da moto.",
    foto: cliente3,
  },
  {
    nome: "Diego A.",
    cidade: "Fortaleza/CE",
    nota: 5,
    texto:
      "O que mais me incomodava era segurar a tampa no posto. Resolveu 100%. Recomendo para quem roda todo dia.",
  },
  {
    nome: "Marcelo T.",
    cidade: "Porto Alegre/RS",
    nota: 4,
    texto:
      "Produto muito bom, só levei um tempinho para alinhar as setas na primeira tentativa. Depois disso, sem reclamação.",
  },
  {
    nome: "Wesley R.",
    cidade: "Goiânia/GO",
    nota: 5,
    texto: "Procurei em tudo quanto é loja e não achei parecido. Realmente é exclusivo mesmo.",
  },
  {
    nome: "Priscila F.",
    cidade: "Salvador/BA",
    nota: 5,
    texto: "Chegou antes do prazo e o pagamento no Pix ainda saiu com desconto. Já indiquei no grupo de motoclube.",
  },
  {
    nome: "André L.",
    cidade: "São Paulo/SP",
    nota: 5,
    texto:
      "Além da praticidade, deu um visual mais limpo no tanque. Todo mundo pergunta onde comprei.",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex" aria-label={`${n} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={i < n ? "h-4 w-4 fill-primary text-primary" : "h-4 w-4 text-muted-foreground"}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="scroll-mt-4 border-b border-border py-14" id="avaliacoes">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-display text-3xl text-foreground sm:text-4xl">
          Quem já instalou <span className="text-primary">aprova</span>
        </h2>

        <div className="mt-8 grid gap-6 rounded-xl border border-border bg-surface p-6 sm:grid-cols-[auto_1fr] sm:items-center">
          <div className="text-center">
            <p className="font-display text-5xl text-foreground">
              {PRODUTO.nota.toString().replace(".", ",")}
            </p>
            <div className="mt-1 flex justify-center">
              <Stars n={5} />
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              {PRODUTO.avaliacoes.toLocaleString("pt-BR")} avaliações
            </p>
          </div>
          <div className="space-y-1.5">
            {distribuicao.map(([estrelas, pct]) => (
              <div key={estrelas} className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="w-8 tabular-nums">{estrelas}★</span>
                <div className="h-2 flex-1 overflow-hidden rounded bg-muted">
                  <div className="h-full bg-primary" style={{ width: `${pct}%` }} />
                </div>
                <span className="w-8 text-right tabular-nums">{pct}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {depoimentos.map((d) => (
            <article key={d.nome} className="flex flex-col rounded-xl border border-border bg-surface p-4">
              <Stars n={d.nota} />
              <p className="mt-2 flex-1 text-sm text-muted-foreground">“{d.texto}”</p>
              {d.foto ? (
                <img
                  src={d.foto}
                  alt={`Foto enviada por ${d.nome} com o adaptador instalado`}
                  width={700}
                  height={700}
                  loading="lazy"
                  className="mt-3 aspect-square w-full rounded-lg object-cover"
                />
              ) : null}
              <div className="mt-3 flex items-center gap-2">
                <span className="text-sm font-semibold text-foreground">{d.nome}</span>
                <span className="text-xs text-muted-foreground">{d.cidade}</span>
              </div>
              <span className="mt-1 inline-flex items-center gap-1 text-xs text-success">
                <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" /> Compra verificada
              </span>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
