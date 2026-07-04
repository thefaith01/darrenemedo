import type { ExternalLink } from "@/lib/content";

export function LinkCard({ link }: { link: ExternalLink }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener"
      className="block rounded-[18px] border border-line bg-paper p-4 no-underline shadow-sm transition hover:shadow-md"
    >
      <p className="font-display text-[15px] font-bold text-ink">{link.label} ↗</p>
      <p className="mt-1 text-xs leading-relaxed text-muted">{link.description}</p>
    </a>
  );
}
