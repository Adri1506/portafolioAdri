# Screens & Flows — Portafolio Adrián Zamorano

> **Versión:** 2.0 — Rediseño 2026 "Constelación Técnica"
> Actualizado para: sidebar sticky desktop, hero asimétrico 7/5, secciones numeradas, bento de proyectos.

---

## User Flows

### Flow Principal (Reclutador)
```
Landing (hero + constelación)
  → 01. Sobre Mí        (bio, stats, trayectoria compacta)
  → 02. Proyectos       (bento: 3 en producción)
    → Caso Chambecas    (detalle /projects/chambecas)
    → Caso SebaTatto    (detalle /projects/sebatatto)
    → Caso Tragaperras  (detalle /projects/tragaperras)
  → 03. Habilidades     (stack técnico)
  → 04. Metodología SDD (spec → plan → tasks → implement → verify)
  → 05. Contacto        (formulario + links directos)
```

### Flow Secundario (Cliente potencial)
```
Landing
  → 04. Metodología SDD   (qué ofrezco y cómo trabajo)
  → 02. Proyectos         (prueba social en producción)
    → Casos de estudio
  → 05. Contacto          (cotización / consulta)
```

### Flow Rápido (Dev reclutador)
```
Landing → 02. Proyectos → 03. Habilidades → 05. Contacto
```

### Accesos directos desde sidebar (siempre visibles)
```
[AZ.] · 01. Sobre mí · 02. Proyectos · 03. Habilidades · 04. Metodología · 05. Contacto
● Disponible para proyectos · GitHub ↗ · LinkedIn ↗ · Email ↗
```

---

## Sitemap

```
/                    → Landing (hero + 01-05 + footer, single-page)
/about               → Bio extendida + trayectoria completa (timeline)
/projects            → Grid completo (bento + lista)
/projects/[id]       → Caso de estudio (chambecas, sebatatto, tragaperras)
/skills              → Stack detallado por categoría
/methodology         → Metodología SDD en profundidad
/contact             → Formulario + alternativas directas
/timeline            → Trayectoria 2024-2026 detallada
/not-found           → 404 con constelación
```

---

## Screens / Páginas

### 1. Shell Desktop (lg+, 1024px+)

```
┌──────────┬──────────────────────────────────────────────────────┐
│ SIDEBAR  │  MAIN (scroll)                                       │
│ 300-320px│                                                       │
│ ┌──────┐ │  ┌────────────────────────────────────────────────┐  │
│ │ AZ.● │ │  │ ★ HERO (sección 01)                            │  │
│ └──────┘ │  └────────────────────────────────────────────────┘  │
│          │  ┌────────────────────────────────────────────────┐  │
│ 01. Sobre│  │ ★ 02 · Sobre Mí                               │  │
│ 02. Proy.│  └────────────────────────────────────────────────┘  │
│ 03. Hab. │  ┌────────────────────────────────────────────────┐  │
│ 04. Met. │  │ ★ 03 · Proyectos (bento)                      │  │
│ 05. Cont.│  └────────────────────────────────────────────────┘  │
│          │  ┌────────────────────────────────────────────────┐  │
│ ● Disp.  │  │ ★ 04 · Habilidades                            │  │
│          │  └────────────────────────────────────────────────┘  │
│ GitHub ↗ │  ┌────────────────────────────────────────────────┐  │
│ LinkedIn↗│  │ ★ 05 · Metodología SDD                         │  │
│ Email ↗  │  └────────────────────────────────────────────────┘  │
│          │  ┌────────────────────────────────────────────────┐  │
│          │  │ ★ 06 · Contacto                               │  │
│          │  └────────────────────────────────────────────────┘  │
│          │  ┌────────────────────────────────────────────────┐  │
│          │  │ Footer                                         │  │
│          │  └────────────────────────────────────────────────┘  │
└──────────┴──────────────────────────────────────────────────────┘
   Constelación fija (z-0) detrás de TODO el layout (z-10)
```

**Elementos sidebar:**
- Monograma `AZ.` (Space Grotesk 700, punto ámbar `●` como estrella)
- Nav mono numerada: default muted → hover foreground → activo ámbar (sin borde lateral)
- Status pill `● Disponible para proyectos` (dot emerald + pulse)
- Sociales mono con `↗`
- Toggle sol/luna (dark/light) arriba o abajo

---

### 2. Hero — Sección 01 (asimétrico 7/5)

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│  [● Disponible para proyectos]                     (constelación │
│                                                   densa aquí ☄) │
│  Adrián            ┌──────────────────────┐                       │
│  *Zamorano*        │                      │                       │
│  (serif itálica)   │    ┌─ retrato ──┐    │                       │
│                    │    │  +         │    │                       │
│  INGENIERO EN      │    │   Yo.png   │    │                       │
│  INFORMÁTICA       │    │  3:4       │    │                       │
│  SPEC-DRIVEN       │    │  +         │    │                       │
│  DEVELOPMENT CON IA│    └────────────┘    │                       │
│  (mono, tagline)   │   + ┌──────────────┐ +  ← esquinas de        │
│                    │     │fig. 01 — Adrián│     registro ámbar     │
│  Construyo software │    │Zamorano ·      │                        │
│  con specs y agentes│    │Valparaíso, Chile│                       │
│  de IA: 50+ proyectos│   │🇨🇱              │                        │
│  3 en producción.   │    └──────────────┘                        │
│                    │                      │                       │
│  [VER PROYECTOS ↗] [CONTACTAR]            │                       │
│                    │                      │                       │
│  GitHub ↗ LinkedIn ↗ Email ↗              │                       │
│                    │                      │                       │
│  ──── stats ───────│                      │                       │
│  50+  proyectos    │                      │                       │
│  3    en producción│                      │                       │
│  2    años SDD+IA  │                      │                       │
└──────────────────────────────────────────────────────────────────┘
```

**Reglas:**
- Nombre: "Adrián" en Instrument Serif itálica (hero size) + "Zamorano" en Space Grotesk 700 (o todo serif si se ve mejor con el apellido). OFF-white, nunca blanco puro.
- Tagline en mono ámbar-300 uppercase, tracking 0.08em.
- Intro: máx. 2 frases, 68ch, `--muted-foreground`.
- Retrato: marco con 4 esquinas de registro `+` ámbar + caption `fig. 01` mono. Gradient-sky radial detrás.
- CTA primary `VER PROYECTOS ↗` (ámbar) + secondary `CONTACTAR` (outline).
- Stats: filas planas con borde inferior (nº Space Grotesk grande, label mono). NO mini-cards.
- Mobile: todo apilado — retrato después de CTAs.

---

### 3. Sobre Mí — Sección 02

```
┌──────────────────────────────────────────────────────────────┐
│  01.                                                            │
│  Sobre Mí                                                        │
│  ──────────────── (gradient underline ámbar)                    │
│                                                                  │
│  Ingeniero en Informática de Valparaíso, Chile. 2 años           │
│  construyendo con SDD + agentes de IA. No tengo experiencia      │
│  formal en empresas, pero he construido más que muchos devs      │
│  con 5 años de experiencia.                                      │
│                                                                  │
│  "Especificar antes de codificar. La spec es la fuente           │
│   de verdad."  ← quote destacada en serif itálica                │
│                                                                  │
│  Trayectoria compacta:                                           │
│  2024  · Primer proyecto con SDD · Descubrimiento de IA agéntica │
│  2025  · 30+ proyectos · Primer deploy Vercel · Chambecas live   │
│  2026  · SebaTatto + Tragaperras · 50+ proyectos · Este portal   │
│                                                                  │
│  [VER TRAYECTORIA COMPLETA ↗]   (link a /timeline)               │
└──────────────────────────────────────────────────────────────────┘
```

---

### 4. Proyectos — Sección 03 (bento)

```
┌──────────────────────────────────────────────────────────────┐
│  02.                                                            │
│  Proyectos                                                      │
│  ────────────────                                                │
│                                                                  │
│  ┌───────────────────────────┐ ┌──────────────────┐            │
│  │ ▓▓▓▓ thumbnail 16:8 ▓▓▓▓ │ │ ▓▓ thumbnail ▓▓ │            │
│  │ ▓  Chambecas ▓▓▓▓▓▓▓▓▓▓ │ │ ▓  SebaTatto ▓▓ │            │
│  │ ▓  (col-span 7, 2 filas) │ │ (col-span 5)    │            │
│  │                          │ │                  │            │
│  │ E-commerce para fiestas  │ │ Tienda de        │            │
│  │ y cotillón. Catálogo,    │ │ tatuajes.        │            │
│  │ galería y WhatsApp.      │ │                  │            │
│  │                          │ │ ● EN PRODUCCIÓN  │            │
│  │ ● EN PRODUCCIÓN          │ │ Next.js Tailwind │            │
│  │ Next.js Tailwind Vercel  │ │ [VER CASO ↗]     │            │
│  │ [VER CASO ↗]             │ │                  │            │
│  │                          │ └──────────────────┘            │
│  │                          │ ┌──────────────────┐            │
│  └───────────────────────────┘ │ ▓▓ thumbnail ▓▓ │            │
│                                 │ ▓  Tragaperras ▓│            │
│                                 │ (col-span 5)    │            │
│                                 │ Slot machine    │            │
│                                 │ interactiva.    │            │
│                                 │ ● EN PRODUCCIÓN  │            │
│                                 │ Next.js React   │            │
│                                 │ [VER CASO ↗]    │            │
│                                 └──────────────────┘            │
│                                                                  │
│  ── 50+ proyectos locales ─────────────────────────────         │
│  [Pill: e-commerce] [Pill: landing] [Pill: API] [Pill: bot]     │
│  [Pill: dashboard] [Pill: CLI] [Pill: 44 más → GitHub ↗]       │
└──────────────────────────────────────────────────────────────────┘
```

**Reglas:**
- Hover: `translateY(-4px)` + borde ámbar 40% + thumbnail scale(1.03). Sin sombra.
- Card A destaca por tamaño (7 cols), no por glow.
- Tira local: celdas compactas con scroll horizontal (desktop) / overflow-x (mobile). Enlaza a GitHub.

---

### 5. Caso de Estudio — `/projects/[id]`

```
┌──────────────────────────────────────────────────────────────┐
│  ← VOLVER A PROYECTOS          (mono, underline draw)        │
│                                                                  │
│  CHAMBECAS — Fiestas Infantiles                                  │
│  ────────────────                                                │
│  chambecas.vercel.app ↗    [● EN PRODUCCIÓN]                     │
│                                                                  │
│  ┌───────────────────────────────────────┐ ┌─────────────────┐  │
│  │ ▓▓▓▓▓▓▓▓ Screenshot 16:10 ▓▓▓▓▓▓▓▓▓ │ │ Stack           │  │
│  │ ▓▓▓▓▓▓▓▓ (Chambecas1.png)▓▓▓▓▓▓▓▓▓▓ │ │ Next.js         │  │
│  │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ │ Tailwind        │  │
│  │ (col-span 8)                        │ │ Vercel          │  │
│  │                                      │ │ · TypeScript    │  │
│  │                                      │ ├─────────────────┤  │
│  │                                      │ │ Rol             │  │
│  │                                      │ │ Full-stack solo │  │
│  │                                      │ ├─────────────────┤  │
│  │                                      │ │ Año             │  │
│  │                                      │ │ 2025            │  │
│  │                                      │ ├─────────────────┤  │
│  │                                      │ │ Enlace          │  │
│  │                                      │ │ chambecas.vercel│  │
│  │                                      │ └─────────────────┘  │
│  └───────────────────────────────────────┘  (col-span 4,       │
│                                              fondo texture-dots)│
│  ¿Qué hace?                                                      │
│  E-commerce para artículos de fiesta, sublimación y cotillón.    │
│  Catálogo con galería, servicios y WhatsApp.                     │
│                                                                  │
│  Ciclo SDD:                                                      │
│  [1. SPEC] → [2. PLAN] → [3. TASKS] → [4. IMPLEMENT] → [5. VERIFY]│
│                                                                  │
│  Lo que aprendí:                                                 │
│  · Manejo de galerías de imágenes con next/image                 │
│  · Integración con WhatsApp API                                  │
│  · SEO para e-commerce local                                     │
│                                                                  │
│  ────────────────────────────────────────                        │
│  ← ANTERIOR: SebaTatto        SIGUIENTE: Tragaperras →           │
└──────────────────────────────────────────────────────────────────┘
```

**Mobile:** screenshot full-width, metadata debajo (sin columna lateral).

---

### 6. Habilidades — Sección 04

```
┌──────────────────────────────────────────────────────────────┐
│  03.                                                            │
│  Habilidades                                                    │
│  ────────────────                                                │
│  (fondo texture-dots)                                            │
│                                                                  │
│  FRONTEND                    SDD & IA                            │
│  ─────────────────           ─────────────────                   │
│  Next.js        avanzado     Spec-Driven Dev    experto          │
│  React          avanzado     Programación       avanzado        │
│  TypeScript     avanzado     agéntica                           │
│  Tailwind CSS   avanzado     Agentes de IA      avanzado        │
│  Framer Motion  intermedio   (Claude, OpenAI)                    │
│                                                                  │
│  TOOLS                       DEPLOY                               │
│  ─────────────────           ─────────────────                   │
│  Git / GitHub   avanzado     Vercel             avanzado        │
│  Node.js        intermedio   Nginx              intermedio      │
│  PostgreSQL     intermedio                                       │
│                                                                  │
│  (filas planas con borde inferior — sin cards, sin icon tiles)   │
└──────────────────────────────────────────────────────────────────┘
```

---

### 7. Metodología SDD — Sección 05

```
┌──────────────────────────────────────────────────────────────┐
│  04.                                                            │
│  Metodología SDD                                                │
│  ────────────────                                                │
│  Spec-Driven Development con IA                                  │
│  (tagline mono ámbar)                                            │
│                                                                  │
│   ┌─────┐   ┌─────┐   ┌─────┐   ┌─────┐   ┌─────┐             │
│   │ 01  │ → │ 02  │ → │ 03  │ → │ 04  │ → │ 05  │             │
│   │SPEC │   │PLAN │   │TASKS│   │IMPL.│   │VERIFY│             │
│   └─────┘   └─────┘   └─────┘   └─────┘   └─────┘             │
│   (nodos mono, conectores ámbar, borde — mobile: vertical)      │
│                                                                  │
│  Especificar antes de codificar. La spec es la fuente de        │
│  verdad; cada feature pasa por las 5 etapas con agentes          │
│  especializados por fase.                                        │
│                                                                  │
│  BENEFICIOS (filas planas, check ámbar):                         │
│  ✓ Cero scope creep                                              │
│  ✓ Trazabilidad completa spec → código                          │
│  ✓ Calidad consistente entre proyectos                          │
│  ✓ Iteración rápida con agentes                                 │
│                                                                  │
│  [VER METODOLOGÍA COMPLETA ↗]  → /methodology                   │
└──────────────────────────────────────────────────────────────────┘
```

---

### 8. Contacto — Sección 06

```
┌──────────────────────────────────────────────────────────────┐
│  05.                                                            │
│  Contacto                                                       │
│  ────────────────                                                │
│                                                                  │
│  ┌─────────────────────┐    O contáctame directo:               │
│  │ NOMBRE              │    ┌──────────────────────────────┐   │
│  │ [________________]  │    │ ✉ hola@adrianzamorano.dev ↗ │   │
│  ├─────────────────────┤    │ ✆ WhatsApp ↗                 │   │
│  │ EMAIL               │    │ in LinkedIn ↗                 │   │
│  │ [________________]  │    │ ⌥ GitHub ↗                    │   │
│  ├─────────────────────┤    └──────────────────────────────┘   │
│  │ MENSAJE             │    (filas con borde, hover ámbar)     │
│  │ [________________]  │                                       │
│  ├─────────────────────┤    ● Disponible para proyectos        │
│  │ [ENVIAR MENSAJE]    │    Respuesta en < 24h                 │
│  └─────────────────────┘                                       │
│  (labels visibles mono — nunca placeholder como label)         │
└──────────────────────────────────────────────────────────────────┘
```

---

### 9. Footer

```
┌──────────────────────────────────────────────────────────────┐
│  (borde superior + texture-dots sutil)                        │
│                                                                  │
│  AZ.●   Adrián Zamorano · © 2026                                 │
│  Ingeniero en Informática · Spec-Driven Development con IA       │
│                                                                  │
│  [GitHub ↗] [LinkedIn ↗] [Email ↗] [WhatsApp ↗]                  │
│                                                                  │
│  Hecho con specs y agentes — el código vive en la spec.          │
│  (mono, muted)                                                   │
└──────────────────────────────────────────────────────────────────┘
```

---

### 10. Mobile (base < 640px)

```
┌─────────────────────────────┐   ┌─────────────────────────────┐
│ AZ.●              ☰         │   │ OVERLAY MENÚ (sólido)      │
│ (topbar 64px, glass func.)  │   │ ─────────────────────────   │
├─────────────────────────────┤   │ ✕                        │
│ ● Disponible para proyectos │   │                            │
│                             │   │ 01. Sobre Mí               │
│ Adrián                      │   │ 02. Proyectos              │
│ *Zamorano*                  │   │ 03. Habilidades            │
│                             │   │ 04. Metodología            │
│ INGENIERO EN INFORMÁTICA    │   │ 05. Contacto               │
│ SDD CON IA                  │   │                            │
│                             │   │ (Space Grotesk 2rem,       │
│ [VER PROYECTOS ↗]           │   │  numerados, constelación   │
│ [CONTACTAR]                 │   │  tenue detrás)             │
│                             │   │                            │
│ ┌─ retrato ───────────┐     │   │ ● Disponible              │
│ │  + Yo.png 3:4 +     │     │   │ GitHub ↗ LinkedIn ↗       │
│ └─────────────────────┘     │   └─────────────────────────────┘
│ fig. 01 — Adrián · Chile 🇨🇱 │
│                             │
│ 50+ proyectos · 3 en prod.  │
└─────────────────────────────┘
   Bento → 1 columna apilada   Hero → texto, CTAs, retrato
   Overlay: fondo #060B14 +     Skills → 2 columnas
   constelación, sin glass      Ciclo SDD → vertical
```

**Adaptaciones mobile:**

| Componente | Desktop | Mobile |
|------------|---------|--------|
| Navegación | Sidebar sticky 300-320px | Topbar + overlay sólido |
| Hero | 7/5 asimétrico | Apilado: pill → nombre → tagline → intro → CTAs → retrato |
| Nombre | `clamp(3.25rem…7.5rem)` | mismo clamp (fluido) |
| Bento | A=7×2, B=5, C=5 | 1 col apilada |
| Metadata caso | Columna lateral 4/8 | Debajo del screenshot |
| Skills | 2 columnas de categoría | 2 columnas compactas |
| Ciclo SDD | Horizontal | Vertical (conectores ↓) |
| Stats | Fila única | 2 columnas |
| Target táctil | ≥ 44px | ≥ 44px (mismo) |

---

## Comportamientos clave (estado/feedback)

| Elemento | Default | Hover | Focus-visible | Active |
|----------|---------|-------|---------------|--------|
| Nav link sidebar | mono muted | foreground + underline draw | ring ámbar 2px offset 3px | ámbar (activo) |
| Botón primary | bg ámbar, texto navy | bg claro + `-2px` | ring | `0px` |
| Card bento | borde neutral-800 | borde ámbar 40% + `-4px` | ring | — |
| Link externo | mono `--secondary` + ↗ | underline draw ámbar | ring | — |
| Input | bg muted + borde | borde strong | borde ámbar + ring | — |
| Input error | — | — | borde + texto `--danger` | — |

**Estados vacíos/error (obligatorios):**
- Grid de proyectos sin datos → celda con constelación + "Proyectos en construcción — revisa mi GitHub ↗"
- Formulario enviado OK → reemplaza el form: "Mensaje enviado ✓ — respondo en < 24h"
- Ruta 404 → constelación + "Esta coordenada no existe" + [VOLVER AL INICIO]

**Reduced motion:** reveals instantáneos, sin twinkle, sin parallax, scroll normal.
**Dark/light:** toggle sol/luna en sidebar y topbar; persiste en localStorage; default dark.
