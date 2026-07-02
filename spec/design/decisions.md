# Design Decisions

## DD-01: Cool Blue Technical como dirección estética
- **Contexto:** El usuario pidió "colores azulados". El portafolio es para un ingeniero SDD.
- **Decisión:** Azul profundo como ancla, azul medio como primary, slate como neutros. Inspirado en tendencia "Cool Blue 2026".
- **Razón:** Comunica precisión, control y estabilidad técnica. Se diferencia del azul genérico SaaS usando tonos más profundos y una paleta restringida.
- **Alternativa:** Azul brillante tipo #2563EB genérico → descartado por ser "invisible" en 2026.

## DD-02: Space Grotesk + Inter como pairing tipográfico
- **Contexto:** Necesitamos una tipografía con personalidad para títulos y máxima legibilidad para cuerpo.
- **Decisión:** Space Grotesk (headings) + Inter (body) + JetBrains Mono (código/badges).
- **Razón:** Space Grotesk tiene carácter técnico y moderno sin ser decorativo. Inter es el estándar de UI. JetBrains Mono para elementos de código.
- **Alternativa:** Outfit + Jakarta Sans → más B2B SaaS. Playfair → demasiado editorial.

## DD-03: Gradiente hero en lugar de fondo plano
- **Contexto:** La primera impresión debe ser impactante.
- **Decisión:** Gradiente de #0A1929 → #1A56DB en el hero.
- **Razón:** El gradiente profundo transmite profundidad técnica y calidad visual. Se diferencia de heroes blancos genéricos.
- **Alternativa:** Hero blanco con tipografía grande → limpio pero menos memorable.

## DD-04: Badge "En producción" con animación sutil
- **Contexto:** Diferenciar proyectos reales (Vercel) de proyectos locales.
- **Decisión:** Badge cyan con animación pulse sutil para destacar proyectos en producción.
- **Razón:** Los 3 proyectos en producción son el activo más valioso del portafolio. Deben destacar visualmente.
- **Alternativa:** Mismo estilo para todos → se pierde el factor diferenciador.

## DD-05: Timeline de trayectoria con diseño alternado
- **Contexto:** Mostrar la evolución de 2 años de aprendizaje.
- **Decisión:** Timeline vertical con dots, alternando izquierda/derecha en desktop.
- **Razón:** Visualmente claro, permite contar una historia de crecimiento. Estándar en portafolios pero efectivo.
- **Alternativa:** Lista simple → pierde impacto visual.

## DD-06: Cards de proyecto con hover scale + shadow
- **Contexto:** Los proyectos son el contenido principal. Necesitan ser explorables.
- **Decisión:** Hover con scale(1.02) + shadow-lg + 200ms ease-out.
- **Razón:** Micro-interacción sutil que invita a hacer clic sin ser agresiva.
- **Alternativa:** Sin hover → estático. Hover muy pronunciado → molesto.

## DD-07: Off-white (#FAFAFA) en lugar de blanco puro
- **Contexto:** El fondo general del sitio.
- **Decisión:** #FAFAFA como color de fondo, no #FFFFFF.
- **Razón:** Menos fatiga visual, más cálido sin perder profesionalismo. Tendencia 2026.
- **Alternativa:** Blanco puro → más duro a la vista. Color de fondo slate → muy oscuro.

## DD-08: Visualización del ciclo SDD en cada caso de estudio
- **Contexto:** El diferenciador clave de Adrián es SDD.
- **Decisión:** Incluir un mini diagrama SDD (Spec → Plan → Tasks → Implement → Verify) en cada caso de estudio.
- **Razón:** Refuerza la marca personal SDD en cada proyecto. Educa al visitante sobre la metodología.
- **Alternativa:** Solo mencionarlo en la página de metodología → menos impacto.
