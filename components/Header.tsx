import Link from "next/link";
import { site } from "@/lib/content";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#what-i-do", label: "What I Do" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#waitlist", label: "Waiting List" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
];

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-6 py-4 sm:px-10 sm:py-5 md:px-14">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <span className="monogram-ring flex h-8 w-8 items-center justify-center rounded-full border-[1.5px] border-gold font-display text-[13px] font-bold text-gold shadow-[inset_0_0_0_3px_rgba(183,150,62,0.12)]">
            DE
          </span>
          <span className="font-sans text-base font-semibold tracking-tight text-ink">
            {site.name}
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link font-sans text-sm text-ink/70 transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-lg bg-ink px-5 py-2.5 font-sans text-sm font-medium text-white transition-colors duration-200 hover:bg-ink/90"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
