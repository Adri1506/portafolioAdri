import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "chambecas",
    title: "Chambecas",
    subtitle: "Fiestas Infantiles y Sublimación",
    description:
      "E-commerce completo para artículos de fiesta infantil, sublimación personalizada y cotillón. Catálogo con galería de imágenes, sección de servicios, integración con WhatsApp y diseño responsive. Clientes pueden explorar productos, ver precios y contactar directamente.",
    image: "/images/projects/chambecas-thumb.png",
    imageFull: "/images/projects/chambecas.png",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    status: "production",
    url: "https://chambecas.vercel.app",
    category: "E-commerce",
    learnings: [
      "Manejo de galerías de imágenes optimizadas",
      "Integración con WhatsApp API para contacto directo",
      "SEO para e-commerce local",
      "Diseño responsive para catálogo de productos",
    ],
    features: [
      "Catálogo de productos con galería",
      "Sección de servicios detallados",
      "Galería de piñatas con precios",
      "Integración con WhatsApp",
      "Formulario de contacto",
    ],
  },
  {
    id: "sebatatto",
    title: "SebaTatto",
    subtitle: "Tatuajes a Domicilio",
    description:
      "Portafolio profesional para tatuador con servicio a domicilio. Incluye galería de trabajos, cotizador interactivo por zonas del cuerpo, tamaño y estilo, y sistema de contacto completo. Destaca por su cotizador visual que permite seleccionar zona anatómica y obtener precio estimado.",
    image: "/images/projects/sebatatto-thumb.png",
    imageFull: "/images/projects/sebatatto.png",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    status: "production",
    url: "https://seba-tattos.vercel.app",
    category: "Portafolio / Servicios",
    learnings: [
      "Implementación de cotizador interactivo con lógica condicional",
      "Manejo de estados complejos en UI",
      "Galería de imágenes con lightbox",
      "Formulario de contacto funcional",
    ],
    features: [
      "Cotizador interactivo por zonas del cuerpo",
      "Galería con lightbox",
      "Sección 'En Acción' con fotos del proceso",
      "Formulario de cotización y contacto",
      "Diseño responsivo",
    ],
  },
  {
    id: "tragaperras",
    title: "Tragaperras",
    subtitle: "Slot Machine",
    description:
      "Juego de tragamonedas (slot machine) interactivo. Máquina tragaperras funcional con animaciones, lógica de juego aleatoria y diseño temático. Proyecto que demuestra capacidad para desarrollar lógica de juego en el navegador.",
    image: "/images/projects/tragaperras-thumb.png",
    imageFull: "/images/projects/tragaperras.png",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    status: "production",
    url: "https://tragaperras-zeta.vercel.app",
    category: "Juego",
    learnings: [
      "Lógica de juego con aleatoriedad controlada",
      "Animaciones CSS para transiciones de slots",
      "Manejo de estado de juego (créditos, apuestas, premios)",
      "Diseño temático de máquina tragamonedas",
    ],
    features: [
      "Slots con animaciones de giro",
      "Sistema de créditos y apuestas",
      "Detección de combinaciones ganadoras",
      "Efectos visuales y sonoros",
    ],
  },
];
