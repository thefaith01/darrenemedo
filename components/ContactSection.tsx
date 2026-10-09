import { connections } from "@/lib/content";
import { Card, Section, SectionHeader } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { LinkCard } from "@/components/LinkCard";

export function ContactSection() {
  return (
    <Section id="contact" className="border-t border-line">
      <SectionHeader
        title="Contact"
        subtitle="Send me a message, or reach out on any of the platforms below."
      />
      <div data-reveal className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-14">
        <Card>
          <ContactForm />
        </Card>
        <ul className="divide-y divide-line border-y border-line md:self-start">
          {connections.map((c) => (
            <li key={c.href}>
              <LinkCard link={c} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
