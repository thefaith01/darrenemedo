import { whatIDo } from "@/lib/content";
import { Card, Section, SectionHeader } from "@/components/ui";

export function WhatIDoSection() {
  return (
    <Section id="what-i-do">
      <SectionHeader eyebrow="Day to day" title={whatIDo.heading} />
      <div className="grid gap-4 md:grid-cols-3">
        {whatIDo.items.map((item) => (
          <Card key={item.title}>
            <h3 className="font-display text-[17px] font-bold text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
