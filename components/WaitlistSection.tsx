import { Card, Section, SectionHeader } from "@/components/ui";
import { WaitlistForm } from "@/components/WaitlistForm";

export function WaitlistSection() {
  return (
    <Section id="waitlist" className="border-y border-line bg-paper">
      <SectionHeader title="Waiting list" />
      <div data-reveal className="grid gap-10 md:grid-cols-[1fr_1.15fr] md:gap-14">
        <div className="max-w-measure space-y-5 text-body text-ink/85">
          <p className="text-lead text-ink">
            I&apos;m not taking on new clients right now. If you want your
            building managed properly, join the waiting list.
          </p>
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
            the attention it needs.
          </p>
          <p>
            I oversee the team and I&apos;m the key contact for onboarding and
            escalation, though the day-to-day sits with the block manager. That
            same discipline, not overloading the team, is why I don&apos;t take on
            new buildings casually.
          </p>
          <p>
            When I do take on new business, it&apos;s with people who are ready to
            pay for that level of service. It isn&apos;t the cheapest option.
            It&apos;s a higher standard of service, backed by proper systems.
          </p>
          <p>
            If that&apos;s you, join the waiting list. I review it personally and
            interview a small number of candidates to check fit. Onboarding
            happens case by case, depending on capacity and alignment.
          </p>
        </div>
        <Card surface="base" className="md:self-start">
          <WaitlistForm />
        </Card>
      </div>
    </Section>
  );
}
