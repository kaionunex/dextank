# Ajuste do preço âncora: R$ 227,90 → R$ 197,90

## Contexto
Análise de mercado confirmou que não existe produto equivalente (nem para FZ25 nem outras motos). Decisão aprovada: usar R$ 197,90 como preço "de" (35% off), mais crível para clientes e mais seguro na revisão de anúncios.

## Mudanças (1 arquivo)
Em `src/lib/landing.ts`, objeto `PRODUTO`:
- `precoAncora`: `"R$ 227,90"` → `"R$ 197,90"`
- `economia`: `"R$ 100,00"` → `"R$ 70,00"` (197,90 − 127,90)

Todo o resto já consome esses valores centralizados, então atualiza automaticamente:
- Preço riscado no card de oferta (`offer.tsx`)
- Selo "Você economiza R$ 70,00" (`offer.tsx`)
- Preço riscado na barra fixa de compra do mobile (`cta.tsx` / StickyBuy)

## O que NÃO muda
- Preço de venda: R$ 127,90
- Pix: R$ 115,11 (10% off sobre 127,90)
- Parcelas: 12x de R$ 12,56
- Estoque do lote (37/142) e contador regressivo

## Verificação
- `bunx tsgo --noEmit` sem erros
- Conferir no preview que oferta e barra fixa exibem "De R$ 197,90 por R$ 127,90" e "Você economiza R$ 70,00"
