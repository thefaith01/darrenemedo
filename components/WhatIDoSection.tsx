import { whatIDo } from "@/lib/content";
import { Section, SectionHeader } from "@/components/ui";

export function WhatIDoSection() {
  return (
    <Section id="what-i-do" className="border-y border-line bg-paper">
      <SectionHeader eyebrow="Day to day" title={whatIDo.heading} />
      <div data-reveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whatIDo.items.map((item) => (
          <div key={item.title} className="card-with-accent card-hover-accent">
            <h3 className="font-display text-[15px] font-bold tracking-[0.01em] text-ink">
              {item.title.toUpperCase()}
            </h3>
            <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
