import Image from "next/image";
import { site } from "@/lib/content";
import { ui } from "@/components/ui";

const credentials = ["BSc (Hons)", "MTPI", "AssocRICS"];

function Pillar() {
  return (
    <div className="hidden w-14 flex-col items-center sm:flex">
      <div className="h-3.5 w-[72px] rounded-[1px] border border-gold/40 bg-line" />
      <div className="h-2.5 w-14 border-x border-gold/40 bg-chip" />
      <div
        className="h-[220px] w-[38px] border-x border-gold/40 shadow-[inset_0_0_12px_rgba(0,0,0,0.05)]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #EFE4C9 0 4px, #DBCBA0 4px 8px)",
        }}
      />
      <div className="h-2.5 w-14 border-x border-gold/40 bg-chip" />
      <div className="h-3.5 w-[72px] rounded-[1px] border border-gold/40 bg-line" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16">
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(700px 460px at 85% 0%, rgba(162,62,36,0.09), transparent 62%), radial-gradient(600px 500px at 5% 100%, rgba(183,150,62,0.12), transparent 65%), linear-gradient(180deg, #F6F0E2, #F3ECDD 60%)",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-1 items-end gap-7 px-6 pb-14 sm:grid-cols-[auto_1fr_auto_auto]">
        <Pillar />

        <div>
          <p className="mb-3 font-display text-sm tracking-[0.2em] text-accent">SALVE — I&apos;M</p>
          <h1 className="font-display text-[38px] font-bold leading-[1.05] tracking-[0.02em] text-ink sm:text-[56px]">
            {site.name.toUpperCase()}
          </h1>

          <div className="my-5 h-0.5 w-16 bg-gold" />

          <div className="mb-5 flex flex-wrap gap-2">
            {credentials.map((c) => (
              <span
                key={c}
                className="rounded-[2px] border border-gold/35 bg-gold/10 px-2.5 py-1 font-serif text-[12.5px] font-semibold tracking-[0.04em] text-gold-dark"
              >
                {c}
              </span>
            ))}
          </div>

          <p className="max-w-[480px] font-serif text-xl italic text-ink">{site.headline}</p>
          <p className="mt-3.5 max-w-[460px] text-[16.5px] leading-relaxed text-muted">
            {site.subheadline}
          </p>

          <div className="mt-7 flex flex-wrap gap-3.5">
            <a href="#projects" className={ui.btnPrimary}>
              MY PROJECTS
            </a>
            <a href="#contact" className={ui.btnGhost}>
              GET IN TOUCH
            </a>
          </div>
        </div>

        <Pillar />

        <div className="mx-auto flex flex-col items-center sm:mx-0">
          <div className="relative h-[300px] w-[240px] rounded-[110px_110px_6px_6px] border-2 border-gold/40 bg-chip p-2.5 shadow-[0_24px_48px_-16px_rgba(42,32,22,0.3)]">
            {/* Add a headshot at public/profile.jpg */}
            <div className="relative h-full w-full overflow-hidden rounded-[100px_100px_2px_2px] bg-line">
              <Image
                src="/profile.jpg"
                alt={site.name}
                fill
                sizes="240px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="-mt-2 max-w-[220px] rounded-[2px] border border-line bg-paper px-4 py-3 text-center shadow-[0_12px_28px_-14px_rgba(42,32,22,0.25)]">
            <p className="font-display text-[12.5px] font-bold tracking-[0.03em] text-ink">
              TEAM LEADER
            </p>
            <p className="mt-1 font-serif text-[13px] italic text-muted">
              HML Group — Leasehold Block Management
            </p>
          </div>
        </div>
      </div>

      <div className="arcade-divider" />
    </section>
  );
}
