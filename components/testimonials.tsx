import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Testimonials() {
  const testimonials = [
    {
      name: "Adriana Moreira",
      text: "Ótimo serviço! Atendimento rápido e eficiente. Super recomendo!",
      rating: 5,
    },
    {
      name: "André Chaves",
      text: "Empresa muito séria e atendimento direto. Já consegui minha compensação e foi muito rápido!",
      rating: 5,
    },
    {
      name: "Renata Nazareth",
      text: "Gostei muito do trabalho! Profissionais sérios que me ajudaram com meu problema de voo rapidamente.",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          O que dizem os nossos clientes:
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          A Tizzot Advocacia é avaliada como Excelente com base em centenas de avaliações
        </p>

        <div className="flex justify-center mb-12">
          <div className="text-4xl font-bold">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
