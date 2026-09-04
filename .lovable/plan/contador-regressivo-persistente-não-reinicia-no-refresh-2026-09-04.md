# Contador regressivo persistente (não reinicia no refresh)

## Objetivo
O contador de 14 minutos da oferta deve parecer (e ser) real: começa na primeira visita da pessoa, continua de onde parou se ela atualizar a página, fica zerado quando expira, e só reinicia um novo ciclo depois de 1 hora expirado.

## Como vai funcionar
- Na primeira visita, grava no navegador (localStorage) o horário exato em que a oferta expira: `agora + 14 min`.
- A cada segundo, o tempo exibido é calculado como `prazo final − agora`. Como o prazo é um horário absoluto gravado, atualizar a página, fechar e reabrir a aba ou trocar de seção não reinicia nada — o tempo continua correndo de verdade.
- Quando chega a zero, fica fixo em `00:00`.
- Se a pessoa voltar **mais de 1 hora depois** de ter zerado, um novo ciclo de 14 minutos começa automaticamente (nova "janela de oferta"). Se voltar antes disso, continua zerado.
- Os dois lugares que exibem o contador (barra do topo e card de oferta) leem o mesmo prazo gravado, então mostram sempre o mesmo tempo.

## Detalhes técnicos
- Reescrever o hook `useCountdown` em `src/components/landing/cta.tsx`:
  - Chave `dextank_offer_deadline` no localStorage com o timestamp de expiração.
  - Lógica: sem registro ou `agora > expiração + 60 min` → grava novo prazo (`agora + 14 min`); senão usa o prazo existente.
  - Estado inicial renderizado é `14:00` (igual ao HTML pré-renderizado) e sincroniza com o localStorage no `useEffect` após a hidratação — evita erro de hidratação SSR.
  - Intervalo de 1s recalcula a partir do timestamp absoluto (não decrementa), então não perde precisão nem acumula erro.
- Sem mudanças visuais: textos, posições e estilos permanecem. `offer.tsx` continua usando o mesmo hook, sem alteração.

## Verificação
- `bunx tsgo --noEmit` sem erros.
- Teste no navegador (Playwright): abrir a página, anotar o tempo, recarregar e confirmar que continua de onde estava (não volta para 14:00); simular prazo expirado e confirmar `00:00` fixo; simular expiração há mais de 1h e confirmar novo ciclo de 14:00.
