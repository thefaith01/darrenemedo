import { projects } from "@/lib/content";
import { Section, SectionHeader } from "@/components/ui";
import { ProjectCard } from "@/components/ProjectCard";

/** One featured project on a paper panel, the rest as a two column pair below. */
export function ProjectsSection() {
  const [featured, ...rest] = projects;

  return (
    <Section id="projects">
      <SectionHeader
        title="Projects"
        subtitle="Live products, built end-to-end with AI."
      />
      <div data-reveal>
        {featured && <ProjectCard project={featured} featured />}
        {rest.length > 0 && (
          <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
            {rest.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
