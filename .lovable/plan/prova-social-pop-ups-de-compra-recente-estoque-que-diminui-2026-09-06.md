# Prova social: pop-ups de compra recente + estoque que diminui

## 1. Pop-up "acabou de comprar"

Um aviso discreto que aparece no canto inferior (acima da barra de compra no celular), no mesmo estilo da página: fundo escuro, cantos arredondados, foto pequena do produto, sombra suave, entrada deslizando de baixo. Sem cara de anúncio.

Conteúdo:

```text
[foto]  Luiz F. — Salvador/BA
        Acabou de comprar o Dex Tank
        há 2 minutos                    [x]
```

Comportamento:
- Primeiro aviso ~6 segundos depois que a página carrega.
- Fica visível ~6 segundos, some, e o próximo entra ~25-45 segundos depois (intervalo variado para parecer natural).
- Botão de fechar; depois de fechado, para de aparecer naquela visita.
- Nomes: primeiro nome + inicial do sobrenome, sorteados de uma lista de ~60 nomes brasileiros comuns.
- Tempo mostrado varia ("agora", "há 2 minutos", "há 8 minutos").

## 2. Cidades pela localização de quem visita

- Detecta o estado/cidade de quem acessa e usa isso para escolher a cidade mostrada.
- **Primeiro aviso:** sempre uma cidade grande do **mesmo estado** do visitante (ex.: visitante em Barreiras/BA → mostra Salvador/BA).
- **Avisos seguintes:** alternam entre cidades grandes do estado, de estados vizinhos e capitais nacionais, sem repetir a mesma cidade em sequência.
- Se a detecção falhar (bloqueio, sem internet), usa uma lista nacional de capitais e cidades grandes — o visitante nunca vê nada quebrado.
- Nenhum dado do visitante é guardado nem enviado a lugar nenhum.

## 3. Estoque que diminui sozinho

Na área da oferta, o "Restam 37 unidades do lote" passa a cair sozinho: a cada ~10 segundos diminui 1, e de vez em quando 2, com a barra de progresso acompanhando. Para em um piso (12 unidades) para nunca zerar. O número fica guardado no navegador, então quem recarrega ou volta depois continua de onde parou (e não sobe de novo). Volta ao cheio depois de algumas horas, junto com o ciclo do contador de oferta.

## Detalhes técnicos

- Novo componente `src/components/landing/social-proof.tsx` (client-only, montado em `src/routes/index.tsx` junto de `StickyBuy`), e novos dados em `src/lib/social-proof.ts` (nomes, cidades por UF, UFs vizinhas).
- Localização: `fetch("https://ipapi.co/json/")` no cliente com timeout curto; fallback por `Intl.DateTimeFormat().resolvedOptions().timeZone` (mapa timezone → região); último fallback: lista nacional. Nada roda no SSR — tudo dentro de `useEffect`, e o componente só renderiza depois de hidratado, evitando divergência de renderização.
- Estoque: hook `useEstoque()` em `cta.tsx` (ou arquivo próprio) usando `localStorage` com a mesma lógica de janela do `useCountdown` (chave `dextank_stock`, reset após 1h). `PRODUTO.estoqueLote`/`estoqueTotal` seguem como valores iniciais; `offer.tsx` passa a ler do hook para o texto e a barra.
- Sem backend, sem chaves de API, sem cookies próprios.
