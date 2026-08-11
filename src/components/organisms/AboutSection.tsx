import Image from "next/image";
import { profile } from "@/lib/data/profile";
import SectionHeader from "@/components/molecules/SectionHeader";

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader number="01." title="Sobre Mí" />

        <div className="mt-12 flex flex-col md:flex-row gap-10 items-start">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/30 to-secondary/20 p-1 overflow-hidden">
              <Image
                src={profile.image}
                alt={profile.name}
                width={192}
                height={192}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold font-display text-foreground mb-2">
              {profile.name}
            </h2>
            <p className="text-primary font-medium font-mono text-sm mb-4">
              {profile.age} años · {profile.title}
            </p>
            <div className="text-muted-foreground leading-relaxed space-y-4 whitespace-pre-line">
              {profile.bio}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
