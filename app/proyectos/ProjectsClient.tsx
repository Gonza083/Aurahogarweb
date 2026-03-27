"use client"

import { useState, useMemo } from "react"
import { projects, ALL_TAGS, type ProjectTag, type ProjectStatus } from "@/lib/projects"
import ProjectCard from "@/components/projects/project-card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { MessageCircle } from "lucide-react"

const STATUS_FILTERS: { value: ProjectStatus | "todos"; label: string }[] = [
  { value: "todos", label: "Todos los estados" },
  { value: "finalizado", label: "Finalizados" },
  { value: "en-ejecucion", label: "En Ejecución" },
]

export default function ProjectsClient() {
  const [activeTag, setActiveTag] = useState<ProjectTag | "Todos">("Todos")
  const [activeStatus, setActiveStatus] = useState<ProjectStatus | "todos">("todos")

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const tagMatch = activeTag === "Todos" || p.tags.includes(activeTag as ProjectTag)
      const statusMatch = activeStatus === "todos" || p.status === activeStatus
      return tagMatch && statusMatch
    })
  }, [activeTag, activeStatus])

  return (
    <>
      <Header />

      <main className="min-h-screen bg-aura-cream">
        {/* Page hero */}
        <section className="bg-aura-brown py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_20%_50%,#C6AC8F_0%,transparent_60%),radial-gradient(circle_at_80%_20%,#EAE0D5_0%,transparent_50%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <span className="inline-block text-aura-tan text-sm font-semibold uppercase tracking-widest mb-4">
                Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Nuestros Proyectos
              </h1>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed">
                Cada proyecto es único. Conocé las soluciones que diseñamos e instalamos en hogares y empresas de Chajarí
                y la región.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="bg-white border-b border-aura-tan/20 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              {/* Tag filters */}
              <div className="flex flex-wrap gap-2 flex-1">
                <button
                  onClick={() => setActiveTag("Todos")}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                    activeTag === "Todos"
                      ? "bg-aura-tan text-white border-aura-tan shadow-sm"
                      : "bg-transparent text-aura-brown border-aura-tan/40 hover:border-aura-tan hover:bg-aura-cream"
                  }`}
                >
                  Todos
                </button>
                {ALL_TAGS.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(tag)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                      activeTag === tag
                        ? "bg-aura-tan text-white border-aura-tan shadow-sm"
                        : "bg-transparent text-aura-brown border-aura-tan/40 hover:border-aura-tan hover:bg-aura-cream"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Status filter */}
              <div className="flex-shrink-0">
                <select
                  value={activeStatus}
                  onChange={(e) => setActiveStatus(e.target.value as ProjectStatus | "todos")}
                  className="text-sm text-aura-brown bg-white border border-aura-tan/40 rounded-full px-4 py-1.5 pr-8 focus:outline-none focus:border-aura-tan appearance-none cursor-pointer"
                  style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%235E503F' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center" }}
                >
                  {STATUS_FILTERS.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <p className="text-aura-brown/50 text-lg">No hay proyectos con esos filtros.</p>
                <button
                  onClick={() => { setActiveTag("Todos"); setActiveStatus("todos") }}
                  className="mt-4 text-aura-tan hover:text-aura-brown text-sm font-medium underline underline-offset-4 transition-colors"
                >
                  Limpiar filtros
                </button>
              </div>
            ) : (
              <>
                <p className="text-aura-brown/50 text-sm mb-8">
                  {filtered.length} {filtered.length === 1 ? "proyecto" : "proyectos"}
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {filtered.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-aura-tan to-aura-brown">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Querés un proyecto como estos?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Contanos tu idea y diseñamos una solución a medida para tu hogar o empresa.
              </p>
              <a
                href="https://wa.me/5493456022800?text=Hola%20Aura%20Hogar!%20Vi%20sus%20proyectos%20y%20me%20gustar%C3%ADa%20consultar%20sobre%20una%20instalaci%C3%B3n.%20%C2%BFPodemos%20hablar%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-aura-brown hover:bg-aura-cream font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all text-base"
              >
                <MessageCircle className="w-5 h-5" />
                Consultá por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
