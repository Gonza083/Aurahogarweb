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
    id: "proyecto-js",
    name: "Proyecto JS",
    location: "Chajarí, Entre Ríos",
    status: "en-ejecucion",
    shortDescription:
      "Vivienda de dos plantas con automatización de iluminación, climatización, cortinas, ingresos, cine, seguridad, audio y pileta.",
    fullDescription:
      "Proyecto de domótica integral para una residencia nueva de dos plantas sobre calle Repetto, implementado con el sistema SOPHIA. Incluye control de iluminación, cortinas motorizadas, climatización con caldera y aire acondicionado por zonas, dos zonas de cine, cerradura digital y automatización de pileta.",
    tags: ["Domótica", "Iluminación", "Seguridad", "Climatización", "Audio", "Acceso Digital"],
    mainImage: "/images/projects/proyecto-js.jpg",
    gallery: ["/images/projects/proyecto-js.jpg"],
    solutions: [
      "Iluminación por zonas en planta baja y alta con escenas programables",
      "Cortinas motorizadas con control individual y grupal",
      "Climatización con caldera, zonas de calefacción y aire acondicionado",
      "Sistema de cámaras de vigilancia y sensores de alarma",
      "Cerradura digital con control de acceso",
      "Audio distribuido con integración Spotify",
      "2 zonas de cine con control integrado",
      "Automatización de pileta",
      "Control de TV, aires y proyectores",
    ],
  },
  {
    id: "proyecto-nsg",
    name: "Proyecto NSG",
    location: "Chajarí, Entre Ríos",
    status: "en-ejecucion",
    shortDescription:
      "Vivienda de alta gama con automatización completa de iluminación, cortinas, accesos, seguridad y climatización.",
    fullDescription:
      "Proyecto integral de domótica para una residencia privada, con iluminación inteligente distribuida en todas las áreas del hogar, cortinas motorizadas, portones levadizos automatizados, climatización por zonas.Control de riego y psicina. La seguridad está cubierta por cámaras y sensores de movimiento integrados al sistema de alarma.",
    tags: ["Domótica", "Iluminación", "Seguridad", "Climatización", "Acceso Digital", "Redes"],
    mainImage: "/images/projects/proyecto-nsg.jpg",
    gallery: ["/images/projects/proyecto-nsg.jpg"],
    solutions: [
      "Iluminación por zonas",
      "Cortinas y persianas motorizadas",
      "Portones levadizos automatizados",
      "Climatización por zonas",
      "Cámaras de vigilancia",
      "Sensores de alarma",
      "Iluminación de pileta y exteriores",
      "Riego automatizado",
      "Red Wi-Fi de cobertura total en toda la vivienda",
    ],
  },
  {
    id: "proyecto-jl",
    name: "Proyecto JL",
    location: "Chajarí, Entre Ríos",
    status: "finalizado",
    shortDescription:
      "Vivienda inteligente con control de iluminación, cortinas, climatización, seguridad y audio desde una sola app.",
    fullDescription:
      "Proyecto de domótica integral para una residencia sobre Av. 9 de Julio, implementado con el sistema SOPHIA que unifica el control de todos los dispositivos desde una única aplicación. Incluye iluminación por zonas con escenas programables, cortinas motorizadas, climatización por ambientes, cámaras de seguridad, sensores de alarma, portón automatizado y audio distribuido con Spotify integrado.",
    tags: ["Domótica", "Iluminación", "Seguridad", "Climatización", "Audio", "Acceso Digital"],
    mainImage: "/images/projects/proyecto-jl.jpg",
    gallery: ["/images/projects/proyecto-jl.jpg"],
    solutions: [
      "Iluminación por zonas con escenas programables",
      "Cortinas motorizadas con control desde app",
      "Climatización por ambientes",
      "Cámaras de vigilancia interior y exterior",
      "Sensores de alarma y movimiento",
      "Portón de acceso automatizado",
      "Audio distribuido con integración Spotify",
    ],
  },
  {
    id: "oficinas-villanova",
    name: "Oficinas Villanova",
    location: "Chajarí, Entre Ríos",
    status: "en-ejecucion",
    shortDescription:
      "Automatización integral de oficinas y galpón para empresa de transporte, con control centralizado desde app móvil.",
    fullDescription:
      "Proyecto de domótica comercial para las instalaciones de Transporte Villanova, que integra iluminación inteligente, climatización, portón motorizado y sistema de seguridad avanzado en oficinas y galpón. La plataforma SOPHIA centraliza el control de todos los sistemas sin depender de servidores externos, con alertas en tiempo real y gestión desde el celular. El proyecto abarca tanto el área administrativa como el depósito con cobertura completa de sensores y cámaras.",
    tags: ["Domótica", "Iluminación", "Seguridad", "Climatización", "Audio", "Acceso Digital"],
    mainImage: "/images/projects/proyecto-sv.jpg",
    gallery: ["/images/projects/proyecto-sv.jpg"],
    solutions: [
      "Iluminación por zonas con escenas y horarios programables",
      "Climatización automatizada por ambientes",
      "Cortinas motorizadas con control por ocupación",
      "Portón de acceso motorizado con control desde celular",
      "Sistema de cámaras de vigilancia con NVR",
      "Sensores PIR y contactos magnéticos en oficinas y galpón",
      "Audio ambiente con parlantes integrados",
      "Automatización de espejo de agua (bomba y circulación)",
    ],
  },
  {
    id: "proyecto-lfv",
    name: "Proyecto LFV",
    location: "Chajarí, Entre Ríos",
    status: "en-ejecucion",
    shortDescription:
      "Vivienda con automatización de iluminación, cortinas, climatización, accesos y riego integrados en el sistema SOPHIA.",
    fullDescription:
      "Proyecto de domótica residencial para una vivienda sobre Ruta 3 en Chajarí, con tableros SOPHIA distribuidos para el control de iluminación inteligente por zonas, cortinas motorizadas, climatización con caldera y aire acondicionado, portón automatizado y gestión de pileta y riego. Todo comandado desde una pantalla táctil ubicada en la zona social de la casa.",
    tags: ["Domótica", "Iluminación", "Climatización", "Acceso Digital", "Audio", "Redes"],
    mainImage: "/images/projects/proyecto-lfv.jpg",
    gallery: ["/images/projects/proyecto-lfv.jpg"],
    solutions: [
      "Iluminación por zonas con tiras LED y sensores de movimiento",
      "Cortinas motorizadas con control centralizado",
      "Climatización con caldera, radiadores y aire acondicionado por zonas",
      "Portón de acceso motorizado",
      "Cámaras y sensores de alarma",
      "Automatización de pileta y riego",
      "Infraestructura de audio distribuido",
    ],
  },
  {
    id: "proyecto-jps",
    name: "Proyecto JPS",
    location: "Chajarí, Entre Ríos",
    status: "en-ejecucion",
    shortDescription:
      "Vivienda inteligente con control de iluminación dimerable, cortinas, climatización y audio.",
    fullDescription:
      "Proyecto de domótica integral para una residencia en Chajarí, implementado con el sistema SOPHIA. Incluye iluminación con control dimerable en toda la vivienda, cortinas motorizadas, climatización por ambientes con control de aire acondicionado y caldera, y audio distribuido con Spotify.",
    tags: ["Domótica", "Iluminación", "Climatización", "Audio"],
    mainImage: "/images/projects/proyecto-jps.jpg",
    gallery: ["/images/projects/proyecto-jps.jpg"],
    solutions: [
      "Iluminación por zonas con control dimerable",
      "Cortinas motorizadas con programación por horarios",
      "Climatización con control de aire acondicionado por ambientes",
      "Control de caldera",
      "Audio distribuido con integración Spotify",
    ],
  },
  {
    id: "edificio-iner",
    name: "Edificio INER",
    location: "Concepción, Entre Ríos",
    status: "en-ejecucion",
    shortDescription:
      "Edificio residencial de 60 departamentos con domótica integrada en cada unidad: iluminación, cortinas y climatización.",
    fullDescription:
      "Proyecto de domótica a escala edilicia para un edificio residencial de 60 unidades desarrollado por INER Ingeniería, implementado con el sistema SOPHIA en cada departamento. Cada unidad cuenta con iluminación dimerable, cortinas motorizadas, control de aire acondicionado, sensor de presencia y tecla Gaia con alerta antipánico integrada. La solución se adapta a departamentos de 1 y 2 dormitorios con distinto nivel de equipamiento según tipología.",
    tags: ["Domótica", "Iluminación", "Climatización", "Acceso Digital"],
    mainImage: "/images/projects/proyecto-iner.jpg",
    gallery: ["/images/projects/proyecto-iner.jpg"],
    solutions: [
      "Iluminación dimerable por zonas en cada departamento",
      "Cortinas motorizadas con control desde app y botón Gaia",
      "Control de aire acondicionado por ambientes",
      "Sensor de presencia integrado por unidad",
      "Botón Gaia con control de luces, cortinas, temperatura y alerta antipánico",
      "Gestión centralizada por unidad sin dependencia de servidor externo",
    ],
  },
  {
    id: "proyecto-sf",
    name: "Proyecto SF",
    location: "Chajarí, Entre Ríos",
    status: "finalizado",
    shortDescription:
      "Vivienda con automatización de iluminación, climatización, cortinas, cine, pileta y seguridad con sistema SOPHIA.",
    fullDescription:
      "Proyecto de domótica integral para una vivienda con living-cocina-comedor integrado, dormitorio y patio con pileta en Chajarí. El sistema SOPHIA unifica el control de iluminación, cortinas motorizadas, aire acondicionado, cine y pileta desde una sola app. La seguridad está cubierta con cámaras Hikvision, alarma y sensores de presencia integrados al sistema.",
    tags: ["Domótica", "Iluminación", "Seguridad", "Climatización", "Audio", "Acceso Digital"],
    mainImage: "/images/projects/proyecto-sf.jpg",
    gallery: ["/images/projects/proyecto-sf.jpg"],
    solutions: [
      "Iluminación por zonas con escenas programables",
      "Cortinas motorizadas con control desde app",
      "Control de aire acondicionado por ambientes",
      "Zona de cine con control integrado",
      "Automatización de pileta",
      "Cámaras de vigilancia Hikvision",
      "Alarma con sensores de presencia",
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
