import { Star, Globe } from "lucide-react";
import heroImg from "@/assets/hero-bocal.jpg";
import { CtaButton, TrustRow } from "./cta";
import { PRODUTO } from "@/lib/landing";

export function Hero() {
  return (
    <header className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-10 lg:grid-cols-2 lg:grid-rows-2 lg:py-16">
        <div className="order-1">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-md bg-destructive px-3 py-1 font-display text-xs uppercase tracking-widest text-destructive-foreground">
            Oferta de lançamento
          </span>
          <div className="flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            <Globe className="h-4 w-4" aria-hidden="true" /> O ÚNICO NO MERCADO PARA YAMAHA FZ 15
          </div>

          <h1 className="mt-4 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Dex Tank: <span className="text-primary">adaptador de bocal de tanque</span> para Yamaha
            FZ15
          </h1>

          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Abasteça sem tirar a tampa: o Dex Tank transforma o bocal da sua FZ15 em um sistema que
            abre para o lado. Sem chave na mão, sem tampa apoiada no tanque, sem risco de arranhar a
            pintura.
          </p>
        </div>

        <div className="relative order-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <img
            src={heroImg}
            alt="Adaptador de bocal de tanque Dex Tank instalado e aberto no tanque de uma Yamaha FZ15"
            width={1408}
            height={1056}
            className="w-full rounded-xl border border-border object-cover shadow-2xl"
          />
          <div className="absolute -bottom-4 left-4 rounded-lg border border-border bg-surface px-4 py-2 shadow-xl">
            <p className="font-display text-sm text-primary">
              Compatível com FZ15 2022, 2023, 2024, 2025 e 2026
            </p>
          </div>
        </div>

        <div className="order-3 mx-auto flex w-full max-w-md flex-col items-center sm:mx-0 sm:items-center lg:-mt-[130px]">
          <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:items-center sm:justify-center sm:gap-3 sm:text-center">
            <div className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">{PRODUTO.nota}</strong> de 5 —{" "}
              {PRODUTO.compradores.toLocaleString("pt-BR")} motociclistas já instalaram
            </p>
          </div>

          <div className="mt-6 w-full">
            <CtaButton href="#avaliacoes" />
            <p className="mt-2 text-center text-xs text-muted-foreground">
              {PRODUTO.preco} à vista ou {PRODUTO.parcelas} no cartão
            </p>
          </div>

          <div className="mt-6 w-full">
            <TrustRow />
          </div>
        </div>
      </div>
    </header>
  );
}
