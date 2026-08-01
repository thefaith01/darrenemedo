import { highlights } from "@/lib/content";
import { Section } from "@/components/ui";

export function CornerstoneSection() {
  return (
    <Section id="track-record">
      <div className="section-divider">
        <span className="section-divider-label">Track record</span>
      </div>

      <div data-reveal className="text-center">
        <p className="font-display text-6xl font-normal leading-none tracking-tight text-ink md:text-7xl">
          100+
        </p>
        <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.2em] text-faint">
          Property managers briefed on a new incentive scheme
        </p>
      </div>

      <div className="mt-10 h-px w-full bg-line" />

      <div data-reveal className="divide-y divide-line">
        {highlights.map((h, i) => (
          <div key={h.slice(0, 30)} className="numbered-row numbered-row--ghost">
            <span className="text-sm leading-relaxed text-ink">
              <span className="mr-3 text-faint">{String(i + 1).padStart(2, "0")} /</span>
              {h}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
