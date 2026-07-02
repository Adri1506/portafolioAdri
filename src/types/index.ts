export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageFull?: string;
  tags: string[];
  status: "production" | "local";
  url?: string;
  category: string;
  learnings?: string[];
  features?: string[];
}

export interface Skill {
  name: string;
  category: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Stat {
  number: string;
  label: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  whatsapp: string;
}
