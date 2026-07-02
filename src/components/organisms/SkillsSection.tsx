import { skillCategories } from "@/lib/data/skills";
import Tag from "@/components/atoms/Tag";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold font-display text-navy-900 mb-4 text-center">
          Skills
        </h2>
        <p className="text-slate-500 text-center mb-12 max-w-xl mx-auto">
          Tecnologías y herramientas que domino, con la metodología SDD como
          eje central.
        </p>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="bg-white rounded-xl p-6 border border-slate-200"
            >
              <h2 className="text-sm font-semibold font-mono text-blue-600 uppercase tracking-wider mb-4">
                {category.name}
              </h2>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Tag key={skill.name} label={skill.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
