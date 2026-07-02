# Plan — Caso Chambecas

## Componentes
- `src/components/organisms/CaseStudy.tsx` — Layout principal del caso de estudio
- `src/components/molecules/SDDCycle.tsx` — Diagrama visual SDD
- `src/components/molecules/Learnings.tsx` — Sección de aprendizajes

## Datos
- Mismo `src/lib/data/projects.ts` (ya incluye Chambecas)

## Flujo
1. Ruta dinámica /projects/[id] captura el id
2. Busca proyecto en projects array por id
3. Renderiza CaseStudy con datos del proyecto

## Patrones
- Dynamic route con generateStaticParams
- Layout asimétrico con Tailwind grid
