# Design Decisions — Portafolio Adrián Zamorano

> **Versión:** 2.0 — Rediseño 2026 "Constelación Técnica"
> **Leyenda:** ✓ mantenida de v1 · ✎ actualizada para v2 · ➕ nueva en v2

---

## Dirección estética

### DD-01 ✎ "Cool Blue Technical" → **"Constelación Técnica"**
- **Contexto:** La v1 usaba "Cool Blue Technical" (azul profundo + azul frío + slate, light-first). El Vision Agent puntuó la dirección 6/10 en color y la visualización de proyectos 2/10; el sitio en producción se ve "light y centrado, sin ritmo".
- **Decisión:** Dark-first con metáfora de observatorio astronómico: navy profundo `#0A1929` como cielo, ámbar starlight `#FBBF24` como acento, acero azul como secundario, tipografía editorial de instrumento (serif itálica + mono).
- **Razón:** Comunica "Technical Precision" — precisión, control, profundidad técnica. La metáfora del observatorio da un sistema de decisiones coherente (estrellas = acento, constelación = firma, cielo = fondo) en vez de "azules porque sí". Alinea con 2026: dark default (82% de usuarios), off-white, acentos desaturados.
- **Alternativa:** Mantener azul/cyan como acento → descartado por ser el default genérico de IA/SaaS y "invisible" en 2026. Brutalist → demasiado ruidoso para un perfil que vende precisión.

### DD-02 ✓ Pairing tipográfico principal (Space Grotesk + Inter + JetBrains Mono)
- **Contexto:** Necesitamos display con personalidad + cuerpo legible + código técnico.
- **Decisión:** Mantener Space Grotesk (headings) + Inter (body/UI) + JetBrains Mono (tech/meta/links). Inter NO es la única fuente — es el tercero de cuatro y el carácter lo aportan Space Grotesk, Instrument Serif y JetBrains Mono (cumple regla anti-IA two-face-rule).
- **Razón:** Pairing ya validado en v1 y en producción (Typography 7/10). Cambiar de cuerpo en una revisión que ya toca todo lo demás añade riesgo sin ganancia.
- **Alternativa:** Barlow/Commissioner para body → más "custom" pero rompe consistencia con los 3 proyectos en producción que usan Inter.

### DD-13 ➕ Instrument Serif para el nombre en itálica editorial
- **Contexto:** El Vision Agent recomendó mantener "serif italic name + monospace tagline" como voz de marca — pero la v1 no tenía ninguna serif.
- **Decisión:** Añadir **Instrument Serif 400 italic** como 4ª familia, usada EXCLUSIVAMENTE para el nombre "Adrián" en el hero (y opcionalmente palabras-éxito en títulos).
- **Razón:** La itálica serif es el contraste editorial que separa este portafolio del 95% de portfolios "sans-serif genéricos". Una sola familia con 1 peso = costo de carga mínimo (Lighthouse). Es el momento de mayor inversión visual de la página.
- **Alternativa:** Playfair Display → demasiado decorativo/turístico. Fraunces → excelente pero más pesado (variable con muchos ejes); se documenta como fallback si Instrument Serif falla en presupuesto.

---

## Color

### DD-07 ✎ INVERTIDO: dark mode default, light como variante
- **Contexto:** v1 era light-first (`#FAFAFA` fondo, `#FFF` cards). 82% de usuarios tienen dark activo; los benchmarks 2026 (Brittany Chiang, Diego Carmona, Benjamin Looi) son dark.
- **Decisión:** `:root` = dark (fondo `#0A1929`, texto `#F1F5F9`); `.light` = variante opcional con toggle.
- **Razón:** El dark es la mejor vitrina del activo visual más fuerte (la constelación) — el cielo nocturno necesita oscuridad. Además reduce fatiga visual en sesiones de lectura técnica larga.
- **Alternativa:** Light-first + constelación clara → la firma visual pierde impacto (nodos azules sobre blanco se ven "ruido").

### DD-10 ➕ Acento ámbar starlight `#FBBF24` (reemplaza azul/cyan)
- **Contexto:** v1 usaba blue-600 `#1A56DB` + cyan `#06B6D4`. Ambos son el default de IA/SaaS y el cyan neón está prohibido por anti-IA.
- **Decisión:** Acento **ámbar** `#FBBF24` (dark) / `#B45309` (light). Verde esmeralda `#34D399` para estados de producción. Acero azul `#8FB5DC` como secundario (links).
- **Razón:** El ámbar sobre navy es la combinación clásica de "instrumento de precisión" (tableros de avión, observatorios) y se integra con la metáfora de estrellas. Contraste verificado: `#FBBF24` sobre `#0A1929` = 9.6:1 (AAA); texto navy sobre botón ámbar = 9.6:1. Se diferencia del azul genérico sin caer en magenta (prohibido).
- **Alternativa:** Verde esmeralda como acento → técnicamente bueno pero choca con el verde semántico de "producción/éxito". Acento blanco → sin personalidad.

### DD-18 ➕ Tokens semánticos + escala neutral 50–950 + OKLCH
- **Contexto:** v1 mezclaba raw hex (slate/blue/navy) sin jerarquía semántica.
- **Decisión:** Sistema de tokens: `--background`, `--foreground`, `--card`, `--muted`, `--border`, `--primary`, `--secondary`, `--success`, `--danger` + escalas crudas (neutral/ámbar/acero, 11 pasos 50–950). Hex = valor autoritativo (WCAG verificado); OKLCH documentado como referencia.
- **Razón:** Los tokens semánticos permiten cambiar de tema sin reescribir componentes y garantizan contraste consistente. 11 pasos cubren toda la jerarquía de superficies sin saltos.
- **Alternativa:** Solo 3 tonos de cada color → insuficiente para estados/hover/surfaces.

---

## Layout

### DD-11 ➕ Layout asimétrico con sidebar sticky + hero 7/5
- **Contexto:** v1 era hero centrado de columna única (Layout 4/10, "below-the-fold vacío", "single centered layout lacks rhythm").
- **Decisión:** Desktop (lg+): sidebar fija sticky 300–320px (monograma AZ., nav mono numerada, status pill, sociales) + contenido a la derecha. Hero asimétrico: texto 7 columnas / retrato 5 columnas con marco técnico.
- **Razón:** Patrón gold-standard 2026 (Brittany Chiang): la sidebar da navegación persistente sin robar foco, y el hero asimétrico crea tensión visual y ritmo editorial. El retrato en columna derecha aporta el trust signal que faltaba (Trust 4/10).
- **Alternativa:** Hero centrado gigante → mejora tipografía pero no el problema de ritmo. Layout de 2 columnas simétricas → aburrido, sin jerarquía.

### DD-14 ➕ Secciones numeradas (01.–05.) + subrayados editoriales
- **Contexto:** v1 no tenía sistema editorial de secciones.
- **Decisión:** Número de sección en mono ámbar (`01.`) + título Space Grotesk + subrayado gradiente ámbar de 4rem × 2px. Aplicado a: Sobre mí, Proyectos, Habilidades, Metodología, Contacto.
- **Razón:** Numeración editorial (Brittany Chiang) comunica proceso/metodología — perfecto para un ingeniero SDD que vende "specs y trazabilidad". Da ritmo visual al scroll largo y refuerza la marca metodológica.
- **Alternativa:** Sin numeración → se pierde el aire de documento técnico. Numeración en todos los niveles → ruido.

### DD-15 ➕ Bento grid para proyectos (thumbnails primero)
- **Contexto:** Project Showcase 2/10 — "no project thumbnails visible", grid uniforme sin jerarquía.
- **Decisión:** Bento: Chambecas = celda grande (7 cols × 2 filas), SebaTatto = 5×1, Tragaperras = 5×1. Tira "50+ proyectos locales" compacta. Thumbnails `aspect-ratio 16/10` con `next/image`, badges producción/local, tech pills, `VER CASO ↗`.
- **Razón:** El thumb primero vende el trabajo al instante (lo que pedía Awwwards/Benjamin Looi); la asimetría del bento jerarquiza los 3 proyectos en producción sin badges gritones. Los 50+ proyectos no necesitan 50 cards — una tira compacta evita el scroll infinito.
- **Alternativa:** Grid uniforme 3×3 → plano (v1). Lista → pierde impacto visual.

### DD-05 ✎ Timeline plegado dentro de Sobre Mí
- **Contexto:** v1 tenía timeline alternado izq/der como sección propia.
- **Decisión:** La trayectoria 2024→2026 se integra como sub-bloque compacto de Sobre Mí (lista vertical con años mono y dots), manteniendo la ruta `/timeline` para quienes quieran el detalle.
- **Razón:** El timeline alternado ocupa mucho espacio vertical sin aportar jerarquía. Como sub-bloque editorial (lista plana, patrón variado) cuenta la misma historia en menos scroll — y deja presupuesto visual para proyectos (que era el punto débil real).
- **Alternativa:** Mantener sección propia → compite con Proyectos por atención.

---

## Motion y textura

### DD-16 ➕ Motion standards: expo-out, <200ms, GPU-only, reduced-motion
- **Contexto:** v1 tenía tabla de motion genérica (ease-out, 200–600ms) sin sistema de tokens.
- **Decisión:** Tokens `--duration-*` (120ms micro / 200ms fast / 300ms standard / 500ms slow / 650ms reveal) + easing único `cubic-bezier(0.16, 1, 0.3, 1)` (sin bounce). Solo `transform` + `opacity`. Stagger 80ms máx. 4. Fallback completo `prefers-reduced-motion`.
- **Razón:** 2026 premia motion "subtle, purposeful"; el sistema de tokens garantiza consistencia y performance (Lighthouse >95). Prohibir bounce/glow elimina tells de IA.
- **Alternativa:** Animaciones vistosas (scroll-driven, WebGL) → coste de performance y riesgo de "template".

### DD-12 ➕ Constelación como backdrop full-page (la firma)
- **Contexto:** v1 tenía `ParticleNetwork.tsx` — canvas con rAF (80 partículas animadas en loop) usado solo en hero.
- **Decisión:** Rediseñar como **SVG estático fijo full-page** (`viewBox 1440×900`, 70–90 nodos + líneas, ~12% estrellas ámbar), generado con PRNG seed 2026, parallax sutil (scroll × 0.15, máx. 60px), twinkle CSS solo en estrellas, light/dark via CSS variables. Cero CPU en idle, sin hydration mismatch.
- **Razón:** Es el diferenciador 8/10 del portafolio — expandirlo a toda la página es la jugada de identidad. Migrar de canvas a SVG estático mantiene el look y elimina el costo de rAF permanente (perf).
- **Alternativa:** WebGL full-bleed → prohibido por coste de performance. Patrón CSS repetitivo (radial-gradients) → se ve wallpaper, no constelación.

### DD-06 ✎ Hover de cards: border-lift en vez de scale + shadow
- **Contexto:** v1: `scale(1.02)` + `shadow-lg` en hover.
- **Decisión:** `translateY(-4px)` + `border-color: rgba(251,191,36,0.4)` + thumbnail `scale(1.03)` interno. Sin sombra en cards (regla anti-IA: default-card-shadow).
- **Razón:** El border-lift es más preciso (tono instrumento) que la sombra flotante genérica; el scale queda solo en la imagen (dentro de overflow-hidden, no deforma la card).
- **Alternativa:** Scale completo + shadow → look "template de IA".

### DD-04 ✎ Badge "EN PRODUCCIÓN" ahora esmeralda (antes cyan)
- **Contexto:** v1 usaba cyan `#06B6D4` con pulse.
- **Decisión:** Punto emerald `#34D399` con pulse de opacidad 2.4s + borde `rgba(52,211,153,0.3)`, mono uppercase.
- **Razón:** El verde semántico es universalmente "vivo/producción" y no choca con el acento ámbar. El cyan era neón-IA (prohibido).
- **Alternativa:** Ámbar para producción → confunde con el acento de marca.

---

## Confianza y posicionamiento

### DD-17 ➕ Trust signals: status pill, foto real, ubicación 🇨🇱, ↗ como marca
- **Contexto:** Trust 4/10 — sin foto, sin estado de disponibilidad, sin ubicación.
- **Decisión:** (1) Pill `● Disponible para proyectos` en sidebar/hero; (2) retrato real `imagenes/Yo.png` en hero con marco de esquinas de registro + caption `fig. 01 — Adrián Zamorano · Valparaíso, Chile 🇨🇱`; (3) un único emoji bandera (nada más); (4) `↗` en mono como marcador de enlaces externos.
- **Razón:** Un reclutador decide en segundos: la foto y la disponibilidad convierten el hero en "persona real, lista para trabajar". El marco de registro refuerza el tono instrumento. El `↗` es la firma de enlace del portafolio (Cassie Evans).
- **Alternativa:** Sin foto → anónimo (pierde confianza). Avatar ilustrado → menos creíble para contratación.

### DD-08 ✓ Ciclo SDD visual en cada caso de estudio
- **Contexto:** El diferenciador central de Adrián es SDD.
- **Decisión:** Mantener el mini-diagrama `SPEC → PLAN → TASKS → IMPLEMENT → VERIFY` en cada caso de estudio (nodos mono + conectores), rediseñado según F.9 del design system.
- **Razón:** Educa al visitante y prueba la metodología con cada proyecto. Es el argumento de venta único — no se toca.
- **Alternativa:** Solo en la página de metodología → pierde prueba por proyecto.

### DD-03 ✎ Gradiente hero → atmósfera nocturna (vignette)
- **Contexto:** v1: `linear-gradient(135deg, #0A1929 → #1A56DB)`.
- **Decisión:** `--gradient-sky` (radial elipse en 70% -20%, `#142E4E → transparente`) + constelación detrás. Sin gradiente plano azul→azul.
- **Razón:** El radial imita luz de ciudad/estrellas en el cielo — atmosférico, no "banner de empresa". Deja respirar la tipografía editorial.
- **Alternativa:** Gradiente 135° azul → datado (2024). Gradiente ámbar hero → demasiado llamativo para un perfil técnico.

### DD-19 ➕ Performance como decisión de diseño (Lighthouse >95)
- **Contexto:** Stack: Next.js 16, React 19, Tailwind v4, Framer Motion. Target >95.
- **Decisión:** SVG estático (no canvas animado, no WebGL); 4 fuentes con pesos/subset mínimos (`latin-ext`); `next/image` con `priority` solo en retrato/hero; transiciones solo transform/opacity; reveals `whileInView` once.
- **Razón:** Cada elección visual se valida contra el coste de render. La constelación estática es el caso testigo: misma identidad, 0% CPU idle.
- **Alternativa:** Canvas rAF o WebGL → penaliza Lighthouse y batería móvil.

### DD-20 ➕ Reemplazo de `ParticleNetwork.tsx` por `Constellation.tsx` (SVG)
- **Contexto:** El componente actual usa canvas + `requestAnimationFrame` + aleatoriedad en cliente (hydration mismatch en SSR, 60fps de CPU).
- **Decisión:** Nuevo componente React que renderiza SVG estático (seed fija 2026, misma estética: nodos + líneas + estrellas), con parallax Framer Motion opcional y twinkle CSS. `aria-hidden`.
- **Razón:** Correcto SSR/SSG, cero coste de CPU, accesible, mismo impacto visual. Habilidad de performance sin sacrificar identidad.
- **Alternativa:** Mantener canvas → el mayor riesgo de Lighthouse del sitio.

---

## Resumen de cambios v1 → v2

| Área | v1 | v2 |
|------|----|----|
| Dirección | Cool Blue Technical (light-first) | Constelación Técnica (dark-first, observatorio) |
| Fondo | `#FAFAFA` + gradiente hero | `#0A1929` navy + vignette radial + constelación |
| Acento | Blue 600 / Cyan neón | Ámbar starlight `#FBBF24` + esmeralda semántico |
| Tipografía | 3 familias | 4 familias (+ Instrument Serif itálica para el nombre) |
| Layout | Centrado, columna única | Sidebar sticky + hero 7/5 + secciones numeradas |
| Proyectos | Grid 3×3 uniforme | Bento (7/5/5) + tira 50+ locales |
| Motion | ease-out genérico | Tokens + expo-out + GPU-only + reduced-motion |
| Firma visual | Canvas en hero | SVG estático full-page (parallax + twinkle) |
| Trust | Sin foto ni estado | Foto real + status pill + ubicación 🇨🇱 + ↗ |
| Contraste | No verificado | Tabla WCAG AA completa (B.6) |
