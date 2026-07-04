import { projects } from "@/lib/content";
import { Section, SectionHeader } from "@/components/ui";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectsSection() {
  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="Things I've built"
        title="Projects"
        subtitle="Live products, built end-to-end with AI."
      />
      <div data-reveal className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.href} project={p} />
        ))}
      </div>
    </Section>
  );
}
