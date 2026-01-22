"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const mobileServicesRef = useRef<HTMLDivElement>(null)

  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }

    if (isServicesOpen && window.innerWidth >= 768) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isServicesOpen])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsServicesOpen(false)
      }
    }

    if (isServicesOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isServicesOpen])

  useEffect(() => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }, [pathname])

  const handleNavLinkClick = (sectionId: string) => {
    if (pathname !== "/") {
      router.push(`/#${sectionId}`)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsMenuOpen(false)
  }

  const handleServiceClick = () => {
    setIsServicesOpen(false)
    setIsMenuOpen(false)
  }

  const services = [
    {
      title: "Casa Inteligente",
      href: "/servicios/casa-inteligente",
      description: "Automatización completa del hogar",
    },
    {
      title: "Seguridad y Monitoreo",
      href: "/servicios/seguridad-monitoreo",
      description: "Sistemas de seguridad avanzados",
    },
    {
      title: "Iluminación Premium",
      href: "/servicios/iluminacion-premium",
      description: "Iluminación LED inteligente",
    },
    {
      title: "Redes y Conectividad",
      href: "/servicios/redes-conectividad",
      description: "WiFi mesh de alta velocidad",
    },
  ]

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-aura-tan sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/#inicio" className="flex items-center space-x-2">
            <Image
              src="/icons/android-chrome-192x192.png"
              alt="Aura Hogar Logo"
              width={32}
              height={32}
              className="rounded-sm"
            />
            <span className="text-2xl font-bold text-aura-brown">Aura Hogar</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/#inicio"
              onClick={(e) => {
                e.preventDefault()
                handleNavLinkClick("inicio")
              }}
              className="text-aura-brown hover:text-aura-tan transition-colors font-medium"
            >
              Inicio
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center gap-1 text-aura-brown hover:text-aura-tan transition-colors font-medium"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                aria-label="Menú de servicios"
              >
                Servicios
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-2xl border-2 border-aura-tan py-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                  role="menu"
                  aria-orientation="vertical"
                >
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-3 hover:bg-aura-cream transition-colors rounded-md mx-2 group"
                      role="menuitem"
                      onClick={handleServiceClick}
                    >
                      <div className="font-semibold text-aura-brown group-hover:text-aura-tan transition-colors">
                        {service.title}
                      </div>
                      <div className="text-sm text-aura-brown/70 mt-0.5">{service.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/#proyectos"
              onClick={(e) => {
                e.preventDefault()
                handleNavLinkClick("proyectos")
              }}
              className="text-aura-brown hover:text-aura-tan transition-colors font-medium"
            >
              Proyectos
            </Link>
            <Link
              href="/#contacto"
              onClick={(e) => {
                e.preventDefault()
                handleNavLinkClick("contacto")
              }}
              className="text-aura-brown hover:text-aura-tan transition-colors font-medium"
            >
              Contacto
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-aura-tan hover:bg-aura-brown active:bg-aura-black text-white shadow-md hover:shadow-lg transition-all font-semibold"
              onClick={() =>
                window.open(
                  "https://wa.me/5493456022800?text=Hola%20Aura%20Hogar!%20Me%20interesa%20obtener%20más%20información%20sobre%20sus%20servicios%20de%20automatización%20del%20hogar.",
                  "_blank",
                )
              }
            >
              Cotización Gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-aura-brown hover:text-aura-tan transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-aura-tan animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/#inicio"
                className="text-aura-brown hover:text-aura-tan transition-colors font-medium py-2"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavLinkClick("inicio")
                }}
              >
                Inicio
              </Link>
              <div ref={mobileServicesRef}>
                <button
                  className="flex items-center justify-between w-full text-aura-brown hover:text-aura-tan transition-colors font-medium py-2"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  aria-expanded={isServicesOpen}
                  aria-label="Abrir menú de servicios"
                >
                  <span>Servicios</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isServicesOpen && (
                  <div className="mt-2 ml-2 space-y-2 animate-in fade-in slide-in-from-top-1 duration-200">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block py-3 px-4 rounded-lg hover:bg-aura-tan hover:text-white active:bg-aura-brown transition-colors border-2 border-aura-tan"
                        onClick={handleServiceClick}
                      >
                        <div className="font-semibold text-aura-brown">{service.title}</div>
                        <div className="text-sm text-aura-brown/70 mt-1">{service.description}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/#proyectos"
                className="text-aura-brown hover:text-aura-tan transition-colors font-medium py-2"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavLinkClick("proyectos")
                }}
              >
                Proyectos
              </Link>
              <Link
                href="/#contacto"
                className="text-aura-brown hover:text-aura-tan transition-colors font-medium py-2"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavLinkClick("contacto")
                }}
              >
                Contacto
              </Link>
              <Button
                className="bg-aura-tan hover:bg-aura-brown active:bg-aura-brown text-white w-full shadow-md transition-all mt-2 font-semibold"
                onClick={() => {
                  window.open(
                    "https://wa.me/5493456022800?text=Hola%20Aura%20Hogar!%20Me%20interesa%20obtener%20más%20información%20sobre%20sus%20servicios%20de%20automatización%20del%20hogar.",
                    "_blank",
                  )
                  setIsMenuOpen(false)
                }}
              >
                Cotización Gratis
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
