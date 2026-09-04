import { createFileRoute } from "@tanstack/react-router";
import { TopBar, StickyBuy } from "@/components/landing/cta";
import { Hero } from "@/components/landing/hero";
import { BeforeAfter, Benefits, Exclusivity } from "@/components/landing/problem";
import { Install } from "@/components/landing/install";
import { VideoInstall } from "@/components/landing/video-install";
import { Reviews } from "@/components/landing/reviews";
import { Offer, Guarantee, Faq, FinalCta } from "@/components/landing/offer";
import { Footer } from "@/components/landing/footer";
import { EMPRESA, FAQ, PRODUTO } from "@/lib/landing";

const TITULO = "DEX Tank: Adaptador de Bocal de Tanque para Yamaha FZ15 | Compra Segura";
const DESCRICAO =
  "Conheça o DEX Tank, o único adaptador de bocal para tanque de combustível da Yamaha FZ15 (2022 a 2026). Projeto exclusivo, encaixe sob medida e envio imediato.";

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
          name: "DEX Tank - Adaptador de Bocal de Tanque para Yamaha FZ15",
          description: DESCRICAO,
          brand: { "@type": "Brand", name: "DEX" },
          manufacturer: { "@type": "Organization", name: EMPRESA.razaoSocial },
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
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
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
        <VideoInstall />
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
