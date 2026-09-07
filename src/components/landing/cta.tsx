import { useEffect, useState } from "react";
import { ShieldCheck, TicketPercent, Timer, Truck, Zap } from "lucide-react";
import { CHECKOUT_URL, MARCA, PRODUTO } from "@/lib/landing";
import { cn } from "@/lib/utils";

export function BrandLogo({ className }: { className?: string }) {
  return (
    <div className={cn("leading-none", className)}>
      <p className="font-display text-2xl uppercase tracking-wide text-foreground">
        Dex <span className="text-primary">Tank</span>
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
        "cta-shine inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary font-display uppercase tracking-wide text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_40px_-10px_var(--color-primary)] active:scale-[0.99]",
        size === "lg" ? "px-6 py-4 text-xl sm:text-2xl" : "px-4 py-3 text-base",
        className,
      )}
    >
      <Zap className={cn("shrink-0", size === "lg" ? "h-6 w-6" : "h-5 w-5")} aria-hidden="true" />
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
  const [pronto, setPronto] = useState(false);
  useEffect(() => {
    let deadline: number;
    const override = new URLSearchParams(window.location.search).get("timer");
    const segundos = Number(override);
    if (override !== null && Number.isFinite(segundos) && segundos >= 0) {
      deadline = Date.now() + segundos * 1000;
    } else {
      deadline = readDeadline();
    }
    const tick = () => setLeft(Math.max(0, Math.floor((deadline - Date.now()) / 1000)));
    tick();
    setPronto(true);
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);
  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");
  return { time: `${mm}:${ss}`, expirado: pronto && left <= 0 };
}

const STOCK_KEY = "dextank_stock";
const STOCK_MIN = 9;
const STOCK_URGENCIA = 9; // valor exibido quando o timer expira
const STOCK_INTERVAL_MIN_MS = 20 * 1000;
const STOCK_INTERVAL_MAX_MS = 30 * 1000;

type StockState = { valor: number; inicio: number };

function readStock(): StockState {
  const now = Date.now();
  const inicial = { valor: PRODUTO.estoqueLote, inicio: now };
  try {
    const raw = localStorage.getItem(STOCK_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<StockState>;
      if (
        typeof parsed.valor === "number" &&
        typeof parsed.inicio === "number" &&
        now < parsed.inicio + RESTART_AFTER_MS
      ) {
        return { valor: parsed.valor, inicio: parsed.inicio };
      }
    }
    localStorage.setItem(STOCK_KEY, JSON.stringify(inicial));
  } catch {
    /* sem armazenamento disponível */
  }
  return inicial;
}

function saveStock(state: StockState) {
  try {
    localStorage.setItem(STOCK_KEY, JSON.stringify(state));
  } catch {
    /* ignora */
  }
}

function randomStep() {
  return Math.floor(Math.random() * 3) + 1; // 1, 2 ou 3
}

function randomDelay() {
  return (
    Math.floor(Math.random() * (STOCK_INTERVAL_MAX_MS - STOCK_INTERVAL_MIN_MS + 1)) +
    STOCK_INTERVAL_MIN_MS
  );
}

/** Store único: todos os pontos da página mostram o mesmo número de estoque. */
let estoqueAtual = PRODUTO.estoqueLote;
let estoqueTimeout: ReturnType<typeof setTimeout> | null = null;
const estoqueListeners = new Set<(v: number) => void>();

function iniciarEstoque() {
  const state = readStock();
  estoqueAtual = state.valor;
  estoqueListeners.forEach((l) => l(estoqueAtual));

  const schedule = () => {
    estoqueTimeout = setTimeout(() => {
      if (estoqueAtual > STOCK_MIN) {
        let proximo = Math.max(STOCK_MIN, estoqueAtual - randomStep());
        if (proximo === 13) proximo = STOCK_MIN; // nunca exibir 13
        estoqueAtual = proximo;
        saveStock({ valor: proximo, inicio: state.inicio });
        estoqueListeners.forEach((l) => l(proximo));
      }
      schedule();
    }, randomDelay());
  };

  schedule();
}

/** Estoque que vai caindo sozinho, com persistência no navegador. */
export function useEstoque() {
  const [estoque, setEstoque] = useState(PRODUTO.estoqueLote);

  useEffect(() => {
    const primeiro = estoqueListeners.size === 0;
    estoqueListeners.add(setEstoque);
    if (primeiro) iniciarEstoque();
    else setEstoque(estoqueAtual);

    return () => {
      estoqueListeners.delete(setEstoque);
      if (estoqueListeners.size === 0 && estoqueTimeout) {
        clearTimeout(estoqueTimeout);
        estoqueTimeout = null;
      }
    };
  }, []);

  return estoque;
}

export function EstoqueUrgencia({ estoque, className }: { estoque: number; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
      <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-destructive" />
      </span>
      <span>
        Últimas <span className="tabular-nums">{estoque}</span> unidades em estoque
      </span>
    </span>
  );
}

export function TopBar() {
  const { time, expirado } = useCountdown();
  const estoque = useEstoque();
  return (
    <div className="w-full bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide sm:text-sm">
        <span className="inline-flex items-center gap-1.5">
          <Truck className="h-4 w-4" aria-hidden="true" /> Frete grátis para todo o Brasil — só
          hoje
        </span>
        {expirado ? (
          <EstoqueUrgencia
            estoque={estoque}
            className="rounded bg-background px-2 py-0.5 pb-1 text-xs font-bold text-foreground sm:text-sm"
          />
        ) : (
          <span className="inline-flex animate-pulse items-center gap-1.5 rounded bg-background px-2 py-0.5 pb-1 text-xs font-bold text-foreground tabular-nums sm:text-sm">
            <Timer className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
            <span>Oferta expira em</span>
            <span className="tabular-nums">{time}</span>
          </span>
        )}
      </div>
    </div>
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
        "fixed inset-x-0 bottom-0 z-50 bg-surface/95 backdrop-blur transition-transform duration-300 lg:hidden",
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
          COMPRAR AGORA
        </CtaButton>
      </div>
    </div>
  );
}

export function TrustRow() {
  return (
    <div className="flex flex-nowrap items-center justify-center gap-x-3 text-xs text-muted-foreground sm:gap-x-6 sm:text-sm">
      <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
        <Truck className="h-4 w-4 text-primary" aria-hidden="true" /> Frete Grátis
      </span>
      <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
        <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" /> Garantia{" "}
        {PRODUTO.garantiaDias} dias
      </span>
      <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
        <TicketPercent className="h-4 w-4 text-primary" aria-hidden="true" /> Pix com 10% OFF
      </span>
    </div>
  );
}
