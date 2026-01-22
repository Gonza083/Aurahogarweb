"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import {
  Wifi,
  Router,
  Signal,
  Smartphone,
  Monitor,
  Gamepad2,
  CheckCircle,
  ArrowLeft,
  Phone,
  Zap,
  Shield,
  Users,
  Clock,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RedesConectividadPage() {
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
            <span className="font-semibold">Redes y Conectividad</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">📶 Conectividad Total</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-aura-brown leading-tight">
                  WiFi <span className="text-aura-tan">Potente</span> en Toda tu Casa
                </h1>
                <p className="text-xl text-aura-brown/80 leading-relaxed">
                  Redes de última generación que garantizan conexión estable y rápida en cada rincón de tu hogar.
                  Perfecta para trabajo remoto, televisores 4K, gaming.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-aura-tan hover:bg-aura-brown text-white px-8"
                  onClick={() =>
                    window.open(
                      "https://wa.me/5493456022800?text=Hola%20Aura%20Hogar!%20Me%20interesa%20el%20servicio%20de%20Redes%20y%20Conectividad.%20¿Podrían%20brindarme%20una%20cotización%20personalizada?",
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
                      "https://wa.me/5493456022800?text=Hola%20Aura%20Hogar!%20Me%20gustaría%20agendar%20una%20evaluación%20de%20conectividad%20gratuita%20para%20mi%20hogar.",
                      "_blank",
                    )
                  }
                >
                  Análisis de Cobertura
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/network/hero-wifi-mesh.jpg"
                alt="Red Mesh WiFi 6"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-aura-brown mb-4">Conectividad Sin Límites</h2>
            <p className="text-xl text-aura-brown/80 max-w-3xl mx-auto">
              Tecnología mesh WiFi 6 para una experiencia de internet superior en toda tu casa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-aura-tan/30 hover:border-aura-tan">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <Wifi className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-aura-brown mb-4">WiFi 6 Mesh</h3>
                <p className="text-aura-brown/70">
                  Tecnología mesh de última generación con WiFi 6 para velocidades hasta 3x más rápidas y menor
                  latencia.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-aura-tan/30 hover:border-aura-tan">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <Signal className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-aura-brown mb-4">Cobertura Total</h3>
                <p className="text-aura-brown/70">
                  Señal potente y estable en cada rincón de tu casa, jardín y espacios exteriores sin zonas muertas.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-aura-tan/30 hover:border-aura-tan">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                  <Router className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-aura-brown mb-4">Múltiples Dispositivos</h3>
                <p className="text-aura-brown/70">
                  Conectá hasta 200+ dispositivos simultáneamente sin pérdida de velocidad ni interrupciones.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-aura-tan/30 hover:border-aura-tan">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors">
                  <Gamepad2 className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-aura-brown mb-4">Gaming y Streaming</h3>
                <p className="text-aura-brown/70">
                  Optimizado para gaming online, streaming 4K/8K y videoconferencias sin lag ni interrupciones.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-aura-tan/30 hover:border-aura-tan">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                  <Smartphone className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-aura-brown mb-4">Control Inteligente</h3>
                <p className="text-aura-brown/70">
                  App móvil para gestionar tu red, controlar acceso, priorizar dispositivos y monitorear uso.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-aura-tan/30 hover:border-aura-tan">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition-colors">
                  <Monitor className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-aura-brown mb-4">Trabajo Remoto</h3>
                <p className="text-aura-brown/70">
                  Conexión empresarial en casa con QoS avanzado para videoconferencias y aplicaciones críticas.
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
              <h2 className="text-3xl lg:text-4xl font-bold text-aura-brown mb-8">Tecnología Mesh Avanzada</h2>
              <p className="text-xl text-aura-brown/80 mb-8">
                Utilizamos equipos de marcas líderes mundiales para garantizar el mejor rendimiento y confiabilidad.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-aura-tan rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-aura-brown mb-2">Red Auto-Optimizada</h3>
                    <p className="text-aura-brown/70">
                      El sistema se auto-configura y optimiza automáticamente para brindar la mejor experiencia en cada
                      dispositivo.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-aura-tan rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-aura-brown mb-2">Roaming Inteligente</h3>
                    <p className="text-aura-brown/70">Misma red en toda la casa sin cortes.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-aura-tan rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-aura-brown mb-2">Seguridad Empresarial</h3>
                    <p className="text-aura-brown/70">
                      Encriptación WPA3, firewall avanzado y actualizaciones automáticas de seguridad.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-aura-tan rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-aura-brown mb-2">Escalabilidad Total</h3>
                    <p className="text-aura-brown/70">
                      Agregá puntos WiFi facilmente para expandir la cobertura según crezcan tus necesidades.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Image
                src="/images/network/router-principal.jpg"
                alt="Router Principal"
                width={300}
                height={250}
                className="rounded-lg shadow-lg"
              />
              <Image
                src="/images/network/nodos-mesh.jpg"
                alt="Nodos Mesh"
                width={300}
                height={250}
                className="rounded-lg shadow-lg"
              />
              <Image
                src="/images/network/app-control.jpg"
                alt="App de Control"
                width={300}
                height={250}
                className="rounded-lg shadow-lg"
              />
              <Image
                src="/images/network/cobertura-total.jpg"
                alt="Cobertura Total"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-aura-brown mb-4">Beneficios de una Red Profesional</h2>
            <p className="text-xl text-aura-brown/80 max-w-3xl mx-auto">
              Más que internet rápido, es la base para un hogar verdaderamente inteligente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-aura-tan">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-aura-brown mb-2">Velocidad Extrema</h3>
              <p className="text-aura-brown/70 text-sm">Hasta 6 Gbps de velocidad agregada para toda la familia</p>
            </Card>

            <Card className="text-center p-6 border-aura-tan">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-aura-brown mb-2">Máxima Seguridad</h3>
              <p className="text-aura-brown/70 text-sm">Protección avanzada contra amenazas y accesos no autorizados</p>
            </Card>

            <Card className="text-center p-6 border-aura-tan">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-aura-brown mb-2">Múltiples Usuarios</h3>
              <p className="text-aura-brown/70 text-sm">Toda la familia conectada sin afectar el rendimiento</p>
            </Card>

            <Card className="text-center p-6 border-aura-tan">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-aura-brown mb-2">Disponibilidad 24/7</h3>
              <p className="text-aura-brown/70 text-sm">Red estable y confiable con monitoreo continuo</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-aura-tan to-aura-brown">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Potenciá tu conectividad</h2>
            <p className="text-xl text-white/90 mb-8">
              Obtené un análisis gratuito de cobertura y descubrí cómo mejorar la conectividad en tu hogar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-aura-brown hover:bg-aura-cream px-8"
                onClick={() =>
                  window.open(
                    "https://wa.me/5493456022800?text=Hola%20Aura%20Hogar!%20Me%20interesa%20el%20servicio%20de%20Redes%20y%20Conectividad.%20¿Podrían%20agendar%20un%20análisis%20de%20cobertura%20gratuito?",
                    "_blank",
                  )
                }
              >
                Análisis Gratuito
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 bg-transparent"
                onClick={() =>
                  window.open(
                    "https://wa.me/5493456022800?text=Hola%20Aura%20Hogar!%20Me%20gustaría%20obtener%20más%20información%20sobre%20el%20servicio%20de%20Redes%20y%20Conectividad%20y%20una%20cotización%20personalizada.",
                    "_blank",
                  )
                }
              >
                <Phone className="w-5 h-5 mr-2" />
                Consultar Ahora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <Link href="/#servicios">
            <Button variant="outline" className="border-aura-tan text-aura-tan hover:bg-aura-tan/10 bg-transparent">
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
