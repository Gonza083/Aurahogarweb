import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Casa Inteligente en Chajarí | Domótica | Aura Hogar",
  description:
    "Automatizamos tu hogar en Chajarí y Entre Ríos: control de luces, cortinas, portones, climatización y seguridad desde tu celular con el sistema SOPHIA.",
  openGraph: {
    title: "Casa Inteligente en Chajarí | Aura Hogar",
    description:
      "Automatizamos tu hogar en Chajarí y Entre Ríos: control de luces, cortinas, portones, climatización y seguridad desde tu celular con el sistema SOPHIA.",
    url: "https://www.aurahogar.com/servicios/casa-inteligente",
    siteName: "Aura Hogar",
    locale: "es_AR",
    type: "website",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
