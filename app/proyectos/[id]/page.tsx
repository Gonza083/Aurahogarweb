import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { MapPin, CheckCircle, ArrowLeft, MessageCircle } from "lucide-react"
import { projects } from "@/lib/projects"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const project = projects.find((p) => p.id === id)
  if (!project) return {}

  return {
    title: `${project.name} | Proyectos Aura Hogar`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.name} | Aura Hogar`,
      description: project.shortDescription,
      images: [{ url: project.mainImage, width: 1200, height: 630, alt: project.name }],
    },
  }
}

const STATUS_LABELS: Record<string, string> = {
  finalizado: "Finalizado",
  "en-ejecucion": "En Ejecución",
}

const TAG_COLORS: Record<string, string> = {
  "Domótica": "bg-aura-tan/20 text-aura-brown border-aura-tan/30",
  "Seguridad": "bg-aura-slate/20 text-aura-slate border-aura-slate/30",
  "Iluminación": "bg-amber-100 text-amber-800 border-amber-200",
  "Redes": "bg-blue-50 text-blue-700 border-blue-200",
  "Climatización": "bg-teal-50 text-teal-700 border-teal-200",
  "Audio": "bg-purple-50 text-purple-700 border-purple-200",
  "Acceso Digital": "bg-rose-50 text-rose-700 border-rose-200",
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)
  if (!project) notFound()

  const isFinished = project.status === "finalizado"
  const whatsappText = encodeURIComponent(
    `Hola Aura Hogar! Vi el proyecto "${project.name}" en su web y me interesa algo similar. ¿Podemos hablar?`
  )

  return (
    <>
      <Header />

      <main className="min-h-screen bg-aura-cream">
        {/* Hero image */}
        <div className="relative h-[55vh] min-h-[380px] w-full">
          <Image
            src={project.mainImage}
            alt={project.name}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-aura-black/80 via-aura-black/30 to-aura-black/20" />

          {/* Back button */}
          <div className="absolute top-6 left-0 right-0 container mx-auto px-4">
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Todos los proyectos
            </Link>
          </div>

          {/* Status */}
          <div className="absolute top-6 right-4 md:right-8">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm border ${
                isFinished
                  ? "bg-emerald-500/90 text-white border-emerald-400/50"
                  : "bg-aura-tan/90 text-white border-aura-tan/50"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isFinished ? "bg-emerald-200" : "bg-amber-200"} animate-pulse`} />
              {STATUS_LABELS[project.status]}
            </span>
          </div>

          {/* Title */}
          <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-2">
              {project.name}
            </h1>
            <div className="flex items-center gap-1.5 text-white/70 text-sm">
              <MapPin className="w-4 h-4" />
              {project.location}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-14 md:py-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-10 md:gap-16">

            {/* Left: description + solutions */}
            <div className="md:col-span-3 space-y-10">
              <div>
                <h2 className="text-xs font-semibold text-aura-tan uppercase tracking-widest mb-3">
                  Descripción del proyecto
                </h2>
                <p className="text-aura-brown text-lg leading-relaxed">{project.fullDescription}</p>
              </div>

              <div>
                <h2 className="text-xs font-semibold text-aura-tan uppercase tracking-widest mb-4">
                  Soluciones implementadas
                </h2>
                <ul className="space-y-3">
                  {project.solutions.map((solution, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-aura-tan flex-shrink-0 mt-0.5" />
                      <span className="text-aura-brown leading-relaxed">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: tags + CTA */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-xs font-semibold text-aura-tan uppercase tracking-widest mb-4">
                  Tecnologías aplicadas
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`inline-block text-sm font-medium px-3 py-1.5 rounded-full border ${TAG_COLORS[tag] ?? "bg-gray-100 text-gray-600 border-gray-200"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-aura-tan/20 shadow-sm">
                <p className="text-aura-brown font-semibold mb-1">¿Te interesa un proyecto similar?</p>
                <p className="text-aura-brown/60 text-sm mb-5">
                  Consultanos sin compromiso. Diseñamos una solución a medida para vos.
                </p>
                <a
                  href={`https://wa.me/5493456022800?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-full justify-center bg-aura-tan hover:bg-aura-brown text-white font-semibold px-5 py-3 rounded-xl transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Consultar por WhatsApp
                </a>
              </div>

              <Link
                href="/proyectos"
                className="inline-flex items-center gap-2 text-aura-tan hover:text-aura-brown text-sm font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Ver todos los proyectos
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
