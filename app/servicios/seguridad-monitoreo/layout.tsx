import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Seguridad y Monitoreo en Chajarí | Cámaras y Alarmas | Aura Hogar",
  description:
    "Instalamos sistemas de seguridad con cámaras Hikvision, alarmas y sensores en Chajarí y Entre Ríos. Monitoreo en tiempo real desde tu celular.",
  openGraph: {
    title: "Seguridad y Monitoreo en Chajarí | Aura Hogar",
    description:
      "Instalamos sistemas de seguridad con cámaras Hikvision, alarmas y sensores en Chajarí y Entre Ríos. Monitoreo en tiempo real desde tu celular.",
    url: "https://www.aurahogar.com/servicios/seguridad-monitoreo",
    siteName: "Aura Hogar",
    locale: "es_AR",
    type: "website",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
