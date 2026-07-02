import Hero from "@/components/organisms/Hero";
import ProjectsGrid from "@/components/organisms/ProjectsGrid";
import SkillsSection from "@/components/organisms/SkillsSection";
import AboutSection from "@/components/organisms/AboutSection";
import ContactSection from "@/components/organisms/ContactSection";
import ScrollReveal from "@/components/atoms/ScrollReveal";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollReveal delay={100}>
        <ProjectsGrid />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <SkillsSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <AboutSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <ContactSection />
      </ScrollReveal>
    </>
  );
}
