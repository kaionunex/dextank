import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/landing/policy-page";

export const Route = createFileRoute("/trocas-e-devolucoes")({
  head: () => ({
    meta: [
      { title: "Trocas e Devoluções | DEX Tank" },
      {
        name: "description",
        content:
          "Prazo de arrependimento, garantia de 90 dias e como solicitar troca ou devolução do seu pedido.",
      },
      { property: "og:title", content: "Política de Trocas e Devoluções" },
      { property: "og:description", content: "Arrependimento em 7 dias e garantia de 90 dias." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/trocas-e-devolucoes" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/trocas-e-devolucoes" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PolicyPage
      titulo="Política de Trocas e Devoluções"
      paragrafos={[
        {
          h: "Direito de arrependimento",
          p: "Conforme o artigo 49 do Código de Defesa do Consumidor, você pode desistir da compra em até 7 dias corridos após o recebimento, devolvendo o produto sem sinais de uso e na embalagem original.",
        },
        {
          h: "Garantia de 90 dias",
          p: "Oferecemos 90 dias de garantia contra defeitos de fabricação, contados a partir da data de recebimento. Constatado o defeito, realizamos a troca do produto ou a devolução integral do valor pago.",
        },
        {
          h: "Como solicitar",
          p: "Envie um e-mail para sac@tendense.com.br informando o número do pedido, o motivo e fotos do produto. Nossa equipe responde em até 2 dias úteis com as instruções de postagem.",
        },
        {
          h: "Reembolso",
          p: "Após o recebimento e a conferência do produto, o reembolso é processado em até 10 dias úteis, na mesma forma de pagamento utilizada na compra.",
        },
        {
          h: "Exclusões",
          p: "A garantia não cobre danos por instalação incorreta, uso inadequado, desgaste natural ou modificação do produto.",
        },
      ]}
    />
  );
}
