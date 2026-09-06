import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CreditCard, Flame, Lock, ShieldCheck, Timer, Truck } from "lucide-react";
import produto from "@/assets/produto-isolado.png";
import { CtaButton, useCountdown, useEstoque } from "./cta";
import { FAQ, PRODUTO } from "@/lib/landing";
import { PaymentMethods } from "./payment-methods";

export function Offer() {
  const time = useCountdown();
  const estoque = useEstoque();
  const pct = Math.round((estoque / PRODUTO.estoqueTotal) * 100);
  return (
    <section className="py-20 pb-[50px]" id="oferta">
      <div className="mx-auto max-w-4xl px-4">
        <div className="relative grid gap-8 rounded-2xl bg-surface p-6 pb-[44px] sm:p-8 sm:pb-[52px] md:grid-cols-2 md:items-center">
          <span className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-md bg-destructive px-4 py-1.5 font-display text-sm uppercase tracking-widest text-destructive-foreground shadow-lg">
            <Flame className="h-4 w-4" aria-hidden="true" /> Oferta de lançamento
          </span>
          <img
            src={produto}
            alt="Adaptador de bocal para o tanque de combustível da Yamaha FZ15 Dex Tank visto de frente"
            width={1024}
            height={1024}
            loading="lazy"
            className="mx-auto w-56 md:w-full"
          />
          <div>
            <h2 className="font-display text-2xl text-foreground sm:text-3xl">
              Dex Tank — Adaptador Articulado do Bocal
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              1 unidade + adaptador de acabamento + instruções de instalação. Compatível com Yamaha
              Fazer FZ15 2022, 2023, 2024, 2025 e 2026.
            </p>

            <div className="mt-5 rounded-xl bg-destructive/10 p-4">
              <p className="text-sm text-muted-foreground">
                De{" "}
                <span className="text-xl font-semibold text-destructive strike-diagonal-offer">
                  {PRODUTO.precoAncora}
                </span>{" "}
                por apenas
              </p>
              <p className="font-display text-5xl text-primary">{PRODUTO.preco}</p>
              <p className="mt-1 text-sm text-foreground">
                ou <strong>{PRODUTO.precoPix}</strong> no Pix (10% de desconto)
              </p>
              <p className="text-sm text-muted-foreground">
                em até <strong className="text-foreground">{PRODUTO.parcelas}</strong> no cartão de
                crédito
              </p>
              <p className="mt-2 inline-flex items-center gap-1.5 rounded bg-success/15 px-2 py-1 text-xs font-semibold text-success">
                Você economiza {PRODUTO.economia} — só no lote de lançamento
              </p>
              <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-destructive">
                <Timer className="h-4 w-4" aria-hidden="true" /> A oferta expira em{" "}
                <span className="tabular-nums">{time}</span>
              </p>
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>
                    Restam <strong className="text-foreground tabular-nums">{estoque}</strong>{" "}
                    unidades em estoque
                  </span>
                  <span className="tabular-nums">{pct}% restante</span>
                </div>
                <div className="mt-1 h-2 overflow-hidden rounded bg-muted">
                  <div className="h-full bg-destructive" style={{ width: `${pct}%` }} />
                </div>
              </div>
            </div>

            <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-primary" aria-hidden="true" /> Frete Grátis para todo o
                Brasil — Apenas hoje!
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
                <Lock className="h-3.5 w-3.5" aria-hidden="true" /> Compra 100% segura
              </p>
              <PaymentMethods className="mt-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Guarantee() {
  return (
    <section className="py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-success/10 ring-2 ring-success/30">
          <ShieldCheck className="h-10 w-10 text-success" aria-hidden="true" />
        </div>
        <h2 className="mt-6 font-display text-3xl text-foreground sm:text-4xl">
          Satisfação garantida
        </h2>
        <p className="mt-2 font-sans text-xl text-primary">Ou seu dinheiro de volta</p>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Você tem 7 dias para instalar o Dex Tank na sua FZ15, testar no dia a dia e sentir a
          diferença no abastecimento. Se por qualquer motivo não ficar satisfeito, devolvemos 100%
          do seu dinheiro. Simples, rápido e sem burocracia. O risco é nosso.
        </p>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="bg-section-alt py-20" id="faq">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-center font-display text-3xl text-foreground sm:text-4xl">
          Perguntas frequentes sobre o adaptador de bocal FZ15
        </h2>
        <Accordion type="single" collapsible className="mt-6">
          {FAQ.map(({ q, a }) => (
            <AccordionItem key={q} value={q}>
              <AccordionTrigger className="font-sans text-left text-lg font-medium">{q}</AccordionTrigger>
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
    <section className="py-20">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <h2 className="font-display text-3xl text-foreground sm:text-4xl">
          Sua FZ15 merece essa <span className="text-primary">praticidade</span>
        </h2>
        <p className="mt-3 text-muted-foreground">
          Produção própria e estoque limitado por lote. Garanta o seu Dex Tank com frete grátis
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
