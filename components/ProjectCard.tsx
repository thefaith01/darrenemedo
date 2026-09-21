import type { Project } from "@/lib/content";
import { Badge } from "@/components/ui";

export function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      <Badge>{project.tag}</Badge>
      <h3 className="mt-3 font-display text-xl font-normal text-ink">{project.title}</h3>
      <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{project.blurb}</p>
      {project.href && (
        <p className="mt-4 font-sans text-xs font-semibold tracking-[0.02em] text-accent">
          {project.href.replace(/^https?:\/\/(www\.)?/, "").toUpperCase()} ↗
        </p>
      )}
    </>
  );

  if (!project.href) {
    return (
      <div className="block rounded-lg border border-line bg-paper p-6">
        {content}
      </div>
    );
  }

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener"
      className="block rounded-lg border border-line bg-paper p-6 no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
    >
      {content}
    </a>
  );
}
