import Image from "next/image";
import { about } from "@/lib/content";
import { Section, SectionHeader } from "@/components/ui";

export function AboutSection() {
  return (
    <Section id="about">
      <SectionHeader eyebrow="Who I am" title={about.heading} />
      <div data-reveal className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:gap-12">
        <div className="space-y-4 text-[15px] leading-relaxed text-muted">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>

        <div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg grayscale transition-all duration-500 hover:grayscale-0">
            <Image
              src="/profile.jpg"
              alt="Darren Emedo"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.2em] text-faint">
            Associate Director
          </p>
          <p className="text-sm text-muted">Regency</p>
        </div>
      </div>
    </Section>
  );
}
