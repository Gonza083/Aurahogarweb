import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import WhatsAppButton from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aura Hogar - Soluciones Inteligentes para tu Hogar",
  description:
    "Transformamos tu hogar con tecnología inteligente, seguridad avanzada y automatización de última generación. Domótica, seguridad e iluminación en Chajarí, Entre Ríos.",
  openGraph: {
    title: "Aura Hogar - Soluciones Inteligentes para tu Hogar",
    description:
      "Domótica, seguridad, iluminación inteligente y redes en Chajarí, Entre Ríos. Automatizamos tu hogar con el sistema SOPHIA.",
    url: "https://www.aurahogar.com",
    siteName: "Aura Hogar",
    locale: "es_AR",
    type: "website",
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Aura Hogar",
  description:
    "Empresa especializada en domótica, automatización del hogar, seguridad, iluminación inteligente y redes en Chajarí, Entre Ríos.",
  url: "https://www.aurahogar.com",
  telephone: "+5493456022800",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chajarí",
    addressRegion: "Entre Ríos",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -30.7547,
    longitude: -57.9775,
  },
  areaServed: [
    { "@type": "City", name: "Chajarí" },
    { "@type": "State", name: "Entre Ríos" },
  ],
  serviceType: [
    "Domótica",
    "Automatización del hogar",
    "Seguridad y monitoreo",
    "Iluminación inteligente",
    "Redes y conectividad",
  ],
  sameAs: [
    "https://www.instagram.com/aurahogaroficial/",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.className}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
