import type { ExternalLink } from "@/lib/content";

export function LinkCard({ link }: { link: ExternalLink }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener"
      className="block rounded-lg border border-line p-4 no-underline transition-colors duration-200 hover:border-gold"
    >
      <p className="font-sans text-[13.5px] font-semibold text-ink">{link.label} ↗</p>
      <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{link.description}</p>
    </a>
  );
}
