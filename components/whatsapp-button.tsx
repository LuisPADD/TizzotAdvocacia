import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  // Replace with your actual WhatsApp number (format: country code + number, no spaces or special characters)
  const whatsappNumber = "5541988604137" // Example: 55 11 99999-9999
  const message = "Olá! Gostaria de saber mais sobre compensações."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <img src="/images/WhatsApp.svg" alt="wpplogo" width={40} height={40} />

      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale conosco
      </span>
    </a>
  )
}
