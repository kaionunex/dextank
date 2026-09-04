# Promoção de lançamento + elementos de escassez

## 1. Preço âncora: De R$ 227,90 por R$ 127,90

- Atualizar `PRODUTO.precoAncora` em `src/lib/landing.ts` para `R$ 227,90`.
- Onde o preço âncora aparece (Offer, StickyBuy), estilizar com **tracinho vermelho**: `text-destructive line-through decoration-destructive decoration-2`, com a etiqueta "De" / "Por".
- Recalcular menções: desconto de ~44% ("Economize R$ 100,00").

## 2. Tag de lançamento

- Selo "OFERTA DE LANÇAMENTO" em destaque:
  - No **hero**, acima ou junto do selo de exclusividade.
  - Na seção **Offer**, como badge no topo do card de preço ("Lançamento — De R$ 227,90 por R$ 127,90").
- Texto de apoio: "Preço promocional válido apenas no lote de lançamento."

## 3. Escassez

- **Barra de estoque do lote** na seção Offer: "Restam 37 unidades do lote de lançamento" com barra de progresso (ex.: 26% restante) em laranja/vermelho.
- **Contagem regressiva**: a TopBar já tem o timer de 14 min; adicionar um segundo countdown dentro da seção Offer, próximo ao preço, sincronizado visualmente ("A oferta de lançamento expira em 14:59").
- Mensagem de urgência no StickyBuy mobile: pequena linha "Oferta de lançamento — estoque limitado" acima do preço.
- Manter coerência: Exclusivity já diz "estoque limitado por lote de produção" — alinhar a copy para "lote de lançamento".

## 4. Verificação

- `bunx tsgo --noEmit` + screenshots Playwright (mobile 390px e desktop) do hero, Offer e StickyBuy para conferir a tag, o preço riscado em vermelho, a barra de estoque e os contadores.

## Detalhes técnicos

- Countdown do Offer reutiliza o hook `useCountdown` de `cta.tsx` (exportá-lo).
- Números de estoque são estáticos (sem backend); definidos em `src/lib/landing.ts` como `PRODUTO.estoqueLote` e `PRODUTO.estoqueTotal` para fácil ajuste.
- Todos os valores centralizados em `src/lib/landing.ts` — trocar o âncora depois é uma linha.
