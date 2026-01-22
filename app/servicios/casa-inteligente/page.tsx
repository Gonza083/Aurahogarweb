"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import {
  Lightbulb,
  Thermometer,
  Volume2,
  Droplets,
  Shield,
  Smartphone,
  CheckCircle,
  ArrowLeft,
  Phone,
  Star,
  Lock,
  Sun,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CasaInteligentePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-aura-cream">
      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <div className="bg-aura-tan/20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-aura-brown">
            <Link href="/" className="hover:text-aura-brown/80 transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/#servicios" className="hover:text-aura-brown/80 transition-colors">
              Servicios
            </Link>
            <span>/</span>
            <span className="font-semibold">Casa Inteligente</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-aura-tan/20 text-aura-brown hover:bg-aura-tan/30">🏠 Casa Inteligente</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-aura-brown leading-tight">
                  Automatización <span className="text-aura-tan">Completa</span> para tu Hogar
                </h1>
                <p className="text-xl text-aura-brown/80 leading-relaxed">
                  Hacemos de tu casa un hogar inteligente. Climatización, luces, audio, seguridad, pileta, cortinas,
                  riego y mas, conectados en un solo sistema, manejados fácil y rápido desde tu celular.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-aura-tan hover:bg-aura-brown text-white px-8"
                  onClick={() =>
                    window.open(
                      "https://wa.me/5493456022800?text=Hola%20Aura%20Hogar!%20Me%20interesa%20el%20servicio%20de%20Casa%20Inteligente.%20¿Podrían%20brindarme%20una%20cotización%20personalizada?",
                      "_blank",
                    )
                  }
                >
                  Cotización Gratuita
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-aura-tan text-aura-tan hover:bg-aura-tan/10 bg-transparent"
                  onClick={() =>
                    window.open(
                      "https://wa.me/5493456022800?text=Hola%20Aura%20Hogar!%20Me%20gustaría%20agendar%20una%20evaluación%20gratuita%20de%20mi%20hogar%20para%20automatización%20completa.",
                      "_blank",
                    )
                  }
                >
                  Evaluación Gratuita
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/smart-home/hero-control-total.jpg"
                alt="Casa Inteligente - Control Total"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-aura-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-aura-brown mb-4">
              Todo lo que necesitás en un solo sistema
            </h2>
            <p className="text-xl text-aura-brown/80 max-w-3xl mx-auto">
              Integramos todos los aspectos de tu hogar en una plataforma única y fácil de usar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-aura-tan/30 hover:border-aura-tan">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-aura-tan/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-aura-tan/30 transition-colors">
                  <Lightbulb className="w-8 h-8 text-aura-tan" />
                </div>
                <h3 className="text-xl font-semibold text-aura-brown mb-4">Iluminación Inteligente</h3>
                <p className="text-aura-brown/70">
                  Control total de luces LED, dimmers, escenas personalizadas y programación automática según tus
                  rutinas diarias.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-aura-tan/30 hover:border-aura-tan">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-aura-tan/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-aura-tan/30 transition-colors">
                  <Thermometer className="w-8 h-8 text-aura-tan" />
                </div>
                <h3 className="text-xl font-semibold text-aura-brown mb-4">Climatización</h3>
                <p className="text-aura-brown/70">
                  Aires acondicionados, calefacción y ventilación controlados inteligentemente para máximo confort y
                  eficiencia energética.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-aura-tan/30 hover:border-aura-tan">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-aura-tan/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-aura-tan/30 transition-colors">
                  <Sun className="w-8 h-8 text-aura-tan" />
                </div>
                <h3 className="text-xl font-semibold text-aura-brown mb-4">Cortinas y Persianas</h3>
                <p className="text-aura-brown/70">
                  Automatización de cortinas, persianas y toldos con control desde centralizado y desde tu celular.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-aura-tan/30 hover:border-aura-tan">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-aura-tan/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-aura-tan/30 transition-colors">
                  <Volume2 className="w-8 h-8 text-aura-tan" />
                </div>
                <h3 className="text-xl font-semibold text-aura-brown mb-4">Audio Multizona</h3>
                <p className="text-aura-brown/70">
                  Sistema de audio integrado en toda la casa con control independiente por zonas y streaming desde
                  cualquier dispositivo.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-aura-tan/30 hover:border-aura-tan">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-aura-tan/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-aura-tan/30 transition-colors">
                  <Droplets className="w-8 h-8 text-aura-tan" />
                </div>
                <h3 className="text-xl font-semibold text-aura-brown mb-4">Pileta y Riego</h3>
                <p className="text-aura-brown/70">
                  Control automático de filtros, iluminación de pileta, sistema de riego inteligente sincronizado según
                  el clima.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-aura-tan/30 hover:border-aura-tan">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-aura-tan/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-aura-tan/30 transition-colors">
                  <Lock className="w-8 h-8 text-aura-tan" />
                </div>
                <h3 className="text-xl font-semibold text-aura-brown mb-4">Portones y Accesos</h3>
                <p className="text-aura-brown/70">
                  Automatización de portones, puertas de garaje y control de accesos con apertura remota y
                  notificaciones.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-aura-brown mb-8">Tecnología Sophia Intelligence</h2>
              <p className="text-xl text-aura-brown/80 mb-8">
                Utilizamos el sistema más avanzado del mercado para garantizar la máxima compatibilidad, estabilidad y
                facilidad de uso.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-aura-tan rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-aura-brown mb-2">Control Unificado</h3>
                    <p className="text-aura-brown/70">
                      Una sola app para controlar todos los dispositivos de tu hogar, sin importar la marca o
                      tecnología.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-aura-tan rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-aura-brown mb-2">Escenas Inteligentes</h3>
                    <p className="text-aura-brown/70">
                      Crea ambientes perfectos con un toque: "Cine en Casa", "Fiesta", "Dormir", "Salir de Casa".
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-aura-tan rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-aura-brown mb-2">Automatización Avanzada</h3>
                    <p className="text-aura-brown/70">
                      El sistema aprende tus rutinas y se anticipa a tus necesidades para máximo confort y ahorro.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-aura-tan rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-aura-brown mb-2">Seguridad y Privacidad</h3>
                    <p className="text-aura-brown/70">
                      Todos los datos se procesan localmente en tu hogar, garantizando máxima privacidad y seguridad.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Image
                src="/images/smart-home/app-control.jpg"
                alt="Control por App"
                width={300}
                height={250}
                className="rounded-lg shadow-lg"
              />
              <Image
                src="/images/smart-home/panel-central.jpg"
                alt="Panel Central"
                width={300}
                height={250}
                className="rounded-lg shadow-lg"
              />
              <Image
                src="/images/smart-home/sensores-inteligentes.jpg"
                alt="Sensores Inteligentes"
                width={300}
                height={250}
                className="rounded-lg shadow-lg"
              />
              <Image
                src="/images/smart-home/automatizacion.jpg"
                alt="Automatización"
                width={300}
                height={250}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-aura-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-aura-brown mb-4">Beneficios de una Casa Inteligente</h2>
            <p className="text-xl text-aura-brown/80 max-w-3xl mx-auto">
              Más que tecnología, es una nueva forma de vivir con mayor comodidad, seguridad y eficiencia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-aura-tan/30">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-aura-brown mb-2">Ahorro Energético</h3>
              <p className="text-aura-brown/70 text-sm">
                Hasta 30% menos consumo eléctrico con automatización inteligente
              </p>
            </Card>

            <Card className="text-center p-6 border-aura-tan/30">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-aura-brown mb-2">Mayor Seguridad</h3>
              <p className="text-aura-brown/70 text-sm">
                Control total de accesos, cámaras y alarmas desde cualquier lugar
              </p>
            </Card>

            <Card className="text-center p-6 border-aura-tan/30">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-aura-brown mb-2">Comodidad Total</h3>
              <p className="text-aura-brown/70 text-sm">Control remoto de todos los dispositivos desde tu smartphone</p>
            </Card>

            <Card className="text-center p-6 border-aura-tan/30">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-aura-brown mb-2">Valor Agregado</h3>
              <p className="text-aura-brown/70 text-sm">Incrementa el valor de tu propiedad hasta un 15%</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-aura-tan to-aura-brown">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">¿Listo para transformar tu hogar?</h2>
            <p className="text-xl text-aura-cream mb-8">
              Obtén una evaluación gratuita de tu hogar y descubre todas las posibilidades de automatización que tenemos
              para vos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-aura-brown hover:bg-aura-cream px-8"
                onClick={() =>
                  window.open(
                    "https://wa.me/5493456022800?text=Hola%20Aura%20Hogar!%20Me%20interesa%20el%20servicio%20de%20Casa%20Inteligente.%20¿Podrían%20agendar%20una%20evaluación%20gratuita%20de%20mi%20hogar?",
                    "_blank",
                  )
                }
              >
                Evaluación Gratuita
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 bg-transparent"
                onClick={() =>
                  window.open(
                    "https://wa.me/5493456022800?text=Hola%20Aura%20Hogar!%20Me%20gustaría%20obtener%20más%20información%20sobre%20el%20servicio%20de%20Casa%20Inteligente%20y%20una%20cotización%20personalizada.",
                    "_blank",
                  )
                }
              >
                <Phone className="w-5 h-5 mr-2" />
                Más Información
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <Link href="/#servicios">
            <Button variant="outline" className="border-aura-tan text-aura-brown hover:bg-aura-tan/10 bg-transparent">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Ver Todos los Servicios
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
