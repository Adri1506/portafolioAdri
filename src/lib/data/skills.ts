import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "Next.js", category: "Frontend" },
      { name: "React", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "HTML/CSS", category: "Frontend" },
    ],
  },
  {
    name: "SDD & IA",
    skills: [
      { name: "Spec-Driven Development", category: "SDD" },
      { name: "Programación Agéntica", category: "SDD" },
      { name: "Skills y Agentes", category: "SDD" },
      { name: "Pipeline Orchestration", category: "SDD" },
      { name: "Prompt Engineering", category: "SDD" },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git/GitHub", category: "Tools" },
      { name: "VS Code", category: "Tools" },
      { name: "Node.js", category: "Tools" },
      { name: "npm/pnpm", category: "Tools" },
    ],
  },
  {
    name: "Deploy",
    skills: [
      { name: "Vercel", category: "Deploy" },
      { name: "CI/CD", category: "Deploy" },
      { name: "DNS/Dominios", category: "Deploy" },
    ],
  },
];
