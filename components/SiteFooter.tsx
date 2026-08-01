import { site, connections } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-2.5">
          <span className="monogram-ring flex h-8 w-8 items-center justify-center rounded-full border-[1.5px] border-gold font-display text-[13px] font-bold text-gold">
            DE
          </span>
          <p className="font-sans text-sm font-semibold tracking-tight text-ink">
            {site.name}
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm text-muted">
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
        <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-faint">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
