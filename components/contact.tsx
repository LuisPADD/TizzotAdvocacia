import { Mail, MapPin, MessageCircle } from "lucide-react"

export function Contact() {
  return (
    <section id="contato" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">Entre em contato</h2>
        <p className="text-center text-muted-foreground mb-8 text-lg leading-relaxed">
          Preencha o formulário para que um especialista entre em contato com você. Nossa análise é gratuita e você só
          paga se ganhar.
        </p>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3 mb-6">
            <MessageCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <p className="text-foreground">
              Prefere falar agora?{" "}
              <a
                href="https://wa.me/5541988604137?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20direitos%20do%20passageiro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                Clique aqui e fale com um advogado no WhatsApp: +55 41 98860-4137
              </a>
            </p>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <p className="text-foreground">
              E-mail:{" "}
              <a href="mailto:tizzotadvocacia@gmail.com" className="text-primary hover:underline">
                tizzotadvocacia@gmail.com
              </a>
            </p>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <p className="text-foreground">Endereço: Rua Padre Anchieta, 1081, 4º andar – Curitiba, PR</p>
          </div>
        </div>
      </div>
    </section>
  )
}
