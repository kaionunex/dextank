# Plano: redesign do bloco de avaliações

## Objetivo
Deixar o resumo de avaliações mais harmônico visualmente, reduzindo a altura do gráfico de barras e adicionando um selo de confiança na base.

## O que será alterado
- Em `src/components/landing/reviews.tsx`, o card de resumo acima da grade de depoimentos será redesenhado seguindo a direção escolhida (card moderno com selo de recomendação).

## Mudanças visuais
- Manter o título "Quem já instalou aprova".
- O card terá fundo `bg-surface`, borda sutil e glow discreto com a cor primária.
- Lado esquerdo: nota `4.9`, estrelas e texto "428 avaliações".
- Lado direito: distribuição de notas com barras bem finas (`h-1.5`) e rastros em tom muted.
- Base do card: selo "98% Recomendam" com um ponto verde pulsante e texto "Compra Garantida".

## Ajustes de dados
- Adicionar constante `RECOMENDAM = 98` em `src/lib/landing.ts` para alimentar o selo.

## Validação
- Typecheck com `bunx tsgo --noEmit -p tsconfig.json`.
- Screenshot da seção `#avaliacoes` para confirmar proporção e alinhamento.