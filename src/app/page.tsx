import Hero from "@/components/organisms/Hero";
import AboutSection from "@/components/organisms/AboutSection";
import ProjectsGrid from "@/components/organisms/ProjectsGrid";
import SkillsSection from "@/components/organisms/SkillsSection";
import ContactSection from "@/components/organisms/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectsGrid />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
