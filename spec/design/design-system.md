# Design System — Portafolio Adrián Zamorano

## Aesthetic Direction: "Cool Blue Technical"

Estilo refinado, preciso y técnico. Azul profundo como ancla, azul frío como acento, neutros slate. 
Comunica control, precisión y estabilidad — coherente con un ingeniero SDD.

## Color System

```css
:root {
  /* === Primary Palette === */
  --color-navy-900: #0A1929;    /* Near-black azulado — fondo de hero/footer */
  --color-navy-800: #0F2640;    /* Deep navy — backgrounds oscuros */
  --color-navy-700: #1A365D;    /* Navy medio — hover states */
  
  /* === Brand Blues === */
  --color-blue-600: #1A56DB;    /* Primary brand — botones, links, acentos principales */
  --color-blue-500: #2563EB;    /* Blue brillante — hover, highlights */
  --color-blue-400: #60A5FA;    /* Blue claro — badges, tags */
  --color-blue-100: #DBEAFE;    /* Light blue — backgrounds suaves */
  --color-blue-50:  #EFF6FF;    /* Muy claro — cards, secciones alternas */
  
  /* === Neutrals (Cool Slate) === */
  --color-slate-900: #0F172A;   /* Texto principal */
  --color-slate-700: #334155;   /* Texto secundario */
  --color-slate-500: #64748B;   /* Texto terciario / meta */
  --color-slate-300: #CBD5E1;   /* Bordes */
  --color-slate-200: #E2E8F0;   /* Bordes suaves */
  --color-slate-100: #F1F5F9;   /* Fondos de sección */
  
  /* === Surface === */
  --color-white:     #FFFFFF;
  --color-bg:        #FAFAFA;   /* Off-white — fondo general */
  --color-surface:   #FFFFFF;   /* Cards, modales */
  
  /* === Accent (para highlights puntuales) === */
  --color-accent:    #06B6D4;   /* Cyan — para badges de "En Producción" */
  --color-accent-soft: #CFFAFE; /* Cyan suave */
  
  /* === Gradients === */
  --gradient-hero:    linear-gradient(135deg, #0A1929 0%, #1A56DB 100%);
  --gradient-card:    linear-gradient(180deg, #0F2640 0%, #0A1929 100%);
  --gradient-accent:  linear-gradient(135deg, #1A56DB 0%, #06B6D4 100%);
}
```

### Aplicación de colores

| Elemento | Token |
|----------|-------|
| Fondo página | `--color-bg` (#FAFAFA) |
| Fondo hero | `--gradient-hero` |
| Fondo secciones alternas | `--color-slate-100` |
| Cards | `--color-surface` con borde `--color-slate-200` |
| Headings | `--color-navy-900` |
| Body text | `--color-slate-700` |
| Links | `--color-blue-600` |
| Botón primario | bg: `--color-blue-600`, hover: `--color-blue-500` |
| Badge "producción" | bg: `--color-accent-soft`, text: `--color-accent` (dark) |

## Typography

```css
/* === Fonts (variable fonts desde next/font/google) === */
--font-display: 'Space Grotesk', sans-serif;  /* Headings, hero, títulos grandes */
--font-body:    'Inter', sans-serif;           /* Body text, UI, navegación */
--font-mono:    'JetBrains Mono', monospace;   /* Código, badges técnicos */
```

### Scale tipográfica

| Level | Size | Weight | Line Height | Font |
|-------|------|--------|-------------|------|
| Hero title | 4.5rem (72px) | 700 | 1.1 | Space Grotesk |
| H1 | 3rem (48px) | 700 | 1.15 | Space Grotesk |
| H2 | 2.25rem (36px) | 600 | 1.2 | Space Grotesk |
| H3 | 1.5rem (24px) | 600 | 1.3 | Space Grotesk |
| H4 | 1.25rem (20px) | 600 | 1.4 | Space Grotesk |
| Body large | 1.125rem (18px) | 400 | 1.6 | Inter |
| Body | 1rem (16px) | 400 | 1.6 | Inter |
| Body small | 0.875rem (14px) | 400 | 1.5 | Inter |
| Caption | 0.75rem (12px) | 500 | 1.4 | Inter |
| Code | 0.875rem (14px) | 400 | 1.5 | JetBrains Mono |
| Meta | 0.75rem (12px) | 500 | 1.4 | JetBrains Mono |



## Spacing System

Basado en Tailwind: `0.25rem` increments desde `0.25rem` (1) hasta `4rem` (16).

| Token | Value | Uso |
|-------|-------|-----|
| space-1 | 0.25rem | Micro-espaciado |
| space-2 | 0.5rem | Inner padding pequeño |
| space-3 | 0.75rem | Padding compacto |
| space-4 | 1rem | Padding estándar |
| space-6 | 1.5rem | Gap entre elementos |
| space-8 | 2rem | Secciones internas |
| space-12 | 3rem | Separación entre componentes |
| space-16 | 4rem | Separación entre secciones |
| space-20 | 5rem | Separación mayor |
| space-24 | 6rem | Separación de secciones grandes |

## Layout

- **12-column grid** para páginas interiores
- **Max-width:** 1280px (6xl), centrado
- **Hero:** full-width con gradient
- **Cards:** 3-column grid en desktop, 2 en tablet, 1 en mobile
- **Proyecto detalle:** layout asimétrico (imagen 2/3, texto 1/3)

## Border Radius

| Token | Value | Uso |
|-------|-------|-----|
| rounded-sm | 0.25rem | Badges pequeños |
| rounded-md | 0.5rem | Cards, inputs |
| rounded-lg | 0.75rem | Cards destacados |
| rounded-xl | 1rem | Modales, contenedores grandes |
| rounded-full | 9999px | Avatares, pills |

## Shadows

```css
--shadow-sm:   0 1px 2px rgba(10, 25, 41, 0.05);
--shadow-md:   0 4px 6px rgba(10, 25, 41, 0.07);
--shadow-lg:   0 10px 25px rgba(10, 25, 41, 0.1);
--shadow-xl:   0 20px 50px rgba(10, 25, 41, 0.15);
```

## Motion

| Elemento | Duración | Easing | Descripción |
|----------|----------|--------|-------------|
| Hover en cards | 200ms | ease-out | Scale suave (1.02) + shadow elevado |
| Page transitions | 300ms | ease-in-out | Fade + slide sutil |
| Scroll reveal | 600ms | ease-out | Fade in + translateY(20px → 0) |
| Navbar sticky | 200ms | ease-out | Backdrop blur al hacer scroll |
| Badge pulse | 2s | ease-in-out | Para badge "En producción" |

## Componentes Clave

### Navigation
- **Header:** Fixed top, backdrop-blur, contiene logo + nav links
- **Mobile:** Hamburger menu con slide-in panel
- **Active link:** Indicador de línea azul

### Cards de Proyecto
- Imagen thumbnail 16:9
- Título, descripción corta, tags de stack
- Badge "En producción" con color cyan
- Hover: scale(1.02) + shadow-lg

### Skill Bars / Tags
- Badges redondeados con color azul claro
- Organizados por categoría (Frontend, SDD, Tools, etc.)

### Timeline
- Línea vertical con dots
- Año como heading, descripción al lado
- Alterna izquierda/derecha en desktop

## Responsive Breakpoints

| Breakpoint | Width | Columnas |
|------------|-------|----------|
| sm | 640px | 1 |
| md | 768px | 2 |
| lg | 1024px | 3 |
| xl | 1280px | 3+ |

## Diferenciación Visual

**¿Qué hace único a este portafolio?**

1. **El ciclo SDD visual** — Cada proyecto muestra su "spec" como parte del case study (spec → plan → tasks → implement → verify)
2. **Badge de "En producción"** destacado con animación sutil en los proyectos reales
3. **Estética técnica pero pulida** — Clean, precisa, sin decoración gratuita
4. **Gradiente hero azul profundo** que transmite profundidad técnica
