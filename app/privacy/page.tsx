import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy notice",
  description: `How ${site.name} handles the personal information sent through this website.`,
  alternates: { canonical: `${site.domain}/privacy` },
};

/*
 * Approved by Darren on 10 October 2026. It describes what the code does
 * today: the contact form stores messages in Supabase, the waiting
 * list form is emailed through Formspree, there are no analytics or cookies,
 * and fonts are self-hosted. Update it if any of that changes.
 */
const sections: { heading: string; body: string[] }[] = [
  {
    heading: "Who is responsible",
    body: [
      `${site.name} runs this website personally and is responsible for the personal information sent through it. You can contact him at ${site.email}.`,
    ],
  },
  {
    heading: "What is collected",
    body: [
      "Contact form: your name, email address and message.",
      "Waiting list form: your name, email address, phone number if you give one, your relationship to the building, the building's address, the number of units, any notes you add, and your confirmation that you are looking for a high standard of service.",
      "Nothing else is collected. The site sets no cookies, runs no analytics or advertising trackers, and loads its fonts from its own server.",
    ],
  },
  {
    heading: "Why it is used",
    body: [
      "Contact messages are used only to reply to you.",
      "Waiting list applications are used to assess whether your building is a fit and to contact you about it. This is a step you ask for before any agreement, and it is in both our legitimate interests.",
      "Your information is never sold, and it is not used for marketing.",
    ],
  },
  {
    heading: "Where it is stored",
    body: [
      "Contact messages are stored in a private database hosted by Supabase. Only the site owner can read them.",
      "Waiting list applications are sent by email through Formspree, a form delivery service, and kept in the site owner's email account.",
      "The website is hosted by Vercel, which keeps short-lived technical server logs, such as IP addresses, to run and protect the service.",
    ],
  },
  {
    heading: "How long it is kept",
    body: [
      "Contact messages and waiting list applications are kept for up to two years after your last contact, then deleted, unless an ongoing working relationship means they need to be kept longer.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      `You can ask to see, correct or delete the information held about you, or object to how it is used, by emailing ${site.email}. You will get a reply within one month.`,
      "If you are unhappy with how your information has been handled, you can complain to the Information Commissioner's Office at ico.org.uk.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <Container size="narrow" className="pb-24 pt-32 md:pt-36">
      <h1 className="font-display text-4xl font-normal leading-[1.1] text-ink md:text-5xl">
        Privacy notice
      </h1>
      <p className="mt-4 text-sm text-muted">Last updated 10 October 2026</p>

      <div className="mt-12 space-y-10">
        {sections.map((s) => (
          <section key={s.heading}>
            <h2 className="font-display text-2xl font-normal text-ink">{s.heading}</h2>
            <div className="mt-3 space-y-3 text-body text-ink/85">
              {s.body.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <Link
        href="/"
        className="mt-14 inline-block text-body font-medium text-ink underline decoration-line underline-offset-[5px] hover:decoration-ink"
      >
        Back to the homepage
      </Link>
    </Container>
  );
}
