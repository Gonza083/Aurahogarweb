import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Iluminación Inteligente en Chajarí | LED y Dimmer | Aura Hogar",
  description:
    "Diseñamos e instalamos iluminación inteligente en Chajarí y Entre Ríos: tiras LED, dimmers, escenas programables y control desde app con el sistema SOPHIA.",
  openGraph: {
    title: "Iluminación Inteligente en Chajarí | Aura Hogar",
    description:
      "Diseñamos e instalamos iluminación inteligente en Chajarí y Entre Ríos: tiras LED, dimmers, escenas programables y control desde app con el sistema SOPHIA.",
    url: "https://www.aurahogar.com/servicios/iluminacion-premium",
    siteName: "Aura Hogar",
    locale: "es_AR",
    type: "website",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
