import { Section, SectionHeader, ui } from "@/components/ui";

export function SermonSection() {
  return (
    <Section id="sermon" spacing="tight">
      <SectionHeader
        title="One sermon"
        subtitle="Exploring what happens when good intentions aren't enough, and why we can't perfectly fix our own moral failures."
      />
      <div data-reveal className="max-w-measure space-y-6">
        <p className="text-body text-ink/85">
          In 2014, I preached once on 2 Samuel 6: the death of Uzzah. It&apos;s likely the only
          public sermon I&apos;ll ever deliver. Not a pastor, just someone invited to speak on a
          text that confused me for years.
        </p>
        <a
          href="https://www.sermonaudio.com/sermons/11914727398"
          target="_blank"
          rel="noopener noreferrer"
          className={ui.btnGhost}
        >
          Listen on SermonAudio
        </a>
      </div>
    </Section>
  );
}
