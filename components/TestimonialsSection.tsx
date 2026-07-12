import { testimonials } from "@/lib/content";
import { Section, SectionHeader } from "@/components/ui";

function TrustpilotStars() {
  return (
    <div className="flex gap-[3px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="flex h-[18px] w-[18px] items-center justify-center bg-[#00b67a] text-[11px] leading-none text-white"
        >
          ★
        </span>
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <a
      href={testimonial.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-[300px] shrink-0 snap-start flex-col rounded-[6px] border border-line bg-paper p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:w-[320px]"
    >
      <div className="mb-3 flex items-center justify-between">
        <TrustpilotStars />
        <span className="font-display text-[11px] font-bold tracking-[0.02em] text-[#00b67a]">
          Trustpilot
        </span>
      </div>
      <p className="flex-1 text-[14px] leading-relaxed text-ink">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
        <p className="font-serif text-[13px] font-semibold text-muted">
          {testimonial.author}
        </p>
        <span className="font-display text-[10px] font-semibold tracking-[0.03em] text-faint opacity-0 transition-opacity group-hover:opacity-100">
          VIEW ↗
        </span>
      </div>
    </a>
  );
}

export function TestimonialsSection() {
  return (
    <Section id="testimonials">
      <SectionHeader
        eyebrow="Verified reviews"
        title="What clients say"
        subtitle={`${testimonials.length} five-star Trustpilot reviews naming Darren directly, left by residents and clients at HML Group.`}
      />
      <div
        data-reveal
        className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:thin]"
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.url} testimonial={testimonial} />
        ))}
      </div>
      <a
        href="https://uk.trustpilot.com/review/www.hmlgroup.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 font-display text-xs font-semibold tracking-[0.03em] text-[#00b67a] hover:underline"
      >
        See all reviews on Trustpilot ↗
      </a>
    </Section>
  );
}
