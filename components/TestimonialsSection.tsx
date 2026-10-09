import { testimonials } from "@/lib/content";
import { Section, SectionHeader } from "@/components/ui";

/** Trustpilot's own star mark, kept in its brand green (documented in DESIGN.md). */
function TrustpilotStars({ label }: { label: string }) {
  return (
    <div className="flex gap-[3px]" role="img" aria-label={label}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="flex h-[18px] w-[18px] items-center justify-center bg-[#00b67a] text-xs leading-none text-white"
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
      className="flex w-[300px] shrink-0 snap-start flex-col rounded-md border border-line bg-base p-6 no-underline transition-colors duration-200 hover:border-ink/40 sm:w-[340px]"
    >
      <TrustpilotStars label={`${testimonial.rating} out of 5 stars on Trustpilot`} />
      <p className="mt-4 flex-1 text-sm text-ink">&ldquo;{testimonial.text}&rdquo;</p>
      <p className="mt-5 text-sm font-medium text-ink">{testimonial.author}</p>
      <p className="text-label font-normal text-muted">
        {testimonial.source}, {testimonial.date}
      </p>
    </a>
  );
}

const FEATURED_AUTHOR = "Nathan";

export function TestimonialsSection() {
  const featured =
    testimonials.find((t) => t.author === FEATURED_AUTHOR) ?? testimonials[0];
  const rest = testimonials.filter((t) => t !== featured);

  return (
    <Section id="testimonials" spacing="loose">
      <SectionHeader
        title="What clients say"
        subtitle={`${testimonials.length} five-star reviews naming Darren directly, left by residents and clients.`}
      />

      <figure data-reveal className="mb-14 max-w-3xl">
        <blockquote className="font-display text-xl font-normal leading-[1.45] text-ink md:text-[1.75rem] md:leading-[1.4]">
          &ldquo;{featured.text}&rdquo;
        </blockquote>
        <figcaption className="mt-5 text-sm text-muted">
          <a
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
          >
            {featured.author}
          </a>
          , {featured.source}, {featured.date}
        </figcaption>
      </figure>

      <div
        data-reveal
        className="-mx-6 flex items-start snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:thin]"
      >
        {rest.map((testimonial) => (
          <TestimonialCard key={testimonial.url} testimonial={testimonial} />
        ))}
        {/* Trailing spacer so the last card does not sit flush against the edge. */}
        <span aria-hidden="true" className="w-2 shrink-0" />
      </div>
    </Section>
  );
}
