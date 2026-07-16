import { Card, Section, SectionHeader } from "@/components/ui";
import { WaitlistForm } from "@/components/WaitlistForm";

export function WaitlistSection() {
  return (
    <Section id="waitlist">
      <SectionHeader
        eyebrow="New instructions"
        title="Not taking on new buildings right now. But if you're serious about best-in-class management, join the waiting list."
      />
      <div data-reveal className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4 text-[15px] leading-relaxed text-muted">
          <p>
            Most buildings end up as one of many on an overloaded property
            manager&apos;s desk, stuck with rotating staff and communication that
            only happens when something&apos;s already gone wrong.
          </p>
          <p>
            That&apos;s not the model here. Block managers stay in post, they&apos;re
            invested in getting it right and are managed on that standard, and
            communication is proactive rather than reactive. Caseloads are kept
            deliberately manageable so managers can actually give each building
            the attention it needs to run precisely, not just adequately.
          </p>
          <p>
            I oversee the team and I&apos;m the key contact for onboarding and
            escalation, though the day-to-day sits with the block manager. That
            same discipline, not overloading the team, is why I don&apos;t take on
            new buildings casually.
          </p>
          <p>
            When I do take on new business, it&apos;s with people who are ready to
            pay for that level of service. Not the cheapest option. Not the
            middle ground. Market leading customer service and systems.
          </p>
          <p>
            If that&apos;s you, join the waiting list. I review it personally and
            interview a small number of candidates to check fit. Onboarding
            happens case by case, depending on capacity and alignment.
          </p>
        </div>
        <Card>
          <WaitlistForm />
        </Card>
      </div>
    </Section>
  );
}
