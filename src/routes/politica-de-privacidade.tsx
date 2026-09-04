import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/landing/policy-page";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Dex Tank" },
      {
        name: "description",
        content:
          "Saiba como a Inter Commerce Group coleta, usa e protege os seus dados pessoais nesta loja.",
      },
      { property: "og:title", content: "Política de Privacidade" },
      { property: "og:description", content: "Como tratamos e protegemos os seus dados pessoais." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/politica-de-privacidade" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PolicyPage
      titulo="Política de Privacidade"
      paragrafos={[
        {
          h: "Dados que coletamos",
          p: "Coletamos os dados que você informa ao finalizar uma compra (nome, CPF, e-mail, telefone e endereço de entrega) e dados de navegação, como páginas visitadas, origem do acesso e identificadores de dispositivo, por meio de cookies e ferramentas de mensuração.",
        },
        {
          h: "Como usamos",
          p: "Utilizamos os dados para processar pedidos, emitir nota fiscal, realizar a entrega, prestar atendimento, prevenir fraudes e mensurar campanhas de publicidade em plataformas como Meta, Google e TikTok.",
        },
        {
          h: "Compartilhamento",
          p: "Compartilhamos dados apenas com parceiros necessários à operação: gateway de pagamento, transportadoras, plataforma de checkout e ferramentas de análise e publicidade, sempre no limite da finalidade.",
        },
        {
          h: "Seus direitos (LGPD)",
          p: "Você pode solicitar acesso, correção, portabilidade, anonimização ou exclusão dos seus dados, bem como revogar consentimentos, entrando em contato pelo nosso canal de atendimento.",
        },
        {
          h: "Cookies",
          p: "Usamos cookies próprios e de terceiros para lembrar preferências e medir o desempenho de anúncios. Você pode desativá-los nas configurações do seu navegador, o que pode limitar algumas funcionalidades.",
        },
      ]}
    />
  );
}
