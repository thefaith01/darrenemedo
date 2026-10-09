import { site, hero } from "@/lib/content";
import { BoomerangVideoBg } from "@/components/BoomerangVideoBg";
import { ui } from "@/components/ui";

const credentials = ["BSc (Hons)", "MTPI", "AssocRICS"];

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center overflow-hidden">
      <BoomerangVideoBg src="/video/hero-elevation.mp4" />

      <div className="relative z-10 flex w-full flex-1 flex-col items-center px-6 pt-32 text-center md:pt-40">
        <h1 className="font-display text-5xl font-normal leading-[1.05] tracking-[-0.015em] text-ink sm:text-6xl md:text-7xl">
          {site.name}
        </h1>

        <p className="mt-4 font-sans text-sm text-muted">
          {credentials.join(" · ")}
        </p>

        <p className="mx-auto mt-6 max-w-md text-body text-ink/85 sm:text-lead">
          {site.headline}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <a href="#projects" className={`${ui.btnPrimary} px-8`}>
            See my projects
          </a>
          <a href="#waitlist" className={ui.link}>
            Join the waiting list
          </a>
        </div>
      </div>

      <div className="relative z-10 mt-16 w-full max-w-5xl px-4 sm:px-6">
        <div className="bg-base px-6 pb-12 pt-10 sm:px-10 md:px-14 md:pb-16 md:pt-14">
          <div className="grid gap-6 md:grid-cols-[1fr_1.1fr] md:gap-16">
            <h2 className="font-display text-3xl font-normal leading-[1.15] tracking-[-0.01em] text-ink md:text-4xl">
              {hero.panelHeadline}
            </h2>
            <p className="max-w-measure self-end text-body text-muted">{site.subheadline}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
