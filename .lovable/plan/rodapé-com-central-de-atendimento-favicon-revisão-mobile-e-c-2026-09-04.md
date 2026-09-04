# Rodapé com Central de Atendimento, favicon, revisão mobile e CTAs com rolagem

## 1. Rodapé — 3 colunas

Em `src/components/landing/footer.tsx`, o grid passa de `sm:grid-cols-2` para `sm:grid-cols-3`:

- **Coluna 1 (atual):** logo + dados da empresa (razão social, CNPJ, endereço, horário).
- **Coluna 2 (atual):** menu de políticas.
- **Coluna 3 (nova) — "Central de Atendimento":**
  - Telefone (11) 4003-1000 com ícone do WhatsApp, linkado para `https://wa.me/551140031000`.
  - E-mail sac@tendense.com.br com ícone de envelope, link `mailto:`.
  - Texto curto: "Tire suas dúvidas antes de comprar — resposta rápida em horário comercial."


## 2. Favicon

- Usar o PNG enviado (`/mnt/user-uploads/security.png`, escudo verde com check).
- Redimensionar para 64x64 com fundo transparente preservado → `public/favicon.png`.
- Atualizar `src/routes/__root.tsx`: trocar o link do favicon para `{ rel: "icon", type: "image/png", href: "/favicon.png" }` e remover `public/favicon.ico`.

## 3. CTAs com rolagem para avaliações (padrão de conversão)

- Adicionar `id="avaliacoes"` na seção `Reviews`.
- `CtaButton` ganha prop `scrollTo`; os CTAs **acima** das avaliações (hero, benefits, exclusivity, install) apontam para `#avaliacoes` com rolagem suave (`scroll-behavior: smooth` no CSS), em vez de ir direto ao checkout.
- CTAs **após** as avaliações (Offer, FinalCta, StickyBuy) continuam indo ao `CHECKOUT_URL`.
- No mobile, o StickyBuy (fixo embaixo) continua sendo checkout direto.

## 4. Revisão mobile completa

Auditoria via Playwright em viewport mobile (390x844), corrigindo o que aparecer:

- TopBar com contagem regressiva (quebra de linha).
- Hero: hierarquia, selo, imagem e CTA.
- Before/After, Benefits, Exclusivity, Install (3 passos), Reviews, Offer, Guarantee, FAQ, FinalCta.
- Novo rodapé de 3 colunas (empilha no mobile).
- StickyBuy sem sobrepor conteúdo (padding-bottom do footer já existe; revalidar).
- Imagens com dimensões corretas, sem overflow horizontal, textos sem corte (`min-w-0`/`truncate` onde preciso).

## Detalhes técnicos

- Ícone WhatsApp: SVG inline (glyph oficial) ou `Phone` do lucide — sem a palavra "WhatsApp".
- Rolagem suave: `html { scroll-behavior: smooth }` com `scroll-margin-top` na seção para compensar a TopBar.
- Verificação: `bunx tsgo --noEmit` + Playwright mobile (screenshots de cada seção) + build estático para confirmar `/dextank/` intacto.
