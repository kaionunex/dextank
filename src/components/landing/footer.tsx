import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { BrandLogo } from "./cta";
import { EMPRESA } from "@/lib/landing";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface pb-24 pt-12 lg:pb-12">
      <div className="mx-auto max-w-5xl space-y-6 px-4 text-sm text-muted-foreground">
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <BrandLogo />
            <p className="mt-2">
              <strong className="text-foreground">Dex</strong> é uma marca comercializada por{" "}
              {EMPRESA.razaoSocial}.
            </p>
            <p className="mt-1">CNPJ {EMPRESA.cnpj}</p>
            <p className="mt-1">{EMPRESA.endereco}</p>
          </div>
          <nav className="flex flex-col gap-2" aria-label="Políticas">
            <p className="font-display text-sm uppercase tracking-wide text-foreground">
              Políticas
            </p>
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
          <div className="flex flex-col gap-2">
            <p className="font-display text-sm uppercase tracking-wide text-foreground">
              Central de Atendimento
            </p>
            <a
              href="https://wa.me/551140031000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-primary"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0 text-success" />
              {EMPRESA.telefone}
            </a>
            <a
              href={`mailto:${EMPRESA.email}`}
              className="inline-flex items-center gap-2 hover:text-primary"
            >
              <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              {EMPRESA.email}
            </a>
            <p className="mt-1 text-xs leading-relaxed">
              Precisa de ajuda? Entre em contato conosco — atendimento de segunda a sexta, das 9h às
              18h.
            </p>
          </div>
        </div>

        <div className="space-y-2 border-t border-border pt-6 text-xs leading-relaxed">
          <p>
            <strong className="text-foreground">Aviso de marca:</strong> o Dex Tank é um acessório
            de reposição desenvolvido e fabricado sob encomenda da marca Dex, comercializada por{" "}
            {EMPRESA.razaoSocial}. Não é um produto original Yamaha e não possui qualquer vínculo,
            afiliação, patrocínio ou endosso da Yamaha Motor. As marcas “Yamaha” e “FZ15” são de
            seus respectivos titulares e são citadas exclusivamente para indicar a compatibilidade
            do produto.
          </p>
          <p>
            <strong className="text-foreground">Imagens:</strong> as imagens deste site são
            meramente ilustrativas e podem não representar exatamente o produto recebido.
          </p>
          <p>
            <strong className="text-foreground">Oferta:</strong> preços, condições de pagamento,
            prazos e disponibilidade de frete grátis são válidos por tempo limitado, sujeitos a
            alteração sem aviso prévio e à confirmação no momento do checkout. A instalação é de
            responsabilidade do comprador; siga as instruções e não abasteça com o motor ligado.
          </p>
          <p>
            <strong className="text-foreground">Independência de plataformas:</strong> este site não
            é afiliado, associado, autorizado ou endossado por Meta Platforms (Facebook e
            Instagram), TikTok, Google, YouTube ou qualquer uma de suas subsidiárias.
          </p>
          <p>
            © {new Date().getFullYear()} {EMPRESA.razaoSocial}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
