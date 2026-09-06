# Ajustar contador de estoque

## Objetivo
Deixar o contador de estoque mais dinâmico e realista, mudando o texto de "do lote" para "em estoque", fazendo o valor iniciar em 37 e cair em passos variados (1, 2 ou 3 unidades) a cada intervalo aleatório entre 20 e 30 segundos, até estabilizar próximo de 12 unidades, sem nunca exibir 13.

## Alterações

### 1. Texto do contador
- Arquivo: `src/components/landing/offer.tsx`
- Alterar a frase "Restam X unidades do lote" para "Restam X unidades em estoque".

### 2. Lógica do estoque
- Arquivo: `src/components/landing/cta.tsx`
- Manter o valor inicial vindo de `PRODUTO.estoqueLote` (37).
- Substituir o intervalo fixo de 10 segundos por um intervalo aleatório entre 20.000 ms e 30.000 ms, sorteado a cada redução.
- Substituir o passo fixo (1 ou 2) por um passo aleatório entre 1, 2 ou 3 unidades.
- Garantir que o valor nunca fique abaixo de 12 (`STOCK_MIN`).
- Evitar exibir 13: se o próximo valor calculado for 13, forçar 12.
- Continuar persistindo o valor e o início da sessão no `localStorage` para que, ao recarregar a página, o visitante veja o estoque continuando de onde parou (dentro do ciclo de 1 hora).

## Validação
- `bunx tsgo --noEmit -p tsconfig.json` sem erros.
- `curl -s -o /dev/null -w "%{http_code}\n" http://localhost:8080/` retorna 200.
- Verificar visualmente no preview que o texto aparece como "em estoque" e que o número parte de 37, caindo em passos variados ao longo do tempo.
