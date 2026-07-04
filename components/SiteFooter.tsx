import { site, connections } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-base">
      <div className="gold-rule opacity-70" />
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-10 text-center">
        <span className="monogram-ring flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-gold font-display text-[13px] font-bold text-gold">
          DE
        </span>
        <p className="font-display text-[13px] font-bold tracking-[0.08em]">
          {site.name.toUpperCase()}
        </p>
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm text-line">
          {connections.map((c) => (
            <a
              key={c.href}
              href={c.href}
              target="_blank"
              rel="noopener"
              className="transition-colors hover:text-gold"
            >
              {c.label}
            </a>
          ))}
        </nav>
        <p className="mt-2 font-display text-[11px] tracking-[0.06em] text-line">
          © {new Date().getFullYear()} {site.name.toUpperCase()}
        </p>
      </div>
    </footer>
  );
}
