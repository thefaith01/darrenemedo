import { connections } from "@/lib/content";
import { Card, Section, SectionHeader } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { LinkCard } from "@/components/LinkCard";

/** Intro and profile links on the left, the form on the right. */
export function ContactSection() {
  return (
    <Section id="contact" className="border-t border-line">
      <div data-reveal className="grid gap-12 md:grid-cols-[1fr_1.3fr] md:gap-16">
        <div>
          <SectionHeader
            title="Contact"
            subtitle="Send me a message, or reach out on any of the platforms below."
          />
          <ul className="space-y-6">
            {connections.map((c) => (
              <li key={c.href}>
                <LinkCard link={c} />
              </li>
            ))}
          </ul>
        </div>
        <Card className="md:self-start">
          <ContactForm />
        </Card>
      </div>
    </Section>
  );
}
