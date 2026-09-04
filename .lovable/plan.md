# Nova dobra: vídeo da instalação

## O que será feito

Criar uma seção nova na página dedicada ao vídeo que mostra a remoção do bocal original e a instalação do DEX Tank na FZ15. O vídeo real ainda não está disponível, então entra um vídeo temporário (placeholder) — a troca depois é só substituir um arquivo.

## Posição na página (decisão pensando em conversão)

O vídeo é a prova mais forte da página — mais forte que o texto dos 3 passos. Por isso ele entra **antes da seção "Instalação em 3 passos"**, logo depois da Exclusividade:

```text
Hero → Antes/Depois → Benefícios → Exclusividade
     → [NOVO: VÍDEO] → Instalação em 3 passos → Avaliações → Oferta → ...
```

Motivo: o visitante chega ao vídeo já sabendo o que o produto resolve e que ele é exclusivo — o vídeo converte a promessa em prova visual, e a seção de 3 passos logo abaixo funciona como reforço/resumo do que ele acabou de assistir. A pessoa mais indecisa assiste e compra direto pelo CTA da própria dobra, sem precisar rolar até a oferta.

## Estrutura da dobra

- **Headline de conversão** (puxando para a compra): "Veja instalado na FZ15 em menos de 2 minutos — e nunca mais tire a tampa pra abastecer" com destaque em laranja
- **Subtítulo curto:** sem ferramenta, sem mecânico, sem alterar nada no tanque — e o tanque fica com visual muito mais limpo
- **Vídeo centralizado** com:
  - Player nativo do navegador (botão de play, sem autoplay com som)
  - Imagem de capa (poster) enquanto o vídeo não é iniciado — evita tela preta e não pesa o carregamento
  - Carregamento adiado (lazy) para não atrapalhar a velocidade no mobile
  - Moldura com borda no padrão visual do site
- **CTA logo abaixo do vídeo:** botão "QUERO O MEU AGORA" rolando até a oferta (`#oferta`), com a linha de preço "R$ 127,90 à vista ou 12x de R$ 12,56 no cartão" — quem assistiu está no ponto mais quente de decisão
- **3 selos rápidos:** "Sem ferramentas", "Menos de 2 minutos", "Encaixe perfeito"

## Como trocar o vídeo depois

O arquivo ficará em `public/videos/instalacao.mp4` com a capa em `public/videos/capa-instalacao.jpg`. Para colocar o vídeo real, basta me mandar o arquivo que eu mesmo troco (ou substituir os dois arquivos).

## Detalhes técnicos

- Novo componente `src/components/landing/video-install.tsx`, inserido em `src/routes/index.tsx` entre `Exclusivity` e `Install`
- Tag `<video controls playsInline preload="none" poster=...>` — sem bibliotecas externas, sem YouTube (evita distração e saída da página)
- CTA reutiliza o `CtaButton` existente com `href="#oferta"`
- Placeholder: vídeo curto genérico só para validar o layout; o material real entra depois
- Verificação com typecheck e teste visual no mobile (390px) via Playwright
