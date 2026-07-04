import type { Project } from "@/lib/content";
import { Badge } from "@/components/ui";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener"
      className="block rounded-[18px] border border-line bg-paper p-5 no-underline shadow-sm transition hover:shadow-md"
    >
      <Badge>{project.tag}</Badge>
      <h3 className="mt-2 font-display text-[17px] font-bold text-ink">{project.title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-muted">{project.blurb}</p>
      <p className="mt-3 text-xs font-semibold text-accent">
        {project.href.replace(/^https?:\/\/(www\.)?/, "")} ↗
      </p>
    </a>
  );
}
