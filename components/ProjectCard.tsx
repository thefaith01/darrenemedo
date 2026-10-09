import type { Project } from "@/lib/content";

/** One project as a row: name and tag on the left, what it does on the right. */
export function ProjectCard({ project }: { project: Project }) {
  const domain = project.href?.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

  return (
    <div className="grid gap-3 py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-12">
      <div>
        <h3 className="font-display text-[1.375rem] font-normal leading-snug text-ink">
          {project.title}
        </h3>
        <p className="mt-1 text-label font-normal text-muted">{project.tag}</p>
      </div>
      <div className="max-w-measure">
        <p className="text-body text-muted">{project.blurb}</p>
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener"
            className="mt-3 inline-block text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
          >
            {domain} ↗
          </a>
        )}
      </div>
    </div>
  );
}
