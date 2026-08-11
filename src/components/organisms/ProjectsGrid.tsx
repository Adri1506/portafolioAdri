import { projects } from "@/lib/data/projects";
import ProjectCard from "@/components/molecules/ProjectCard";

/** Stack representativo de los 50+ proyectos locales (tira compacta) */
const LOCAL_PROJECT_TECH = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "Prisma",
  "Vercel",
  "Framer Motion",
  "Figma",
];

/** Perfil de GitHub del portafolio (extraído del remote del repo) */
const GITHUB_URL = "https://github.com/Adri1506";

export default function ProjectsGrid() {
  return (
    <section id="proyectos" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-h2 font-semibold text-foreground">
          Proyectos
        </h2>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground">
          Proyectos en producción y locales que muestran mi trabajo con la
          metodología SDD.
        </p>

        {/* Grid 2x2: todas las cards del mismo tamaño */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:gap-8">
          {projects.map((project) => (
            <div key={project.id} className="max-w-lg w-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Tira "50+ proyectos locales": pills compactas scrollables + GitHub */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              50+ proyectos locales
            </p>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-wider text-secondary transition-colors duration-200 hover:text-primary"
            >
              GitHub ↗
            </a>
          </div>
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
            {LOCAL_PROJECT_TECH.map((tech) => (
              <span
                key={tech}
                className="shrink-0 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
