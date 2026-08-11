# Roadmap — Portafolio Adrián Zamorano

Orden de implementación de features, de mayor a menor prioridad.

## v1 — Features originales (001–011)

| # | Feature | Prioridad | Depende de | Descripción |
|---|---------|-----------|------------|-------------|
| 001 | Landing / Hero | 🔴 Alta | — | Presentación principal: nombre, título, frase de impacto, CTA |
| 002 | Sobre Mí | 🔴 Alta | — | Sección biográfica: foto, trayectoria, enfoque SDD |
| 003 | Proyectos | 🔴 Alta | — | Grid de proyectos destacados con cards |
| 004 | Caso de Estudio: Chambecas | 🔴 Alta | 003 | Detalle del proyecto: spec, stack, deploy, aprendizajes |
| 005 | Caso de Estudio: SebaTatto | 🔴 Alta | 003 | Detalle del proyecto: spec, stack, features destacadas |
| 006 | Caso de Estudio: Tragaperras | 🔴 Alta | 003 | Detalle del proyecto: spec, stack, demo |
| 007 | Skills Técnicas | 🟡 Media | — | Visualización de tecnologías y herramientas |
| 008 | Metodología SDD | 🟡 Media | — | Explicación visual del flujo SDD con agentes |
| 009 | Contacto | 🟡 Media | — | Formulario + enlaces (email, LinkedIn, GitHub, WhatsApp) |
| 010 | Timeline / Trayectoria | 🟢 Baja | — | Línea de tiempo de aprendizaje y proyectos |
| 011 | Footer | 🟢 Baja | — | Links, copyright, créditos |

## v2 — Rediseño "Constelación Técnica" (012–020)

| # | Feature | Prioridad | Depende de | Descripción |
|---|---------|-----------|------------|-------------|
| 012 | Design System Core (globals.css) | 🔴 Alta | — | Reescribir globals.css: tokens semánticos dark-first, light toggle, constelación CSS, motion tokens, utilidades |
| 013 | Shell Layout (sidebar + content) | 🔴 Alta | 012 | Sidebar sticky desktop, topbar + overlay móvil, layout.tsx, toggle dark/light |
| 014 | Constellation SVG (backdrop full-page) | 🔴 Alta | 012 | Reemplazar ParticleNetwork por SVG estático con PRNG, twinkle CSS, parallax Framer Motion |
| 015 | Hero Asymmetric (7/5) | 🔴 Alta | 013, 014 | Hero asimétrico: status pill, nombre serif, tagline mono, retrato con marco técnico, CTAs |
| 016 | Projects Bento Grid | 🔴 Alta | 013 | Bento: Chambecas 7col, SebaTatto 5, Tragaperras 5, tira 50+ proyectos |
| 017 | Section Headers (editorial numbering) | 🟡 Media | 012 | Componente reutilizable: mono ámbar + título + underline gradiente, scroll-reveal |
| 018 | Skills & Methodology Sections | 🟡 Media | 017 | Skills plana sin cards, Ciclo SDD diagrama de flujo numerado |
| 019 | Contact & Footer | 🟡 Media | 017 | Formulario rediseñado, footer compacto, ubicación, socials con ↗ |
| 020 | Motion & Interactions | 🟢 Baja | 012 | ScrollReveal, reduced-motion, hover states, parallax constelación |

## Total features: 20 (11 v1 + 9 v2)

## Notas
- Features 012–020 reemplazan visualmente los componentes de 001–011
- El orden de implementación es secuencial: CSS → Layout → Constelación → Hero → Proyectos → Secciones → Contacto → Motion
- Cada feature v2 es independiente de las v1 (no se tocan las specs originales)
- El diseño responsivo se aplica desde el inicio, no como feature separada
