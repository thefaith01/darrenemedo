import { whatIDo } from "@/lib/content";
import { Section, SectionHeader } from "@/components/ui";

export function WhatIDoSection() {
  return (
    <Section id="what-i-do" className="border-y border-line bg-paper">
      <SectionHeader title={whatIDo.heading} />
      <dl data-reveal className="divide-y divide-line border-t border-line">
        {whatIDo.items.map((item) => (
          <div
            key={item.title}
            className="grid gap-2 py-7 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-12"
          >
            <dt className="font-display text-[1.375rem] font-normal leading-snug text-ink">
              {item.title}
            </dt>
            <dd className="max-w-measure text-body text-muted">{item.description}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
