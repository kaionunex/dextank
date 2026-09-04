import { Link } from "@tanstack/react-router";
import { EMPRESA } from "@/lib/landing";

export function PolicyPage({
  titulo,
  paragrafos,
}: {
  titulo: string;
  paragrafos: { h?: string; p: string }[];
}) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <Link to="/" className="text-sm text-primary hover:underline">
        ← Voltar para a página do produto
      </Link>
      <h1 className="mt-4 font-display text-3xl text-foreground">{titulo}</h1>
      <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground">
        {paragrafos.map((item, i) => (
          <section key={i}>
            {item.h ? (
              <h2 className="mb-1 font-display text-lg text-foreground">{item.h}</h2>
            ) : null}
            <p>{item.p}</p>
          </section>
        ))}
        <p className="border-t border-border pt-5">
          {EMPRESA.razaoSocial} — CNPJ {EMPRESA.cnpj}. {EMPRESA.endereco}. Dúvidas:{" "}
          {EMPRESA.email} — {EMPRESA.telefone}.
        </p>
      </div>
    </main>
  );
}
