export type ProjectStatus = "finalizado" | "en-ejecucion"

export type ProjectTag =
  | "Domótica"
  | "Seguridad"
  | "Iluminación"
  | "Redes"
  | "Climatización"
  | "Audio"
  | "Acceso Digital"

export interface Project {
  id: string
  name: string
  location: string
  status: ProjectStatus
  shortDescription: string
  fullDescription: string
  tags: ProjectTag[]
  mainImage: string
  gallery: string[]
  solutions: string[]
}

export const projects: Project[] = [
  {
    id: "casa-fd",
    name: "Casa Inteligente FD",
    location: "Chajarí, Entre Ríos",
    status: "finalizado",
    shortDescription:
      "Vivienda 100% inteligente con control total de luces, cortinas, portones, cámaras, seguridad y climatización.",
    fullDescription:
      "Proyecto integral de domótica en vivienda residencial. Se implementó un sistema completo de automatización que integra control de iluminación por zonas, cortinas motorizadas, gestión de portones, sistema de seguridad con cámaras HD y sensores, y control de climatización. Todo centralizado y controlable desde el celular mediante la plataforma Sophia Intelligence.",
    tags: ["Domótica", "Seguridad", "Iluminación", "Climatización"],
    mainImage: "/images/projects/casa-fd-chajari.jpg",
    gallery: ["/images/projects/casa-fd-chajari.jpg"],
    solutions: [
      "Control de iluminación por zonas desde app móvil",
      "Cortinas y persianas motorizadas con automatización por horario",
      "Sistema de seguridad con cámaras HD y sensores de movimiento",
      "Control de climatización inteligente por ambiente",
      "Automatización de portones con acceso remoto",
      "Integración completa en plataforma Sophia Intelligence",
    ],
  },
  {
    id: "proyecto-ng",
    name: "Proyecto NG",
    location: "Chajarí, Entre Ríos",
    status: "en-ejecucion",
    shortDescription:
      "Una de las casas más modernas de la zona: domótica para pileta, riego, redes, iluminación, seguridad, audio, cortinas y más.",
    fullDescription:
      "Proyecto de alta complejidad en residencia de gran envergadura. Incluye gestión inteligente de pileta y riego automatizado, red WiFi mesh de cobertura total, sistema de audio multiambiente, iluminación premium por escenas, seguridad perimetral con cámaras y cortinas motorizadas en todos los ambientes. Actualmente en etapa de instalación avanzada.",
    tags: ["Domótica", "Redes", "Iluminación", "Seguridad", "Audio"],
    mainImage: "/images/projects/proyecto-ng.jpg",
    gallery: ["/images/projects/proyecto-ng.jpg"],
    solutions: [
      "Automatización de pileta con control de bombas y temperatura",
      "Sistema de riego inteligente por zonas",
      "Red WiFi mesh de alta cobertura en toda la propiedad",
      "Sistema de audio multiambiente",
      "Iluminación premium con control por escenas",
      "Seguridad perimetral con cámaras y sensores",
      "Cortinas motorizadas en todos los ambientes",
    ],
  },
  {
    id: "oficinas-inteligentes",
    name: "Oficinas Inteligentes",
    location: "Chajarí, Entre Ríos",
    status: "en-ejecucion",
    shortDescription:
      "Automatización corporativa: iluminación, climatización, 7 portones, seguridad, audio y acceso digital.",
    fullDescription:
      "Proyecto de domótica corporativa para edificio de oficinas. Se automatizan todos los sistemas del inmueble: iluminación inteligente con sensores de presencia, climatización centralizada, 7 portones con acceso digital y control remoto, sistema de seguridad con cámaras y control de acceso, audio ambiente en zonas comunes y gestión energética inteligente.",
    tags: ["Domótica", "Seguridad", "Iluminación", "Climatización", "Acceso Digital"],
    mainImage: "/images/projects/oficinas-inteligentes.jpg",
    gallery: ["/images/projects/oficinas-inteligentes.jpg"],
    solutions: [
      "Iluminación inteligente con sensores de presencia",
      "Climatización centralizada y automatizada",
      "7 portones con acceso digital y control remoto",
      "Sistema de seguridad y control de acceso",
      "Audio ambiente en zonas comunes",
      "Gestión energética inteligente",
    ],
  },
  {
    id: "proyecto-js",
    name: "Proyecto JS",
    location: "Chajarí, Entre Ríos",
    status: "en-ejecucion",
    shortDescription:
      "Automatización de pileta, iluminación, cámaras, seguridad, aires acondicionados, cortinas y portones.",
    fullDescription:
      "Proyecto residencial con foco en confort y seguridad. Incluye automatización de pileta con control de bombas, iluminación exterior e interior por zonas, sistema de cámaras de alta resolución, control de aires acondicionados, cortinas motorizadas y automatización de portones. Actualmente en fase de instalación.",
    tags: ["Domótica", "Seguridad", "Iluminación", "Climatización"],
    mainImage: "/images/projects/proyecto-js.jpg",
    gallery: ["/images/projects/proyecto-js.jpg"],
    solutions: [
      "Automatización de pileta con control de bombas",
      "Iluminación interior y exterior por zonas",
      "Sistema de cámaras de alta resolución",
      "Control inteligente de aires acondicionados",
      "Cortinas motorizadas",
      "Automatización de portones",
    ],
  },
  {
    id: "proyecto-jl",
    name: "Proyecto JL",
    location: "Chajarí, Entre Ríos",
    status: "en-ejecucion",
    shortDescription:
      "Control inteligente de iluminación, seguridad, cámaras, aires acondicionados y cortinas.",
    fullDescription:
      "Proyecto residencial con automatización de los sistemas principales del hogar. Control de iluminación LED por zonas, sistema de seguridad con cámaras y sensores, gestión inteligente de aires acondicionados y cortinas motorizadas, todo integrado en una plataforma de control unificada.",
    tags: ["Domótica", "Seguridad", "Iluminación", "Climatización"],
    mainImage: "/images/projects/proyecto-jl.jpg",
    gallery: ["/images/projects/proyecto-jl.jpg"],
    solutions: [
      "Control de iluminación LED por zonas",
      "Sistema de seguridad con cámaras y sensores",
      "Gestión inteligente de aires acondicionados",
      "Cortinas motorizadas con automatización por horario",
    ],
  },
]

export const ALL_TAGS: ProjectTag[] = [
  "Domótica",
  "Seguridad",
  "Iluminación",
  "Redes",
  "Climatización",
  "Audio",
  "Acceso Digital",
]
