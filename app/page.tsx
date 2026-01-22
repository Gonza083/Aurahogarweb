"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import {
  Lightbulb,
  Shield,
  Smartphone,
  Wifi,
  Star,
  CheckCircle,
  Phone,
  Users,
  Home,
  ArrowRight,
  Ear,
  Search,
  PenTool,
  Presentation,
  Handshake,
  Settings,
  GraduationCap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"

export default function AuraHogarLanding() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-aura-cream">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="inicio" className="relative py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-aura-tan text-white hover:bg-aura-brown">✨ Tecnología de Vanguardia</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-aura-brown leading-tight">
                  Convertí tu casa en un <span className="text-aura-tan">Hogar Inteligente</span>
                </h1>
                <p className="text-xl text-aura-brown leading-relaxed">
                  Creamos espacios que se adaptan a vos: más confort, más control, más tranquilidad. Soluciones
                  inteligentes pensadas para simplificar tu día a día y cuidar lo que más te importa.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-aura-tan hover:bg-aura-brown text-white px-8"
                  onClick={() => scrollToSection("servicios")}
                >
                  Descubre Más
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-aura-tan text-aura-tan hover:bg-aura-tan hover:text-white bg-transparent"
                  onClick={() => scrollToSection("proyectos")}
                >
                  Ver Proyectos
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/hero-smart-home.jpg"
                alt="Hogar Inteligente Aura Hogar - Control Total de tu Casa"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-aura-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-aura-brown mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-aura-brown max-w-3xl mx-auto">
              Ofrecemos soluciones integrales de automatización que se adaptan a tus necesidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <Link href="/servicios/casa-inteligente" className="block">
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-aura-tan hover:border-aura-brown hover:bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-aura-tan rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-aura-brown transition-colors">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-aura-brown mb-4">Casa Inteligente</h3>
                  <p className="text-aura-brown mb-6">
                    Automatización completa: climatización, cortinas, audio, iluminación, pileta, riego, portones y más,
                    todo integrado en un solo sistema.
                  </p>
                  <Button variant="ghost" className="text-aura-tan hover:text-aura-brown hover:bg-aura-cream">
                    Saber más →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/servicios/seguridad-monitoreo" className="block">
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-aura-tan hover:border-aura-brown hover:bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-aura-tan rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-aura-brown transition-colors">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-aura-brown mb-4">Seguridad y Monitoreo</h3>
                  <p className="text-aura-brown mb-6">
                    Cámaras HD, sensores de alarma y cerraduras digitales para mantener tu hogar protegido las 24 horas.
                  </p>
                  <Button variant="ghost" className="text-aura-tan hover:text-aura-brown hover:bg-aura-cream">
                    Saber más →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/servicios/iluminacion-premium" className="block">
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-aura-tan hover:border-aura-brown hover:bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-aura-tan rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-aura-brown transition-colors">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-aura-brown mb-4">Iluminación Premium</h3>
                  <p className="text-aura-brown mb-6">
                    Diseño y venta de iluminación de alta calidad con la última tecnología en eficiencia energética y
                    estilo.
                  </p>
                  <Button variant="ghost" className="text-aura-tan hover:text-aura-brown hover:bg-aura-cream">
                    Saber más →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/servicios/redes-conectividad" className="block">
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-aura-tan hover:border-aura-brown hover:bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-aura-tan rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-aura-brown transition-colors">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-aura-brown mb-4">Redes y Conectividad</h3>
                  <p className="text-aura-brown mb-6">
                    WiFi potente y estable en cada rincón de tu casa con tecnología mesh de última generación.
                  </p>
                  <Button variant="ghost" className="text-aura-tan hover:text-aura-brown hover:bg-aura-cream">
                    Saber más →
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Services Details Section */}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-aura-brown mb-8">¿Por qué elegir Aura Hogar?</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-aura-tan rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-aura-brown mb-2">
                      Soluciones integrales, pensadas para vos
                    </h3>
                    <p className="text-aura-brown">
                      Desde la planificación eléctrica hasta la automatización completa, nos ocupamos de todo. Te
                      ofrecemos un sistema que integra domótica, iluminación, seguridad y conectividad, para que tu casa
                      funcione de forma eficiente, segura y cómoda.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-aura-tan rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-aura-brown mb-2">Equipo profesional y cercano</h3>
                    <p className="text-aura-brown">
                      Somos un equipo de especialistas apasionados por la innovación. Te acompañamos desde la primera
                      idea hasta la puesta en marcha final, con un servicio técnico personalizado y confiable. Hablamos
                      tu idioma y entendemos lo que necesitás.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-aura-tan rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Smartphone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-aura-brown mb-2">Tecnología simple e inteligente</h3>
                    <p className="text-aura-brown">
                      Trabajamos con Sophia Intelligence, uno de los sistemas más avanzados del mercado, para que puedas
                      controlar tu casa desde el celular de forma fácil, intuitiva y sin complicaciones.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-aura-tan rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-aura-brown mb-2">Diseño y funcionalidad</h3>
                    <p className="text-aura-brown">
                      Cada detalle cuenta. Diseñamos ambientes que combinan estética, eficiencia y confort, priorizando
                      la calidad de vida y el ahorro energético.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-aura-tan rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-aura-brown mb-2">Viví la experiencia Aura</h3>
                    <p className="text-aura-brown">
                      No es solo domótica. Es vivir con más tranquilidad, más control y más tiempo para disfrutar. Aura
                      Hogar es calidad, confianza y futuro.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Image
                src="/images/why-choose-us-1.jpg"
                alt="Control inteligente del hogar"
                width={300}
                height={300}
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <Image
                src="/images/why-choose-us-2.jpg"
                alt="App móvil de control"
                width={300}
                height={300}
                className="rounded-xl shadow-lg w-full h-64 object-cover mt-8"
              />
              <Image
                src="/images/why-choose-us-3.jpg"
                alt="Iluminación inteligente"
                width={300}
                height={300}
                className="rounded-xl shadow-lg w-full h-64 object-cover -mt-8"
              />
              <Image
                src="/images/why-choose-us-4.jpg"
                alt="Equipo profesional"
                width={300}
                height={300}
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-aura-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-aura-brown mb-4">Nuestro Proceso</h2>
            <p className="text-xl text-aura-brown max-w-3xl mx-auto">
              Te acompañamos paso a paso para crear el hogar inteligente que siempre soñaste
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  icon: Ear,
                  title: "Escuchamos tu idea",
                  description:
                    "Nos reunimos con vos para entender qué estás buscando: tus necesidades, gustos, rutinas y el tipo de casa o proyecto que tenés.",
                },
                {
                  step: "2",
                  icon: Search,
                  title: "Evaluamos el espacio",
                  description:
                    "Analizamos planos, recorridos o directamente la obra en persona para conocer sus características y detectar oportunidades de mejora desde lo técnico y lo estético.",
                },
                {
                  step: "3",
                  icon: PenTool,
                  title: "Diseñamos una solución a medida",
                  description:
                    "Creamos una propuesta personalizada que integra domótica, iluminación, seguridad y redes, priorizando tu estilo de vida y tu presupuesto. Usamos tecnología flexible y escalable.",
                },
                {
                  step: "4",
                  icon: Presentation,
                  title: "Te presentamos la propuesta",
                  description:
                    "Te mostramos cómo va a funcionar todo: planos, escenas, control desde el celular, materiales y tiempos.",
                },
                {
                  step: "5",
                  icon: Handshake,
                  title: "Coordinamos con tu arquitecto o electricista",
                  description:
                    "Si ya estás trabajando con otros profesionales, nos integramos sin problemas. Nos encargamos de toda la parte técnica para que nada se escape.",
                },
                {
                  step: "6",
                  icon: Settings,
                  title: "Instalamos y configuramos",
                  description:
                    "Nuestro equipo se ocupa de la instalación, la conexión de cada dispositivo y la programación del sistema, dejando todo funcionando al 100%.",
                },
                {
                  step: "7",
                  icon: GraduationCap,
                  title: "Te guiamos y estamos con vos",
                  description:
                    "Te mostramos cómo usar tu casa inteligente de forma simple. Siempre podés contar con nuestro soporte y acompañamiento técnico.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-aura-tan rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:bg-aura-brown transition-colors">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center space-x-3 mb-3">
                      <item.icon className="w-6 h-6 text-aura-tan" />
                      <h3 className="text-xl font-semibold text-aura-brown">{item.title}</h3>
                    </div>
                    <p className="text-aura-brown leading-relaxed">{item.description}</p>
                  </div>
                  {index < 6 && (
                    <div className="flex-shrink-0 ml-8">
                      <ArrowRight className="w-5 h-5 text-aura-tan" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-aura-tan hover:bg-aura-brown text-white px-8"
              onClick={() =>
                window.open(
                  "https://wa.me/5493456022800?text=Hola%20Aura%20Hogar!%20Me%20gustaría%20comenzar%20mi%20proyecto%20de%20casa%20inteligente.%20¿Podrían%20agendar%20una%20consulta%20para%20evaluar%20mi%20hogar?",
                  "_blank",
                )
              }
            >
              Comenzar mi Proyecto
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="proyectos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-aura-brown mb-4">Nuestros Proyectos</h2>
            <p className="text-xl text-aura-brown max-w-3xl mx-auto">
              Conoce algunos de nuestros trabajos más destacados en Chajarí y la región
            </p>
          </div>

          {/* Proyectos Terminados */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-aura-brown mb-8 text-center">Proyectos Terminados</h3>
            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-green-400 bg-green-50">
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/projects/casa-fd-chajari.jpg"
                    alt="Casa Inteligente FD - Chajarí"
                    width={600}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-600 text-white">Terminado</Badge>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h4 className="text-2xl font-semibold text-aura-brown mb-3">Casa Inteligente FD – Chajarí</h4>
                  <p className="text-aura-brown mb-6 text-lg">
                    Vivienda 100% inteligente: control total de luces, cortinas, portones, cámaras, seguridad y
                    climatización.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Proyectos en Ejecución */}
          <div>
            <h3 className="text-2xl font-bold text-aura-brown mb-8 text-center">Proyectos en Ejecución</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-aura-tan bg-aura-cream hover:border-aura-brown">
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/projects/proyecto-ng.jpg"
                    alt="Proyecto NG - Chajarí"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-aura-tan text-white">En Ejecución</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-aura-brown mb-3">Proyecto NG – Chajarí</h4>
                  <p className="text-aura-brown mb-4">
                    Una de las casas más modernas de la zona: domótica para pileta, riego, redes, iluminación,
                    seguridad, audio, cortinas y más.
                  </p>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-aura-tan bg-aura-cream hover:border-aura-brown">
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/projects/oficinas-inteligentes.jpg"
                    alt="Oficinas Inteligentes - Chajarí"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-aura-tan text-white">En Ejecución</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-aura-brown mb-3">Oficinas Inteligentes – Chajarí</h4>
                  <p className="text-aura-brown mb-4">
                    Automatización integral de oficinas con control de iluminación, climatización, 7 portones,
                    seguridad, acceso digital, cámaras, audio y más.
                  </p>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-aura-tan bg-aura-cream hover:border-aura-brown">
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/projects/proyecto-js.jpg"
                    alt="Proyecto JS - Chajarí"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-aura-tan text-white">En Ejecución</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-aura-brown mb-3">Proyecto JS – Chajarí</h4>
                  <p className="text-aura-brown mb-4">
                    Automatización de pileta, iluminación, cámaras, seguridad, aires, cortinas y portones.
                  </p>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-aura-tan bg-aura-cream hover:border-aura-brown">
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/projects/proyecto-jl.jpg"
                    alt="Proyecto JL - Chajarí"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-aura-tan text-white">En Ejecución</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-aura-brown mb-3">Proyecto JL – Chajarí</h4>
                  <p className="text-aura-brown mb-4">
                    Control inteligente de iluminación, seguridad, cámaras, aires y cortinas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-20 bg-gradient-to-r from-aura-tan to-aura-brown">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">¿Listo para automatizar tu hogar?</h2>
            <p className="text-xl text-white/90 mb-8">
              Obtén una cotización personalizada sin compromiso. Nuestros expertos te asesorarán para encontrar la
              solución perfecta para tu hogar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-aura-brown hover:bg-aura-cream px-8 font-semibold"
                onClick={() =>
                  window.open(
                    "https://wa.me/5493456022800?text=Hola%20Aura%20Hogar!%20Me%20interesa%20obtener%20una%20cotización%20gratuita%20para%20automatizar%20mi%20hogar.%20¿Podrían%20brindarme%20más%20información%20sobre%20sus%20servicios?",
                    "_blank",
                  )
                }
              >
                Cotización Gratuita
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-aura-brown px-8 bg-transparent font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Llamar Ahora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
