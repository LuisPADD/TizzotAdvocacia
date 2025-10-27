import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-16 md:py-24 bg-primary text-white overflow-hidden">
      <div className="absolute top-10 left-20">
        <Star className="h-8 w-8 text-yellow-400 fill-yellow-400" />
      </div>
      <div className="absolute top-20 right-32">
        <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
      </div>
      <div className="absolute bottom-20 left-40">
        <Star className="h-10 w-10 text-yellow-400 fill-yellow-400" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="flex justify-center order-2 md:order-1">
            <img
              src="/images/cta-illustration.jpg"
              alt="Ilustração de verificação de compensação"
              className="w-full max-w-sm h-auto"
            />
          </div>

          <div className="order-1 md:order-2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Quero verificar minha compensação agora!
            </h2>
            <p className="text-lg mb-8 text-white/90 leading-relaxed">
              Descubra rapidamente se você tem direito a receber compensação. É grátis, rápido e sem compromisso. Basta
              clicar no botão abaixo!
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-lg font-semibold"
              asChild
            >
              <a
                href="https://wa.me/5541988604137?text=Ol%C3%A1%20quero%20verificar%20minha%20compensa%C3%A7%C3%A3o"
                target="_blank"
                rel="noopener noreferrer"
              >
                Verificar grátis
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
