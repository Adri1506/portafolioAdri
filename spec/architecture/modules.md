# Modules — Estructura de Carpetas

```
Portfolio-Adrian/
├── spec/                          # Fuente de verdad (SDD)
│   ├── constitution/              # Misión, tech-stack, roadmap
│   ├── architecture/              # Pattern, módulos, decisiones
│   ├── design/                    # Diseño (lo genera Designer)
│   └── features/                  # Features del roadmap
│
├── src/
│   ├── app/                       # App Router de Next.js
│   │   ├── layout.tsx             # Layout raíz (header + footer)
│   │   ├── page.tsx               # Landing / Hero
│   │   ├── about/page.tsx         # Sobre Mí
│   │   ├── projects/
│   │   │   ├── page.tsx           # Grid de proyectos
│   │   │   └── [id]/page.tsx      # Detalle de proyecto (dinámico)
│   │   ├── skills/page.tsx        # Skills técnicas
│   │   ├── methodology/page.tsx   # Metodología SDD
│   │   ├── contact/page.tsx       # Contacto
│   │   ├── timeline/page.tsx      # Trayectoria
│   │   └── globals.css            # Estilos globales Tailwind
│   │
│   ├── components/                # Componentes compartidos
│   │   ├── atoms/                 # Botones, íconos, badges, tags
│   │   ├── molecules/             # Cards, skill bars, project cards
│   │   ├── organisms/             # Header, Footer, ProjectGrid, ContactForm
│   │   └── templates/             # Layouts de página
│   │
│   ├── lib/                       # Utilidades y datos
│   │   ├── data/                  # Datos de proyectos, skills, timeline
│   │   │   ├── projects.ts        # Array de proyectos
│   │   │   ├── skills.ts          # Skills técnicas
│   │   │   └── timeline.ts        # Timeline de trayectoria
│   │   └── utils.ts               # Helpers genéricos
│   │
│   └── types/                     # Tipos TypeScript
│       └── index.ts               # Interfaces del portafolio
│
├── public/                        # Assets estáticos
│   ├── images/
│   │   ├── projects/              # Screenshots de proyectos
│   │   └── profile/               # Foto de perfil
│   └── favicon.ico
│
├── outputs/                       # Outputs del pipeline
│   └── orchestrator/
│       └── project_state.yaml     # Estado del pipeline
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── postcss.config.js
```

## Capas del sistema

| Capa | Contenido | Responsabilidad |
|------|-----------|-----------------|
| **Data** | `src/lib/data/` | Datos estáticos de proyectos, skills, timeline |
| **Types** | `src/types/` | Interfaces TypeScript compartidas |
| **Components** | `src/components/` | UI atómica reutilizable |
| **Pages** | `src/app/` | Rutas y layouts de Next.js |
| **Assets** | `public/` | Imágenes, fuentes, favicon |
