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
    <svg viewBox="0 0 22 16" className={className} aria-hidden="true">
      <circle cx="8" cy="8" r="6" fill="currentColor" opacity="0.9" />
      <circle cx="14" cy="8" r="6" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

function AmexIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 16" className={className} aria-hidden="true">
      <rect x="1" y="1" width="38" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <text x="20" y="11.5" textAnchor="middle" fontSize="7" fontWeight="800" fill="currentColor">
        AMEX
      </text>
    </svg>
  );
}

function EloIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 16" className={className} aria-hidden="true">
      <text x="16" y="12" textAnchor="middle" fontSize="11" fontWeight="800" fill="currentColor">
        elo
      </text>
    </svg>
  );
}

function HipercardIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 72 16" className={className} aria-hidden="true">
      <text x="36" y="12" textAnchor="middle" fontSize="8" fontWeight="800" fill="currentColor">
        HIPERCARD
      </text>
    </svg>
  );
}

export function PaymentMethods({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex flex-nowrap items-center justify-center gap-x-2 gap-y-1 text-muted-foreground">
        <VisaIcon className="h-3.5 w-auto" />
        <MastercardIcon className="h-3.5 w-auto" />
        <AmexIcon className="h-3.5 w-auto" />
        <EloIcon className="h-3.5 w-auto" />
        <HipercardIcon className="h-3.5 w-auto" />
        <span className="inline-flex items-center gap-0.5 text-[10px] font-medium">
          <QrCode className="h-3.5 w-3.5" aria-hidden="true" /> Pix
        </span>
        <span className="inline-flex items-center gap-0.5 text-[10px] font-medium">
          <Receipt className="h-3.5 w-3.5" aria-hidden="true" /> Boleto
        </span>
      </div>
    </div>
  );
}
