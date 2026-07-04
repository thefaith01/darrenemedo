import { highlights } from "@/lib/content";
import { Section } from "@/components/ui";

export function CornerstoneSection() {
  return (
    <Section id="highlights" className="bg-ink">
      <div className="section-divider">
        <span className="section-divider-label">Track record</span>
      </div>

      <div data-reveal className="text-center">
        <p className="plate-numeral">100+</p>
        <p className="plate-numeral-label">Property managers briefed on a new incentive scheme</p>
      </div>

      <div data-reveal className="mt-10 grid gap-4 sm:grid-cols-2">
        {highlights.map((h) => (
          <div key={h.slice(0, 30)} className="corner-bracket highlight-item-dark">
            <p>{h}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
