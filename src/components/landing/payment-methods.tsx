function CardShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string | undefined;
}) {
  return (
    <span
      className={
        "inline-flex h-5 items-center justify-center rounded bg-muted px-1.5 text-muted-foreground " +
        (className || "")
      }
    >
      {children}
    </span>
  );
}

function VisaIcon({ className }: { className?: string }) {
  return (
    <CardShell className={className}>
      <svg viewBox="0 0 40 12" className="h-3 w-auto" aria-hidden="true">
        <text
          x="20"
          y="9.5"
          textAnchor="middle"
          fontSize="9"
          fontWeight="800"
          fontStyle="italic"
          fill="currentColor"
        >
          VISA
        </text>
      </svg>
    </CardShell>
  );
}

function MastercardIcon({ className }: { className?: string }) {
  return (
    <CardShell className={className}>
      <svg viewBox="0 0 18 12" className="h-3 w-auto" aria-hidden="true">
        <circle cx="6" cy="6" r="4.5" fill="currentColor" opacity="0.9" />
        <circle cx="12" cy="6" r="4.5" fill="currentColor" opacity="0.5" />
      </svg>
    </CardShell>
  );
}

function AmexIcon({ className }: { className?: string }) {
  return (
    <CardShell className={className}>
      <svg viewBox="0 0 34 12" className="h-3 w-auto" aria-hidden="true">
        <text
          x="17"
          y="9"
          textAnchor="middle"
          fontSize="6"
          fontWeight="800"
          fill="currentColor"
        >
          AMEX
        </text>
      </svg>
    </CardShell>
  );
}

function EloIcon({ className }: { className?: string }) {
  return (
    <CardShell className={className}>
      <svg viewBox="0 0 26 12" className="h-3 w-auto" aria-hidden="true">
        <text
          x="13"
          y="9"
          textAnchor="middle"
          fontSize="9"
          fontWeight="800"
          fill="currentColor"
        >
          elo
        </text>
      </svg>
    </CardShell>
  );
}

function HipercardIcon({ className }: { className?: string }) {
  return (
    <CardShell className={className}>
      <svg viewBox="0 0 34 12" className="h-3 w-auto" aria-hidden="true">
        <path
          d="M6 2h3v8H6V2zm4 0h1.5L14 7.5 16.5 2H18v8h-3V5.5L13 10h-1L10 5.5V10H7V2h3zm9 0h3v8h-3V2zm4 0h1.5L26.5 7.5 29 2h1.5v8h-3V5.5L25 10h-1l-2-4.5V10h-3V2h.5z"
          fill="currentColor"
        />
      </svg>
    </CardShell>
  );
}

function PixIcon({ className }: { className?: string }) {
  return (
    <CardShell className={className}>
      <svg viewBox="0 0 12 12" className="h-3 w-auto" aria-hidden="true" fill="currentColor">
        <path d="M6.65 1.35 6 2l-.65-.65a1.5 1.5 0 0 0-2.12 0L1.35 3.23a1.5 1.5 0 0 0 0 2.12L2 6l-.65.65a1.5 1.5 0 0 0 0 2.12l1.88 1.88a1.5 1.5 0 0 0 2.12 0L6 10l.65.65a1.5 1.5 0 0 0 2.12 0l1.88-1.88a1.5 1.5 0 0 0 0-2.12L10 6l.65-.65a1.5 1.5 0 0 0 0-2.12L8.77 1.35a1.5 1.5 0 0 0-2.12 0ZM6 4.24 7.76 6 6 7.76 4.24 6 6 4.24Z" />
      </svg>
    </CardShell>
  );
}

function BoletoIcon({ className }: { className?: string }) {
  return (
    <CardShell className={className}>
      <svg viewBox="0 0 16 12" className="h-3 w-auto" aria-hidden="true" fill="currentColor">
        <rect x="1" y="2" width="14" height="8" rx="1" opacity="0.25" />
        <path d="M3 2h1v8H3V2zm2 0h.5v8H5V2zm2.5 0h1v8h-1V2zm2 0h.5v8h-.5V2zm2.5 0h1v8h-1V2z" />
      </svg>
    </CardShell>
  );
}

export function PaymentMethods({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1.5">
        <VisaIcon />
        <MastercardIcon />
        <AmexIcon />
        <EloIcon />
        <HipercardIcon />
        <PixIcon />
        <BoletoIcon />
      </div>
    </div>
  );
}
