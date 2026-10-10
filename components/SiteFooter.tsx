import Link from "next/link";
import { site, connections } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-10 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold-dark font-display text-sm font-semibold text-gold-dark">
            DE
          </span>
          <p className="font-sans text-body font-semibold text-ink">{site.name}</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-muted">
          {connections.map((c) => (
            <a
              key={c.href}
              href={c.href}
              target="_blank"
              rel="noopener"
              className="transition-colors duration-200 hover:text-ink"
            >
              {c.label}
            </a>
          ))}
        </nav>
        <p className="font-sans text-label font-normal text-muted">
          © {new Date().getFullYear()} {site.name}
          <Link href="/privacy" className="ml-5 underline decoration-line underline-offset-4 hover:text-ink hover:decoration-ink">
            Privacy
          </Link>
        </p>
      </div>
    </footer>
  );
}
