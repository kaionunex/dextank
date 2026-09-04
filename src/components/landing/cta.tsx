import { useEffect, useState } from "react";
import { ShieldCheck, Truck, Zap } from "lucide-react";
import { CHECKOUT_URL, MARCA, PRODUTO } from "@/lib/landing";
import { cn } from "@/lib/utils";

export function BrandLogo({ className }: { className?: string }) {
  return (
    <div className={cn("leading-none", className)}>
      <p className="font-display text-2xl uppercase tracking-wide text-foreground">
        DEX <span className="text-primary">Tank</span>
      </p>
      <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        {MARCA.subtitulo}
      </p>
    </div>
  );
}

export function CtaButton({
  children = "QUERO O MEU AGORA",
  className,
  size = "lg",
  href = CHECKOUT_URL,
}: {
  children?: React.ReactNode;
  className?: string;
  size?: "lg" | "sm";
  href?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary font-display uppercase tracking-wide text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02] active:scale-[0.99]",
        size === "lg" ? "px-6 py-4 text-lg sm:text-xl" : "px-4 py-3 text-base",
        className,
      )}
    >
      <Zap className="h-5 w-5" aria-hidden="true" />
      {children}
    </a>
  );
}

const COUNTDOWN_KEY = "dextank_offer_deadline";
const CYCLE_MS = 14 * 60 * 1000;
const RESTART_AFTER_MS = 60 * 60 * 1000;

function readDeadline(): number {
  try {
    const now = Date.now();
    const stored = Number(localStorage.getItem(COUNTDOWN_KEY));
    let deadline = stored;
    if (!Number.isFinite(stored) || stored <= 0 || now > stored + RESTART_AFTER_MS) {
      deadline = now + CYCLE_MS;
      localStorage.setItem(COUNTDOWN_KEY, String(deadline));
    }
    return deadline;
  } catch {
    return Date.now() + CYCLE_MS;
  }
}

export function useCountdown(minutes = 14) {
  const [left, setLeft] = useState(minutes * 60);
  useEffect(() => {
    const deadline = readDeadline();
    const tick = () =>
      setLeft(Math.max(0, Math.floor((deadline - Date.now()) / 1000)));
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);
  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");
  return `${mm}:${ss}`;
}

export function TopBar() {
  const time = useCountdown();
  return (
    <>
      <div className="w-full bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide sm:text-sm">
          <span className="inline-flex items-center gap-1.5">
            <Truck className="h-4 w-4" aria-hidden="true" /> Frete grátis para todo o Brasil — só
            hoje
          </span>
          <span className="inline-flex items-center gap-1.5 rounded bg-background px-2.5 py-1 text-sm text-primary shadow-sm tabular-nums ring-1 ring-primary animate-pulse sm:text-base">
            <span className="hidden sm:inline">Oferta expira em</span>
            <span className="sm:hidden">Expira em</span>
            <span className="font-display text-base tracking-wide sm:text-lg">{time}</span>
          </span>
        </div>
      </div>
      <div className="w-full border-b border-border bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <BrandLogo />
          <span className="hidden text-xs font-semibold uppercase tracking-wide text-primary sm:inline">
            Fabricação própria — envio imediato
          </span>
        </div>
      </div>
    </>
  );
}

export function StickyBuy() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface/95 backdrop-blur transition-transform duration-300 lg:hidden",
        show ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="leading-tight">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-destructive">
            Oferta de lançamento
          </p>
          <p className="text-xs text-muted-foreground strike-diagonal-destructive">
            {PRODUTO.precoAncora}
          </p>
          <p className="font-display text-xl text-foreground">{PRODUTO.preco}</p>
        </div>
        <CtaButton size="sm" className="flex-1">
          COMPRAR
        </CtaButton>
      </div>
    </div>
  );
}

export function TrustRow() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground sm:text-sm">
      <span className="inline-flex items-center gap-1.5">
        <Truck className="h-4 w-4 text-primary" aria-hidden="true" /> Frete grátis
      </span>
      <span className="inline-flex items-center gap-1.5">
        <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" /> Garantia de{" "}
        {PRODUTO.garantiaDias} dias
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Zap className="h-4 w-4 text-primary" aria-hidden="true" /> Pix com 10% OFF
      </span>
    </div>
  );
}
