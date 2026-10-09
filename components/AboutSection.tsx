import Image from "next/image";
import { about } from "@/lib/content";
import { Section, SectionHeader } from "@/components/ui";

export function AboutSection() {
  return (
    <Section id="about" spacing="loose">
      <SectionHeader title={about.heading} />
      <div
        data-reveal
        className="grid gap-10 md:grid-cols-[minmax(0,1fr)_280px] md:gap-16 lg:grid-cols-[minmax(0,1fr)_320px]"
      >
        <div className="max-w-measure space-y-5 text-body text-ink/85">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>

        {/* Sticky on desktop so the photo travels with the long biography
            instead of leaving an empty column beneath it. */}
        <figure className="order-first md:order-none md:sticky md:top-28 md:self-start">
          <div className="relative aspect-[4/5] overflow-hidden rounded-md">
            <Image
              src="/profile.jpg"
              alt="Darren Emedo"
              fill
              sizes="(min-width: 1024px) 320px, (min-width: 768px) 280px, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-sm text-muted">
            Associate Director, Regency
          </figcaption>
        </figure>
      </div>
    </Section>
  );
}
