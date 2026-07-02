# AGENT.md — Portafolio Adrián Zamorano

## Stack
- **Framework:** Next.js 16 (App Router)
- **Estilos:** Tailwind CSS v4
- **Lenguaje:** TypeScript
- **Fuentes:** Space Grotesk (display), Inter (body), JetBrains Mono (code)
- **Iconos:** lucide-react
- **Animaciones:** CSS nativas / framer-motion
- **Deploy:** Vercel (SSG)

## Setup
```bash
git clone <repo>
cd portfolio-adrian
npm install
npm run dev    # → http://localhost:3000
npm run build  # → output en .next/
```

## Structure
```
src/
├── app/              # App Router pages
│   ├── page.tsx      # Home (Hero)
│   ├── about/        # Sobre Mí
│   ├── projects/     # Grid + [id]/ (casos de estudio)
│   ├── skills/       # Skills técnicas
│   ├── methodology/  # Metodología SDD
│   ├── contact/      # Contacto
│   └── timeline/     # Trayectoria
├── components/
│   ├── atoms/        # Badge, Tag, CTAButton
│   ├── molecules/    # ProjectCard, StatCard, SDDCycle, ContactForm, SocialLinks
│   └── organisms/    # Hero, Header, Footer, AboutSection, etc.
├── lib/data/         # Datos estáticos: projects, profile, skills, contact, timeline
└── types/            # Interfaces TypeScript
```

## Key Technical Decisions
| Decisión | Justificación |
|----------|---------------|
| SSG sobre SSR | Contenido estático, build más rápido, hosting más barato |
| Datos en TS, no CMS | Proyecto pequeño, sin backend, tipado seguro |
| Atomic Design | Componentes reutilizables, fácil de mantener |
| next/font auto-self-host | Sin requests externos a Google, mejor privacidad |

## No Hacer
- No agregar backend ni base de datos (el sitio es SSG estático)
- No usar imágenes sin next/image (pierdes optimización)
- No modificar spec/ (es la fuente de verdad, solo lectura)
- No implementar features sin spec previo
- No asumir diseño — seguir el design system en spec/design/

## Conventions
- **Nombres:** PascalCase para componentes, camelCase para funciones/vars
- **Import alias:** `@/` apunta a `src/`
- **CSS:** Tailwind utility classes, CSS variables en globals.css
- **Componentes:** Server Components por defecto, "use client" solo cuando hay interactividad
- **Rutas:** App Router con layouts anidados

## Entry Points
- `/` → Hero principal (src/app/page.tsx)
- `/projects` → Grid de proyectos (src/app/projects/page.tsx)
- `/methodology` → Explicación SDD (src/app/methodology/page.tsx)
- `src/lib/data/projects.ts` → Para agregar/quitar proyectos del portafolio
