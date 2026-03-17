"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { MapPin, ArrowRight } from "lucide-react"
import type { Project } from "@/lib/projects"

interface ProjectCardProps {
  project: Project
  onClick: (project: Project) => void
}

const TAG_COLORS: Record<string, string> = {
  Domótica: "bg-aura-tan/20 text-aura-brown border-aura-tan/30",
  Seguridad: "bg-aura-slate/20 text-aura-slate border-aura-slate/30",
  Iluminación: "bg-amber-100 text-amber-800 border-amber-200",
  Redes: "bg-blue-50 text-blue-700 border-blue-200",
  Climatización: "bg-teal-50 text-teal-700 border-teal-200",
  Audio: "bg-purple-50 text-purple-700 border-purple-200",
  "Acceso Digital": "bg-rose-50 text-rose-700 border-rose-200",
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const isFinished = project.status === "finalizado"

  return (
    <button
      onClick={() => onClick(project)}
      className="group relative w-full text-left rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aura-tan"
      aria-label={`Ver detalles de ${project.name}`}
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={project.mainImage}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Permanent dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-aura-black/80 via-aura-black/20 to-transparent" />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-aura-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Status badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border ${
              isFinished
                ? "bg-emerald-500/90 text-white border-emerald-400/50"
                : "bg-aura-tan/90 text-white border-aura-tan/50"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${isFinished ? "bg-emerald-200" : "bg-amber-200"} animate-pulse`}
            />
            {isFinished ? "Finalizado" : "En Ejecución"}
          </span>
        </div>

        {/* Bottom info (always visible) */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-white font-bold text-xl mb-1 leading-tight">{project.name}</h3>
          <div className="flex items-center gap-1.5 text-white/70 text-sm">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{project.location}</span>
          </div>
        </div>

        {/* Hover CTA */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <span className="inline-flex items-center gap-2 bg-white text-aura-brown font-semibold px-5 py-2.5 rounded-full text-sm shadow-lg">
            Ver proyecto <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      {/* Tags */}
      <div className="bg-white px-5 py-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full border ${TAG_COLORS[tag] ?? "bg-gray-100 text-gray-600 border-gray-200"}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </button>
  )
}
