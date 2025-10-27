import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Qual o valor da indenização que posso receber?",
      answer:
        "O valor varia conforme o tipo de dano e a gravidade do transtorno sofrido. Em casos de atraso, cancelamento ou overbooking, os tribunais têm fixado indenizações que podem chegar a R$10 mil.",
    },
    {
      question: "O processo é 100% online?",
      answer:
        "Sim. Desde o relato inicial até a assinatura dos documentos, todo o atendimento é realizado de forma digital, o que permite que clientes em qualquer localidade sejam assistidos.",
    },
    {
      question: "Quanto tempo leva para receber a indenização?",
      answer:
        "O prazo depende do andamento do processo e da postura da companhia aérea. Em geral, após ingressar com a ação judicial, o julgamento leva alguns meses. Nossos advogados trabalham para que seu caso seja resolvido no menor tempo possível.",
    },
    {
      question: "Quais documentos preciso enviar?",
      answer:
        "É importante separar comprovantes de compra da passagem, cartões de embarque, e-mails da companhia informando atrasos ou cancelamentos, e qualquer comunicação que tenha recebido. Envie também seu RG e CPF digitalizados.",
    },
    {
      question: "Vocês atendem clientes em todo o Brasil?",
      answer: "Sim. Atuamos de forma online, o que nos permite atender passageiros em qualquer estado brasileiro.",
    },
  ]

  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Perguntas frequentes</h2>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
