"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft, Phone, Star, Instagram, ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function IluminacionPremiumPage() {
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
            <span className="font-semibold">Iluminación Premium</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">💡 Iluminación Premium</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-aura-brown leading-tight">
                  Iluminación <span className="text-aura-tan">{"LED"}</span> Profesional
                </h1>
                <p className="text-xl text-aura-brown/80 leading-relaxed">
                  {
                    "Iluminá tus espacios con artefactos LED de alta calidad World Leds Go, pensados para proyectos residenciales y comerciales que buscan eficiencia, estética y confiabilidad.\n"
                  }
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-aura-tan hover:bg-aura-brown text-white px-8"
                  onClick={() =>
                    window.open(
                      "https://wa.me/5493456022800?text=Hola%20Aura%20Hogar!%20Me%20interesa%20el%20servicio%20de%20Iluminación%20Premium.%20¿Podrían%20brindarme%20una%20cotización%20personalizada?",
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
                      "https://wa.me/5493456022800?text=Hola%20Aura%20Hogar!%20Me%20gustaría%20ver%20el%20catálogo%20de%20productos%20de%20iluminación%20premium%20y%20obtener%20asesoramiento%20para%20mi%20proyecto.",
                      "_blank",
                    )
                  }
                >
                  Ver Catálogo
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/lighting/hero-iluminacion-led.jpg"
                alt="Iluminación Premium LED"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-aura-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-aura-brown mb-4">Nuestros Productos</h2>
            <p className="text-xl text-aura-brown/80 max-w-3xl mx-auto">
              Amplio catálogo de luminarias premium para cada espacio de tu hogar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/lighting/spots-embutidos.jpg"
                  alt="Spots Embutidos"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-aura-brown mb-2">Spots Embutidos</h3>
                <p className="text-aura-brown/80 text-sm">
                  Iluminación direccional perfecta para destacar elementos arquitectónicos y crear ambientes únicos.
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/lighting/tiras-led.jpg"
                  alt="Tiras LED"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-aura-brown mb-2">Tiras LED</h3>
                <p className="text-aura-brown/80 text-sm">
                  Iluminación led sin puntos visibles y decorativa para crear efectos visuales impactantes en cualquier superficie.
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/lighting/paneles-led.jpg"
                  alt="Paneles LED"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-aura-brown mb-2">Linea Runners</h3>
                <p className="text-aura-brown/80 text-sm">
                  {"Artefactos de iluminación para aplicar o embutir. Driver dimerizable incluido.\nCuerpo de aluminio y reflector de policarbonato."}
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/lighting/lamparas-decorativas.jpg"
                  alt="Lámparas Decorativas"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-aura-brown mb-2">Linea Wally </h3>
                <p className="text-aura-brown/80 text-sm">
                  {"Artefactos de iluminación para suspender o aplicar. Driver dimerizable TRIAC incluido.\nCuerpo de aluminio y reflector de policarbonato."}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-2 border-aura-tan hover:border-aura-brown transition-all duration-300 hover:shadow-xl">
              <div className="bg-gradient-to-r from-aura-tan to-aura-brown p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
                  <ShoppingBag className="w-8 h-8 text-aura-tan" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">Visita nuestra tienda online</h2>
                <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                  Descubrí todos nuestros productos de iluminación premium y seguí nuestras últimas novedades en
                  Instagram
                </p>
                <Button
                  size="lg"
                  className="bg-white text-aura-brown hover:bg-aura-cream px-8 font-semibold text-lg"
                  onClick={() => window.open("https://www.instagram.com/aurahogaroficial", "_blank")}
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Ver en Instagram
                </Button>
              </div>
              <CardContent className="p-6 bg-aura-cream">
                <div className="flex items-center justify-center gap-2 text-aura-brown">
                  <Star className="w-5 h-5 fill-aura-tan text-aura-tan" />
                  <p className="text-sm font-medium">Próximamente: tienda online con todos nuestros productos</p>
                  <Star className="w-5 h-5 fill-aura-tan text-aura-tan" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-aura-tan to-aura-brown">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Iluminá tu hogar con estilo</h2>
            <p className="text-xl text-white/90 mb-8">
              Obtené un diseño personalizado gratuito y descubrí cómo la iluminación inteligente puede transformar tus
              espacios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-aura-brown hover:bg-aura-cream px-8"
                onClick={() =>
                  window.open(
                    "https://wa.me/5493456022800?text=Hola%20Aura%20Hogar!%20Me%20interesa%20el%20servicio%20de%20Iluminación%20Premium.%20¿Podrían%20brindarme%20un%20diseño%20personalizado%20gratuito?",
                    "_blank",
                  )
                }
              >
                Diseño Gratuito
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 bg-transparent"
                onClick={() =>
                  window.open(
                    "https://wa.me/5493456022800?text=Hola%20Aura%20Hogar!%20Me%20gustaría%20obtener%20asesoramiento%20profesional%20sobre%20iluminación%20premium%20para%20mi%20hogar.",
                    "_blank",
                  )
                }
              >
                <Phone className="w-5 h-5 mr-2" />
                Asesoramiento
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
