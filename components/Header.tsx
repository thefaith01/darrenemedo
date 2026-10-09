import Link from "next/link";
import { site } from "@/lib/content";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#what-i-do", label: "What I do" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#waitlist", label: "Waiting list" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
];

export function Header() {
  return (
    <header className="site-header fixed left-0 right-0 top-0 z-50 px-6 py-3.5 sm:px-10 md:px-14">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold-dark font-display text-sm font-semibold text-gold-dark">
            DE
          </span>
          <span className="font-sans text-body font-semibold text-ink">{site.name}</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link font-sans text-sm text-muted transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-md bg-ink px-5 py-2.5 font-sans text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-dark"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
