# Pattern — Arquitectura del Portafolio

## Patrón: Static Site Generation (SSG) con Next.js App Router

### Tipo
- **SSG** (Static Site Generation) — contenido mayormente estático
- **ISR** (Incremental Static Regeneration) — si se agrega blog dinámico después
- **App Router** de Next.js 14+ con layout anidados

### Estructura de routing

```
/                 → Landing / Hero (001)
/about            → Sobre Mí (002)
/projects         → Grid de proyectos (003)
/projects/001     → Caso Chambecas (004)
/projects/002     → Caso SebaTatto (005)
/projects/003     → Caso Tragaperras (006)
/skills           → Skills técnicas (007)
/methodology      → Metodología SDD (008)
/contact          → Contacto (009)
/timeline         → Trayectoria (010)
```

### Alternativas consideradas

| Patrón | Veredicto |
|--------|-----------|
| SPA (React puro) | ❌ Peor SEO, más boilerplate para routing |
| Astro | ❌ Menos flexible para componentes interactivos |
| CSR puro | ❌ Mala experiencia en redes lentas |

### Principios arquitectónicos

1. **Componentes atómicos** — diseño basado en atomic design (átomos → moléculas → organismos)
2. **Layout anidado** — header/footer global, layout específico por sección
3. **Data fetching estático** — contenido en MDX o JSON local, sin backend
4. **Rendimiento** — Lighthouse > 90 en todas las métricas
5. **Responsive first** — mobile-first, breakpoints de Tailwind
