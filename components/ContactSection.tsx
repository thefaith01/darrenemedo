import { connections } from "@/lib/content";
import { Card, Section, SectionHeader } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { LinkCard } from "@/components/LinkCard";

export function ContactSection() {
  return (
    <Section id="contact" className="pb-10">
      <SectionHeader
        eyebrow="Say hello"
        title="Contact"
        subtitle="Send me a message, or reach out on any of the platforms below."
      />
      <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
        <Card>
          <ContactForm />
        </Card>
        <div className="space-y-4">
          {connections.map((c) => (
            <LinkCard key={c.href} link={c} />
          ))}
        </div>
      </div>
    </Section>
  );
}
