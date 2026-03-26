import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FadeIn from "@/components/fade-in"
import { Users, Wrench, GraduationCap, Briefcase, HeartHandshake, MapPin, Calendar, FolderOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "Sobre Nosotros | Aura Hogar",
  description:
    "Somos un equipo técnico especializado en domótica, seguridad, redes e iluminación con más de 2 años de trayectoria en Chajarí y la región.",
}

const metrics = [
  {
    value: "+2",
    label: "Años de trayectoria",
    sublabel: "en el mercado",
    icon: Calendar,
  },
  {
    value: "10+",
    label: "Proyectos realizados",
    sublabel: "y en curso",
    icon: FolderOpen,
  },
  {
    value: "7",
    label: "Profesionales",
    sublabel: "en el equipo",
    icon: Users,
  },
  {
    value: "ERíos",
    label: "Entre Ríos",
    sublabel: "zona de operación",
    icon: MapPin,
  },
]

const teamRoles = [
  {
    icon: GraduationCap,
    count: "2",
    role: "Ingenieros",
    description: "Planificación, diseño y programación de sistemas. Son el núcleo técnico de cada proyecto.",
  },
  {
    icon: Wrench,
    count: "2",
    role: "Técnicos Electromecánicos",
    description: "Ejecución e instalación en obra. Garantizan que cada sistema quede funcionando con precisión.",
  },
  {
    icon: GraduationCap,
    count: "1",
    role: "Ingeniero en Formación",
    description: "Soporte técnico activo. Acompaña el desarrollo de proyectos con criterio y compromiso.",
  },
  {
    icon: HeartHandshake,
    count: "1",
    role: "Lic. en Recursos Humanos",
    description: "Organización interna y desarrollo del equipo. Asegura que trabajemos de forma coordinada y eficiente.",
  },
  {
    icon: Briefcase,
    count: "1",
    role: "Área Comercial",
    description: "Atención personalizada a cada cliente. El primer contacto y el hilo conductor de cada propuesta.",
  },
]

export default function NosotrosPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-aura-cream">

        {/* Hero */}
        <section className="bg-aura-brown py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_20%_50%,#C6AC8F_0%,transparent_60%),radial-gradient(circle_at_80%_20%,#EAE0D5_0%,transparent_50%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <span className="inline-block text-aura-tan text-sm font-semibold uppercase tracking-widest mb-4">
                La empresa
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Sobre Nosotros
              </h1>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed">
                Un equipo técnico especializado que acompaña cada proyecto desde la primera idea hasta la puesta en marcha final.
              </p>
            </div>
          </div>
        </section>

        {/* Quiénes somos */}
        <section className="py-20 bg-white">
          <FadeIn>
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
                <div>
                  <span className="inline-block text-aura-tan text-sm font-semibold uppercase tracking-widest mb-4">
                    Quiénes somos
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-aura-brown leading-tight mb-6">
                    Tecnología pensada para mejorar la vida cotidiana
                  </h2>
                  <div className="space-y-4 text-aura-brown/80 leading-relaxed">
                    <p>
                      En Aura Hogar diseñamos y ejecutamos soluciones inteligentes para viviendas y proyectos de alta calidad. Nos especializamos en domótica, seguridad, redes e iluminación, integrando cada sistema con precisión técnica y criterio estético.
                    </p>
                    <p>
                      Nuestro enfoque no es instalar dispositivos: es crear experiencias. Espacios que funcionan solos, que se adaptan a sus habitantes y que hacen la vida más cómoda, segura y eficiente desde el primer día.
                    </p>
                    <p>
                      Creemos en la tecnología como una herramienta para simplificar, no para complicar. Por eso cada solución que proponemos está pensada para ser clara, confiable y duradera.
                    </p>
                  </div>
                </div>

                {/* Placeholder imagen */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-aura-slate to-aura-black overflow-hidden shadow-2xl">
                    {/* Reemplazar con imagen real del equipo o una obra */}
                    <div className="absolute inset-0 flex items-end p-6">
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3">
                        <p className="text-white text-sm font-semibold">Aura Hogar · Chajarí, Entre Ríos</p>
                        <p className="text-white/60 text-xs mt-0.5">Equipo técnico especializado</p>
                      </div>
                    </div>
                  </div>
                  {/* Decorative card */}
                  <div className="absolute -bottom-5 -left-5 bg-aura-tan rounded-xl px-5 py-4 shadow-lg">
                    <p className="text-white font-bold text-2xl">+2 años</p>
                    <p className="text-white/80 text-xs mt-0.5">de trayectoria</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Métricas */}
        <section className="py-16 bg-aura-cream">
          <FadeIn>
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-sm border border-aura-tan/10 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-aura-tan/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <metric.icon className="w-5 h-5 text-aura-tan" />
                    </div>
                    <p className="text-3xl md:text-4xl font-bold text-aura-brown mb-1">{metric.value}</p>
                    <p className="text-aura-brown font-semibold text-sm">{metric.label}</p>
                    <p className="text-aura-brown/50 text-xs mt-0.5">{metric.sublabel}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Equipo */}
        <section className="py-20 bg-white">
          <FadeIn>
            <div className="container mx-auto px-4">
              <div className="text-center mb-12 max-w-2xl mx-auto">
                <span className="inline-block text-aura-tan text-sm font-semibold uppercase tracking-widest mb-4">
                  El equipo
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-aura-brown mb-4">
                  Un equipo multidisciplinario con un objetivo común
                </h2>
                <p className="text-aura-brown/70 leading-relaxed">
                  Cada rol tiene un propósito claro. Trabajamos de forma coordinada para que cada etapa del proyecto se realice con precisión, sin improvisación.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                {teamRoles.map((member) => (
                  <div
                    key={member.role}
                    className="group bg-aura-cream hover:bg-white border border-aura-tan/20 hover:border-aura-tan/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-aura-tan/15 group-hover:bg-aura-tan/25 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                        <member.icon className="w-5 h-5 text-aura-tan" />
                      </div>
                      <div>
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-2xl font-bold text-aura-brown">{member.count}</span>
                          <span className="text-sm font-semibold text-aura-brown">{member.role}</span>
                        </div>
                        <p className="text-aura-brown/65 text-sm leading-relaxed">{member.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Cómo trabajamos */}
        <section className="py-20 bg-aura-cream">
          <FadeIn>
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <span className="inline-block text-aura-tan text-sm font-semibold uppercase tracking-widest mb-4">
                      Nuestra forma de trabajar
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-aura-brown leading-tight mb-6">
                      Parte del equipo desde el día uno
                    </h2>
                    <div className="space-y-5 text-aura-brown/80 leading-relaxed">
                      <p>
                        Nos involucramos desde las primeras etapas de cada proyecto. No llegamos al final a instalar: acompañamos la obra, colaboramos con el arquitecto, el electricista y todos los profesionales involucrados, y nos aseguramos de que cada sistema quede correctamente integrado desde el inicio.
                      </p>
                      <p>
                        Esa coordinación temprana es lo que nos permite trabajar con prolijidad. Evita contratiempos, reduce errores y garantiza que el resultado final sea exactamente lo que fue diseñado.
                      </p>
                      <p>
                        El acompañamiento no termina con la instalación. Seguimos disponibles para el cliente hasta que todo funcione exactamente como se esperaba, y más allá.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { step: "01", title: "Nos integramos al equipo de obra", text: "Trabajamos junto a arquitectos, electricistas y desarrolladores desde las primeras etapas." },
                      { step: "02", title: "Coordinamos cada sistema", text: "Planificamos la integración técnica para que nada quede librado al azar ni se resuelva sobre la marcha." },
                      { step: "03", title: "Ejecutamos con precisión", text: "Instalación y configuración a cargo de nuestro equipo técnico, con control en cada etapa." },
                      { step: "04", title: "Acompañamos hasta el final", text: "El seguimiento no termina al entregar. Estamos disponibles para soporte y ajustes cuando el cliente los necesite." },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-5 p-5 bg-white rounded-xl border border-aura-tan/15 hover:border-aura-tan/40 hover:shadow-sm transition-all duration-300">
                        <span className="text-aura-tan/40 font-bold text-xl flex-shrink-0 w-8">{item.step}</span>
                        <div>
                          <p className="font-semibold text-aura-brown mb-1">{item.title}</p>
                          <p className="text-aura-brown/60 text-sm leading-relaxed">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-aura-tan to-aura-brown">
          <FadeIn>
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  ¿Hablamos de tu proyecto?
                </h2>
                <p className="text-white/80 text-lg mb-8">
                  Contanos en qué etapa estás y te decimos cómo podemos integrarnos.
                </p>
                <a
                  href="https://wa.me/5493456022800?text=Hola%20Aura%20Hogar!%20Vi%20su%20p%C3%A1gina%20y%20me%20gustar%C3%ADa%20hablar%20sobre%20mi%20proyecto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-aura-brown hover:bg-aura-cream font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all text-base"
                >
                  Escribinos por WhatsApp
                </a>
              </div>
            </div>
          </FadeIn>
        </section>

      </main>

      <Footer />
    </>
  )
}
