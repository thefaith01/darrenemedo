import type { Project } from "@/lib/content";

/**
 * A project. The featured one sits on a paper panel with a larger title;
 * the others are plain blocks under a single top rule.
 */
export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const domain = project.href?.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

  const link = project.href && (
    <a
      href={project.href}
      target="_blank"
      rel="noopener"
      className="mt-4 inline-block text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
    >
      {domain} ↗
    </a>
  );

  if (featured) {
    return (
      <article className="rounded-md bg-paper p-8 md:p-12">
        <p className="text-label font-normal text-muted">{project.tag}</p>
        <h3 className="mt-2 font-display text-3xl font-normal leading-[1.15] text-ink md:text-4xl">
          {project.title}
        </h3>
        <p className="mt-4 max-w-measure text-body text-ink/85">{project.blurb}</p>
        {link}
      </article>
    );
  }

  return (
    <article className="border-t border-line pt-6">
      <p className="text-label font-normal text-muted">{project.tag}</p>
      <h3 className="mt-2 font-display text-[1.375rem] font-normal leading-snug text-ink">
        {project.title}
      </h3>
      <p className="mt-3 max-w-measure text-body text-muted">{project.blurb}</p>
      {link}
    </article>
  );
}
