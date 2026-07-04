import { about, connections, highlights } from "@/lib/content";
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

      <p className="mb-3 mt-9 font-serif text-lg italic text-accent">At a glance</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {highlights.map((h) => (
          <div
            key={h.slice(0, 30)}
            className="flex items-start gap-2.5 rounded-sm border border-line bg-paper/60 px-4 py-3"
          >
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
            <p className="text-[13.5px] leading-relaxed text-muted">{h}</p>
          </div>
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
