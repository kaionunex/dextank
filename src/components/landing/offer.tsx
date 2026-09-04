import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CreditCard, Lock, ShieldCheck, Truck } from "lucide-react";
import produto from "@/assets/produto-isolado.png";
import { CtaButton } from "./cta";
import { PRODUTO } from "@/lib/landing";

export function Offer() {
  return (
    <section className="border-b border-border py-14" id="oferta">
      <div className="mx-auto max-w-4xl px-4">
        <div className="grid gap-8 rounded-2xl border border-primary/40 bg-surface p-6 sm:p-8 md:grid-cols-2 md:items-center">
          <img
            src={produto}
            alt="Adaptador articulado do bocal do tanque para Yamaha FZ15 visto de frente"
            width={1024}
            height={1024}
            loading="lazy"
            className="mx-auto w-56 md:w-full"
          />
          <div>
            <h2 className="font-display text-2xl text-foreground sm:text-3xl">
              Adaptador Articulado do Bocal — FZ15
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              1 unidade + adaptador de acabamento + instruções de instalação.
            </p>

            <p className="mt-5 text-sm text-muted-foreground line-through">{PRODUTO.precoAncora}</p>
            <p className="font-display text-5xl text-primary">{PRODUTO.preco}</p>
            <p className="mt-1 text-sm text-foreground">
              ou <strong>{PRODUTO.precoPix}</strong> no Pix (10% de desconto)
            </p>
            <p className="text-sm text-muted-foreground">
              em até <strong className="text-foreground">{PRODUTO.parcelas}</strong> no cartão de
              crédito
            </p>

            <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-primary" aria-hidden="true" /> Frete grátis para todo
                o Brasil — só hoje
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" /> Garantia de{" "}
                {PRODUTO.garantiaDias} dias
              </li>
              <li className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-primary" aria-hidden="true" /> Pix, cartão ou
                boleto
              </li>
            </ul>

            <div className="mt-6">
              <CtaButton>COMPRAR COM FRETE GRÁTIS</CtaButton>
              <p className="mt-2 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                <Lock className="h-3.5 w-3.5" aria-hidden="true" /> Ambiente 100% seguro — opções de
                frete calculadas no checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Guarantee() {
  return (
    <section className="border-b border-border bg-surface py-14">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
        <ShieldCheck className="h-12 w-12 text-success" aria-hidden="true" />
        <h2 className="mt-4 font-display text-3xl text-foreground">
          {PRODUTO.garantiaDias} dias de garantia — o risco é nosso
        </h2>
        <p className="mt-3 text-muted-foreground">
          Instale, use no dia a dia e sinta a diferença. Se o produto apresentar qualquer defeito de
          fabricação dentro de {PRODUTO.garantiaDias} dias, nós trocamos ou devolvemos o seu
          dinheiro. Simples assim.
        </p>
      </div>
    </section>
  );
}

const faq = [
  [
    "Serve na minha FZ15?",
    "O adaptador foi desenvolvido para todos os modelos novos da Yamaha FZ15 a partir de 2022. Se a sua moto for de ano anterior, fale com o nosso SAC antes de comprar.",
  ],
  [
    "Preciso de mecânico para instalar?",
    "Não. A instalação é feita em poucos minutos com a própria chave da moto, seguindo o passo a passo que acompanha o produto.",
  ],
  [
    "Ele danifica o tanque?",
    "Não. O adaptador apenas se encaixa sobre o bocal original, sem furos e sem cortes. A instalação é totalmente reversível.",
  ],
  [
    "Tem risco de vazamento ou de entrar sujeira?",
    "Não. O bocal original continua sendo o elemento de vedação do tanque. O adaptador é a peça articulada que dispensa a remoção da tampa.",
  ],
  [
    "O tanque continua trancado?",
    "Sim. O sistema de travamento por chave do bocal original é mantido.",
  ],
  [
    "Quais são as formas de pagamento?",
    "Pix com 10% de desconto, cartão de crédito em até 12x e boleto. Tudo processado em ambiente seguro no checkout.",
  ],
  [
    "Como funciona o frete?",
    "Frete grátis para todo o Brasil nesta oferta. Se preferir receber mais rápido, opções de envio expresso ficam disponíveis no checkout.",
  ],
  [
    "E se eu não gostar?",
    "Você tem 90 dias de garantia contra defeitos de fabricação, além dos 7 dias de arrependimento previstos no Código de Defesa do Consumidor.",
  ],
] as const;

export function Faq() {
  return (
    <section className="border-b border-border py-14" id="faq">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-center font-display text-3xl text-foreground sm:text-4xl">
          Perguntas frequentes
        </h2>
        <Accordion type="single" collapsible className="mt-6">
          {faq.map(([q, a]) => (
            <AccordionItem key={q} value={q}>
              <AccordionTrigger className="text-left text-base">{q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <h2 className="font-display text-3xl text-foreground sm:text-4xl">
          Sua FZ15 merece essa <span className="text-primary">praticidade</span>
        </h2>
        <p className="mt-3 text-muted-foreground">
          Produção própria e estoque limitado por lote. Garanta o seu com frete grátis enquanto a
          oferta está no ar.
        </p>
        <div className="mx-auto mt-6 max-w-md">
          <CtaButton />
          <p className="mt-2 text-xs text-muted-foreground">
            {PRODUTO.preco} • {PRODUTO.precoPix} no Pix • {PRODUTO.parcelas}
          </p>
        </div>
      </div>
    </section>
  );
}
