import type { Metadata } from "next"
import ProjectsClient from "./ProjectsClient"

export const metadata: Metadata = {
  title: "Proyectos de domótica y seguridad | Aura Hogar",
  description:
    "Conocé los proyectos de automatización, seguridad e iluminación que realizamos en Chajarí y la región. Casas inteligentes, oficinas automatizadas y más.",
}

export default function ProyectosPage() {
  return <ProjectsClient />
}
