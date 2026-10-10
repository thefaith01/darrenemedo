import Image from "next/image";
import type { Project } from "@/lib/content";

/**
 * A project. The featured one sits on a paper panel with a larger title;
 * the others show a screenshot of the live product under a single top rule.
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
      {project.image && (
        <a
          href={project.href}
          target="_blank"
          rel="noopener"
          tabIndex={-1}
          aria-hidden="true"
          className="mb-6 block overflow-hidden rounded-md border border-line"
        >
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={1200}
            height={675}
            sizes="(min-width: 768px) 480px, 100vw"
            className="h-auto w-full"
          />
        </a>
      )}
      <p className="text-label font-normal text-muted">{project.tag}</p>
      <h3 className="mt-2 font-display text-[1.375rem] font-normal leading-snug text-ink">
        {project.title}
      </h3>
      <p className="mt-3 max-w-measure text-body text-muted">{project.blurb}</p>
      {link}
    </article>
  );
}
