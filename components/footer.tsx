import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contacto" className="bg-aura-brown text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Image
                src="/icons/android-chrome-192x192.png"
                alt="Aura Hogar Logo"
                width={32}
                height={32}
                className="rounded-sm"
              />
              <span className="text-2xl font-bold">Aura Hogar</span>
            </div>
            <p className="text-white/80 mb-6">
              Transformamos hogares con tecnología inteligente, brindando comodidad, seguridad y eficiencia energética.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/aurahogaroficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-aura-tan to-aura-brown rounded-full hover:from-aura-brown hover:to-aura-tan transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-white/20"
                aria-label="Visita nuestro Instagram"
              >
                <Instagram className="w-5 h-5" />
                <span className="font-semibold">Síguenos en Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3 text-white/80">
              <li>
                <Link href="/servicios/casa-inteligente" className="hover:text-white transition-colors">
                  Casa Inteligente
                </Link>
              </li>
              <li>
                <Link href="/servicios/seguridad-monitoreo" className="hover:text-white transition-colors">
                  Seguridad y Monitoreo
                </Link>
              </li>
              <li>
                <Link href="/servicios/iluminacion-premium" className="hover:text-white transition-colors">
                  Iluminación Premium
                </Link>
              </li>
              <li>
                <Link href="/servicios/redes-conectividad" className="hover:text-white transition-colors">
                  Redes y Conectividad
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Empresa</h3>
            <ul className="space-y-3 text-white/80">
              <li>
                <Link href="/#inicio" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className="hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/#proyectos" className="hover:text-white transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contacto</h3>
            <div className="space-y-4 text-white/80">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <a href="tel:+5493456022800" className="hover:text-white transition-colors">
                  +54 9 3456 022800
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <a href="#" className="hover:text-white transition-colors">
                aurahogaroficial@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1" />
                <span>
                  Chajarí, Entre Ríos
                  <br />
                  Argentina
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-aura-tan/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 mb-4 md:mb-0">© 2026 Aura Hogar. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
