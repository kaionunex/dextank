import { Link } from "@tanstack/react-router";
import { EMPRESA } from "@/lib/landing";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface pb-24 pt-12 lg:pb-12">
      <div className="mx-auto max-w-5xl space-y-6 px-4 text-sm text-muted-foreground">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="font-display text-base text-foreground">{EMPRESA.razaoSocial}</p>
            <p className="mt-1">CNPJ {EMPRESA.cnpj}</p>
            <p className="mt-1">{EMPRESA.endereco}</p>
            <p className="mt-1">
              SAC:{" "}
              <a className="underline hover:text-primary" href={`mailto:${EMPRESA.email}`}>
                {EMPRESA.email}
              </a>{" "}
              — {EMPRESA.telefone}
            </p>
            <p className="mt-1">Atendimento de segunda a sexta, das 9h às 18h.</p>
          </div>
          <nav className="flex flex-col gap-2" aria-label="Políticas">
            <Link className="hover:text-primary" to="/politica-de-privacidade">
              Política de Privacidade
            </Link>
            <Link className="hover:text-primary" to="/termos-de-uso">
              Termos de Uso
            </Link>
            <Link className="hover:text-primary" to="/trocas-e-devolucoes">
              Política de Trocas e Devoluções
            </Link>
            <Link className="hover:text-primary" to="/politica-de-entrega">
              Política de Entrega
            </Link>
          </nav>
        </div>

        <div className="space-y-2 border-t border-border pt-6 text-xs leading-relaxed">
          <p>
            <strong className="text-foreground">Aviso de marca:</strong> este é um acessório de
            reposição desenvolvido e fabricado por {EMPRESA.razaoSocial}. Não é um produto original
            Yamaha e não possui qualquer vínculo, afiliação, patrocínio ou endosso da Yamaha Motor.
            As marcas “Yamaha” e “FZ15” são de seus respectivos titulares e são citadas
            exclusivamente para indicar a compatibilidade do produto.
          </p>
          <p>
            <strong className="text-foreground">Imagens e depoimentos:</strong> as imagens deste site
            são meramente ilustrativas e podem não representar exatamente o produto recebido.
            Depoimentos e avaliações são ilustrativos e refletem experiências individuais; resultados
            podem variar de acordo com o modelo, o ano e a condição da motocicleta.
          </p>
          <p>
            <strong className="text-foreground">Oferta:</strong> preços, condições de pagamento,
            prazos e disponibilidade de frete grátis são válidos por tempo limitado, sujeitos a
            alteração sem aviso prévio e à confirmação no momento do checkout. A instalação é de
            responsabilidade do comprador; siga as instruções e não abasteça com o motor ligado.
          </p>
          <p>
            <strong className="text-foreground">Independência de plataformas:</strong> este site não
            é afiliado, associado, autorizado ou endossado por Meta Platforms (Facebook e Instagram),
            TikTok, Google, YouTube ou qualquer uma de suas subsidiárias.
          </p>
          <p>
            © {new Date().getFullYear()} {EMPRESA.razaoSocial}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
