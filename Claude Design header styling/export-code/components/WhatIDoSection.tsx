import { whatIDo } from "@/lib/content";
import { Card, Section, SectionHeader } from "@/components/ui";

export function WhatIDoSection() {
  return (
    <Section id="what-i-do" className="border-y border-line bg-paper">
      <SectionHeader eyebrow="Day to day" title={whatIDo.heading} />
      <div className="grid gap-4 md:grid-cols-3">
        {whatIDo.items.map((item) => (
          <Card key={item.title}>
            <h3 className="font-display text-[15.5px] font-bold tracking-[0.01em] text-ink">
              {item.title.toUpperCase()}
            </h3>
            <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{item.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
