export function About() {
  return (
    <section id="sobre" className="relative py-16 md:py-24 bg-gradient-to-br from-[#E8F4F8] to-white overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            fillOpacity="0.3"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="flex justify-center order-2 md:order-1">
            <img
              src="/images/about-illustration.jpg"
              alt="Ilustração de passageiros viajando"
              className="w-full max-w-md h-auto"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Quem somos</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                A Tizzot Advocacia é especializada em proteger os direitos dos passageiros aéreos. Com ampla experiência em Direito do Consumidor 
                e atuação destacada em ações contra companhias aéreas, nosso escritório oferece atendimento exclusivo e totalmente digital.
              </p>
              <p>
                Nos apoiamos em três pilares: <b>compromisso com seus direitos</b> , escutando você e tratando sua demanda com seriedade; <b>agilidade e transparência</b>, sem juridiquês e com informações constantes sobre o andamento do seu caso; e <b>alcance nacional sem burocracia</b>, 
                para que você resolva tudo pelo celular, onde quer que esteja.
              </p>
              <p>
                Você só paga honorários se for indenizado. Analisamos cada caso de forma gratuita e responsável, buscando sempre a melhor solução para o seu problema.
              </p>
              <p className="font-semibold text-primary">Você só paga se ganhar. Sem riscos, sem surpresas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
