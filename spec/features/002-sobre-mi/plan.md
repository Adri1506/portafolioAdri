# Plan — Sobre Mí

## Componentes
- `src/components/organisms/AboutSection.tsx`
- `src/components/molecules/StatCard.tsx` — Tarjeta de estadística reutilizable

## Datos
- `src/lib/data/profile.ts` — Datos personales (nombre, edad, bio, stats)

## Flujo
1. Página /about renderiza AboutSection
2. AboutSection importa datos de profile.ts
3. Stats se renderizan como grid de 4 StatCards

## Patrones
- Sección biográfica con stats
- Grid de cards responsive
