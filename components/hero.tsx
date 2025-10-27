import { Button } from "@/components/ui/button"
import { Plane } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-[#E8F4F8] to-white py-16 md:py-24 overflow-hidden">
      <div className="absolute top-10 right-10 w-32 h-16 bg-white/40 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-20 bg-white/40 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary text-balance leading-tight">
              Problemas com voo? Você pode ter direito a uma compensação!
            </h1>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Atraso, cancelamento, overbooking ou extravio de bagagem? Receba até R$ 10 mil de indenização. Atendimento
              100% online, rápido e sem custos iniciais.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg"
              asChild
            >
              <a
                href="https://wa.me/5541988604137?text=Ol%C3%A1%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20meus%20direitos%20de%20passageiro"
                target="_blank"
                rel="noopener noreferrer"
              >
                Verificar direitos
              </a>
            </Button>
          </div>

          <div className="relative">
            <img
              src="/images/hero-illustration.jpg"
              alt="Ilustração de passageiros com malas e passagens aéreas"
              className="w-full h-auto"
            />
            <Plane className="absolute top-10 right-10 h-12 w-12 text-primary animate-bounce" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 text-sm text-foreground/70">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span>Sem burocracia e sem estresse</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-foreground/70">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span>Rápido, fácil e online</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-foreground/70">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span>Já atendemos mais de 10 mil passageiros</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-foreground/70">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <span>Atendimento em tempo real</span>
          </div>
        </div>
      </div>
    </section>
  )
}
