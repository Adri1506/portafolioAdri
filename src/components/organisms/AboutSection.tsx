import Image from "next/image";
import { profile } from "@/lib/data/profile";
import StatCard from "@/components/molecules/StatCard";

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 scroll-mt-20 gradient-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold font-display text-navy-900 mb-12 text-center">
          Sobre Mí
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 p-1 overflow-hidden">
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
            <h2 className="text-2xl font-bold font-display text-navy-900 mb-2">
              {profile.name}
            </h2>
            <p className="text-blue-600 font-medium mb-4">
              {profile.age} años · {profile.title}
            </p>
            <div className="text-slate-600 leading-relaxed space-y-4 whitespace-pre-line">
              {profile.bio}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {profile.stats.map((stat) => (
            <StatCard key={stat.label} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
