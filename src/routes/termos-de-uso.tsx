import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/landing/policy-page";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso | Adaptador de Bocal FZ15" },
      {
        name: "description",
        content: "Condições de uso do site e de compra do adaptador articulado de bocal para FZ15.",
      },
      { property: "og:title", content: "Termos de Uso" },
      { property: "og:description", content: "Condições de uso do site e de compra." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/termos-de-uso" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/termos-de-uso" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PolicyPage
      titulo="Termos de Uso"
      paragrafos={[
        {
          h: "Aceitação",
          p: "Ao navegar neste site e realizar uma compra, você concorda com estes Termos de Uso e com a nossa Política de Privacidade.",
        },
        {
          h: "Produto e compatibilidade",
          p: "O produto é um acessório de reposição desenvolvido e fabricado por nós, sem qualquer vínculo, afiliação ou endosso da Yamaha Motor. A marca é citada apenas para indicar compatibilidade com modelos da FZ15 a partir de 2022. Verifique a compatibilidade antes da compra.",
        },
        {
          h: "Instalação e uso",
          p: "A instalação é de responsabilidade do comprador e deve seguir as instruções fornecidas. Não nos responsabilizamos por danos decorrentes de instalação incorreta, uso indevido ou modificação do produto.",
        },
        {
          h: "Preços e ofertas",
          p: "Preços, condições de pagamento e promoções são válidos por tempo limitado e podem ser alterados sem aviso prévio. O valor efetivo é o confirmado no checkout.",
        },
        {
          h: "Propriedade intelectual",
          p: "Textos, imagens e demais conteúdos deste site pertencem à Inter Commerce Brasil LTDA e não podem ser reproduzidos sem autorização.",
        },
      ]}
    />
  );
}
