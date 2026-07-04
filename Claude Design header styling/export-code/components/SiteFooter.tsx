import { site, connections } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-base">
      <div className="gold-rule opacity-40" />
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-sm text-muted">
        <p className="font-display text-[12.5px] tracking-[0.03em]">
          © {new Date().getFullYear()} {site.name.toUpperCase()}
        </p>
        <nav className="flex flex-wrap gap-x-5 gap-y-1">
          {connections.map((c) => (
            <a
              key={c.href}
              href={c.href}
              target="_blank"
              rel="noopener"
              className="transition-colors hover:text-accent"
            >
              {c.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
