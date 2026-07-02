# Architecture Decision Log

## AD-001: SSG en lugar de SSR
- **Contexto:** El portafolio es contenido estático que no cambia por usuario.
- **Decisión:** Usar `generateStaticParams` con SSG. 
- **Consecuencia:** Build más rápido, hosting más barato, mejor rendimiento.
- **Alternativa:** SSR habría añadido complejidad innecesaria.

## AD-002: Datos en archivos TypeScript, no CMS ni BD
- **Contexto:** El portafolio tiene datos pequeños y que cambian poco (proyectos, skills).
- **Decisión:** Tipos y datos en `src/lib/data/*.ts`.
- **Consecuencia:** Sin dependencias externas, tipado seguro, fácil de mantener.
- **Alternativa:** CMS headless (Sanity, Contentful) → overkill para este tamaño.

## AD-003: Rutas dinámicas para proyectos
- **Contexto:** Cada proyecto necesita su propia página de detalle.
- **Decisión:** `/projects/[id]` con `generateStaticParams` pre-renderizando todos los proyectos.
- **Consecuencia:** URLs limpias, SEO amigable, contenido estático.
- **Alternativa:** Todo en una sola página con modales → peor UX, peor SEO.

## AD-004: Atomic Design para componentes
- **Contexto:** El portafolio tendrá componentes reutilizables (cards, badges, botones).
- **Decisión:** Organizar en atoms/molecules/organisms/templates.
- **Consecuencia:** Componentes pequeños y testables, fácil de extender.
- **Alternativa:** Componentes monolíticos → difícil de mantener y reutilizar.

## Riesgos identificados

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Diseño queda genérico | Baja | Alto | Designer trabajará paleta azulada y estilo distintivo |
| Proyectos en producción cambian de URL | Baja | Medio | Usar datos configurables en lib/data/projects.ts |
| Faltan imágenes de proyectos | Media | Medio | Usar capturas de pantalla o placeholders |
