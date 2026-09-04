import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CreditCard, Lock, ShieldCheck, Truck } from "lucide-react";
import produto from "@/assets/produto-isolado.png";
import { CtaButton } from "./cta";
import { FAQ, PRODUTO } from "@/lib/landing";

export function Offer() {
  return (
    <section className="border-b border-border py-14" id="oferta">
      <div className="mx-auto max-w-4xl px-4">
        <div className="grid gap-8 rounded-2xl border border-primary/40 bg-surface p-6 sm:p-8 md:grid-cols-2 md:items-center">
          <img
            src={produto}
            alt="Adaptador de bocal para o tanque de combustível da Yamaha FZ15 DEX Tank visto de frente"
            width={1024}
            height={1024}
            loading="lazy"
            className="mx-auto w-56 md:w-full"
          />
          <div>
            <h2 className="font-display text-2xl text-foreground sm:text-3xl">
              DEX Tank — Adaptador Articulado do Bocal
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              1 unidade + adaptador de acabamento + instruções de instalação. Compatível com Yamaha
              Fazer FZ15 2022, 2023, 2024, 2025 e 2026.
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

export function Faq() {
  return (
    <section className="border-b border-border py-14" id="faq">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-center font-display text-3xl text-foreground sm:text-4xl">
          Perguntas frequentes sobre o adaptador de bocal FZ15
        </h2>
        <Accordion type="single" collapsible className="mt-6">
          {FAQ.map(({ q, a }) => (
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
          Produção própria e estoque limitado por lote. Garanta o seu DEX Tank com frete grátis
          enquanto a oferta está no ar.
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
