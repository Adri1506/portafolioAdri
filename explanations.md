# Portafolio Adrián Zamorano — Informe Completo del Proyecto

## 1. Ficha del Proyecto

| Campo | Valor |
|-------|-------|
| Nombre | Portafolio Adrián Zamorano |
| Stack | Next.js 16 + Tailwind CSS v4 + TypeScript |
| Inicio | 2026-07-02 |
| Fin | 2026-07-02 |
| Total features | 11 |
| Total tareas | 45+ |
| Estado | COMPLETADO |

## 2. El Problema

Adrián Zamorano es Ingeniero en Informática con 50+ proyectos, 3 en producción, y 2 años de experiencia en Spec-Driven Development con IA. Sin embargo, no tiene experiencia profesional formal en empresas. Necesitaba un portafolio que demostrara su capacidad real mediante proyectos concretos y su dominio de la metodología SDD, compensando la falta de experiencia tradicional.

## 3. Nuestra Solución

Portafolio profesional SSG con Next.js que presenta a Adrián como Ingeniero SDD. Incluye:
- Hero con gradiente azul profundo que comunica identidad técnica
- Sección Sobre Mí con bio y estadísticas clave
- Grid de proyectos con los 3 casos en producción destacados
- Casos de estudio detallados con ciclo SDD visible
- Skills organizadas por categoría
- Página dedidaca a explicar la metodología SDD
- Formulario de contacto y enlaces directos
- Timeline de trayectoria profesional

## 4. Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 16 (App Router) |
| Estilos | Tailwind CSS v4 |
| Lenguaje | TypeScript |
| Fuentes | Space Grotesk + Inter + JetBrains Mono (via next/font) |
| Iconos | lucide-react |
| Animaciones | CSS / framer-motion |
| Build | SSG (Static Site Generation) |
| Deploy | Vercel |

## 5. Funcionalidades Implementadas

| # | Feature | Estado |
|---|---------|--------|
| 001 | Landing / Hero | ✅ |
| 002 | Sobre Mí | ✅ |
| 003 | Proyectos Grid | ✅ |
| 004 | Caso Chambecas | ✅ |
| 005 | Caso SebaTatto | ✅ |
| 006 | Caso Tragaperras | ✅ |
| 007 | Skills Técnicas | ✅ |
| 008 | Metodología SDD | ✅ |
| 009 | Contacto | ✅ |
| 010 | Timeline / Trayectoria | ✅ |
| 011 | Footer | ✅ |

## 6. Decisiones Técnicas

1. **SSG sobre SSR** — El portafolio es contenido estático. SSG da mejor rendimiento y hosting más económico.
2. **Datos en TypeScript, no CMS** — Los datos del portafolio son pocos y cambian poco. Archivos TS con tipado fuerte son más simples que un CMS.
3. **Atomic Design** — Componentes organizados en átomos → moléculas → organismos para máxima reutilización.
4. **Cool Blue Technical** — Paleta azul profundo como ancla, slate como neutros. Se diferencia del azul genérico SaaS.
5. **Sin backend** — El sitio es 100% estático. El formulario de contacto usa mailto: en lugar de un API server.

## 7. Resultados de QA y Seguridad

### QA
- 11/11 features validadas contra sus acceptance criteria
- 81/81 criterios de aceptación cumplidos
- Build exitoso sin errores
- 13 rutas prerenderizadas estáticamente

### Seguridad
- Sin secrets hardcodeados
- Sin vulnerabilidades XSS
- Sin exposición de datos sensibles
- 2 vulnerabilidades moderadas en dependencias (pre-existentes, no afectan SSG)

## 8. Glosario

| Término | Definición |
|---------|------------|
| SDD | Spec-Driven Development — metodología donde la especificación es la fuente de verdad antes de codificar |
| SSG | Static Site Generation — páginas HTML generadas en build time, no en cada request |
| Atomic Design | Metodología de diseño de componentes: átomos (simples) → moléculas → organismos (complejos) |
| App Router | Sistema de routing de Next.js basado en el sistema de archivos dentro de src/app/ |
| Design System | Conjunto de tokens visuales (colores, tipografía, spacing) que garantizan consistencia visual |
| Acceptance Criteria | Condiciones que una feature debe cumplir para ser aceptada como completa |
