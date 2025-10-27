"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <button onClick={() => scrollToSection("home")} className="flex items-center gap-3">
          <img src="/favicon.png" alt="Tizzot Advocacia" className="h-10 md:h-12 w-auto" />
          <div className="h-8 w-px bg-primary"></div>
          <span className="text-lg md:text-xl font-semibold text-primary">Tizzot Advocacia</span>
        </button>

        <nav className="hidden lg:block">
          <ul className="flex gap-8 text-sm">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Início
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("processo")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Como funciona
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("casos")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Casos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Sobre
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Contato
              </button>
            </li>
          </ul>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://wa.me/5541988604137"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>(41) 9 8860-4137 </span>
          </a>
          {/* </CHANGE> */}
          <Button
            onClick={() => scrollToSection("contato")}
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
          >
            Verificar
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <ul className="flex flex-col py-4">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="w-full text-left px-4 py-2 hover:bg-secondary transition-colors"
              >
                Início
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("processo")}
                className="w-full text-left px-4 py-2 hover:bg-secondary transition-colors"
              >
                Como funciona
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("casos")}
                className="w-full text-left px-4 py-2 hover:bg-secondary transition-colors"
              >
                Casos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("sobre")}
                className="w-full text-left px-4 py-2 hover:bg-secondary transition-colors"
              >
                Sobre
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contato")}
                className="w-full text-left px-4 py-2 hover:bg-secondary transition-colors"
              >
                Contato
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
