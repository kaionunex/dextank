import { useState } from "react";
import { Star, BadgeCheck, ChevronDown, ShieldCheck } from "lucide-react";
import cliente1 from "@/assets/cliente-1.jpg";
import cliente2 from "@/assets/cliente-2.jpg";
import cliente3 from "@/assets/cliente-3.jpg";
import cliente4 from "@/assets/cliente-4.jpg";
import cliente5 from "@/assets/cliente-5.jpg";
import cliente6 from "@/assets/cliente-6.jpg";
import { PRODUTO } from "@/lib/landing";

const distribuicao = [
  [5, 92],
  [4, 6],
  [3, 1],
  [2, 0],
  [1, 1],
] as const;

type Depoimento = {
  nome: string;
  cidade: string;
  nota: number;
  texto: string;
  foto?: string;
};

const depoimentos: Depoimento[] = [
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
    foto: cliente4,
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
    texto:
      "Chegou antes do prazo e o pagamento no Pix ainda saiu com desconto. Já indiquei no grupo de motoclube.",
  },
  {
    nome: "André L.",
    cidade: "São Paulo/SP",
    nota: 5,
    texto:
      "Além da praticidade, deu um visual mais limpo no tanque. Todo mundo pergunta onde comprei.",
  },
  {
    nome: "Fábio N.",
    cidade: "Ribeirão Preto/SP",
    nota: 5,
    texto:
      "Trabalho com entrega e abasteço três vezes por semana. Ganho tempo em todo abastecimento.",
    foto: cliente5,
  },
  {
    nome: "Tiago B.",
    cidade: "Niterói/RJ",
    nota: 5,
    texto: "Material parece bem resistente, nada de plástico frágil. Encaixou de primeira.",
  },
  {
    nome: "Luana C.",
    cidade: "Florianópolis/SC",
    nota: 5,
    texto: "Minha FZ15 é 2024 e serviu certinho. Instalei sozinha, sem ferramenta nenhuma.",
  },
  {
    nome: "Renato V.",
    cidade: "Manaus/AM",
    nota: 5,
    texto:
      "Calor forte aqui e até agora não deformou nada. Já são dois meses de uso diário sem problema.",
    foto: cliente6,
  },
  {
    nome: "Gustavo H.",
    cidade: "Londrina/PR",
    nota: 4,
    texto: "Gostei muito. Só achei o frete um pouco demorado para a minha região, mas chegou bem.",
  },
  {
    nome: "Ítalo D.",
    cidade: "Recife/PE",
    nota: 5,
    texto: "Acabou o medo de riscar o tanque apoiando a tampa. Simples e resolve de verdade.",
  },
  {
    nome: "Cristiane A.",
    cidade: "Uberlândia/MG",
    nota: 5,
    texto: "Presenteei meu filho. Ele instalou em minutos e ficou com cara de peça original.",
  },
  {
    nome: "Bruno S.",
    cidade: "Santo André/SP",
    nota: 5,
    texto: "Vedação perfeita, nenhum cheiro de combustível e nenhum vazamento até agora.",
  },
  {
    nome: "Wanderson L.",
    cidade: "Cuiabá/MT",
    nota: 5,
    texto: "Comprei desconfiado e me surpreendi. Qualidade bem acima do que eu esperava.",
  },
  {
    nome: "Paulo R.",
    cidade: "Joinville/SC",
    nota: 5,
    texto: "Chegou com nota fiscal e bem embalado. Atendimento rápido no WhatsApp.",
  },
  {
    nome: "Camila O.",
    cidade: "Brasília/DF",
    nota: 5,
    texto: "Abastecer virou coisa de segundos. Não volto mais para o bocal original.",
  },
  {
    nome: "Eduardo M.",
    cidade: "Sorocaba/SP",
    nota: 5,
    texto: "Encaixe firme, não balança com a moto em movimento nem em estrada de terra.",
  },
  {
    nome: "Higor F.",
    cidade: "Vitória/ES",
    nota: 5,
    texto: "Custo-benefício excelente. Já pedi um segundo para a moto do meu irmão.",
  },
  {
    nome: "Sérgio B.",
    cidade: "Maringá/PR",
    nota: 4,
    texto: "Muito bom. Só sugiro caprichar mais no manual, o resto está perfeito.",
  },
  {
    nome: "Vinícius P.",
    cidade: "Belém/PA",
    nota: 5,
    texto: "Chuva forte toda semana aqui e nada de entrar água no tanque.",
  },
  {
    nome: "Rafaela D.",
    cidade: "Campo Grande/MS",
    nota: 5,
    texto: "O visual da moto mudou bastante, ficou bem mais bonito e limpo.",
  },
  {
    nome: "Márcio A.",
    cidade: "São José dos Campos/SP",
    nota: 5,
    texto: "Faço 120 km por dia. Peça segura, nunca soltou e nunca travou.",
  },
  {
    nome: "Leandro K.",
    cidade: "Blumenau/SC",
    nota: 5,
    texto: "Instalação realmente plug and play. Nada de furo, nada de cola.",
  },
  {
    nome: "Juliana M.",
    cidade: "Natal/RN",
    nota: 5,
    texto: "Meu esposo adorou o presente. Disse que era exatamente o que faltava na FZ15.",
  },
  {
    nome: "Otávio C.",
    cidade: "Juiz de Fora/MG",
    nota: 5,
    texto: "Frentista até elogiou, disse que nunca tinha visto igual em FZ15.",
  },
  {
    nome: "Alan T.",
    cidade: "Feira de Santana/BA",
    nota: 5,
    texto: "Peça leve e resistente. Já pegou sol o dia todo e não desbotou.",
  },
  {
    nome: "Rogério N.",
    cidade: "Bauru/SP",
    nota: 5,
    texto: "Reversível mesmo: tirei para lavar a moto e recoloquei sem esforço.",
  },
  {
    nome: "Débora L.",
    cidade: "Contagem/MG",
    nota: 5,
    texto: "Chegou em 4 dias. Melhor compra que fiz para a moto neste ano.",
  },
  {
    nome: "Kleber S.",
    cidade: "São Luís/MA",
    nota: 4,
    texto: "Ótimo produto. Levei uns minutos a mais para entender o alinhamento, depois foi fácil.",
  },
  {
    nome: "Anderson G.",
    cidade: "Guarulhos/SP",
    nota: 5,
    texto: "Trabalho de mototáxi e economizo tempo em cada parada no posto.",
  },
  {
    nome: "Fernanda R.",
    cidade: "Aracaju/SE",
    nota: 5,
    texto: "Acabamento muito bom, cor combina certinho com o preto da moto.",
  },
  {
    nome: "Cauã P.",
    cidade: "Osasco/SP",
    nota: 5,
    texto: "Minha FZ15 2022 encaixou perfeito. Recomendo sem medo.",
  },
  {
    nome: "Ubiratan M.",
    cidade: "Palmas/TO",
    nota: 5,
    texto: "Resolveu o problema da tampa apoiada no tanque. Não risca mais a pintura.",
  },
  {
    nome: "Sandro V.",
    cidade: "Petrolina/PE",
    nota: 5,
    texto: "Compra segura, veio rastreio no e-mail e chegou antes do prazo.",
  },
  {
    nome: "Milena F.",
    cidade: "Caxias do Sul/RS",
    nota: 5,
    texto: "Uso desde março, sem folga e sem barulho. Continua como no primeiro dia.",
  },
  {
    nome: "Everton J.",
    cidade: "Chapecó/SC",
    nota: 5,
    texto: "O suporte confirmou a compatibilidade antes de eu comprar. Atendimento nota 10.",
  },
  {
    nome: "Rian A.",
    cidade: "Teresina/PI",
    nota: 5,
    texto: "Muito prático. Abro com a mão e abasteço, sem chave, sem enrolação.",
  },
  {
    nome: "Adriano B.",
    cidade: "Anápolis/GO",
    nota: 5,
    texto: "Já levei tombo leve e a peça nem trincou. Material bom mesmo.",
  },
  {
    nome: "Larissa T.",
    cidade: "Mogi das Cruzes/SP",
    nota: 5,
    texto: "Simples de instalar e faz muita diferença no dia a dia. Vale o preço.",
  },
  {
    nome: "Nilton C.",
    cidade: "Volta Redonda/RJ",
    nota: 5,
    texto: "Fiquei com receio de vazamento, mas não tem nada disso. Tanque bem fechado.",
  },
  {
    nome: "Jean P.",
    cidade: "Pelotas/RS",
    nota: 4,
    texto: "Bom produto, entrega correta. Só queria que tivesse opção de outra cor.",
  },
  {
    nome: "Hugo M.",
    cidade: "Imperatriz/MA",
    nota: 5,
    texto: "Meus amigos do rolê já pediram o link. Peça diferente de tudo que tem por aí.",
  },
  {
    nome: "Talita S.",
    cidade: "Franca/SP",
    nota: 5,
    texto: "Fácil de limpar e não acumula sujeira. Continua com aparência de nova.",
  },
  {
    nome: "Emerson D.",
    cidade: "Macapá/AP",
    nota: 5,
    texto: "Chegou até aqui rapidinho e bem protegido. Instalação em 5 minutos.",
  },
  {
    nome: "Vagner L.",
    cidade: "Piracicaba/SP",
    nota: 5,
    texto: "Uso todo dia na estrada. Nada de vibração ou peça soltando.",
  },
  {
    nome: "Bianca R.",
    cidade: "Serra/ES",
    nota: 5,
    texto: "Comprei no Pix com desconto e chegou certinho. Recomendo a loja.",
  },
  {
    nome: "Rafael Q.",
    cidade: "Dourados/MS",
    nota: 5,
    texto: "Único adaptador que achei para FZ15 e valeu muito a pena. Nota 10.",
  },
];

const INICIAL = 8;
const PASSO = 4;

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
  const [visiveis, setVisiveis] = useState(INICIAL);
  const restantes = depoimentos.length - visiveis;

  return (
    <section className="scroll-mt-4 py-20" id="avaliacoes">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-display text-3xl text-foreground sm:text-4xl">
          Quem já instalou <span className="text-primary">aprova</span>
        </h2>

        <div className="relative mt-8">
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/20 to-primary/0 opacity-50 blur-lg" aria-hidden="true" />
          <div className="relative rounded-2xl bg-surface p-4 shadow-lg">
            <div className="grid grid-cols-[auto_1fr] items-center gap-4">
              <div className="text-center">
                <p className="font-display text-4xl text-foreground">{PRODUTO.nota}</p>
                <div className="mt-0.5 flex justify-center">
                  <Stars n={5} />
                </div>
                <p className="mt-0.5 text-xs font-semibold tracking-wider text-muted-foreground">
                  {PRODUTO.avaliacoes} avaliações
                </p>
              </div>
              <div className="max-w-[260px] space-y-0.5">
                {distribuicao.map(([estrelas, pct]) => (
                  <div key={estrelas} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <span className="w-3 tabular-nums">{estrelas}</span>
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                      <div className="h-full bg-primary" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-border/30 pt-2.5">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-success">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" aria-hidden="true" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" aria-hidden="true" />
                </span>
                {PRODUTO.recomendam}% Recomendam
              </div>
              <div className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                Compra Garantida
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {depoimentos.slice(0, visiveis).map((d) => (
            <article
              key={d.nome}
              className="flex flex-col rounded-xl bg-surface p-4"
            >
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

        {restantes > 0 ? (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setVisiveis((v) => Math.min(v + PASSO, depoimentos.length))}
              className="inline-flex items-center gap-1.5 rounded-lg bg-muted px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/80"
            >
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
              Ver mais
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
