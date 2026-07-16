import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { CornerstoneSection } from "@/components/CornerstoneSection";
import { WhatIDoSection } from "@/components/WhatIDoSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { BlogSection } from "@/components/BlogSection";
import { SermonSection } from "@/components/SermonSection";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <CornerstoneSection />
      <WhatIDoSection />
      <WaitlistSection />
      <TestimonialsSection />
      <ProjectsSection />
      <BlogSection />
      <SermonSection />
      <ContactSection />
    </>
  );
}
