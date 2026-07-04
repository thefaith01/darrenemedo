import { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Shared tokens + primitives (same shape as CMM's components/ui.tsx) */
/*  Colors/fonts are defined in tailwind.config.ts                     */
/* ------------------------------------------------------------------ */

/** Class-name tokens for use in client components (where importing components is awkward). */
export const ui = {
  btnPrimary:
    "inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-accent-dark disabled:opacity-50",
  btnGhost:
    "inline-flex items-center justify-center rounded-full border-[1.5px] border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-chip disabled:opacity-50",
  input:
    "mt-1 w-full rounded-xl border border-line bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-faint focus:outline-none focus:ring-2 focus:ring-accent/40",
  label: "text-sm font-medium text-muted",
  link: "text-accent underline-offset-2 hover:underline",
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
  return <div className={`mx-auto ${max} px-6 py-10 ${className}`}>{children}</div>;
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-[20px] border border-line bg-paper p-6 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

/** Section wrapper: anchor id (offset for the sticky header) + consistent spacing. */
export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-20 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-7">
      {eyebrow && <p className="mb-1.5 font-serif text-lg italic text-accent">{eyebrow}</p>}
      <h2 className="font-display text-[30px] font-bold leading-tight tracking-[-0.02em] text-ink">
        {title}
      </h2>
      {subtitle && <p className="mt-1.5 text-[15px] text-muted">{subtitle}</p>}
    </div>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-chip px-2.5 py-0.5 text-xs font-semibold text-muted">
      {children}
    </span>
  );
}
