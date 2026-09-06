export const NOMES = [
  "Lucas M.",
  "Rafael S.",
  "Bruno A.",
  "Thiago R.",
  "Felipe C.",
  "Gabriel O.",
  "Matheus L.",
  "Diego P.",
  "Vinícius T.",
  "Rodrigo F.",
  "Fernando B.",
  "André N.",
  "Marcelo D.",
  "Leandro G.",
  "Anderson V.",
  "Wesley J.",
  "Carlos E.",
  "Paulo H.",
  "Ricardo Q.",
  "Eduardo Z.",
  "Jonathan K.",
  "Luiz F.",
  "João P.",
  "Pedro H.",
  "Alexandre M.",
  "Douglas S.",
  "Renato A.",
  "Fábio C.",
  "Gustavo L.",
  "Everton R.",
  "Michel B.",
  "Igor N.",
  "Caio T.",
  "Emerson D.",
  "Juliano P.",
  "Sérgio M.",
  "Márcio A.",
  "Adriano S.",
  "Cleber O.",
  "Rogério F.",
  "Tiago V.",
  "Wagner L.",
  "Robson C.",
  "Alan G.",
  "Danilo R.",
  "Jefferson M.",
  "Maicon S.",
  "Elias B.",
  "Otávio P.",
  "Samuel A.",
  "Vitor H.",
  "Guilherme F.",
  "Nathan C.",
  "Kaio L.",
  "Yuri M.",
  "Ítalo S.",
  "Juliana R.",
  "Camila S.",
  "Patrícia L.",
  "Aline M.",
] as const;

/** Cidades grandes por UF (ordem: da maior para a menor). */
export const CIDADES_POR_UF: Record<string, string[]> = {
  AC: ["Rio Branco", "Cruzeiro do Sul"],
  AL: ["Maceió", "Arapiraca"],
  AM: ["Manaus", "Parintins"],
  AP: ["Macapá", "Santana"],
  BA: ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", "Juazeiro"],
  CE: ["Fortaleza", "Caucaia", "Juazeiro do Norte", "Sobral"],
  DF: ["Brasília", "Taguatinga", "Ceilândia"],
  ES: ["Vila Velha", "Serra", "Vitória", "Cariacica"],
  GO: ["Goiânia", "Aparecida de Goiânia", "Anápolis"],
  MA: ["São Luís", "Imperatriz", "Timon"],
  MG: ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora", "Betim"],
  MS: ["Campo Grande", "Dourados", "Três Lagoas"],
  MT: ["Cuiabá", "Várzea Grande", "Rondonópolis"],
  PA: ["Belém", "Ananindeua", "Santarém", "Marabá"],
  PB: ["João Pessoa", "Campina Grande"],
  PE: ["Recife", "Jaboatão dos Guararapes", "Olinda", "Caruaru", "Petrolina"],
  PI: ["Teresina", "Parnaíba"],
  PR: ["Curitiba", "Londrina", "Maringá", "Ponta Grossa", "Cascavel"],
  RJ: ["Rio de Janeiro", "São Gonçalo", "Duque de Caxias", "Niterói", "Campos dos Goytacazes"],
  RN: ["Natal", "Mossoró", "Parnamirim"],
  RO: ["Porto Velho", "Ji-Paraná"],
  RR: ["Boa Vista"],
  RS: ["Porto Alegre", "Caxias do Sul", "Pelotas", "Canoas", "Santa Maria"],
  SC: ["Joinville", "Florianópolis", "Blumenau", "São José", "Chapecó"],
  SE: ["Aracaju", "Nossa Senhora do Socorro"],
  SP: ["São Paulo", "Guarulhos", "Campinas", "Ribeirão Preto", "Sorocaba", "Santos"],
  TO: ["Palmas", "Araguaína"],
};

/** UFs vizinhas, para variar as notificações sem sair da região. */
export const UF_VIZINHAS: Record<string, string[]> = {
  AC: ["AM", "RO"],
  AL: ["PE", "SE", "BA"],
  AM: ["PA", "RO", "AC", "RR"],
  AP: ["PA"],
  BA: ["SE", "PE", "MG", "GO", "TO"],
  CE: ["PI", "RN", "PB", "PE"],
  DF: ["GO", "MG"],
  ES: ["MG", "RJ", "BA"],
  GO: ["DF", "MG", "MT", "MS", "BA", "TO"],
  MA: ["PI", "TO", "PA"],
  MG: ["SP", "RJ", "ES", "GO", "BA", "DF"],
  MS: ["SP", "PR", "GO", "MT", "MG"],
  MT: ["MS", "GO", "RO", "PA", "TO"],
  PA: ["AM", "MA", "TO", "MT", "AP"],
  PB: ["RN", "PE", "CE"],
  PE: ["PB", "AL", "BA", "CE", "PI"],
  PI: ["MA", "CE", "PE", "BA", "TO"],
  PR: ["SP", "SC", "MS"],
  RJ: ["SP", "MG", "ES"],
  RN: ["PB", "CE"],
  RO: ["AM", "MT", "AC"],
  RR: ["AM", "PA"],
  RS: ["SC"],
  SC: ["PR", "RS"],
  SE: ["BA", "AL"],
  SP: ["RJ", "MG", "PR", "MS"],
  TO: ["GO", "BA", "PA", "MA", "PI"],
};

/** Fallback nacional quando não dá para detectar o estado. */
export const UF_FALLBACK = ["SP", "RJ", "MG", "BA", "PR", "RS", "PE", "CE", "SC", "GO"];

/** Mapa de fuso horário -> UFs prováveis (fallback sem rede). */
export const TZ_UF: Record<string, string[]> = {
  "America/Sao_Paulo": ["SP", "RJ", "MG", "PR", "SC", "RS", "ES", "GO"],
  "America/Bahia": ["BA"],
  "America/Fortaleza": ["CE", "PE", "PB", "RN", "PI", "AL", "SE", "MA"],
  "America/Recife": ["PE", "PB", "AL"],
  "America/Maceio": ["AL", "SE"],
  "America/Belem": ["PA", "AP", "MA"],
  "America/Santarem": ["PA"],
  "America/Araguaina": ["TO"],
  "America/Manaus": ["AM", "RR", "RO", "MT"],
  "America/Cuiaba": ["MT", "MS"],
  "America/Campo_Grande": ["MS"],
  "America/Porto_Velho": ["RO"],
  "America/Boa_Vista": ["RR"],
  "America/Rio_Branco": ["AC"],
  "America/Noronha": ["PE"],
};

export function pick<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]!;
}

export function cidadeDaUf(uf: string, evitar?: string): string | null {
  const cidades = CIDADES_POR_UF[uf];
  if (!cidades?.length) return null;
  const opcoes = cidades.filter((c) => `${c}/${uf}` !== evitar);
  return pick(opcoes.length ? opcoes : cidades);
}

/** Detecta a UF do visitante: rede -> fuso horário -> nulo. */
export async function detectarUf(): Promise<string | null> {
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 2500);
    const res = await fetch("https://ipapi.co/json/", { signal: ctrl.signal });
    clearTimeout(t);
    if (res.ok) {
      const data = (await res.json()) as { country_code?: string; region_code?: string };
      const uf = data.region_code?.toUpperCase();
      if (data.country_code === "BR" && uf && CIDADES_POR_UF[uf]) return uf;
    }
  } catch {
    /* segue para o fallback */
  }
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const ufs = TZ_UF[tz];
    if (ufs?.length) return pick(ufs);
  } catch {
    /* sem fuso disponível */
  }
  return null;
}

export const TEMPOS = ["agora mesmo", "há 1 minuto", "há 3 minutos", "há 6 minutos", "há 9 minutos"];
