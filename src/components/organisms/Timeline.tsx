import { milestones } from "@/lib/data/timeline";

export default function TimelineSection() {
  return (
    <section className="py-20 bg-blue-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold font-display text-navy-900 mb-4 text-center">
          Mi Trayectoria
        </h2>
        <p className="text-slate-500 text-center mb-12 max-w-xl mx-auto">
          Dos años de aprendizaje continuo, de 0 a 50+ proyectos con SDD.
        </p>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block" />

          <div className="space-y-8 md:space-y-12">
            {milestones.map((milestone, i) => (
              <div
                key={`${milestone.year}-${i}`}
                className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 bg-white rounded-xl p-6 border border-slate-200 shadow-sm ${
                    i % 2 === 0 ? "md:text-right" : ""
                  }`}
                >
                  <span className="text-xs font-mono text-blue-600 font-bold">
                    {milestone.year}
                  </span>
                  <h3 className="text-lg font-bold font-display text-navy-900 mt-1">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>

                <div className="hidden md:flex items-center justify-center w-8 flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow" />
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
