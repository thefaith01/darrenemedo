import { about, connections } from "@/lib/content";
import { Section, SectionHeader } from "@/components/ui";
import { LinkCard } from "@/components/LinkCard";

export function AboutSection() {
  return (
    <Section id="about">
      <SectionHeader eyebrow="Who I am" title={about.heading} />
      <div className="max-w-2xl space-y-4 text-[15px] leading-relaxed text-ink">
        {about.paragraphs.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {connections.map((c) => (
          <LinkCard key={c.href} link={c} />
        ))}
      </div>
    </Section>
  );
}
