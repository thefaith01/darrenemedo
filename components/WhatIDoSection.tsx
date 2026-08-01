import { whatIDo } from "@/lib/content";
import { Section, SectionHeader } from "@/components/ui";

export function WhatIDoSection() {
  return (
    <Section id="what-i-do" className="border-y border-line bg-paper">
      <SectionHeader eyebrow="Day to day" title={whatIDo.heading} />
      <div data-reveal className="grid gap-8 sm:grid-cols-2 sm:gap-10">
        {whatIDo.items.map((item) => (
          <div key={item.title}>
            <h3 className="font-display text-xl font-normal text-ink">{item.title}</h3>
            <div className="my-3 h-px w-8 bg-gold" />
            <p className="text-[14.5px] leading-relaxed text-muted">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
