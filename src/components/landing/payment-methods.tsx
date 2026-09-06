function CardShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string | undefined;
}) {
  return (
    <span
      className={
        "inline-flex h-5 w-8 items-center justify-center rounded bg-muted text-muted-foreground " +
        (className || "")
      }
    >
      {children}
    </span>
  );
}

function IconBox({
  children,
  className,
  innerClassName = "h-3 w-6",
}: {
  children: React.ReactNode;
  className: string | undefined;
  innerClassName?: string;
}) {
  return (
    <CardShell className={className}>
      <span className={`flex items-center justify-center ${innerClassName}`}>{children}</span>
    </CardShell>
  );
}

function VisaIcon({ className }: { className?: string }) {
  return (
    <IconBox className={className} innerClassName="h-3.5 w-7">
      <svg viewBox="0 0 40 12" className="h-full w-full" aria-hidden="true">
        <text
          x="20"
          y="9.5"
          textAnchor="middle"
          fontSize="10"
          fontWeight="800"
          fontStyle="italic"
          fill="currentColor"
        >
          VISA
        </text>
      </svg>
    </IconBox>
  );
}

function MastercardIcon({ className }: { className?: string }) {
  return (
    <IconBox className={className}>
      <svg viewBox="0 0 18 12" className="h-full w-full" aria-hidden="true">
        <circle cx="6" cy="6" r="4.5" fill="currentColor" opacity="0.9" />
        <circle cx="12" cy="6" r="4.5" fill="currentColor" opacity="0.5" />
      </svg>
    </IconBox>
  );
}

function AmexIcon({ className }: { className?: string }) {
  return (
    <IconBox className={className} innerClassName="h-3.5 w-7">
      <svg viewBox="0 0 34 12" className="h-full w-full" aria-hidden="true">
        <text
          x="17"
          y="9"
          textAnchor="middle"
          fontSize="7"
          fontWeight="800"
          fill="currentColor"
        >
          AMEX
        </text>
      </svg>
    </IconBox>
  );
}

function EloIcon({ className }: { className?: string }) {
  return (
    <IconBox className={className}>
      <svg viewBox="0 0 500 155" className="h-full w-full" aria-hidden="true" fill="currentColor">
        <path d="m0 63.487h36.934c6.6237-35.148 37.189-63.423 76.16-63.423 44.317 0 75.394 31.587 75.394 79.216 0 5.0924-0.51046 9.1703-1.0209 12.737h-119.21c5.6029 21.651 23.432 34.388 44.828 34.388 18.34 0 32.091-7.1343 43.048-19.61l21.907 20.12c-14.517 16.553-36.169 28.02-64.955 28.02-38.97 0-69.536-27.765-76.16-62.912h-36.928zm156.9 0c-1.5314-8.9145-5.6023-17.064-11.46-22.922-7.6384-7.6446-18.85-12.482-32.347-12.482-13.497 0-24.453 4.588-32.602 12.737-5.6029 5.6027-10.191 13.247-12.481 22.672h88.89zm53.743-62.402h32.091v122.26h58.076v30.566h-57.565c-21.141 0-32.601-11.46-32.601-32.602zm96.286 76.415c0-41.516 33.877-77.43 78.706-77.43 39.735 0 70.806 28.02 77.43 63.423h36.934v28.531h-36.934c-6.8791 35.148-37.956 62.912-77.43 62.912-45.084-6e-3 -78.706-35.665-78.706-77.436zm78.706 47.374c26.744 0 46.608-20.376 46.608-47.119 0-26.488-20.375-47.636-46.608-47.636-26.744 0-46.615 20.375-46.615 47.374 0 26.24 20.381 47.381 46.615 47.381z" />
      </svg>
    </IconBox>
  );
}

function PixIcon({ className }: { className?: string }) {
  return (
    <IconBox className={className}>
      <svg viewBox="0 0 512 512" className="h-full w-full" aria-hidden="true" fill="currentColor">
        <path d="M242.4 292.5C247.8 287.1 257.1 287.1 262.5 292.5L339.5 369.5C353.7 383.7 372.6 391.5 392.6 391.5H407.7L310.6 488.6C280.3 518.1 231.1 518.1 200.8 488.6L103.3 391.2H112.6C132.6 391.2 151.5 383.4 165.7 369.2L242.4 292.5zM262.5 218.9C256.1 224.4 247.9 224.5 242.4 218.9L165.7 142.2C151.5 127.1 132.6 120.2 112.6 120.2H103.3L200.7 22.76C231.1-7.586 280.3-7.586 310.6 22.76L407.8 119.9H392.6C372.6 119.9 353.7 127.7 339.5 141.9L262.5 218.9zM112.6 142.7C126.4 142.7 139.1 148.3 149.7 158.1L226.4 234.8C233.6 241.1 243 245.6 252.5 245.6C261.9 245.6 271.3 241.1 278.5 234.8L355.5 157.8C365.3 148.1 378.8 142.5 392.6 142.5H430.3L488.6 200.8C518.9 231.1 518.9 280.3 488.6 310.6L430.3 368.9H392.6C378.8 368.9 365.3 363.3 355.5 353.5L278.5 276.5C264.6 262.6 240.3 262.6 226.4 276.6L149.7 353.2C139.1 363 126.4 368.6 112.6 368.6H80.78L22.76 310.6C-7.586 280.3-7.586 231.1 22.76 200.8L80.78 142.7H112.6z" />
      </svg>
    </IconBox>
  );
}

function BoletoIcon({ className }: { className?: string }) {
  return (
    <IconBox className={className}>
      <svg viewBox="0 0 16 12" className="h-full w-full" aria-hidden="true" fill="currentColor">
        <rect x="1" y="2" width="14" height="8" rx="1" opacity="0.25" />
        <path d="M3 2h1v8H3V2zm2 0h.5v8H5V2zm2.5 0h1v8h-1V2zm2 0h.5v8h-.5V2zm2.5 0h1v8h-1V2z" />
      </svg>
    </IconBox>
  );
}

export function PaymentMethods({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="payment-methods flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1.5">
        <VisaIcon />
        <MastercardIcon />
        <AmexIcon />
        <EloIcon />
        <PixIcon />
        <BoletoIcon />
      </div>
    </div>
  );
}
