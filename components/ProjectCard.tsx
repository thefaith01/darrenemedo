import type { Project } from "@/lib/content";
import { Badge } from "@/components/ui";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener"
      className="blueprint-card block border border-line bg-paper p-6 no-underline transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_rgba(42,32,22,0.2)]"
    >
      <Badge>{project.tag}</Badge>
      <h3 className="mt-3 font-display text-[17px] font-bold text-ink">{project.title}</h3>
      <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{project.blurb}</p>
      <p className="mt-4 font-display text-xs font-semibold tracking-[0.02em] text-accent">
        {project.href.replace(/^https?:\/\/(www\.)?/, "").toUpperCase()} ↗
      </p>
    </a>
  );
}
