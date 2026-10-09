import { projects } from "@/lib/content";
import { Section, SectionHeader } from "@/components/ui";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectsSection() {
  return (
    <Section id="projects">
      <SectionHeader
        title="Projects"
        subtitle="Live products, built end-to-end with AI."
      />
      <ul data-reveal className="divide-y divide-line border-y border-line">
        {projects.map((p) => (
          <li key={p.title}>
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
