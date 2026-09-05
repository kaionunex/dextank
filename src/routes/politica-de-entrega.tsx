import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/landing/policy-page";

export const Route = createFileRoute("/politica-de-entrega")({
  head: () => ({
    meta: [
      { title: "Política de Entrega | Dex Tank" },
      {
        name: "description",
        content:
          "Como funcionam o envio, o frete grátis e o rastreio do seu pedido para todo o Brasil.",
      },
      { property: "og:title", content: "Política de Entrega" },
      { property: "og:description", content: "Envio para todo o Brasil com rastreio." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dextank.com.br/politica-de-entrega" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://dextank.com.br/politica-de-entrega" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PolicyPage
      titulo="Política de Entrega"
      paragrafos={[
        {
          h: "Prazo de processamento",
          p: "Após a confirmação do pagamento, o pedido é separado e postado em até 2 dias úteis.",
        },
        {
          h: "Frete grátis e modalidades",
          p: "A modalidade padrão com frete grátis atende todo o Brasil. Modalidades expressas, com prazos menores, ficam disponíveis para seleção e cálculo automático no checkout.",
        },
        {
          h: "Prazo de entrega",
          p: "O prazo exato é calculado e exibido no checkout de acordo com o CEP e a modalidade escolhida. Regiões remotas podem ter prazos maiores.",
        },
        {
          h: "Rastreio",
          p: "Assim que o pedido é postado, enviamos o código de rastreamento por e-mail para acompanhamento até a entrega.",
        },
        {
          h: "Endereço e tentativas de entrega",
          p: "Confira os dados de entrega antes de finalizar a compra. Pedidos devolvidos por endereço incorreto ou ausência do destinatário podem gerar custo de reenvio.",
        },
      ]}
    />
  );
}
