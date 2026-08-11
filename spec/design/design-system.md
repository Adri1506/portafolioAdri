# Design System — Portafolio Adrián Zamorano

> **Versión:** 2.0 — Rediseño 2026 "Constelación Técnica"
> **Estado:** Reemplaza por completo la v1.0 ("Cool Blue Technical")
> **Stack objetivo:** Next.js 16 · React 19 · Tailwind CSS v4 · Framer Motion · TypeScript
> **Modo por defecto:** DARK. Light es la variante (clase `.light` en `<html>`)

---

## Dirección Estética: "Constelación Técnica"

**Metáfora rectora:** un observatorio astronómico de alta precisión. Cielo nocturno profundo (navy, nunca negro puro), estrellas ámbar como acento, líneas de constelación en acero azul, tipografía editorial de instrumento científico (serif itálica + mono).

**Tono:** *Technical Precision* — oscuro, limpio, editorial, confiado. No flashy, no minimal. **Preciso.**

**Cómo se expresa:**
- Dark-first: fondo `#0A1929` (navy profundo, nunca `#000`), texto off-white `#F1F5F9` (nunca `#FFF` puro).
- El patrón **constelación** es la firma visual: backdrop fijo full-page, estático, GPU-friendly (SVG), con pocos nodos "estrella" ámbar que titilan suavemente.
- Pairing de marca: **nombre en serif itálica** (Instrument Serif) + **tagline en monospace** (JetBrains Mono).
- Acento **ámbar starlight** `#FBBF24` — 10% de la superficie (regla 60-30-10). Nada de azul genérico SaaS, nada de cian neón, nada de magenta, nada de gradientes púrpura→azul.
- Secciones numeradas editoriales (01.–05.), subrayados gradiente, layout asimétrico con sidebar sticky (patrón Brittany Chiang).
- **Prohibido:** hero card redondeada, glassmorphism decorativo, cards anidadas, layout centrado único, emoji-heavy (solo 1 🇨🇱 como trust signal), WebGL full-bleed.

---

## A. Tipografía

### A.1 Familias (cargadas con `next/font/google`)

| Rol | Fuente | Pesos | Uso |
|-----|--------|-------|-----|
| Display sans | **Space Grotesk** | 500, 600, 700 | Títulos de sección, headings, botones, monograma |
| Serif editorial | **Instrument Serif** (itálica) | 400 + italic | SOLO el nombre "Adrián" en el hero (voz de marca) |
| Body | **Inter** | 400, 500, 600 | Cuerpo, UI, navegación, formularios |
| Mono técnica | **JetBrains Mono** | 400, 500 | Taglines, links, números de sección, pills, meta, código |

**Regla anti-IA cumplida:** display (>2rem) usa Space Grotesk / Instrument Serif; cuerpo (<1.2rem) usa Inter. Inter NO es la única opción — es el tercero de cuatro, y el carácter lo ponen Space Grotesk + Instrument Serif + JetBrains Mono.

**Carga/rendimiento (Lighthouse >95):**
- `next/font/google` con `display: swap`.
- **Subset `latin-ext` OBLIGATORIO** (español: ñ, á, í → "Adrián", "Zamorano", "información", "Valparaíso").
- Pesos estrictos: Space Grotesk (500,600,700) · Inter (400,500,600) · JetBrains Mono (400,500) · Instrument Serif (400 + italic).
- Instrument Serif: preload solo si el hero es la primera pintura (lo es). Fallback si el presupuesto de peso se excede: **Fraunces** variable (solo eje italic+opsz) como alternativa documentada.

### A.2 Escala tipográfica (fluida)

| Token | Size | Line-height | Weight | Letter-spacing | Familia |
|-------|------|-------------|--------|----------------|---------|
| `--text-hero` | `clamp(3.25rem, 2.5rem + 6vw, 7.5rem)` (52→120px) | 1.02 | 400 (itálica) | -0.01em | Instrument Serif |
| `--text-tagline` | `clamp(0.875rem, 0.75rem + 0.5vw, 1.125rem)` | 1.6 | 500 | +0.08em (mayúsculas) | JetBrains Mono |
| `--text-h1` | `clamp(2.5rem, 2rem + 3vw, 4.5rem)` (40→72px) | 1.05 | 700 | -0.02em | Space Grotesk |
| `--text-h2` | `clamp(1.875rem, 1.5rem + 1.5vw, 3rem)` (30→48px) | 1.1 | 600 | -0.015em | Space Grotesk |
| `--text-h3` | `clamp(1.25rem, 1.125rem + 0.5vw, 1.625rem)` | 1.25 | 600 | -0.01em | Space Grotesk |
| `--text-h4` | `clamp(1.125rem, 1rem + 0.3vw, 1.375rem)` | 1.35 | 600 | -0.005em | Space Grotesk |
| `--text-lg` | `clamp(1.125rem, 1.0625rem + 0.25vw, 1.25rem)` | 1.7 | 400 | 0 | Inter |
| `--text-base` | `1rem` (16px — mínimo legal) | 1.65 | 400 | 0 | Inter |
| `--text-sm` | `0.875rem` | 1.6 | 400 | 0 | Inter |
| `--text-xs` | `0.75rem` | 1.5 | 500 | +0.04em | Inter / JetBrains Mono |
| `--text-mono-sm` | `0.8125rem` | 1.5 | 500 | +0.06em (mayúsculas) | JetBrains Mono |
| `--text-code` | `0.875rem` | 1.6 | 400 | 0 | JetBrains Mono |

**Reglas:**
- Ancho de línea de cuerpo: **máx. 68 caracteres** (75-char rule cumplida de sobra).
- `body { font-size: 1rem }` — nunca menos de 16px.
- Peso del hero (serif 400) MENOR que el h2 (600): inversión de peso deliberada, estilo editorial.
- Los números de sección (`01.`), taglines, pills, links y meta SIEMPRE en mono mayúsculas con tracking.

---

## B. Color

### B.1 Principios

- **Dark = default.** Light = variante `.light`.
- Tonos navy (azulados), nunca negro puro ni blanco puro.
- Escalas en **hex como valor autoritativo** (verificado WCAG) + referencia **OKLCH** en la tabla (B.6).
- Tokens **semánticos** primero; escalas crudas después.
- Regla 60-30-10: 60% neutros navy · 30% acero azul (secundario) · 10% ámbar (acento).

### B.2 Tokens semánticos

#### Dark (default — `:root`)

| Token | Valor | Uso |
|-------|-------|-----|
| `--background` | `#0A1929` | Fondo de página (navy profundo) |
| `--foreground` | `#F1F5F9` | Texto principal (off-white) |
| `--card` | `#0F2640` | Superficies elevadas (bento, wells) |
| `--card-foreground` | `#F1F5F9` | Texto sobre card |
| `--muted` | `#0C1E33` | Superficies rebajadas (inputs, wells) |
| `--muted-foreground` | `#A8B8C9` | Texto secundario |
| `--border` | `#1C304C` | Bordes por defecto |
| `--border-strong` | `#2B4365` | Bordes en hover/énfasis |
| `--primary` | `#FBBF24` | Acento ámbar starlight (CTAs, activos, estrellas) |
| `--primary-hover` | `#FCD34D` | Hover del acento |
| `--primary-foreground` | `#0A1929` | Texto sobre acento (navy oscuro) |
| `--secondary` | `#8FB5DC` | Acero azul — links y elementos secundarios |
| `--secondary-hover` | `#B9D0E8` | Hover de links |
| `--success` | `#34D399` | Badge "en producción", estados OK |
| `--danger` | `#F87171` | Errores, validación |
| `--info` | `#8FB5DC` | Información, tooltips |

#### Light (`.light`)

| Token | Valor | Uso |
|-------|-------|-----|
| `--background` | `#F5F7FA` | Fondo de página (off-white frío) |
| `--foreground` | `#0A1929` | Texto principal (navy profundo) |
| `--card` | `#FFFFFF` | Superficies elevadas |
| `--card-foreground` | `#0A1929` | Texto sobre card |
| `--muted` | `#EDF1F7` | Superficies rebajadas |
| `--muted-foreground` | `#3E5068` | Texto secundario |
| `--border` | `#E2E8F0` | Bordes por defecto |
| `--border-strong` | `#B7C5D6` | Bordes en hover/énfasis |
| `--primary` | `#B45309` | Ámbar oscuro para texto/iconos acento |
| `--primary-hover` | `#92400E` | Hover del acento |
| `--primary-foreground` | `#0A1929` | Texto sobre botón primario (ámbar-500 bg) |
| `--secondary` | `#2A5C94` | Acero azul — links |
| `--secondary-hover` | `#1E4A7A` | Hover de links |
| `--success` | `#047857` | Badge producción (texto) |
| `--danger` | `#B91C1C` | Errores |
| `--info` | `#2A5C94` | Información |

> Nota botón primario light: el botón usa bg `#F59E0B` (ámbar-500) con texto `#0A1929` (contraste 6.8:1). El token `--primary` en light (`#B45309`) es para acentos de texto/iconos.

### B.3 Escala neutral (11 pasos, tinte navy)

| Paso | Hex | OKLCH aprox. | Uso típico |
|------|-----|--------------|------------|
| 50  | `#F5F7FA` | `oklch(0.97 0.006 252)` | Fondo light |
| 100 | `#E9EEF5` | `oklch(0.93 0.012 252)` | Fondos light alternos |
| 200 | `#D7E0EB` | `oklch(0.88 0.02 252)` | Bordes light fuertes |
| 300 | `#B7C5D6` | `oklch(0.79 0.03 252)` | Bordes hover light |
| 400 | `#8FA3B8` | `oklch(0.68 0.04 252)` | Texto terciario dark (contraste 6.65:1 sobre bg) |
| 500 | `#64748B` | `oklch(0.55 0.04 250)` | ⚠️ SOLO decorativo/disabled (3.6:1 sobre bg dark) |
| 600 | `#46586E` | `oklch(0.43 0.04 250)` | Texto terciario light (7.6:1) |
| 700 | `#2C3D53` | `oklch(0.34 0.045 252)` | Hover borders |
| 800 | `#1C304C` | `oklch(0.28 0.045 252)` | Border default dark |
| 900 | `#0F2640` | `oklch(0.24 0.05 252)` | Surface dark (card) |
| 950 | `#0A1929` | `oklch(0.20 0.045 252)` | Background dark |
| — | `#060B14` | `oklch(0.12 0.03 252)` | Fondo footer / overlay (más profundo) |

### B.4 Escala ámbar (acento)

| Paso | Hex | OKLCH aprox. | Uso |
|------|-----|--------------|-----|
| 50  | `#FFFBEB` | `oklch(0.98 0.02 90)` | Tint ámbar light |
| 100 | `#FEF3C7` | `oklch(0.95 0.05 90)` | Badges light |
| 200 | `#FDE68A` | `oklch(0.90 0.09 90)` | — |
| 300 | `#FCD34D` | `oklch(0.87 0.12 90)` | Hover acento dark (`--primary-hover`) |
| 400 | `#FBBF24` | `oklch(0.83 0.14 85)` | **Acento principal** (`--primary`) |
| 500 | `#F59E0B` | `oklch(0.76 0.15 75)` | Botón primario light |
| 600 | `#D97706` | `oklch(0.66 0.14 65)` | — |
| 700 | `#B45309` | `oklch(0.55 0.12 55)` | Acento texto light (`--primary`) |
| 800 | `#92400E` | `oklch(0.46 0.11 50)` | Hover acento light |
| 900 | `#78350F` | `oklch(0.38 0.10 50)` | — |
| 950 | `#451A03` | `oklch(0.24 0.08 45)` | — |

### B.5 Escala acero azul (secundario)

| Paso | Hex | OKLCH aprox. | Uso |
|------|-----|--------------|-----|
| 50  | `#EEF4FA` | `oklch(0.96 0.012 255)` | — |
| 100 | `#DCE8F4` | `oklch(0.92 0.025 255)` | — |
| 200 | `#B9D0E8` | `oklch(0.85 0.04 255)` | Hover links dark (`--secondary-hover`) |
| 300 | `#8FB5DC` | `oklch(0.76 0.06 255)` | Links dark (`--secondary`) |
| 400 | `#5E93C8` | `oklch(0.65 0.08 255)` | Líneas constelación |
| 500 | `#3E73AE` | `oklch(0.54 0.09 255)` | — |
| 600 | `#2A5C94` | `oklch(0.46 0.10 255)` | Links light (`--secondary`) |
| 700 | `#1E4A7A` | `oklch(0.38 0.09 255)` | Nodos constelación light |
| 800 | `#163757` | `oklch(0.30 0.08 255)` | — |
| 900 | `#10273F` | `oklch(0.24 0.06 255)` | — |
| 950 | `#0A1929` | `oklch(0.20 0.045 252)` | — |

### B.6 Verificación WCAG AA (4.5:1 mínimo)

| Par de colores | Contraste | Cumple |
|----------------|-----------|--------|
| `#F1F5F9` sobre `#0A1929` (texto/bg dark) | 13.8:1 | ✅ AAA |
| `#F1F5F9` sobre `#0F2640` (texto/card dark) | 11.9:1 | ✅ AAA |
| `#A8B8C9` sobre `#0A1929` (secundario dark) | 8.5:1 | ✅ AAA |
| `#7E91A8` sobre `#0A1929` (terciario dark) | 5.3:1 | ✅ AA |
| `#FBBF24` sobre `#0A1929` (acento sobre bg) | 9.6:1 | ✅ AAA |
| `#0A1929` sobre `#FBBF24` (texto en botón primario) | 9.6:1 | ✅ AAA |
| `#8FB5DC` sobre `#0A1929` (link dark) | 8.0:1 | ✅ AAA |
| `#34D399` sobre `#0A1929` (badge producción) | 8.7:1 | ✅ AAA |
| `#F87171` sobre `#0A1929` (error dark) | 6.1:1 | ✅ AA |
| `#0A1929` sobre `#F5F7FA` (texto/bg light) | 15.6:1 | ✅ AAA |
| `#3E5068` sobre `#F5F7FA` (secundario light) | 7.6:1 | ✅ AAA |
| `#B45309` sobre `#F5F7FA` (acento texto light) | 6.3:1 | ✅ AA |
| `#0A1929` sobre `#F59E0B` (botón primario light) | 6.8:1 | ✅ AA |
| `#2A5C94` sobre `#F5F7FA` (link light) | 6.6:1 | ✅ AA |
| `#047857` sobre `#F5F7FA` (badge producción light) | 5.2:1 | ✅ AA |

**Prohibido usar como texto:** `neutral-500` en dark (3.6:1) — solo decorativo/disabled.

### B.7 Sistema de gradientes

```css
/* Brand (ámbar — CTAs, subrayados, énfasis) */
--gradient-brand:      linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%);
--gradient-underline:  linear-gradient(90deg, #FBBF24 0%, rgba(251, 191, 36, 0) 100%);
/* Atmospheric (cielo nocturno — hero, secciones) */
--gradient-sky:        radial-gradient(ellipse 120% 80% at 70% -20%, #142E4E 0%, rgba(10, 25, 41, 0) 55%);
--gradient-abyss:      linear-gradient(180deg, #0A1929 0%, #060B14 100%);  /* footer / overlay */
/* Functional (light — alternancia de secciones) */
--gradient-section-light: linear-gradient(180deg, #F5F7FA 0%, #EDF1F7 100%);
--gradient-section-dark:  linear-gradient(180deg, #0A1929 0%, #0C1E33 100%);
```

**Prohibido:** gradientes púrpura→azul, cian neón, magenta, glow oscuro.

---

## C. Motion

### C.1 Tokens

```css
--duration-micro:    120ms;   /* feedback de press */
--duration-fast:     200ms;   /* hovers de botones/links/cards */
--duration-standard: 300ms;   /* transiciones de página, overlay */
--duration-slow:     500ms;   /* reveals de headers de sección */
--duration-reveal:   650ms;   /* scroll-reveal de bloques grandes */
--ease-expo:         cubic-bezier(0.16, 1, 0.3, 1);   /* EASING PRINCIPAL — sin bounce */
--ease-quart:        cubic-bezier(0.25, 1, 0.5, 1);   /* secundario */
--ease-standard:     cubic-bezier(0.4, 0, 0.2, 1);    /* micro/opacity */
--stagger:           80ms;     /* delay entre hermanos (máx. 4) */
```

### C.2 Patrones

| Patrón | Propiedades animadas | Duración | Easing | Descripción |
|--------|---------------------|----------|--------|-------------|
| Scroll-reveal (bloque) | `opacity`, `translateY(24px→0)` | 650ms | expo | Fade-in + slide-up al entrar en viewport (once) |
| Scroll-reveal (header sección) | `opacity`, `translateY(16px→0)` | 500ms | expo | Número mono + título + underline en cascada |
| Stagger | delay `80ms × índice` (máx. 4) | — | — | Grupos: stats, pills, cards bento |
| Hover card | `translateY(-4px)`, `border-color` | 200ms | expo | Card bento: elevación + borde ámbar; thumbnail `scale(1.03)` interno |
| Hover botón | `background-color`, `translateY(-2px)` | 200ms | expo | Sin scale completo |
| Hover link | `background-size` (underline draw 0→100%) | 200ms | standard | Subrayado mono con degradado |
| Press botón | `translateY(0)` | 120ms | standard | Feedback táctil |
| Parallax constelación | `translateY` (scroll × 0.15, máx. 60px) | n/a (scroll) | linear | Framer Motion `useScroll` + `useTransform` |
| Twinkle estrellas | `opacity` 0.4→1→0.4 | 4–7s loop | ease-in-out | Solo ~8 nodos ámbar, delays escalonados |
| Transición de página | `opacity` (fade) | 300ms | standard | App Router View Transition o AnimatePresence |
| Overlay menú móvil | `opacity`, `clip-path` o `translateX` | 300ms | expo | Panel sólido (no glass) |
| Badge producción | `opacity` del dot 0.5→1 | 2.4s loop | ease-in-out | Punto emerald latiendo sutil |

### C.3 Reglas de rendimiento y accesibilidad

1. **Solo `transform` y `opacity`** (GPU-accelerated). Prohibido animar `width`, `height`, `box-shadow`, `background-position` en loops.
2. Interacciones < 200ms; reveals ≤ 650ms.
3. **Sin bounce/elastic easing** — `--ease-expo` es la única curva de overshoot permitida (sin sobrepasar).
4. `prefers-reduced-motion: reduce` → **desactivar todo** (twinkle, parallax, reveals instantáneos, transiciones de página sin fade):

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

5. Los reveals con Framer Motion usan `useReducedMotion()`: si reduce → render visible sin transform.
6. El canvas actual (`ParticleNetwork.tsx`) con `requestAnimationFrame` se **reemplaza por SVG estático** (ver E.1) — cero costo de CPU permanente, hidratación determinista, mismo look.

---

## D. Composición

### D.1 Grid y contenedores

- **Grid base:** 12 columnas, gap `1.5rem` (mobile) / `2rem` (xl+).
- **Sidebar desktop (lg+):** columna fija `300px` (lg) / `320px` (xl), sticky `top-0`, `height: 100vh`, borde derecho `1px var(--border)`. Contenido principal ocupa el resto.
- **Contenedor de contenido:** `max-width: 1200px`, padding `1.5rem` (mobile) / `3rem` (desktop).
- **Columna de texto corporal:** máx. `68ch` — el hero y los párrafos largos nunca superan esto.
- **Bento:** sub-grid de 12 col dentro del contenedor.

### D.2 Escala de espaciado

| Token | Valor | Uso |
|-------|-------|-----|
| `--space-1` | `0.25rem` | Micro |
| `--space-2` | `0.5rem` | Gap interno pill |
| `--space-3` | `0.75rem` | Gap compacto |
| `--space-4` | `1rem` | Padding estándar |
| `--space-6` | `1.5rem` | Gap entre elementos |
| `--space-8` | `2rem` | Gap de grupos |
| `--space-12` | `3rem` | Separación de componentes |
| `--space-16` | `4rem` | Separación de bloques |
| `--space-24` | `6rem` | Ritmo de sección mobile |
| `--space-32` | `8rem` | Ritmo de sección desktop |
| `--space-40` | `10rem` | Ritmo de secciones grandes (hero→01) |

Regla anti-IA: secciones `padding ≥ 2rem`, cards `padding ≥ 1rem`, targets táctiles `≥ 44px`.

### D.3 Layouts clave

**Shell desktop (lg+):**
```
┌──────────┬──────────────────────────────────────────┐
│ Sidebar  │ Contenido principal (scrollea)           │
│ 300-320px│ ┌────────────────────────────────────┐   │
│ AZ.      │ │ 01 Hero (asimétrico 7/5)          │   │
│ nav mono │ ├────────────────────────────────────┤   │
│ numerada │ │ 02 Sobre mí                       │   │
│ status   │ ├────────────────────────────────────┤   │
│ socials  │ │ 03 Proyectos (bento)              │   │
│          │ ├────────────────────────────────────┤   │
│          │ │ 04 Skills · 05 Metodología ·      │   │
│          │ │ 06 Contacto · Footer              │   │
└──────────┴──────────────────────────────────────────┘
```

**Hero asimétrico (7/5):** izquierda = status pill + nombre serif itálica + tagline mono + intro + 2 CTAs + links sociales; derecha = retrato con marco técnico (esquinas de registro) + caption mono + cluster constelación detrás.

**Bento proyectos (12-col):**
- Card A (Chambecas): `col-span-7` × 2 filas (featured grande)
- Card B (SebaTatto): `col-span-5` × 1 fila
- Card C (Tragaperras): `col-span-5` × 1 fila
- Tira "50+ proyectos locales": fila completa, scroll horizontal de pills/celdas compactas + link a GitHub
- Mobile: 1 columna apilada (A grande, B, C)

**Secciones numeradas:** `01.` mono ámbar + título Space Grotesk + subrayado gradiente `--gradient-underline` (4rem × 2px, debajo del título).

### D.4 Breakpoints

| Breakpoint | Ancho | Cambios |
|------------|-------|---------|
| base | <640px | 1 col, topbar + overlay, hero apilado |
| sm | 640px | stats en 2 col |
| md | 768px | hero texto 6/6? NO — hero texto full, retrato abajo en 2-col |
| lg | 1024px | **sidebar aparece**, bento 2-col |
| xl | 1280px | bento 3-col (7/5/5), sidebar 320px |
| 2xl | 1536px | contenedor 1200px centrado |

### D.5 Z-index

| Capa | Valor |
|------|-------|
| Constelación (backdrop fijo) | `0` |
| Dotted grid / texturas | `1` |
| Contenido | `10` |
| Sidebar / topbar sticky | `40` |
| Overlay menú móvil | `50` |
| Modal / quick view | `60` |
| Focus ring | automático (siempre visible) |

---

## E. Textura

### E.1 Constelación — LA firma visual (backdrop full-page)

**Reemplaza `ParticleNetwork.tsx` (canvas animado) por un SVG estático** — mismo lenguaje visual, 0% CPU en idle, determinista (sin hydration mismatch), accesible (`aria-hidden`).

**Spec:**
- Contenedor: `<div class="constellation" aria-hidden="true">` → `position: fixed; inset: 0; z-index: 0; pointer-events: none;`
- SVG: `viewBox="0 0 1440 900"`, `preserveAspectRatio="xMidYMid slice"`, `width/height: 100%`.
- **Nodos (círculos):** 70–90, `r` 1–2.5px, `fill: var(--constellation-node)` (= `#8FB5DC` dark / `#1E4A7A` light), opacidad 0.15–0.45.
- **Estrellas (ámbar):** ~12% de los nodos (`r` 1.5–3px, `fill: #FBBF24`, opacidad 0.5–0.9, clase `.star` con twinkle CSS 4–7s, delays escalonados).
- **Conexiones (líneas):** pares con distancia < 110 unidades del viewBox, `stroke: var(--constellation-line)` (= `#5E93C8` dark / `#5E93C8` light con alpha), `stroke-width: 0.75`, opacidad 0.05–0.14.
- **Composición:** cluster denso arriba-derecha (detrás del retrato) y centro-izquierda; degradado natural hacia abajo.
- **Parallax:** wrapper con `useScroll` + `useTransform(0→60px, scroll × 0.15)`, transform-only, desactivado con reduced-motion.
- **Generación:** PRNG con seed fija (p. ej. `seed = 2026`) para que el patrón sea idéntico entre renders/servidor-cliente.
- **Light mode:** nodos `#1E4A7A` opacidad 0.10–0.30, líneas `#5E93C8` alpha 0.08, estrellas ámbar-700 `#B45309` opacidad 0.4–0.7.

```css
.constellation { position: fixed; inset: 0; z-index: 0; pointer-events: none; }
@keyframes twinkle { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }
.constellation .star { animation: twinkle 5s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) { .constellation .star { animation: none; } }
```

### E.2 Dotted grid

```css
.texture-dots {
  background-image: radial-gradient(var(--dot-color) 1px, transparent 1px);
  background-size: 24px 24px;
}
/* dark:  --dot-color: rgba(143, 181, 220, 0.06) */
/* light: --dot-color: rgba(30, 74, 122, 0.07) */
```
Uso puntual (no global): fondo de la sección Skills, columna de metadata en casos de estudio, borde superior del footer. Sparse.

### E.3 Sombras (elevación — RESTRINGIDA)

Sin sombra por defecto en cards (regla anti-IA). Sombras solo para elementos flotantes/overlays:

| Token | Valor dark | Valor light |
|-------|-----------|-------------|
| `--shadow-xs` | `0 1px 2px rgba(2, 6, 17, 0.40)` | `0 1px 2px rgba(10, 25, 41, 0.06)` |
| `--shadow-sm` | `0 2px 8px rgba(2, 6, 17, 0.40)` | `0 2px 8px rgba(10, 25, 41, 0.08)` |
| `--shadow-md` | `0 8px 24px rgba(2, 6, 17, 0.50)` | `0 8px 24px rgba(10, 25, 41, 0.10)` — sticky nav, modales |
| `--shadow-lg` | `0 16px 48px rgba(2, 6, 17, 0.55)` | `0 16px 48px rgba(10, 25, 41, 0.14)` — overlay |

**Prohibido:** glow/box-shadow brillante sobre oscuro (dark-glow).

### E.4 Radios

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius-sm` | `0.25rem` | Inputs, campos de formulario |
| `--radius-md` | `0.5rem` | Cards bento, case study |
| `--radius-lg` | `0.75rem` | Modales |
| `--radius-full` | `9999px` | Pills, botones, status dot |

**Estética "instrumento":** radios pequeños y controlados (4–8px). Nada de hero card redondeada, nada de botones gigante-pill.

### E.5 Glass (restringido — solo funcional)

- **Topbar mobile / sidebar:** `background: color-mix(in oklab, var(--background) 78%, transparent)` + `backdrop-filter: blur(12px)` + `border-bottom: 1px solid var(--border)`. Es FUNCIONAL (mantiene legibilidad bajo scroll), no decorativo.
- Prohibido en: cards, hero, pills, secciones.

---

## F. Componentes

### F.1 Navegación

**Desktop (lg+):** sidebar fija 300–320px, sticky, `height: 100vh`, borde derecho.
- **Logo:** monograma `AZ.` — Space Grotesk 700, `1.5rem`, foreground; punto ámbar `●` de 8px como "estrella" sobre la "A" o tras el punto final.
- **Links:** mono `0.8125rem` mayúsculas, numerados: `01. Sobre mí`, `02. Proyectos`, `03. Habilidades`, `04. Metodología`, `05. Contacto`.
  - Default: `--muted-foreground`; hover: `--foreground` con underline draw; activo: `--primary` + número visible en ámbar.
  - **Prohibido:** borde lateral indicador (anti-IA side-tab-borders).
- **Fondo:** status pill `● Disponible para proyectos` (dot emerald + ring pulse).
- **Sociales:** `GitHub ↗`, `LinkedIn ↗`, `Email ↗` en mono, con underline draw.

**Mobile (<lg):** topbar fija 64px (AZ. + hamburguesa 2 líneas → ✕). Overlay full-screen sólido `#060B14` con constelación tenue, links Space Grotesk `2rem` numerados, cerrar con ✕. Sin glass.

### F.2 Botones (3 variantes — regla anti-IA)

Base: `min-height: 48px`, `padding: 0.875rem 1.75rem`, `font: mono 0.8125rem uppercase`, `letter-spacing: 0.08em`, `border-radius: var(--radius-sm)`, `transition: 200ms var(--ease-expo)` sobre `background-color/transform`, focus ring `2px --primary` offset `3px`.

| Variante | Default | Hover | Active |
|----------|---------|-------|--------|
| **Primary** | bg `--primary` (`#FBBF24`), texto `--primary-foreground` (`#0A1929`) | bg `--primary-hover` (`#FCD34D`), `translateY(-2px)` | `translateY(0)` |
| **Secondary** | bg transparente, borde `1px --border-strong`, texto `--foreground` | borde `--primary`, texto `--primary` | — |
| **Ghost** | texto `--secondary`, sin borde | underline draw ámbar | — |

Textos concretos (nunca genéricos): `VER PROYECTOS ↗`, `CONTACTAR`, `DESCARGAR CV`, `VER CASO ↗`.

### F.3 Status pill

```
● Disponible para proyectos
```
- Dot 8px `--success` (`#34D399`) con ring 2px `rgba(52, 211, 153, 0.25)`, pulse opacity 2.4s.
- Texto mono `0.75rem` uppercase, tracking `0.08em`, `--muted-foreground`.
- Borde `1px --border-strong`, radius-full, padding `0.375rem 1rem`.

### F.4 Badges y pills técnicas

| Elemento | Spec |
|----------|------|
| Badge "EN PRODUCCIÓN" | dot emerald + mono `0.6875rem`→ usar `0.75rem`, uppercase, borde `1px rgba(52,211,153,0.3)` |
| Badge "LOCAL" | mono `0.75rem`, `--muted-foreground`, borde `--border` |
| Tech pill | mono `0.75rem`, `--muted-foreground`, borde `1px --border`, radius-full, padding `0.25rem 0.75rem` |

### F.5 Card bento de proyecto

- **Estructura plana** (sin card-anidada): contenedor `border: 1px var(--border)`, `bg: var(--card)`, `radius-md`, `padding: 0` (imagen al tope) + `padding: 1.5rem` en contenido.
- **Thumbnail:** `aspect-ratio: 16/10` (A featured: 16/8), `object-cover`, `overflow-hidden`, `scale(1.03)` en hover (transform interno).
- **Contenido:** título Space Grotesk h3, descripción `--text-sm` `--muted-foreground`, tech pills, badge producción/local, link `VER CASO ↗` mono.
- **Hover:** `translateY(-4px)` + `border-color: rgba(251,191,36,0.4)`, 200ms expo. **Sin sombra.**
- **Accesible:** `<article>` + `<a>` stretch (whole card clickable con `::after`).

### F.6 Header de sección (editorial)

```
01.
Sobre Mí
────────────────────────────── (gradient underline, 4rem × 2px)
```
- Número mono `0.875rem` `--primary` + título Space Grotesk h2 + subrayado `--gradient-underline`.
- Reveal en cascada: número → título → underline (500ms, stagger 80ms).

### F.7 Stats (planas, sin mini-cards)

```
50+  proyectos construidos      3   en producción      2  años con SDD + IA
```
Filas con `border-bottom: 1px var(--border)`, número Space Grotesk 700 `clamp(2rem, 4vw, 3rem)` en `--foreground`, label mono `0.75rem` uppercase `--muted-foreground`. Separador `·` en ámbar entre stats (opcional).

### F.8 Skills (listas planas — patrón variado, no cards)

Categoría como heading mono `0.75rem` uppercase `--primary` + filas `border-bottom` con tech en mono `--text-sm` + nivel/uso en `--muted-foreground`. Sin icon-tiles, sin cards.

### F.9 Ciclo SDD (diagrama de flujo)

5 nodos en fila (mobile: vertical): `SPEC → PLAN → TASKS → IMPLEMENT → VERIFY`.
- Nodo: número mono `--primary` + label mono uppercase; conector: línea 1px `--border-strong` con chevron `→` mono ámbar.
- Nodo actual/énfasis en cada caso de estudio: borde ámbar.

### F.10 Formulario de contacto

- Campos: label visible mono `0.75rem` uppercase (NUNCA placeholder como label), input `bg: var(--muted)`, `border: 1px var(--border)`, `radius-sm`, `min-height: 48px`, focus `border: --primary` + ring.
- Error: texto `--danger` debajo del campo + borde `--danger`.
- Estado vacío de éxito: "Mensaje enviado ✓ — respondo en < 24h".
- Submit: botón primary.

### F.11 Retrato (trust signal)

- Foto real (`imagenes/Yo.png`), `aspect-ratio: 3/4`, `object-cover`, borde `1px var(--border)`.
- **Marco técnico:** 4 esquinas de registro (crosshair +) en `--primary`, a 8px de las esquinas — detalle "instrumento de precisión".
- Caption mono: `fig. 01 — Adrián Zamorano · Valparaíso, Chile 🇨🇱`.
- Detrás: cluster constelación denso + `--gradient-sky`.

### F.12 Links con marcador ↗

Todo enlace externo lleva `↗` (mono, `--secondary`, no emoji): GitHub, LinkedIn, proyectos, email. El `↗` es marca del portafolio.

---

## G. Bloque CSS completo para `src/app/globals.css`

> Copy-paste listo. Tailwind v4 + `@theme inline` (patrón del proyecto). Dark = `:root`; light = `.light` en `<html>`.

```css
@import "tailwindcss";

/* ═══════════════════════════════════════════════════════════
   Portafolio Adrián Zamorano — Design System "Constelación Técnica" v2
   DARK = default · LIGHT = clase .light en <html>
   ═══════════════════════════════════════════════════════════ */

@custom-variant light (&:where(.light, .light *));

@theme inline {
  /* ─── Tipografía (cargada en layout.tsx con next/font/google) ─── */
  --font-display: var(--font-space-grotesk), "Space Grotesk", sans-serif;
  --font-serif:   var(--font-instrument-serif), "Instrument Serif", Georgia, serif;
  --font-body:    var(--font-inter), "Inter", sans-serif;
  --font-mono:    var(--font-jetbrains-mono), "JetBrains Mono", monospace;

  /* ─── Tokens semánticos → utilidades ─── */
  --color-background:       var(--background);
  --color-foreground:       var(--foreground);
  --color-card:             var(--card);
  --color-card-foreground:  var(--card-foreground);
  --color-muted:            var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-border:           var(--border);
  --color-border-strong:    var(--border-strong);
  --color-primary:          var(--primary);
  --color-primary-hover:    var(--primary-hover);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary:        var(--secondary);
  --color-secondary-hover:  var(--secondary-hover);
  --color-success:          var(--success);
  --color-danger:           var(--danger);
  --color-info:             var(--info);

  /* ─── Escalas crudas ─── */
  --color-neutral-50:  #F5F7FA;
  --color-neutral-100: #E9EEF5;
  --color-neutral-200: #D7E0EB;
  --color-neutral-300: #B7C5D6;
  --color-neutral-400: #8FA3B8;
  --color-neutral-500: #64748B;
  --color-neutral-600: #46586E;
  --color-neutral-700: #2C3D53;
  --color-neutral-800: #1C304C;
  --color-neutral-900: #0F2640;
  --color-neutral-950: #0A1929;

  --color-amber-50:  #FFFBEB;
  --color-amber-100: #FEF3C7;
  --color-amber-200: #FDE68A;
  --color-amber-300: #FCD34D;
  --color-amber-400: #FBBF24;
  --color-amber-500: #F59E0B;
  --color-amber-600: #D97706;
  --color-amber-700: #B45309;
  --color-amber-800: #92400E;
  --color-amber-900: #78350F;
  --color-amber-950: #451A03;

  --color-steel-50:  #EEF4FA;
  --color-steel-100: #DCE8F4;
  --color-steel-200: #B9D0E8;
  --color-steel-300: #8FB5DC;
  --color-steel-400: #5E93C8;
  --color-steel-500: #3E73AE;
  --color-steel-600: #2A5C94;
  --color-steel-700: #1E4A7A;
  --color-steel-800: #163757;
  --color-steel-900: #10273F;
  --color-steel-950: #0A1929;

  /* ─── Tipografía fluida ─── */
  --text-hero:     clamp(3.25rem, 2.5rem + 6vw, 7.5rem);
  --text-tagline:  clamp(0.875rem, 0.75rem + 0.5vw, 1.125rem);
  --text-h1:       clamp(2.5rem, 2rem + 3vw, 4.5rem);
  --text-h2:       clamp(1.875rem, 1.5rem + 1.5vw, 3rem);
  --text-h3:       clamp(1.25rem, 1.125rem + 0.5vw, 1.625rem);
  --text-h4:       clamp(1.125rem, 1rem + 0.3vw, 1.375rem);
  --text-lg:       clamp(1.125rem, 1.0625rem + 0.25vw, 1.25rem);
  --text-mono-sm:  0.8125rem;

  /* ─── Sombras ─── */
  --shadow-xs: 0 1px 2px rgba(2, 6, 17, 0.40);
  --shadow-sm: 0 2px 8px rgba(2, 6, 17, 0.40);
  --shadow-md: 0 8px 24px rgba(2, 6, 17, 0.50);
  --shadow-lg: 0 16px 48px rgba(2, 6, 17, 0.55);

  /* ─── Radios ─── */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-full: 9999px;

  /* ─── Motion ─── */
  --duration-micro: 120ms;
  --duration-fast: 200ms;
  --duration-standard: 300ms;
  --duration-slow: 500ms;
  --duration-reveal: 650ms;
  --ease-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-quart: cubic-bezier(0.25, 1, 0.5, 1);
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);

  /* ─── Espaciado ─── */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;
  --space-32: 8rem;
  --space-40: 10rem;
}

/* ═══════════ DARK MODE (DEFAULT) ═══════════ */
:root {
  --background: #0A1929;
  --foreground: #F1F5F9;
  --card: #0F2640;
  --card-foreground: #F1F5F9;
  --muted: #0C1E33;
  --muted-foreground: #A8B8C9;
  --border: #1C304C;
  --border-strong: #2B4365;
  --primary: #FBBF24;
  --primary-hover: #FCD34D;
  --primary-foreground: #0A1929;
  --secondary: #8FB5DC;
  --secondary-hover: #B9D0E8;
  --success: #34D399;
  --danger: #F87171;
  --info: #8FB5DC;

  /* Textura constelación (dark) */
  --constellation-node: #8FB5DC;
  --constellation-line: #5E93C8;
  --constellation-star: #FBBF24;
  --dot-color: rgba(143, 181, 220, 0.06);

  /* Gradientes */
  --gradient-brand: linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%);
  --gradient-underline: linear-gradient(90deg, #FBBF24 0%, rgba(251, 191, 36, 0) 100%);
  --gradient-sky: radial-gradient(ellipse 120% 80% at 70% -20%, #142E4E 0%, rgba(10, 25, 41, 0) 55%);
  --gradient-abyss: linear-gradient(180deg, #0A1929 0%, #060B14 100%);
  --gradient-section: linear-gradient(180deg, #0A1929 0%, #0C1E33 100%);

  color-scheme: dark;
}

/* ═══════════ LIGHT MODE (variante) ═══════════ */
.light {
  --background: #F5F7FA;
  --foreground: #0A1929;
  --card: #FFFFFF;
  --card-foreground: #0A1929;
  --muted: #EDF1F7;
  --muted-foreground: #3E5068;
  --border: #E2E8F0;
  --border-strong: #B7C5D6;
  --primary: #B45309;
  --primary-hover: #92400E;
  --primary-foreground: #0A1929;
  --secondary: #2A5C94;
  --secondary-hover: #1E4A7A;
  --success: #047857;
  --danger: #B91C1C;
  --info: #2A5C94;

  --constellation-node: #1E4A7A;
  --constellation-line: #5E93C8;
  --constellation-star: #B45309;
  --dot-color: rgba(30, 74, 122, 0.07);

  --gradient-brand: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
  --gradient-underline: linear-gradient(90deg, #B45309 0%, rgba(180, 83, 9, 0) 100%);
  --gradient-sky: radial-gradient(ellipse 120% 80% at 70% -20%, #DCE8F4 0%, rgba(245, 247, 250, 0) 55%);
  --gradient-abyss: linear-gradient(180deg, #F5F7FA 0%, #E9EEF5 100%);
  --gradient-section: linear-gradient(180deg, #F5F7FA 0%, #EDF1F7 100%);

  color-scheme: light;
}

/* ═══════════ Base ═══════════ */
html { scroll-behavior: smooth; }
body {
  background-color: var(--background);
  color: var(--foreground);
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
::selection { background: var(--primary); color: var(--primary-foreground); }

/* ═══════════ Constelación (firma visual) ═══════════ */
.constellation { position: fixed; inset: 0; z-index: 0; pointer-events: none; }
@keyframes twinkle { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }
.constellation .star { animation: twinkle 5s ease-in-out infinite; }

/* ═══════════ Dotted grid ═══════════ */
.texture-dots {
  background-image: radial-gradient(var(--dot-color) 1px, transparent 1px);
  background-size: 24px 24px;
}

/* ═══════════ Glass funcional (topbar/sidebar sticky) ═══════════ */
.glass-sticky {
  background: color-mix(in oklab, var(--background) 78%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

/* ═══════════ Underline draw para links ═══════════ */
.link-underline {
  background-image: linear-gradient(var(--primary), var(--primary));
  background-size: 0% 1px;
  background-repeat: no-repeat;
  background-position: 0 100%;
  transition: background-size 200ms var(--ease-standard);
}
.link-underline:hover, .link-underline:focus-visible { background-size: 100% 1px; }

/* ═══════════ Focus visible global ═══════════ */
:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 3px;
  border-radius: 2px;
}

/* ═══════════ Reduced motion ═══════════ */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .constellation .star { animation: none; }
  html { scroll-behavior: auto; }
}
```

---

## H. Notas de implementación para Developer

1. **`layout.tsx`:** cargar las 4 familias con `next/font/google`, subset `latin-ext`, `display: swap`. Variables CSS: `--font-space-grotesk`, `--font-instrument-serif`, `--font-inter`, `--font-jetbrains-mono` (o los nombres que devuelva next/font).
2. **Dark/light toggle:** clase `.light` en `<html>` (botón sol/luna en sidebar y topbar). Default: sin clase = dark. Respetar `prefers-color-scheme` solo si no hay preferencia explícita guardada (localStorage).
3. **Constelación:** reemplazar `ParticleNetwork.tsx` (canvas rAF) por componente `Constellation.tsx` que renderiza SVG estático con PRNG seed 2026. Twinkle con CSS. Parallax con Framer Motion `useScroll` (desactivado con `useReducedMotion`).
4. **Framer Motion:** `motion.div` para reveals con `initial={{ opacity: 0, y: 24 }}` → `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true, margin: "-80px" }}`, `transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}`. Respeta reduced-motion.
5. **Performance:** sin WebGL; SVG estático; imágenes con `next/image` + `priority` solo hero/retrato; fuentes con subset mínimo.
6. **Contraste:** no usar `text-neutral-500` como texto en dark. Mantener los pares de la tabla B.6.
7. **Nombres Tailwind:** usar utilidades semánticas (`bg-background`, `text-foreground`, `border-border`, `bg-primary`, `text-muted-foreground`, `font-mono`, `font-display`, `font-serif`). Escalas: `bg-neutral-800`, `text-amber-300`, `border-steel-400`, etc.

---

## I. Checklist de validación

- [ ] Dark es default; light vía `.light`; toggle funcional
- [ ] Contraste AA (≥4.5:1) en todos los pares usados como texto (tabla B.6)
- [ ] 4 familias con `latin-ext` y pesos mínimos; sin Inter como única opción
- [ ] Sin gradiente púrpura→azul, sin magenta, sin cian neón, sin glow oscuro
- [ ] Sin glassmorphism decorativo (solo topbar/sidebar sticky funcional)
- [ ] Sin hero card redondeada; radios ≤ 8px en cards
- [ ] Sin cards anidadas; patrones variados (bento + listas planas + stats planas)
- [ ] Motion solo transform/opacity; expo-out sin bounce; <200ms interacciones; reduced-motion OK
- [ ] Constelación estática SVG con parallax suave y twinkle limitado a ~8 nodos
- [ ] Targets táctiles ≥ 44px; focus visible en todo elemento interactivo
- [ ] Labels visibles en formularios; errores y estados vacíos diseñados
- [ ] Línea de texto ≤ 68 caracteres; body ≥ 16px
