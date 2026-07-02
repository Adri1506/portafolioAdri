import SDDCycle from "@/components/molecules/SDDCycle";

const stages = [
  {
    emoji: "📋",
    title: "Specify",
    desc: "Se define qué hace la feature, por qué existe y cuáles son los criterios de aceptación. La especificación es la fuente de verdad.",
  },
  {
    emoji: "📝",
    title: "Plan",
    desc: "Se diseña cómo se implementa técnicamente: componentes, flujo de datos, API, patrones a aplicar.",
  },
  {
    emoji: "✅",
    title: "Tasks",
    desc: "Se descompone el plan en tareas pequeñas, independientes y verificables. Cada tarea traza a un criterio de aceptación.",
  },
  {
    emoji: "💻",
    title: "Implement",
    desc: "Se ejecutan las tareas en orden. Se implementa solo lo especificado. Nada de scope creep.",
  },
  {
    emoji: "🔍",
    title: "Verify",
    desc: "Se valida que la implementación cumple cada criterio de aceptación del spec. Si falla, se reporta sin corregir.",
  },
];

export default function SDDMethodology() {
  return (
    <section id="metodologia" className="py-20 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold font-display text-navy-900 mb-4 text-center">
          Metodología SDD
        </h2>
        <p className="text-slate-500 text-center mb-8 text-lg">
          Spec-Driven Development — el desarrollo impulsado por
          especificaciones.
        </p>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 mb-12">
          <SDDCycle />
        </div>

        <div className="space-y-8">
          {stages.map((stage, i) => (
            <div
              key={stage.title}
              className="flex gap-5 items-start bg-white rounded-xl p-6 border border-slate-200"
            >
              <span className="text-2xl flex-shrink-0">{stage.emoji}</span>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-blue-500 font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-bold font-display text-navy-900">
                    {stage.title}
                  </h3>
                </div>
                <p className="text-slate-600">{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-slate-100 rounded-xl p-8">
          <h2 className="text-xl font-bold font-display text-navy-900 mb-4">
            Beneficios
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: "🚫", text: "Cero scope creep" },
              { icon: "🔗", text: "Trazabilidad completa" },
              { icon: "🎯", text: "Calidad consistente" },
              { icon: "⚡", text: "Rápida iteración" },
              { icon: "🤖", text: "Optimizado para IA" },
              { icon: "📖", text: "Documentación viva" },
            ].map((benefit) => (
              <div
                key={benefit.text}
                className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-slate-200"
              >
                <span>{benefit.icon}</span>
                <span className="text-slate-700 font-medium text-sm">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
