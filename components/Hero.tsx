import { site } from "@/lib/content";
import { Container, ui } from "@/components/ui";

export function Hero() {
  return (
    <Container className="pb-4 pt-16">
      <p className="font-serif text-lg italic text-accent">Hello, I&apos;m</p>
      <h1 className="mt-1 font-display text-5xl font-bold leading-tight tracking-[-0.02em] text-ink">
        {site.name}
      </h1>
      <p className="mt-3 max-w-xl text-xl text-muted">{site.headline}</p>
      <p className="mt-2 max-w-xl text-[15px] text-muted">{site.subheadline}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href="#projects" className={ui.btnPrimary}>
          See my projects
        </a>
        <a href="#contact" className={ui.btnGhost}>
          Get in touch
        </a>
      </div>
    </Container>
  );
}
