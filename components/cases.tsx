import { Card, CardContent } from "@/components/ui/card"
import { Plane, XCircle, Clock, Luggage } from "lucide-react"

export function Cases() {
  const cases = [
    {
      icon: Clock,
      title: "Voo atrasado",
      description:
        "Você sabia que atrasos de mais de 4 horas dão direito a compensação? Não deixe de receber o que é seu por direito.",
      link: "#",
    },
    {
      icon: XCircle,
      title: "Voo cancelado",
      description:
        "Quando seu voo é cancelado sem aviso prévio, você pode receber até R$ 10 mil de compensação. É simples e rápido!",
      link: "#",
    },
    {
      icon: Luggage,
      title: "Bagagem extraviada",
      description:
        "Nada pior do que ter sua bagagem extraviada ou danificada. Você pode ser compensado pelos transtornos e prejuízos.",
      link: "#",
    },
    {
      icon: Plane,
      title: "Embarque negado no overbooking",
      description:
        "Nada pior do que ter seu embarque negado por overbooking. Você pode ser compensado pelos transtornos e prejuízos.",
      link: "#",
    },
  ]

  return (
    <section id="casos" className="py-16 md:py-24 bg-gradient-to-br from-white to-[#E8F4F8]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          Você pode ser compensado em casos de...
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
          Conheça as situações em que você tem direito a receber compensação
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          {cases.map((caseItem, index) => (
            <Card key={index} className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <caseItem.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">{caseItem.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm mb-3">{caseItem.description}</p>
                    <a
                      href={caseItem.link}
                      className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1"
                    >
                      Conheça seus direitos →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
