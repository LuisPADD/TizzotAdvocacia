export function Footer() {
  return (
    <footer className="bg-[#E8F4F8] py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-8">
          <div>
            <div className="mb-4">
              <img src="/images/logo-full.png" alt="Tizzot Advocacia" className="w-auto h-44" />
            </div>
            {/* </CHANGE> */}
          </div>

          <div>
            <h3 className="font-semibold text-primary mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#processo" className="hover:text-primary transition-colors">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#casos" className="hover:text-primary transition-colors">
                  Casos
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-primary transition-colors">
                  Sobre
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Rua Padre Anchieta, 1081</li>
              <li>4º andar – Curitiba, PR</li>
              <li>
                <a href="tel:+5541988604137" className="hover:text-primary transition-colors">
                  (41) 98860-4137
                </a>
              </li>
              <li>
                <a href="mailto:tizzotadvocacia@gmail.com" className="hover:text-primary transition-colors">
                  tizzotadvocacia@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            Tizzot Advocacia &copy; 2025. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground italic max-w-3xl mx-auto">
            Este site tem finalidade informativa e não constitui promessa de resultado. Somos um escritório de advocacia
            que segue a legislação vigente e o Código de Ética e Disciplina da OAB do Brasil.
          </p>
        </div>
      </div>
    </footer>
  )
}
