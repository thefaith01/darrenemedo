import Link from "next/link";
import { site } from "@/lib/content";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#what-i-do", label: "What I Do" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-base/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4">
        <Link href="/" className="font-display text-lg font-bold text-ink">
          {site.name}
        </Link>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm font-medium text-muted">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
