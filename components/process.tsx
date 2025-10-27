import { FileText, Search, Coins } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Process() {
  const steps = [
    {
      icon: FileText,
      title: "Verifique o seu caso",
      description:
        "Responda algumas perguntas sobre o seu problema com o voo e descubra se você tem direito à compensação.",
    },
    {
      icon: Search,
      title: "A Tizzot ajuda você",
      description:
        "Após ter direito confirmado, você poderá enviar seus dados e documentos para que possamos cuidar de tudo por você.",
    },
    {
      icon: Coins,
      title: "Você só paga se receber",
      description: "Sem surpresas ou riscos. Você só paga se conseguirmos uma compensação para você.",
    },
  ]

  return (
    <section id="processo" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">Como funciona</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Simples, rápido e sem complicação</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6">
                <step.icon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8" asChild>
            <a
              href="https://wa.me/5541988604137?text=Ol%C3%A1%20gostaria%20de%20verificar%20meus%20direitos"
              target="_blank"
              rel="noopener noreferrer"
            >
              Avaliar meu caso grátis
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
