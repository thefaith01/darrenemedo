import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { WhatIDoSection } from "@/components/WhatIDoSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { BlogSection } from "@/components/BlogSection";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WhatIDoSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
