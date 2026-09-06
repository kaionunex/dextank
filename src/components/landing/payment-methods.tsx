import { QrCode, Receipt } from "lucide-react";

function VisaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 16" className={className} aria-hidden="true">
      <text x="24" y="12" textAnchor="middle" fontSize="11" fontWeight="800" fontStyle="italic" fill="currentColor">
        VISA
      </text>
    </svg>
  );
}

function MastercardIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 18" className={className} aria-hidden="true">
      <circle cx="10" cy="9" r="7" fill="currentColor" opacity="0.9" />
      <circle cx="18" cy="9" r="7" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

function AmexIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 16" className={className} aria-hidden="true">
      <rect x="1" y="1" width="46" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <text x="24" y="11.5" textAnchor="middle" fontSize="8" fontWeight="800" fill="currentColor">
        AMEX
      </text>
    </svg>
  );
}

function EloIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 16" className={className} aria-hidden="true">
      <text x="18" y="12" textAnchor="middle" fontSize="12" fontWeight="800" fill="currentColor">
        elo
      </text>
    </svg>
  );
}

function HipercardIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 16" className={className} aria-hidden="true">
      <text x="40" y="12" textAnchor="middle" fontSize="9" fontWeight="800" fill="currentColor">
        HIPERCARD
      </text>
    </svg>
  );
}

export function PaymentMethods({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-muted-foreground">
        <VisaIcon className="h-4 w-auto" />
        <MastercardIcon className="h-4 w-auto" />
        <AmexIcon className="h-4 w-auto" />
        <EloIcon className="h-4 w-auto" />
        <HipercardIcon className="h-4 w-auto" />
        <span className="inline-flex items-center gap-1 text-xs font-medium">
          <QrCode className="h-4 w-4" aria-hidden="true" /> Pix
        </span>
        <span className="inline-flex items-center gap-1 text-xs font-medium">
          <Receipt className="h-4 w-4" aria-hidden="true" /> Boleto
        </span>
      </div>
    </div>
  );
}
