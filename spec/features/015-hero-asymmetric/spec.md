---
id: "015-hero-asymmetric"
title: "Hero Asymmetric (7/5)"
status: draft
owner: "Developer"
created: "2026-08-11"
updated: "2026-08-11"
priority: high
depends_on: ["013-shell-layout", "014-constellation-svg"]
touches_files:
  - "src/components/organisms/Hero.tsx"
  - "src/components/molecules/StatusPill.tsx"
  - "src/components/molecules/Portrait.tsx"
  - "src/components/atoms/CTAButton.tsx"
out_of_scope_files:
  - "src/app/globals.css"
  - "src/components/organisms/Constellation.tsx"
---

# Spec: Hero Asymmetric (7/5)

## 1. Intent (una frase, sin ambigüedad)

Reescribir el componente Hero con layout asimétrico 7/5 (texto izquierda, retrato derecha), status pill, nombre serif itálica, tagline mono, CTAs y retrato con marco técnico.

## 2. Contexto necesario

- `spec/design/screens-and-flows.md` (sección 2): wireframe del hero asimétrico
- `spec/design/design-system.md` (secciones A, F.2, F.3, F.5, F.11): tipografía hero, botones, status pill, card bento, retrato
- `src/components/organisms/Hero.tsx` actual: hero centrado con ParticleNetwork — se reescribe completamente
- `src/components/atoms/CTAButton.tsx`: botón CTA existente — se reutiliza

## 3. Requisitos (EARS)

| ID | Tipo | Requisito |
|---|---|---|
| REQ-001 | Ubiquitous | El hero **shall** usar layout asimétrico `grid-cols-12` con columna izquierda 7/12 y derecha 5/12 en desktop (lg+) |
| REQ-002 | Ubiquitous | La columna izquierda **shall** contener: status pill, nombre (serif itálica `--text-hero`), tagline (mono uppercase), intro (2 frases, 68ch), 2 CTAs, links sociales |
| REQ-003 | Ubiquitous | La columna derecha **shall** contener: retrato real (`imagenes/Yo.png`) con `aspect-ratio: 3/4`, marco de esquinas de registro `+` ámbar, caption mono `fig. 01 — Adrián Zamorano · Valparaíso, Chile 🇨🇱` |
| REQ-004 | Ubiquitous | El nombre **shall** renderizar "Adrián" en Instrument Serif itálica a `--text-hero` (clamp 52–120px) y "Zamorano" en Space Grotesk 700 |
| REQ-005 | Ubiquitous | Los CTAs **shall** ser: `VER PROYECTOS ↗` (primary) y `CONTACTAR` (secondary outline) |
| REQ-006 | Ubiquitous | Los links sociales **shall** mostrar `GitHub ↗`, `LinkedIn ↗`, `Email ↗` en mono con underline draw |
| REQ-007 | Ubiquitous | El hero **shall** incluir stats planas: `50+ proyectos`, `3 en producción`, `2 años SDD+IA` con borde inferior |
| REQ-008 | Event | When viewport < lg, el hero **shall** apilar: pill → nombre → tagline → intro → CTAs → retrato → stats |
| REQ-009 | Ubiquitous | El hero **shall** usar `--gradient-sky` como fondo radial detrás del retrato |

## 4. Contrato de interfaz (si aplica)

```typescript
// StatusPill — reutilizable en sidebar y hero
export default function StatusPill(): JSX.Element

// Portrait — retrato con marco técnico
export default function Portrait(): JSX.Element

// Hero — sección completa
export default function Hero(): JSX.Element

// Stats del hero
interface StatItem {
  value: string;    // "50+", "3", "2"
  label: string;    // "proyectos construidos", "en producción", "años con SDD + IA"
}
```

## 5. Límites explícitos (guardrails)

- No usar `ParticleNetwork` — la constelación ya es backdrop global (feature 014)
- No usar sombras en cards (regla anti-IA)
- No usar `text-white` puro — siempre `text-foreground` (off-white `#F1F5F9`)
- No usar font-size hardcodeado — usar tokens fluidos (`--text-hero`, `--text-tagline`)
- No animar con JavaScript — usar Framer Motion para scroll-reveal
- Retrato con `next/image` + `priority` (above the fold)

## 6. Plan de tareas (checklist atómico)

- [ ] T01: Crear `StatusPill.tsx` (dot emerald + pulse + texto mono) → verifica: `REQ-002`
- [ ] T02: Crear `Portrait.tsx` con next/image, marco crosshair, caption → verifica: `REQ-003`, `REQ-009`
- [ ] T03: Reescribir `Hero.tsx` con grid 7/5, columna izquierda (pill + nombre + tagline + intro + CTAs + socials + stats) → verifica: `REQ-001`, `REQ-002`, `REQ-004`, `REQ-005`, `REQ-006`, `REQ-007`
- [ ] T04: Añadir responsive mobile (apilado) → verifica: `REQ-008`
- [ ] T05: Añadir scroll-reveal con Framer Motion (stagger 80ms) → verifica: REQ motion design system

## 7. Cambios de dependencias / entorno

- Ninguno. Framer Motion ya instalado.

## 8. Criterios de verificación (lo que corre el Verifier)

```bash
npm run typecheck
npm run lint
npm run build
```

- [ ] Hero renderiza grid 7/5 en lg+
- [ ] Nombre "Adrián" en Instrument Serif itálica
- [ ] Status pill con dot emerald y pulse
- [ ] Retrato con marco crosshair y caption
- [ ] CTAs: primary (ámbar) + secondary (outline)
- [ ] Socials con `↗` y underline draw
- [ ] Stats planas con borde inferior
- [ ] Mobile: todo apilado correctamente

## 9. Salida esperada al finalizar

- `Hero.tsx`: ~150–200 líneas, layout asimétrico completo
- `StatusPill.tsx`: ~25 líneas, componente reutilizable
- `Portrait.tsx`: ~50 líneas, retrato con marco técnico
- Hero funcional en desktop y mobile
