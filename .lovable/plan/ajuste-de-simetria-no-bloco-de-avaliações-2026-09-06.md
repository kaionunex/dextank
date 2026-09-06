# Ajuste de simetria no bloco de avaliações

## Objetivo
Deixar as três colunas do bloco de avaliações (nota 4.9, gráfico de barras e selos 98% / Compra Garantida) com espaçamento igual e tudo centralizado, tanto no tablet quanto no desktop. A versão mobile continua inalterada.

## O que será feito
1. Revisar o grid do bloco de avaliações em `src/components/landing/reviews.tsx` para garantir que as três colunas ocupem larguras proporcionais que permitam espaçamento simétrico.
2. Centralizar o conteúdo da coluna dos selos (hoje alinhada à esquerda), mantendo a coluna da nota e a do gráfico também centralizadas.
3. Ajustar o padding interno e o gap entre as colunas para que a linha divisória fique equidistante do conteúdo dos dois lados.
4. Manter a borda vertical entre as colunas como referência visual da simetria.
5. Validar visualmente em viewports de tablet (834px) e desktop (1280px), garantindo que o mobile não seja alterado.

## Resultado esperado
Bloco de avaliações visualmente equilibrado, com as três colunas centralizadas e espaçadas de forma simétrica em tablet e desktop, sem quebras de linha nos textos dos selos.
