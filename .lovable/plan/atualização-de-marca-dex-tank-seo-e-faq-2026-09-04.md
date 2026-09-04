# Atualização de marca DEX Tank + SEO e FAQ

Atualizar a landing page existente para a marca **DEX Tank**, comercializada por **Inter Commerce Group LTDA**, com novo posicionamento de pioneirismo, SEO on-page com anos por extenso e FAQ ampliado com rich snippets.

## 1. Identidade visual / logo em texto

- Criar componente de logo tipográfico `DEX Tank` (nome em destaque, fonte display) com subtítulo "Adaptador de bocal para Yamaha FZ15".
- Exibir no topo da página (barra superior) e reutilizar no rodapé e nas páginas de políticas.

## 2. Hero e posicionamento

- Novo H1: **"DEX Tank: Adaptador de bocal de tanque para Yamaha FZ15"** (único H1 da página).
- Badge/selo de pioneirismo: "O único do mercado mundial projetado exclusivamente para a Yamaha FZ15".
- Subheadline e selo de compatibilidade atualizados citando os anos por extenso: 2022, 2023, 2024, 2025 e 2026.

## 3. SEO on-page

- Termos de busca exatos distribuídos naturalmente em H2/H3, benefícios e FAQ:
  - "adaptador de bocal de tanque para Yamaha FZ15"
  - "adaptador de bocal para o tanque de combustível da Yamaha FZ15"
  - "compatível com Yamaha Fazer FZ15 2022, 2023, 2024, 2025 e 2026"
- Regra mandatória: anos sempre por extenso em quatro dígitos (nunca "22/23").
- Metadados da rota `/`:
  - Title: `DEX Tank: Adaptador de Bocal de Tanque para Yamaha FZ15 | DEX`
  - Description: `Conheça o DEX Tank, o único adaptador de bocal para tanque de combustível da Yamaha FZ15 (2022 a 2026). Projeto exclusivo, encaixe sob medida e envio imediato.`
  - og:title/og:description correspondentes.
- JSON-LD Schema.org:
  - `Product`: nome "DEX Tank - Adaptador de Bocal de Tanque para Yamaha FZ15", brand "DEX", manufacturer "Inter Commerce Group LTDA", oferta em BRL, AggregateRating.
  - `FAQPage`: todas as perguntas/respostas do FAQ estruturadas para rich snippets.

## 4. FAQ ampliado (accordion)

Reescrever a seção cobrindo:
1. Compatibilidade exata por ano (2022, 2023, 2024, 2025 e 2026);
2. Instalação plug and play, sem adaptações invasivas;
3. Material, durabilidade e resistência a combustível;
4. Por que é o único adaptador desenvolvido especificamente para a FZ15 no mercado;
5. Envio, garantia de 90 dias e nota fiscal emitida pela Inter Commerce Group LTDA;
( mantendo as demais perguntas úteis de pagamento/troca já existentes ).

## 5. Razão social e rodapé

- `src/lib/landing.ts`: trocar razão social para **Inter Commerce Group LTDA** e adicionar marca "DEX".
- Rodapé: "DEX é uma marca comercializada por Inter Commerce Group LTDA" + CNPJ, endereço, SAC e disclaimers já existentes (sem vínculo com Yamaha etc.).
- Atualizar razão social nas páginas de políticas (Termos, Privacidade, Trocas, Entrega) e no JSON-LD.

## Arquivos tocados

- `src/lib/landing.ts` (razão social, marca, dados do produto)
- `src/routes/index.tsx` (title, description, og, JSON-LD Product + FAQPage)
- `src/components/landing/hero.tsx` (H1, badge de pioneirismo, logo)
- `src/components/landing/cta.tsx` (TopBar com logo tipográfico)
- `src/components/landing/offer.tsx` (FAQ ampliado e textos com anos por extenso)
- `src/components/landing/problem.tsx`, `install.tsx`, `reviews.tsx` (termos SEO e anos por extenso onde aplicável)
- `src/components/landing/footer.tsx` + rotas de políticas (razão social e marca)

Sem mudanças de preço, checkout (`CHECKOUT_URL`), backend ou design tokens.
