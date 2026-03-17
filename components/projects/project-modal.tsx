"use client"

import Image from "next/image"
import { X, MapPin, CheckCircle, MessageCircle } from "lucide-react"
import type { Project } from "@/lib/projects"
import { useEffect } from "react"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

const STATUS_LABELS: Record<string, string> = {
  finalizado: "Finalizado",
  "en-ejecucion": "En Ejecución",
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [project])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [onClose])

  if (!project) return null

  const isFinished = project.status === "finalizado"

  const whatsappText = encodeURIComponent(
    `Hola Aura Hogar! Vi el proyecto "${project.name}" en su web y me interesa algo similar. ¿Podemos hablar?`
  )

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Detalles de ${project.name}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-aura-black/80 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal panel */}
      <div className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-aura-black/60 hover:bg-aura-black text-white transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-t-2xl">
          <Image
            src={project.mainImage}
            alt={project.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 900px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-aura-black/70 via-transparent to-transparent" />

          {/* Status */}
          <div className="absolute top-4 left-4">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border ${
                isFinished
                  ? "bg-emerald-500/90 text-white border-emerald-400/50"
                  : "bg-aura-tan/90 text-white border-aura-tan/50"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isFinished ? "bg-emerald-200" : "bg-amber-200"}`} />
              {STATUS_LABELS[project.status]}
            </span>
          </div>

          {/* Title over image */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="text-white font-bold text-2xl md:text-3xl leading-tight">{project.name}</h2>
            <div className="flex items-center gap-1.5 text-white/80 text-sm mt-1">
              <MapPin className="w-4 h-4" />
              {project.location}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Left: description + solutions */}
            <div className="md:col-span-3 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-aura-tan uppercase tracking-widest mb-2">
                  Descripción del proyecto
                </h3>
                <p className="text-aura-brown leading-relaxed">{project.fullDescription}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-aura-tan uppercase tracking-widest mb-3">
                  Soluciones implementadas
                </h3>
                <ul className="space-y-2.5">
                  {project.solutions.map((solution, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-aura-tan flex-shrink-0 mt-0.5" />
                      <span className="text-aura-brown text-sm leading-relaxed">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: tags + CTA */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-aura-tan uppercase tracking-widest mb-3">
                  Tecnologías aplicadas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-aura-cream text-aura-brown border border-aura-tan/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-aura-cream rounded-xl p-5 border border-aura-tan/20">
                <p className="text-aura-brown font-semibold mb-1 text-sm">¿Te interesa un proyecto similar?</p>
                <p className="text-aura-brown/70 text-xs mb-4">
                  Consultanos sin compromiso. Diseñamos una solución a medida para vos.
                </p>
                <a
                  href={`https://wa.me/5493456022800?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-full justify-center bg-aura-tan hover:bg-aura-brown text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
