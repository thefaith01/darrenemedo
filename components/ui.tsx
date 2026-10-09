import { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Shared tokens + primitives. Civic theme, see DESIGN.md.           */
/*  Colors/fonts/type scale are defined in tailwind.config.ts.        */
/* ------------------------------------------------------------------ */

/** Class-name tokens for use in client components (where importing components is awkward). */
export const ui = {
  btnPrimary:
    "inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 font-sans text-body font-medium text-white transition-colors hover:bg-accent-dark disabled:opacity-50",
  btnGhost:
    "inline-flex items-center justify-center rounded-md border border-ink px-6 py-3 font-sans text-body font-medium text-ink transition-colors hover:bg-ink hover:text-white disabled:opacity-50",
  input:
    "mt-1.5 w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-body text-ink placeholder:text-faint focus:outline-none focus:ring-2 focus:ring-gold-dark/40",
  label: "font-sans text-label text-ink",
  link: "font-sans text-body font-medium text-ink underline decoration-line decoration-1 underline-offset-[5px] transition-colors hover:decoration-ink",
};

export function Container({
  children,
  className = "",
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}) {
  const max =
    size === "narrow" ? "max-w-2xl" : size === "wide" ? "max-w-6xl" : "max-w-5xl";
  return <div className={`mx-auto ${max} px-6 ${className}`}>{children}</div>;
}

export function Card({
  children,
  className = "",
  surface = "paper",
}: {
  children: ReactNode;
  className?: string;
  /** Use "base" (white) when the card sits on a paper-coloured section. */
  surface?: "paper" | "base";
}) {
  const bg = surface === "base" ? "bg-base" : "bg-paper";
  return (
    <div className={`rounded-md border border-line ${bg} p-6 sm:p-8 ${className}`}>
      {children}
    </div>
  );
}

const sectionSpacing = {
  tight: "py-12 md:py-16",
  default: "py-16 md:py-24",
  loose: "py-20 md:py-32",
};

/**
 * Section wrapper: anchor id (offset for the sticky header) and vertical
 * rhythm. Spacing varies by section so the page does not march along at
 * one even beat.
 */
export function Section({
  id,
  children,
  className = "",
  spacing = "default",
}: {
  id: string;
  children: ReactNode;
  className?: string;
  spacing?: keyof typeof sectionSpacing;
}) {
  return (
    <section id={id} className={`scroll-mt-20 ${sectionSpacing[spacing]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10 md:mb-12">
      <h2 className="font-display text-4xl font-normal leading-[1.1] tracking-[-0.01em] text-ink md:text-[2.75rem]">
        {title}
      </h2>
      {subtitle && <p className="mt-3 max-w-measure text-body text-muted">{subtitle}</p>}
    </div>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded bg-chip px-2 py-0.5 text-label text-muted">
      {children}
    </span>
  );
}
