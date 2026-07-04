import Link from "next/link";
import { site } from "@/lib/content";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#what-i-do", label: "What I Do" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-base/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-3.5">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <span className="monogram-ring flex h-[34px] w-[34px] items-center justify-center rounded-full border-[1.5px] border-gold font-display text-[13px] font-bold text-gold shadow-[inset_0_0_0_3px_rgba(183,150,62,0.12)]">
            DE
          </span>
          <span className="font-display text-[17px] font-bold tracking-[0.04em] text-ink">
            {site.name.toUpperCase()}
          </span>
        </Link>
        <nav className="flex flex-wrap items-center">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link px-4 font-serif text-[15px] font-semibold text-muted transition-colors hover:text-accent ${
                i < navLinks.length - 1 ? "border-r border-line" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 inline-flex items-center justify-center rounded-sm bg-accent px-5 py-2 font-display text-xs font-semibold tracking-[0.06em] text-base transition-colors hover:bg-accent-dark"
          >
            CONTACT
          </a>
        </nav>
      </div>
      <div className="gold-rule" />
    </header>
  );
}
