"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
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
import FadeIn from "@/components/fade-in"

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

      {/* Brands Section */}
      <section className="py-12 bg-aura-cream border-y border-aura-tan/20 overflow-hidden">
        <div className="container mx-auto px-4 mb-8 text-center">
          <p className="text-sm font-semibold text-aura-tan uppercase tracking-widest">
            Tecnología de primera línea
          </p>
        </div>
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-aura-cream to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-aura-cream to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee whitespace-nowrap">
            {[
              { src: "/marcas/client-1.png", alt: "Hikvision", imgClass: "h-10" },
              { src: "/marcas/client-2.png", alt: "World Leds Go", imgClass: "h-10" },
              { src: "/marcas/client-3.png", alt: "Sophia", imgClass: "h-10" },
              { src: "/marcas/client-4.png", alt: "Full Lock System", imgClass: "h-10" },
              { src: "/marcas/client-5.png", alt: "Soul Hogares Inteligentes", imgClass: "h-16" },
              { src: "/marcas/client-1.png", alt: "Hikvision", imgClass: "h-10" },
              { src: "/marcas/client-2.png", alt: "World Leds Go", imgClass: "h-10" },
              { src: "/marcas/client-3.png", alt: "Sophia", imgClass: "h-10" },
              { src: "/marcas/client-4.png", alt: "Full Lock System", imgClass: "h-10" },
              { src: "/marcas/client-5.png", alt: "Soul Hogares Inteligentes", imgClass: "h-16" },
            ].map((brand, i) => (
              <div
                key={i}
                className="inline-flex items-center justify-center mx-10 flex-shrink-0"
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={140}
                  height={56}
                  className={`${brand.imgClass} w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-aura-cream">
        <FadeIn>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-aura-brown mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-aura-brown max-w-3xl mx-auto">
              Soluciones integrales pensadas para transformar tu espacio
            </p>
          </div>

          {/* Asymmetric grid: 2/3 + 1/3 alternating */}
          <div className="grid md:grid-cols-3 gap-4">

            {/* Casa Inteligente — featured, 2/3 width */}
            <Link
              href="/servicios/casa-inteligente"
              className="md:col-span-2 group relative rounded-2xl overflow-hidden h-80 md:h-[420px] flex flex-col justify-end"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-aura-slate to-aura-black">
                {/* Replace src with real image when available */}
                <Image
                  src="/images/nuestros-servicios/casa-inteligente.jpg"
                  alt="Casa Inteligente"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-aura-black/90 via-aura-black/20 to-transparent" />
              <div className="relative p-7 md:p-8">
                <span className="inline-block text-xs font-semibold text-aura-tan uppercase tracking-widest mb-3">
                  Servicio principal
                </span>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-aura-tan/20 border border-aura-tan/40 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Home className="w-5 h-5 text-aura-tan" />
                  </div>
                  <h3 className="text-white text-2xl md:text-3xl font-bold">Casa Inteligente</h3>
                </div>
                <p className="text-white/70 text-sm md:text-base mb-4 max-w-md leading-relaxed">
                  Controlá más de 50 dispositivos desde tu celular: luces, cortinas, clima, portones, pileta y más, integrados en un solo sistema.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {["Sophia", "Soul Hogares"].map((b) => (
                    <span key={b} className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/10 text-white/80 border border-white/20 backdrop-blur-sm">
                      {b}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-aura-tan font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                  Conocer más <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Seguridad — 1/3 width */}
            <Link
              href="/servicios/seguridad-monitoreo"
              className="group relative rounded-2xl overflow-hidden h-80 md:h-[420px] flex flex-col justify-end"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-950">
                {/* Replace src with real image when available */}
                <Image
                  src="/images/nuestros-servicios/Seguridad.jpg"
                  alt="Seguridad y Monitoreo"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-aura-black/90 via-aura-black/20 to-transparent" />
              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-white text-xl font-bold">Seguridad y Monitoreo</h3>
                </div>
                <p className="text-white/65 text-sm mb-4 leading-relaxed">
                  Monitoreo 24/7 con cámaras HD, sensores y cerraduras digitales.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Hikvision", "Full Lock"].map((b) => (
                    <span key={b} className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/10 text-white/80 border border-white/20">
                      {b}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-aura-tan font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                  Conocer más <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Iluminación — 1/3 width */}
            <Link
              href="/servicios/iluminacion-premium"
              className="group relative rounded-2xl overflow-hidden h-80 md:h-[420px] flex flex-col justify-end"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900 to-aura-black">
                {/* Replace src with real image when available */}
                <Image
                  src="/images/nuestros-servicios/Iluminacion.png"
                  alt="Iluminación Premium"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-aura-black/90 via-aura-black/20 to-transparent" />
              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-white text-xl font-bold">Iluminación Premium</h3>
                </div>
                <p className="text-white/65 text-sm mb-4 leading-relaxed">
                  Diseño de luz que transforma ambientes con eficiencia y estilo.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["World Leds Go"].map((b) => (
                    <span key={b} className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/10 text-white/80 border border-white/20">
                      {b}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-aura-tan font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                  Conocer más <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Redes — 2/3 width */}
            <Link
              href="/servicios/redes-conectividad"
              className="md:col-span-2 group relative rounded-2xl overflow-hidden h-80 md:h-[420px] flex flex-col justify-end"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-950 to-aura-black">
                {/* Replace src with real image when available */}
                <Image
                  src="/images/nuestros-servicios/hero-wifi-mesh.jpg"
                  alt="Redes y Conectividad"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-aura-black/90 via-aura-black/20 to-transparent" />
              <div className="relative p-7 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Wifi className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white text-2xl md:text-3xl font-bold">Redes y Conectividad</h3>
                </div>
                <p className="text-white/70 text-sm md:text-base mb-4 max-w-md leading-relaxed">
                  WiFi potente y estable en cada rincón de tu hogar o empresa con tecnología mesh de última generación.
                </p>
                <span className="inline-flex items-center gap-2 text-aura-tan font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                  Conocer más <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

          </div>
        </div>
        </FadeIn>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <FadeIn>
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
        </FadeIn>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-aura-cream">
        <FadeIn>
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
        </FadeIn>
      </section>

      {/* Projects Preview */}
      <section id="proyectos" className="py-20 bg-white">
        <FadeIn>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-aura-brown mb-3">Nuestros Proyectos</h2>
              <p className="text-xl text-aura-brown max-w-2xl">
                Trabajos reales, soluciones a medida. Conocé lo que hacemos en Chajarí y la región.
              </p>
            </div>
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 text-aura-tan hover:text-aura-brown font-semibold transition-colors whitespace-nowrap group"
            >
              Ver todos los proyectos
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                src: "/images/projects/casa-fd-chajari.jpg",
                alt: "Casa Inteligente FD – Chajarí",
                name: "Casa Inteligente FD",
                status: "Finalizado",
                statusColor: "bg-emerald-500/90 border-emerald-400/50",
                tags: ["Domótica", "Seguridad", "Iluminación"],
              },
              {
                src: "/images/projects/proyecto-ng.jpg",
                alt: "Proyecto NG – Chajarí",
                name: "Proyecto NG",
                status: "En Ejecución",
                statusColor: "bg-aura-tan/90 border-aura-tan/50",
                tags: ["Domótica", "Redes", "Audio"],
              },
              {
                src: "/images/projects/oficinas-inteligentes.jpg",
                alt: "Oficinas Inteligentes – Chajarí",
                name: "Oficinas Inteligentes",
                status: "En Ejecución",
                statusColor: "bg-aura-tan/90 border-aura-tan/50",
                tags: ["Domótica", "Seguridad", "Acceso Digital"],
              },
            ].map((item) => (
              <Link key={item.name} href="/proyectos" className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-aura-black/75 via-aura-black/10 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border text-white ${item.statusColor}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                      {item.status}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-bold text-lg">{item.name}</p>
                  </div>
                </div>
                <div className="bg-white px-4 py-3 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-aura-cream text-aura-brown border border-aura-tan/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 bg-aura-tan hover:bg-aura-brown text-white font-semibold px-8 py-3 rounded-xl transition-colors shadow-md hover:shadow-lg"
            >
              Ver todos los proyectos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        </FadeIn>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-20 bg-gradient-to-r from-aura-tan to-aura-brown">
        <FadeIn>
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
        </FadeIn>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
