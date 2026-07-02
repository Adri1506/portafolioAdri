# Plan — Landing / Hero

## Componentes
- `src/components/organisms/Hero.tsx` — Componente hero principal
- `src/components/molecules/CTAButton.tsx` — Botón con dos variantes (primary/outline)

## Datos
- Estáticos en el componente (texto del hero)

## Flujo
1. Renderizar Hero como sección principal del homepage
2. Aplicar gradiente de fondo vía Tailwind `bg-gradient-to-br from-[#0A1929] to-[#1A56DB]`
3. Texto con Space Grotesk, tamaño responsive
4. Botones con Link de Next.js a /projects y /contact

## Patrones
- Hero pattern (sección full-viewport con CTA)
- Fade-in animation con framer-motion o CSS animation
