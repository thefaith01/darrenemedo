import { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Shared tokens + primitives — Roman theme                          */
/*  Colors/fonts are defined in tailwind.config.ts                    */
/* ------------------------------------------------------------------ */

/** Class-name tokens for use in client components (where importing components is awkward). */
export const ui = {
  btnPrimary:
    "inline-flex items-center justify-center rounded-sm bg-accent px-6 py-3 font-display text-[13px] font-semibold tracking-[0.06em] text-base transition-colors hover:bg-accent-dark disabled:opacity-50",
  btnGhost:
    "inline-flex items-center justify-center rounded-sm border-[1.5px] border-gold px-6 py-3 font-display text-[13px] font-semibold tracking-[0.06em] text-ink transition-colors hover:bg-gold/10 disabled:opacity-50",
  input:
    "mt-1.5 w-full rounded-sm border border-line bg-white px-3.5 py-2.5 text-[15px] text-ink placeholder:text-faint focus:outline-none focus:ring-2 focus:ring-gold/40",
  label: "font-display text-xs font-semibold tracking-[0.04em] text-muted",
  link: "font-display text-xs font-semibold tracking-[0.03em] text-accent underline underline-offset-4 hover:text-accent-dark",
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
    <div className={`rounded-sm border border-line border-t-[3px] border-t-gold bg-paper p-6 ${className}`}>
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
      {eyebrow && (
        <p className="mb-2 font-display text-[13px] tracking-[0.2em] text-accent">
          {eyebrow.toUpperCase()}
        </p>
      )}
      <h2 className="font-display text-[28px] font-bold tracking-[0.02em] text-ink">
        {title.toUpperCase()}
      </h2>
      {subtitle && <p className="mt-2 font-serif text-[15.5px] italic text-muted">{subtitle}</p>}
    </div>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-sm bg-chip px-2.5 py-1 font-display text-[11px] font-semibold tracking-[0.05em] text-muted">
      {children}
    </span>
  );
}
