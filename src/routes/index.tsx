import { createFileRoute } from "@tanstack/react-router";
import { TopBar, StickyBuy } from "@/components/landing/cta";
import { Hero } from "@/components/landing/hero";
import { BeforeAfter, Benefits, Exclusivity } from "@/components/landing/problem";
import { Install } from "@/components/landing/install";
import { Reviews } from "@/components/landing/reviews";
import { Offer, Guarantee, Faq, FinalCta } from "@/components/landing/offer";
import { Footer } from "@/components/landing/footer";
import { PRODUTO } from "@/lib/landing";

const TITULO = "Bocal Articulado para Yamaha FZ15 | Abasteça sem tirar a tampa";
const DESCRICAO =
  "Adaptador articulado do bocal do tanque para Yamaha FZ15 2022+. Abasteça sem remover a tampa. R$ 127,90 com frete grátis e 90 dias de garantia.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESCRICAO },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESCRICAO },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: PRODUTO.nome,
          description: DESCRICAO,
          brand: { "@type": "Brand", name: "Inter Commerce Brasil" },
          offers: {
            "@type": "Offer",
            price: PRODUTO.precoNumero,
            priceCurrency: "BRL",
            availability: "https://schema.org/InStock",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: PRODUTO.nota,
            reviewCount: PRODUTO.avaliacoes,
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Hero />
      <main>
        <BeforeAfter />
        <Benefits />
        <Exclusivity />
        <Install />
        <Reviews />
        <Offer />
        <Guarantee />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyBuy />
    </div>
  );
}
