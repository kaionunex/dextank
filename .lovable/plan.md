# Alinhar pop-ups sociais à largura do conteúdo do site

## Contexto
Os pop-ups de "pessoas estão vendo agora" e "acabou de comprar" (`src/components/landing/social-proof.tsx`) atualmente ficam fixos no canto inferior esquerdo da viewport (`left-3`/`left-5`), fora da largura do conteúdo do site. O usuário quer mantê-los na parte inferior, mas alinhados dentro do corpo do site — ou seja, dentro do mesmo limite de largura do conteúdo principal (~`max-w-6xl`), sem ficarem "jogados para fora" no canto da tela.

## O que será feito
1. **Criar um wrapper fixo de referência:** envolver os pop-ups em um container fixo na base da tela (`fixed inset-x-0 bottom-0 z-40 pointer-events-none`) cujo conteúdo interno respeite a largura máxima do site (`mx-auto max-w-6xl px-4 relative`).
2. **Reposicionar os pop-ups dentro do container:** em vez de `fixed left-3/left-5`, os pop-ups ficam `absolute left-4 bottom-...` dentro desse wrapper, garantindo que fiquem alinhados à esquerda do corpo do site em qualquer largura de tela.
3. **Manter comportamento atual:** o fluxo de exibição continua o mesmo — primeiro o aviso de "pessoas vendo agora", depois o de compra recente — com as mesmas durações e animações.
4. **Ajustar responsivo se necessário:** garantir que, no mobile, os pop-ups não fiquem muito estreitos ou sobreponham o sticky buy; manter espaçamento inferior adequado (`bottom-[110px]` no mobile, `bottom-5` no desktop, ou equivalente).
5. **Validação visual:** conferir no preview que, ao rolar a página, os pop-ups aparecem alinhados à esquerda dentro da área delimitada pelo conteúdo do site, tanto em telas grandes quanto em telas médias.

## Arquivos envolvidos
- `src/components/landing/social-proof.tsx` — wrapper de posicionamento e classes responsivas dos pop-ups.
