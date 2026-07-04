import { site, connections } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-base">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <nav className="flex flex-wrap gap-x-5 gap-y-1">
          {connections.map((c) => (
            <a
              key={c.href}
              href={c.href}
              target="_blank"
              rel="noopener"
              className="transition-colors hover:text-ink"
            >
              {c.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
