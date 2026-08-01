import { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Shared tokens + primitives — TrustFlow theme                      */
/*  Colors/fonts are defined in tailwind.config.ts                    */
/* ------------------------------------------------------------------ */

/** Class-name tokens for use in client components (where importing components is awkward). */
export const ui = {
  btnPrimary:
    "inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 font-sans text-sm font-medium text-base transition-colors hover:bg-accent-dark disabled:opacity-50",
  btnGhost:
    "inline-flex items-center justify-center rounded-lg border border-ink px-6 py-3 font-sans text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-base disabled:opacity-50",
  input:
    "mt-1.5 w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-[15px] text-ink placeholder:text-faint focus:outline-none focus:ring-2 focus:ring-gold/40",
  label: "font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-muted",
  link: "font-sans text-xs font-semibold tracking-[0.03em] text-accent underline underline-offset-4 hover:text-accent-dark",
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
    <div className={`rounded-lg border border-line bg-paper p-6 ${className}`}>
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
    <div className="mb-8">
      {eyebrow && (
        <div className="section-divider">
          <span className="section-divider-label">{eyebrow}</span>
        </div>
      )}
      <h2 className="font-display text-[32px] md:text-4xl font-normal leading-tight tracking-tight text-ink">
        {title}
      </h2>
      {subtitle && <p className="mt-2 text-[15px] text-muted">{subtitle}</p>}
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
