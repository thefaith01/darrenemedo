import { site, hero } from "@/lib/content";
import { BoomerangVideoBg } from "@/components/BoomerangVideoBg";
import { ui } from "@/components/ui";

const credentials = ["BSc (Hons)", "MTPI", "AssocRICS"];

export function Hero() {
  return (
    <section className="relative flex h-screen flex-col items-center overflow-hidden">
      <BoomerangVideoBg src="/video/hero-elevation.mp4" />

      <div className="relative z-10 flex w-full flex-1 flex-col items-center px-4 pt-28 text-center sm:px-6 sm:pt-32 md:pt-36">
        <h1 className="font-display text-5xl font-normal leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl">
          {site.name}
        </h1>

        <div className="mt-4 flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-faint">
          {credentials.map((c, i) => (
            <span key={c} className="flex items-center gap-3">
              {c}
              {i < credentials.length - 1 && (
                <span className="h-1 w-1 rounded-full bg-gold" />
              )}
            </span>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-sm text-sm leading-relaxed text-muted sm:mt-8 sm:max-w-md sm:text-base">
          {site.headline}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10">
          <a href="#projects" className={`${ui.btnPrimary} px-8 py-3.5`}>
            My projects
          </a>
          <a href="#contact" className={`${ui.btnGhost} px-8 py-3.5`}>
            Get in touch
          </a>
        </div>
      </div>

      <div className="relative z-10 mt-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="border border-b-0 border-line bg-white/90 px-5 pb-0 pt-8 shadow-sm backdrop-blur-sm sm:px-8 sm:pt-12 md:px-12 md:pt-16">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-faint">
                {hero.panelEyebrow}
              </p>
              <h2 className="mt-3 font-display text-2xl font-normal leading-tight tracking-tight text-ink sm:text-3xl md:text-4xl">
                {hero.panelHeadline.map((line, i) => (
                  <span key={line}>
                    {line}
                    {i < hero.panelHeadline.length - 1 && <br className="hidden sm:block" />}{" "}
                  </span>
                ))}
              </h2>
            </div>
            <p className="self-end text-sm leading-relaxed text-muted md:text-[15px]">
              {site.subheadline}
            </p>
          </div>

          <div className="mt-6 h-px w-full bg-line sm:mt-8 md:mt-10" />

          <div className="grid gap-2 py-3 sm:grid-cols-3 sm:gap-3 sm:py-0">
            {hero.pillars.map((p) => (
              <a key={p.number} href={p.href} className="numbered-row group no-underline">
                <span className="text-sm">
                  <span className="text-faint">{p.number}</span>
                  <span className="mx-2 text-faint/60">/</span>
                  <span className="font-medium text-ink">{p.label}</span>
                </span>
                <span className="numbered-row__arrow text-faint">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
