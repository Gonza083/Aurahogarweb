"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import {
  Camera,
  Lock,
  Smartphone,
  Bell,
  Eye,
  CheckCircle,
  ArrowLeft,
  Phone,
  AlertTriangle,
  Wifi,
  Battery,
  Clock,
  Users,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"

export default function SeguridadMonitoreoPage() {
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
            <span className="font-semibold">Seguridad y Monitoreo</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-red-100 text-red-800 hover:bg-red-200">🛡️ Seguridad Total</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-aura-brown leading-tight">
                  Protección <span className="text-aura-tan">24/7</span> para tu Hogar
                </h1>
                <p className="text-xl text-aura-brown/80 leading-relaxed">
                  Sistema integral de seguridad con cámaras HD, sensores inteligentes, alarmas y control de accesos.
                  Monitoreá tu hogar desde cualquier lugar del mundo con total tranquilidad.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-aura-tan hover:bg-aura-brown text-white px-8"
                  onClick={() =>
                    window.open(
                      "https://wa.me/5493456022800?text=Hola%20Aura%20Hogar!%20Me%20interesa%20el%20sistema%20de%20Seguridad%20y%20Monitoreo.%20¿Podrían%20brindarme%20una%20cotización%20personalizada?",
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
                      "https://wa.me/5493456022800?text=Hola%20Aura%20Hogar!%20Me%20gustaría%20agendar%20una%20evaluación%20de%20seguridad%20gratuita%20para%20mi%20hogar.",
                      "_blank",
                    )
                  }
                >
                  Evaluación de Seguridad
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/security/hero-sistema-seguridad.jpg"
                alt="Sistema de Seguridad Integral"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-aura-brown mb-4">Protección Completa para tu Familia</h2>
            <p className="text-xl text-aura-brown/80 max-w-3xl mx-auto">
              Tecnología de vanguardia para mantener tu hogar seguro las 24 horas del día
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-aura-tan/30 hover:border-aura-tan">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors">
                  <Camera className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-aura-brown mb-4">Cámaras HD</h3>
                <p className="text-aura-brown/70">
                  Cámaras de alta definición con visión nocturna, detección de movimiento y grabación en la nube. Acceso
                  remoto 24/7.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-aura-tan/30 hover:border-aura-tan">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <Lock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-aura-brown mb-4">Cerraduras Digitales</h3>
                <p className="text-aura-brown/70">
                  Control de acceso inteligente con códigos, tarjetas, huella dactilar y apertura remota desde tu
                  smartphone.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-aura-tan/30 hover:border-aura-tan">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                  <Bell className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-aura-brown mb-4">Sensores de Alarma</h3>
                <p className="text-aura-brown/70">
                  Sensores de movimiento y apertura de puertas/ventanas con alertas instantáneas
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-aura-tan/30 hover:border-aura-tan">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <Smartphone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-aura-brown mb-4">Control Remoto</h3>
                <p className="text-aura-brown/70">
                  Monitoreá y controlá todo el sistema desde tu celular. Recibí notificaciones instantáneas de cualquier
                  evento.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-aura-tan/30 hover:border-aura-tan">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                  <Eye className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-aura-brown mb-4">Monitoreo Inteligente</h3>
                <p className="text-aura-brown/70">
                  Análisis de video con inteligencia artificial para detectar personas, vehículos y situaciones
                  anómalas.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-aura-tan/30 hover:border-aura-tan">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition-colors">
                  <AlertTriangle className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-aura-brown mb-4">Alertas Inmediatas</h3>
                <p className="text-aura-brown/70">
                  Notificaciones push, SMS y email ante cualquier evento. Integración con servicios de emergencia.
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
              <h2 className="text-3xl lg:text-4xl font-bold text-aura-brown mb-8">Tecnología de Última Generación</h2>
              <p className="text-xl text-aura-brown/80 mb-8">
                Utilizamos los equipos más avanzados del mercado para garantizar la máxima protección y confiabilidad.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-aura-tan rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-aura-brown mb-2">Cámaras 4K Ultra HD</h3>
                    <p className="text-aura-brown/70">
                      Imágenes cristalinas de día y noche con zoom digital sin pérdida de calidad y audio bidireccional.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-aura-tan rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-aura-brown mb-2">Almacenamiento Seguro</h3>
                    <p className="text-aura-brown/70">
                      Grabación local y en la nube con encriptación de grado militar. Acceso a grabaciones por 30 días.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-aura-tan rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-aura-brown mb-2">Inteligencia Artificial</h3>
                    <p className="text-aura-brown/70">
                      Reconocimiento facial, detección de objetos y análisis de comportamiento para reducir falsas
                      alarmas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-aura-tan rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-aura-brown mb-2">Conectividad Redundante</h3>
                    <p className="text-aura-brown/70">
                      Conexión WiFi, Ethernet y 4G de respaldo para garantizar comunicación constante.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Image
                src="/images/security/camara-4k.jpg"
                alt="Cámara 4K"
                width={300}
                height={250}
                className="rounded-lg shadow-lg"
              />
              <Image
                src="/images/security/panel-control.jpg"
                alt="Panel de Control"
                width={300}
                height={250}
                className="rounded-lg shadow-lg"
              />
              <Image
                src="/images/security/sensores-inteligentes.jpg"
                alt="Sensores Inteligentes"
                width={300}
                height={250}
                className="rounded-lg shadow-lg"
              />
              <Image
                src="/images/security/app-movil-seguridad.jpg"
                alt="App Móvil"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-aura-brown mb-4">¿Por qué elegir nuestro sistema?</h2>
            <p className="text-xl text-aura-brown/80 max-w-3xl mx-auto">
              Más que seguridad, es tranquilidad para vos y tu familia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-aura-tan/30">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-aura-brown mb-2">Monitoreo 24/7</h3>
              <p className="text-aura-brown/70 text-sm">Vigilancia continua sin interrupciones, los 365 días del año</p>
            </Card>

            <Card className="text-center p-6 border-aura-tan/30">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-aura-brown mb-2">Acceso Remoto</h3>
              <p className="text-aura-brown/70 text-sm">Controlá tu sistema desde cualquier lugar del mundo</p>
            </Card>

            <Card className="text-center p-6 border-aura-tan/30">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Battery className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-aura-brown mb-2">Respaldo de Energía</h3>
              <p className="text-aura-brown/70 text-sm">Sistema funciona incluso durante cortes de luz</p>
            </Card>

            <Card className="text-center p-6 border-aura-tan/30">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-aura-brown mb-2">Soporte Técnico</h3>
              <p className="text-aura-brown/70 text-sm">Asistencia profesional y mantenimiento incluido</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-aura-tan to-aura-brown">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Protegé lo que más querés</h2>
            <p className="text-xl text-aura-cream mb-8">
              Obtené una evaluación gratuita de seguridad para tu hogar y descubrí cómo podemos proteger a tu familia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-aura-brown hover:bg-aura-cream px-8"
                onClick={() =>
                  window.open(
                    "https://wa.me/5493456022800?text=Hola%20Aura%20Hogar!%20Me%20interesa%20el%20sistema%20de%20Seguridad%20y%20Monitoreo.%20¿Podrían%20agendar%20una%20evaluación%20gratuita%20de%20mi%20hogar?",
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
                    "https://wa.me/5493456022800?text=Hola%20Aura%20Hogar!%20Me%20gustaría%20obtener%20más%20información%20sobre%20el%20sistema%20de%20Seguridad%20y%20Monitoreo%20y%20una%20cotización%20personalizada.",
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
