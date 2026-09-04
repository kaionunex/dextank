# Landing page de conversão — Adaptador de Bocal do Tanque Yamaha FZ15

Página única (rota `/`), 100% em português do Brasil, otimizada para tráfego pago (Meta, TikTok, YouTube, Google) e conversão rápida em checkout externo.

## Oferta exibida

- Produto: Adaptador Articulado do Bocal do Tanque — Yamaha FZ15 (modelos 2022+)
- Preço: R$ 127,90
- Pix com 10% de desconto (R$ 115,11) ou 12x de R$ 12,56 no cartão
- Frete grátis para todo o Brasil — "somente hoje"
- Garantia de 90 dias
- Botões de checkout apontando para `#` (fácil de trocar por 1 constante no código)

## Estrutura da página

1. **Barra superior fixa** — frete grátis hoje + contador regressivo de escassez.
2. **Hero** — headline forte ("Abasteça sua FZ15 sem tirar o bocal"), subheadline, imagem principal do produto instalado, selo "produto exclusivo — fabricação própria", CTA primário e prova social rápida (nota + nº de clientes).
3. **Problema x Solução (Antes/Depois)** — dois blocos visuais comparando a dor (remover o bocal, chave na mão, risco de arranhar o tanque) com a solução articulada.
4. **Benefícios** — 4 a 6 cards: praticidade, encaixe perfeito, acabamento, proteção do tanque, instalação em minutos, exclusividade mundial.
5. **Exclusividade / autoridade** — bloco explicando que somos os desenvolvedores e único fabricante/fornecedor no mundo.
6. **Instalação em 6 passos** — sequência simples com números e imagens, sem ferramentas especiais.
7. **Compatibilidade** — confirmação clara: todos os modelos novos da FZ15 a partir de 2022.
8. **Avaliações** — seção com nota média, distribuição de estrelas, ~8 depoimentos de clientes com nome, cidade, selo "compra verificada" e fotos geradas do produto instalado (rotuladas como imagens ilustrativas no rodapé).
9. **Oferta / caixa de preço** — preço âncora riscado, preço atual, condições Pix/cartão, frete grátis, garantia de 90 dias, CTA grande, selos de pagamento seguro.
10. **Garantia de 90 dias** — bloco de reversão de risco.
11. **FAQ** — accordion com 8 perguntas (compatibilidade, instalação, segurança, vazamento, prazo, troca, pagamento, garantia).
12. **CTA final** + **barra fixa de compra no mobile** (preço + botão sempre visível).
13. **Rodapé com disclaimers de compliance** (ver abaixo).

## Rodapé e conformidade com plataformas de anúncios

- Razão social: Inter Commerce Brasil LTDA — CNPJ 62.495.891/0001-51
- Endereço: Av. Brigadeiro Faria Lima, 1572, Sala 1022, Ed. Barão de Rothschild — Jardim Paulistano, São Paulo/SP, CEP 01451-917
- SAC: sac@tendense.com.br — (11) 4003-1000
- Links para Política de Privacidade, Termos de Uso, Política de Trocas e Devoluções e Política de Entrega (rotas próprias, conteúdo padrão pronto)
- Disclaimers: produto de reposição não oficial, sem vínculo/afiliação/endosso da Yamaha (marca citada apenas para indicar compatibilidade); imagens meramente ilustrativas; depoimentos ilustrativos e resultados podem variar; oferta e prazos sujeitos a alteração; este site não é afiliado ao Facebook/Meta, TikTok, Google ou YouTube.

## Imagens

Geradas por IA (nada reaproveitado das artes do marketplace):
- Hero do produto instalado no tanque da FZ15 (close cinematográfico)
- Produto isolado (tampa articulada) para a caixa de oferta
- Comparativo antes/depois
- 6 imagens da sequência de instalação
- 3 a 4 fotos "de cliente" para as avaliações
- Imagem 1200x630 para preview social

## Detalhes técnicos

- Rota `/` reescrita em `src/routes/index.tsx` com componentes em `src/components/landing/*`; rotas adicionais para as políticas.
- Design system novo em `src/styles.css` (tokens oklch): base escura tipo garagem, laranja de alta conversão para CTAs, tipografia display condensada + sans legível; sem cores hardcoded.
- Componentes shadcn existentes (accordion, button, card) + Motion para animações discretas de entrada.
- Contador regressivo e barra fixa mobile em estado local, sem backend.
- Link de checkout centralizado numa constante `CHECKOUT_URL = "#"`.
- SEO: `head()` na rota `/` com title/description/og/twitter próprios, JSON-LD de Product com preço BRL e AggregateRating, canonical relativo, H1 único, alt em todas as imagens, lazy loading abaixo da dobra.
- Sem backend: sem banco de dados, sem formulários; toda a conversão vai para o checkout externo.
