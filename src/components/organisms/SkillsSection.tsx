import SectionHeader from "@/components/molecules/SectionHeader";
import { skillCategories } from "@/lib/data/skills";

// Data actual: sin campo `level`. Se tipa como opcional para mostrar el nivel
// cuando exista en los datos sin romper el contrato actual.
const categories: Array<{
  name: string;
  skills: Array<{ name: string; level?: string }>;
}> = skillCategories;

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 scroll-mt-20 texture-dots">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader number="03." title="Habilidades" />

        <div className="mt-12 space-y-10">
          {categories.map((category) => (
            <div key={category.name}>
              <h3 className="font-mono text-xs uppercase tracking-wider text-primary">
                {category.name}
              </h3>
              <ul className="mt-4">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-baseline justify-between border-b border-border py-2"
                  >
                    <span className="font-mono text-sm">{skill.name}</span>
                    {skill.level && (
                      <span className="text-xs text-muted-foreground">
                        {skill.level}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}