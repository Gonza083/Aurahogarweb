import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Redes y Conectividad en Chajarí | WiFi Mesh | Aura Hogar",
  description:
    "Instalamos redes WiFi mesh de alta cobertura, cableado estructurado y conectividad total en hogares y empresas de Chajarí y Entre Ríos.",
  openGraph: {
    title: "Redes y Conectividad en Chajarí | Aura Hogar",
    description:
      "Instalamos redes WiFi mesh de alta cobertura, cableado estructurado y conectividad total en hogares y empresas de Chajarí y Entre Ríos.",
    url: "https://www.aurahogar.com/servicios/redes-conectividad",
    siteName: "Aura Hogar",
    locale: "es_AR",
    type: "website",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
