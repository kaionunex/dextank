# Escassez mais elegante + pop-up de pessoas online

## O que muda (e o que não muda)

Não muda: a dobra de oferta inteira, o preço, a lista de benefícios, o botão "Comprar com frete grátis" e os ícones de pagamento continuam exatamente como estão.

Muda só:
1. O campo "Últimas X unidades em estoque" na barra laranja do topo.
2. O campo de escassez que substitui o cronômetro dentro da dobra de oferta (o bloco vermelho com "COMPRE AGORA" que você não gostou).
3. O pop-up de pessoas vendo agora.

## Como testar os 3 estilos ao mesmo tempo

Os três estilos ficam implementados juntos e você escolhe pelo endereço do preview:

```text
?timer=0&estilo=1   -> estilo 1
?timer=0&estilo=2   -> estilo 2
?timer=0&estilo=3   -> estilo 3
```

O `timer=0` serve para o tempo já aparecer zerado, sem esperar 14 minutos. Sem nada no endereço, o visitante vê o estilo padrão (o 1, até você escolher outro). Depois que você decidir, eu deixo só o escolhido e removo os outros dois do código.

## Os 3 estilos

Todos abandonam a caixa alta e o bloco grande atual.

**Estilo 1 — Compacto e sóbrio**
- Topo: pílula discreta sobre a barra laranja, texto em caixa normal: "9 unidades restantes".
- Oferta: uma linha só, sem caixa vermelha grande — rótulo pequeno "Estoque crítico" e ao lado "Últimas 9 unidades", com a barra de estoque logo abaixo.

**Estilo 2 — Ponto pulsante**
- Topo: ponto pulsante + "Últimas 9 unidades em estoque", em caixa normal, com fundo escuro suave.
- Oferta: bloco baixo com fundo vermelho translúcido, título "Estoque quase esgotado" à esquerda e "9 unidades" à direita, barra fina de estoque embaixo. Sem o "COMPRE AGORA" duplicado.

**Estilo 3 — Vidro**
- Topo: pílula com fundo escuro translúcido e ponto pulsante vermelho, texto em caixa normal.
- Oferta: sem caixa colorida — "Estoque crítico" em vermelho pequeno de um lado, "Apenas 9 unidades restando" do outro, e a barra de estoque com brilho sutil ligando os dois.

## Pop-up de pessoas online

- O pontinho pulsante e o ícone passam de vermelho para verde.
- Cantos arredondados e o resto do visual ficam como estão.
- O pop-up de compra recente passa a aparecer 3 a 4 segundos mais tarde depois que o de pessoas online some.

## Detalhes técnicos

- `src/components/landing/cta.tsx`: `EstoqueUrgencia` passa a aceitar `variante` (1|2|3) e renderiza a versão do topo correspondente; novo hook simples lê `?estilo=` da URL (default 1) e é usado pelo `TopBar` e pela `Offer`. Sem caixa alta (`uppercase`) nas novas variantes.
- `src/components/landing/offer.tsx`: o bloco `expirado` passa a renderizar a variante escolhida; a barra de progresso continua nos dois estados; nada mais da dobra é tocado.
- `src/components/landing/social-proof.tsx`: cor do ícone/ponto de `destructive` para `success`; `COMPRA_APOS_ONLINE_MS` de 2000 para 5500.
- Cores sempre por token do tema (`success`, `destructive`, `surface`), sem cor fixa no componente.

## Verificação

- `bunx tsgo --noEmit`.
- Playwright em 390px, 834px e 1280px, com `?timer=0&estilo=1|2|3`, capturando topo e dobra de oferta para você comparar.
