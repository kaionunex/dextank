# Nova dobra: vídeo da instalação

## O que será feito

Criar uma seção nova na página dedicada ao vídeo que mostra a remoção do bocal original e a instalação do DEX Tank na FZ15. O vídeo ainda não está disponível, então entra um vídeo temporário (placeholder) no formato vertical/horizontal conforme o material final — fácil de trocar depois, basta substituir um arquivo.

## Posição na página (pensando em conversão)

A dobra entra **logo depois da seção "Instalação em 3 passos" e antes das avaliações**. Motivo: o visitante acabou de ler que a instalação leva 3 passos — o vídeo prova na hora que é verdade, eliminando a última dúvida ("será que eu consigo instalar?") antes de ele chegar nos depoimentos e na oferta.

```text
Hero → Antes/Depois → Benefícios → Exclusividade
     → Instalação em 3 passos → [NOVO: VÍDEO] → Avaliações → Oferta → ...
```

## Estrutura da dobra

- **Título:** "Veja como é fácil instalar" com destaque em laranja
- **Subtítulo:** texto curto reforçando que é sem ferramenta, sem mecânico, e que o resultado deixa o tanque mais bonito
- **Vídeo centralizado** com:
  - Player nativo do navegador (botão de play, sem autoplay com som)
  - Imagem de capa (poster) enquanto o vídeo não é iniciado — evita tela preta e não pesa o carregamento
  - Carregamento adiado (lazy) para não atrapalhar a velocidade da página no mobile
  - Moldura com borda no padrão visual do site
- **3 selos rápidos abaixo do vídeo:** "Sem ferramentas", "Menos de 2 minutos", "Encaixe perfeito"
- **CTA ao final da dobra:** botão "QUERO O MEU AGORA" rolando até a oferta — quem assistiu o vídeo está no ponto mais quente de decisão

## Como trocar o vídeo depois

O arquivo ficará em `public/videos/instalacao.mp4` com uma imagem de capa em `public/videos/capa-instalacao.jpg`. Para colocar o vídeo real, basta substituir esses dois arquivos (ou me mandar o vídeo que eu mesmo troco).

## Detalhes técnicos

- Novo componente `src/components/landing/video-install.tsx`, inserido em `src/routes/index.tsx` entre `Install` e `Reviews`
- Tag `<video controls playsInline preload="none" poster=...>` — sem bibliotecas externas, sem YouTube (evita distração e saída da página)
- Placeholder: um vídeo curto genérico será incluído apenas para validar o layout; o material real entra depois
- Verificação com typecheck e teste visual no mobile (390px) via Playwright
