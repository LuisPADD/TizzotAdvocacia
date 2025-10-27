import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Process } from "@/components/process"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Cases } from "@/components/cases"
import { CTASection } from "@/components/cta-section"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Process />
      <About />
      <Testimonials />
      <Cases />
      <CTASection />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
