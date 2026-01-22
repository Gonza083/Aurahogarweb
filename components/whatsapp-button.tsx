"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const phoneNumber = "5493456022800"
  const message = encodeURIComponent("Hola! Me gustaría obtener más información sobre sus servicios.")

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-aura-slate text-white text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        ¡Chatea con nosotros!
      </span>
    </button>
  )
}
