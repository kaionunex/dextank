# Redesign do cronômetro ativo na oferta de lançamento

## Objetivo
Melhorar o design do estado em que o cronômetro ainda está rodando na seção `#oferta`, seguindo o mesmo padrão visual já aprovado para o estado de "estoque quase esgotado" (quando o timer expira).

## Estado atual
- **Timer ativo:** apenas uma linha de texto com ícone e o tempo, seguida de uma barra de estoque separada.
- **Timer expirado:** bloco destacado `rounded-xl bg-destructive/10 p-3` com título, contador de unidades e barra de progresso vermelha.

## Mudanças propostas
1. Criar um componente `OfertaAtiva` em `src/components/landing/offer.tsx` com o mesmo estilo visual de `EstoqueEscassez`.
2. No estado ativo, exibir:
   - Título: "Oferta expira em" (à esquerda).
   - O cronômetro `mm:ss` em destaque (à direita).
   - Barra de progresso decrescente do tempo restante no ciclo de 14 minutos.
3. Manter a informação de estoque dentro do mesmo bloco, logo abaixo, com:
   - "Restam X unidades em estoque".
   - Barra de progresso baseada no estoque atual.
4. Manter o estado expirado (`EstoqueEscassez`) inalterado, já que o usuário gostou dele.
5. Preservar responsividade: o bloco deve funcionar bem em mobile, tablet e desktop.

## Detalhes técnicos
- Arquivo: `src/components/landing/offer.tsx`.
- Novo componente: `OfertaAtiva({ time, estoque, pct })`.
- Calcular a porcentagem do tempo restente a partir do `left` do hook `useCountdown` — será necessário expor `left` (segundos restantes) além de `time` formatado.
- Reutilizar tokens do tema: `bg-destructive/10`, `text-destructive`, `bg-destructive/20`, `bg-destructive`, `text-foreground`, `tabular-nums`.
- Não alterar `src/components/landing/cta.tsx` nem a barra do topo (`TopBar`), a menos que seja necessário expor `left` do hook.
- Typecheck e preview em `?timer=0` e estado normal para validar ambos os casos.
