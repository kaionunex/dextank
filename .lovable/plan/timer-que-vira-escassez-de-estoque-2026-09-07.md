# Timer que vira escassez de estoque

## Objetivo
Quando o contador de 14 minutos chegar a zero, ele desaparece dos dois lugares (barra do topo e dobra da oferta) e dá lugar a uma mensagem de escassez em destaque: "Últimas X unidades em estoque". O X é exatamente o mesmo número nos dois lugares e é o mesmo contador de estoque que já cai sozinho.

## Como fica

### Antes de zerar (igual hoje)
- Barra do topo: "Oferta expira em 14:00".
- Dobra da oferta: "A oferta expira em 14:00" + barra de estoque.

### Depois de zerar
- Barra do topo: some o relógio e entra "Últimas X unidades em estoque" com um ponto pulsante.
- Dobra da oferta: no lugar da linha do timer entra um bloco destacado, maior e em vermelho: "Últimas X unidades em estoque — compre agora", junto da barra de progresso que já existe.
- O número X vem da mesma fonte nos dois lugares, então nunca aparece um valor diferente na barra e na oferta.

## Ajuste dos números do estoque
Hoje o estoque começa em 37 e cai até o mínimo de 12. Para a frase final não soar fraca nem alta demais, o estoque passa a:
- começar em 37 (mantém),
- cair como já cai (1, 2 ou 3 unidades a cada 20-30 segundos),
- parar num mínimo de 9 em vez de 12, continuando a nunca exibir 13.

Assim, quem fica bastante tempo na página vê "Últimas 9 unidades em estoque", que combina com o momento em que o tempo acabou.

## Como testar sem esperar 14 minutos
Duas formas:

1. **Atalho na URL (a que recomendo):** abrir a página com `?timer=0` faz o contador iniciar já zerado, mostrando na hora como fica a versão de escassez. Com `?timer=30` ele começa com 30 segundos, para ver a transição acontecendo ao vivo. Sem nada na URL, o comportamento normal de 14 minutos continua igual para os visitantes.
2. **Eu testo e mando as imagens:** faço a checagem no navegador em celular, tablet e desktop, nos dois estados (com timer e depois de zerado), e mostro as telas antes de você conferir no preview.

## Detalhes técnicos
- `src/components/landing/cta.tsx`:
  - `useCountdown` passa a devolver `{ time, expirado }` em vez de string; ler `?timer=` (segundos) no primeiro efeito para forçar um prazo curto/zerado apenas naquela visita, sem gravar no localStorage.
  - Regra de reinício de 1 hora permanece.
  - `useEstoque`: `STOCK_MIN` de 12 para 9; regra de não exibir 13 mantida.
  - Novo componente exportado `EstoqueUrgencia` (texto "Últimas X unidades em estoque" com ponto pulsante), usado pela `TopBar` na versão compacta.
  - `TopBar`: renderização condicional — timer quando não expirado, `EstoqueUrgencia` quando expirado.
- `src/components/landing/offer.tsx`: consome `expirado`; troca a linha do timer por um bloco destacado (`bg-destructive/15`, texto maior, CTA textual "compre agora") quando expirado. Barra de progresso permanece nos dois estados.
- Sem mudanças de backend; tudo continua no navegador.

## Verificação
- `bunx tsgo --noEmit -p tsconfig.json`.
- Playwright em 390px, 834px e 1280px com `?timer=0` e sem parâmetro, conferindo que o número da barra do topo e o da oferta são iguais.
