---
id: "014-constellation-svg"
title: "Constellation SVG (full-page backdrop)"
status: draft
owner: "Developer"
created: "2026-08-11"
updated: "2026-08-11"
priority: high
depends_on: ["012-design-system-core"]
touches_files:
  - "src/components/organisms/Constellation.tsx"
  - "src/components/organisms/ParticleNetwork.tsx"
  - "src/app/layout.tsx"
out_of_scope_files:
  - "src/app/globals.css"
  - "src/components/organisms/Hero.tsx"
---

# Spec: Constellation SVG (full-page backdrop)

## 1. Intent (una frase, sin ambigüedad)

Reemplazar `ParticleNetwork.tsx` (canvas animado con rAF) por `Constellation.tsx` (SVG estático con PRNG, twinkle CSS y parallax Framer Motion) como backdrop full-page.

## 2. Contexto necesario

- `spec/design/design-system.md` (sección E.1): spec completa de la constelación SVG
- `spec/design/design-system.md` (sección C): motion tokens para parallax
- `src/components/organisms/ParticleNetwork.tsx` actual: canvas con rAF — se reemplaza
- `src/app/layout.tsx`: donde se renderiza el backdrop (se añade Constellation)

## 3. Requisitos (EARS)

| ID | Tipo | Requisito |
|---|---|---|
| REQ-001 | Ubiquitous | El componente **shall** renderizar un SVG con `viewBox="0 0 1440 900"` y `preserveAspectRatio="xMidYMid slice"` |
| REQ-002 | Ubiquitous | El componente **shall** generar 70–90 nodos (círculos `r` 1–2.5px) con PRNG seed fija (2026) |
| REQ-003 | Ubiquitous | El componente **shall** generar ~12% de nodos como estrellas ámbar (`r` 1.5–3px, `fill: var(--constellation-star)`) con clase `.star` para twinkle CSS |
| REQ-004 | Ubiquitous | El componente **shall** generar conexiones (líneas) entre pares con distancia < 110 unidades, `stroke-width: 0.75`, opacidad 0.05–0.14 |
| REQ-005 | Ubiquitous | El componente **shall** usar `position: fixed; inset: 0; z-index: 0; pointer-events: none; aria-hidden="true"` |
| REQ-006 | Ubiquitous | El componente **shall** incluir parallax con Framer Motion `useScroll` + `useTransform(0→60px, scroll × 0.15)` |
| REQ-007 | Event | When `prefers-reduced-motion: reduce`, el componente **shall** desactivar parallax y twinkle |
| REQ-008 | Ubiquitous | El componente **shall** renderizar idéntico en servidor y cliente (sin hydration mismatch) |

## 4. Contrato de interfaz (si aplica)

```typescript
// Generación determinista con PRNG
function seededRandom(seed: number): () => number

// Generación de nodos
interface ConstellationNode {
  x: number;       // 0–1440 (viewBox)
  y: number;       // 0–900 (viewBox)
  r: number;       // 1–2.5 (normal) or 1.5–3 (star)
  isStar: boolean;
  delay: number;   // para twinkle (0–7s)
}

// Generación de conexiones
interface ConstellationLine {
  x1: number; y1: number;
  x2: number; y2: number;
  opacity: number; // 0.05–0.14
}

// Componente
export default function Constellation(): JSX.Element
```

## 5. Límites explícitos (guardrails)

- No usar canvas ni `requestAnimationFrame` — solo SVG estático
- No usar aleatoriedad en cliente (`Math.random()`) — solo PRNG determinista
- No añadir dependencias npm nuevas (Framer Motion ya instalado)
- No eliminar `ParticleNetwork.tsx` — solo dejar de importarlo (mantener para referencia)
- No superar 100 nodos totales (performance)
- Constelación es `aria-hidden="true"` — no aporta contenido semántico

## 6. Plan de tareas (checklist atómico)

- [ ] T01: Crear `Constellation.tsx` con SVG estático, PRNG seed 2026, generación de nodos/estrellas/conexiones → verifica: `REQ-001`, `REQ-002`, `REQ-003`, `REQ-004`
- [ ] T02: Añadir estilos CSS al componente (position fixed, z-index 0, pointer-events none, aria-hidden) → verifica: `REQ-005`
- [ ] T03: Añadir parallax con Framer Motion (useScroll + useTransform) → verifica: `REQ-006`
- [ ] T04: Implementar reduced-motion: desactivar parallax y twinkle → verifica: `REQ-007`
- [ ] T05: Integrar Constellation en `layout.tsx` como backdrop global → verifica: `REQ-008`

## 7. Cambios de dependencias / entorno

- Framer Motion ya instalado — no se añade nada nuevo

## 8. Criterios de verificación (lo que corre el Verifier)

```bash
npm run typecheck
npm run lint
npm run build
```

- [ ] Constellation renderiza SVG con 70–90 nodos
- [ ] Estrellas ámbar (~12% de nodos) tienen twinkle CSS
- [ ] Parallax funciona con scroll (transform-only)
- [ ] `prefers-reduced-motion: reduce` desactiva twinkle y parallax
- [ ] Sin hydration mismatch (mismo SVG en SSR y cliente)
- [ ] ParticleNetwork ya no se importa en layout.tsx

## 9. Salida esperada al finalizar

- `Constellation.tsx`: componente React con SVG estático (~150–200 líneas)
- `layout.tsx`: importa Constellation en vez de ParticleNetwork
- ParticleNetwork.tsx se mantiene sin usar (no se elimina)
- Constelación visible como backdrop full-page
