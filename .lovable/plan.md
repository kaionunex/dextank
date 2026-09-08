# Reposicionar pop-ups sociais no desktop

## Contexto
Os pop-ups de "pessoas estão vendo agora" e "acabou de comprar" (`src/components/landing/social-proof.tsx`) atualmente aparecem fixos no canto inferior esquerdo em todas as larguras de tela. No computador, eles ficam muito no canto e o usuário quer que fiquem alinhados ao topo do site.

## O que será feito
1. **Desktop (lg e acima):** mover os dois pop-ups para o canto superior direito, abaixo da `TopBar`, alinhados ao topo do conteúdo do site. Manter a distância segura das bordas (`right-5 top-20` ou equivalente) para não cobrir a barra de ofertas nem o menu/hero.
2. **Tablet e mobile:** manter a posição atual na parte inferior esquerda, já que nesses tamanhos o rodapé/sticky buy ocupam a base e o canto inferior é o padrão esperado.
3. **Ajustar animação de entrada/saída:** garantir que, no desktop, o pop-up entre de cima/deslize para baixo com a mesma suavidade atual; no mobile, continue subindo da base.
4. **Revisar z-index:** manter o pop-up acima do conteúdo principal (`z-40`) e abaixo de modais/dropdowns, sem conflito com a `TopBar`.
5. **Validação visual:** verificar no preview desktop e mobile que os pop-ups aparecem nas posições corretas após scroll, respeitando o fluxo atual (primeiro "pessoas vendo", depois "compra recente").

## Arquivos envolvidos
- `src/components/landing/social-proof.tsx` — posicionamento e classes responsivas dos pop-ups.
