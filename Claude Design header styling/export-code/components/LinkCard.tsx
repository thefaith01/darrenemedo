import type { ExternalLink } from "@/lib/content";

export function LinkCard({ link }: { link: ExternalLink }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener"
      className="block rounded-sm border border-line bg-paper p-4 no-underline transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-10px_rgba(42,32,22,0.18)]"
    >
      <p className="font-display text-[13.5px] font-bold text-ink">{link.label.toUpperCase()} ↗</p>
      <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{link.description}</p>
    </a>
  );
}
