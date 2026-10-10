import { highlightGroups } from "@/lib/content";
import { Section, SectionHeader } from "@/components/ui";

/** Track record as two grouped columns, spaced rather than ruled. */
export function CornerstoneSection() {
  return (
    <Section id="track-record" spacing="tight" className="pt-0 md:pt-0">
      <SectionHeader title="Track record" />
      <div data-reveal className="grid gap-12 md:grid-cols-2 md:gap-16">
        {highlightGroups.map((group) => (
          <div key={group.title}>
            <h3 className="font-display text-[1.375rem] font-normal leading-snug text-ink">
              {group.title}
            </h3>
            <ul className="mt-5 space-y-5">
              {group.items.map((h) => (
                <li key={h.slice(0, 30)} className="max-w-measure text-body text-ink/85">
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
