import { highlights } from "@/lib/content";
import { Section, SectionHeader } from "@/components/ui";

export function CornerstoneSection() {
  return (
    <Section id="track-record" spacing="tight" className="pt-0 md:pt-0">
      <SectionHeader title="Track record" />
      <ul data-reveal className="max-w-measure divide-y divide-line border-y border-line">
        {highlights.map((h) => (
          <li key={h.slice(0, 30)} className="py-5 text-body text-ink">
            {h}
          </li>
        ))}
      </ul>
    </Section>
  );
}
