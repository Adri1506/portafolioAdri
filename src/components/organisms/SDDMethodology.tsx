import SectionHeader from "@/components/molecules/SectionHeader";

const stages = ["SPEC", "PLAN", "TASKS", "IMPLEMENT", "VERIFY"];

export default function SDDMethodology() {
  return (
    <section id="metodologia" className="py-20 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader number="04." title="Metodología SDD" />

        <ol className="mt-14 flex list-none flex-col md:flex-row md:flex-1 md:items-center">
          {stages.map((stage, i) => {
            const isLast = i === stages.length - 1;
            const num = String(i + 1).padStart(2, "0");
            return (
              <li
                key={stage}
                className="flex flex-col md:flex-row md:flex-1 md:items-center"
              >
                <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-2">
                  <span className="font-mono text-sm text-primary">{num}</span>
                  <span className="font-mono text-xs uppercase tracking-wider whitespace-nowrap">
                    {stage}
                  </span>
                </div>

                {!isLast && (
                  <div
                    aria-hidden="true"
                    className="hidden md:flex md:mx-5 md:flex-1 md:items-center"
                  >
                    <span className="h-px flex-1 bg-border-strong" />
                    <span className="ml-2 font-mono text-sm text-primary">
                      →
                    </span>
                  </div>
                )}

                {!isLast && (
                  <div
                    aria-hidden="true"
                    className="flex flex-col items-center self-start py-3 pl-4 md:hidden"
                  >
                    <span className="font-mono text-sm leading-none text-primary">
                      ↓
                    </span>
                    <span className="mt-1 h-6 w-px bg-border-strong" />
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}