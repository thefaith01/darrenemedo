import type { ExternalLink } from "@/lib/content";

/** An external profile link as a plain list row. */
export function LinkCard({ link }: { link: ExternalLink }) {
  return (
    <a href={link.href} target="_blank" rel="noopener" className="group block py-5 no-underline">
      <p className="font-sans text-body font-medium text-ink underline decoration-transparent underline-offset-4 transition-colors duration-200 group-hover:decoration-ink/40">
        {link.label} ↗
      </p>
      <p className="mt-1 text-sm text-muted">{link.description}</p>
    </a>
  );
}
