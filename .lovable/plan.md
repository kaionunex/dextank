# CTAs segmentados por etapa do funil

## Objetivo
Criar caminhos de CTA distintos para visitantes em diferentes estágios da página: quem ainda não conhece a prova do produto (instalação + depoimentos) e quem já passou por ela e está pronto para comprar.

## O que será alterado

### 1. Hero — CTA primário para quem não conhece
- Substituir o botão principal do hero para: **"VER COMO FUNCIONA"**.
- Destino: rolar suavemente até a seção de instalação (`#instalacao`).
- Manter o texto de apoio abaixo do botão (preço/parcelas).

### 2. Após a seção de instalação — CTA para prova social
- Adicionar um botão ao final da seção `#instalacao` com o texto: **"VER DEPOIMENTOS DE QUEM INSTALOU"**.
- Destino: rolar suavemente até `#avaliacoes`.
- Usar estilo secundário (outline) para diferenciar do CTA de compra.

### 3. Após a seção de avaliações — CTA para oferta
- Adicionar um botão ao final da seção `#avaliacoes` com o texto: **"GARANTIR MEU DEX TANK"**.
- Destino: rolar suavemente até `#oferta`.
- Usar estilo primário (mesmo do CTA de compra).

### 4. Final CTA — manter direcionamento para oferta
- O botão final "QUERO O MEU AGORA" continua indo para `#oferta`.

### 5. StickyBuy mobile — manter direto para oferta
- A barra fixa mobile continua com "COMPRAR" indo para `#oferta`.

### 6. Suporte a variantes no CtaButton
- Adicionar prop `variant?: "primary" | "secondary"` no `CtaButton`.
- Variante `secondary`: fundo transparente com borda primária e texto primária, mantendo o mesmo comportamento de hover.

## Resultado esperado
Funil claro na página:
1. Hero → instalação
2. Instalação → avaliações
3. Avaliações → oferta
4. Oferta → checkout

Isso evita jogar o visitante direto no checkout antes que ele veja a prova do produto, sem perder o CTA de compra para quem já está convencido.

## Arquivos envolvidos
- `src/components/landing/cta.tsx`
- `src/components/landing/hero.tsx`
- `src/components/landing/install.tsx`
- `src/components/landing/reviews.tsx`
