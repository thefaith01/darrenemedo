import { Section, SectionHeader } from "@/components/ui";

export function SermonSection() {
  return (
    <Section id="sermon">
      <SectionHeader
        eyebrow="Faith"
        title="One sermon"
        subtitle="A single public message on faith, judgment, and what it means to live well."
      />
      <div
        data-reveal
        className="mx-auto max-w-2xl space-y-4 text-center"
      >
        <p className="text-[15px] leading-relaxed text-muted">
          In 2014, I preached once at the Metropolitan Tabernacle on 2 Samuel 6—the death of Uzzah.
          It's likely the only public sermon I'll ever deliver. Not a pastor, just someone invited
          to speak on a text that confused me for years.
        </p>
        <a
          href="https://www.sermonaudio.com/sermons/11914727398"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-sm bg-accent px-6 py-3 font-display text-sm font-semibold tracking-[0.06em] text-base transition-colors hover:bg-accent-dark"
        >
          LISTEN ON SERMONAUDIO
        </a>
      </div>
    </Section>
  );
}
