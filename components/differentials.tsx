import { Shield, Users, MessageSquare, BookOpen, Award, Smartphone } from "lucide-react"

export function Differentials() {
  const differentials = [
    {
      icon: BookOpen,
      title: "Transparência",
      description: "Prestamos informações constantes sobre o andamento e as novidades do processo.",
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Avaliação individualizada com foco na melhor solução e redução de riscos.",
    },
    {
      icon: Users,
      title: "Humanização",
      description: "Atendimento personalizado realizado diretamente por um advogado ou advogada.",
    },
    {
      icon: MessageSquare,
      title: "Comunicação acessível",
      description: "Explicações claras, sem juridiquês, para que você entenda cada etapa.",
    },
    {
      icon: Award,
      title: "Especialização",
      description: "Atuamos exclusivamente em casos relacionados a direitos de passageiros de voo.",
    },
    {
      icon: Smartphone,
      title: "Atendimento via WhatsApp",
      description: "Converse conosco pelo WhatsApp ou telefone e resolva seu caso sem sair de casa.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nossos diferenciais</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differentials.map((item, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground text-primary mb-4">
                <item.icon className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
              <p className="text-primary-foreground/90 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
