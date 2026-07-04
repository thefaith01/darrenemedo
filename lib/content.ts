/**
 * Single source of truth for all site content. Sourced from Darren's CV
 * (April 2026), his Substack "He Who Has Ears", and his LinkedIn newsletter
 * "In Progress". Edit here to change copy without touching components.
 */

export type ExternalLink = {
  label: string;
  description: string;
  href: string;
};

export type Project = {
  title: string;
  blurb: string;
  tag: string;
  href: string;
};

export const site = {
  name: "Darren Emedo",
  domain: "https://darrenemedo.com",
  headline: "Property management leader, mentor, and writer on mindset & growth.",
  subheadline:
    "I lead client retention and property teams at HML Group, mentor rising professionals through The Property Institute, and write about the systems and mindset behind lasting progress.",
  email: "darren.emedo@gmail.com",
};

export const about = {
  heading: "About",
  paragraphs: [
    "I'm Darren Emedo, a property management leader based in London. I'm currently a Team Leader at HML Group, where I own retention risk and senior client escalations across the team, provide second-line leadership to a group of Property Managers, and oversee large residential estates, including some carrying seven-figure service charge budgets and higher-risk building safety obligations.",
    "My path here wasn't a straight line. I spent a decade leading the property management function at an independent estate agency, ran a private client-side block management business on the side, and joined HML Group in 2023, progressing from Property Manager to Senior Property Manager & Client Engagement Manager to Team Leader within two years. I hold a BSc (Hons) in International Business from Brunel University, I'm a Member of The Property Institute (MTPI) and an AssocRICS, and I'm currently working towards full RICS chartership.",
    "Beyond my day-to-day portfolio, I've built things that outlasted my job description: a groupwide client retention and early-warning system that reversed a year-on-year rise in client losses and cut attrition by roughly a third; a national briefing to over 100 property managers on a new business-development incentive scheme; and a monthly Employee NPS tracker now used to spot what's working across the business and repeat it. I'm also a volunteer mentor with The Property Institute's Mentor Circles, coaching early-career property professionals through leadership development and career progression.",
    "Outside of property, I write In Progress, a weekly newsletter and Substack (He Who Has Ears) on mindset, systems, and the gap between ambition and action, drawing on ideas from Napoleon Hill and Atomic Habits alongside my own difficult lessons in discipline, fear, and self-advocacy. I also build software end-to-end with AI, because the same principle applies everywhere: systems beat goals, and the only real obstacle is usually fear.",
  ],
};

export const highlights = [
  "Led a groupwide client retention initiative that reversed a year-on-year rise in losses, cutting attrition by roughly a third.",
  "Delivered a live national briefing to 100+ property managers on a new business-development incentive scheme.",
  "Built the Employee NPS tracker now used monthly to identify high-performing teams and repeat what works.",
  "Volunteer mentor with The Property Institute's Mentor Circles, coaching early-career property professionals.",
];

export const whatIDo = {
  heading: "What I Do",
  items: [
    {
      title: "Property Management Leadership",
      description:
        "Team Leader at HML Group, second-line leadership across a team of Property Managers, and direct ownership of retention risk on large residential estates with seven-figure service charge budgets.",
    },
    {
      title: "Client Retention & Commercial Strategy",
      description:
        "Designed a groupwide early-warning system that cut client attrition by roughly a third, led a national fee-benchmarking project, and built the Employee NPS tracker now used to scale what's working.",
    },
    {
      title: "Writing & Mentoring",
      description:
        "In Progress, a weekly newsletter and Substack on mindset, systems, and self-advocacy, plus volunteer mentoring for early-career professionals through The Property Institute's Mentor Circles.",
    },
    {
      title: "Building AI Products",
      description:
        "Designing and shipping web products end-to-end with AI, from an AI life-coaching service to a community marketplace. Live projects below.",
    },
  ],
};

export const projects: Project[] = [
  {
    title: "Sure Step",
    blurb:
      "A one-time-purchase AI life-coaching service. A structured conversation with an AI coach that ends with a personalised written plan.",
    tag: "AI coaching",
    href: "https://surestep.coach",
  },
  {
    title: "Church Member Marketplace",
    blurb:
      "A private, church-verified marketplace where members offer and find trusted services within their community.",
    tag: "Marketplace",
    href: "https://www.cmmarketplace.org",
  },
];

export const connections: ExternalLink[] = [
  {
    label: "LinkedIn",
    description: "Connect with me professionally",
    href: "https://www.linkedin.com/in/darren-emedo-11b75510b",
  },
  {
    label: "In Progress",
    description: "My weekly LinkedIn newsletter on mindset, systems, and career growth",
    href: "https://www.linkedin.com/newsletters/7308650091785936899/",
  },
  {
    label: "He Who Has Ears",
    description: "My Substack on mindset, habits, and turning ambition into action",
    href: "https://hewhohasears.substack.com/",
  },
];

export const blog = {
  heading: "Blog",
  subtitle: "Weekly essays on mindset, systems, and turning ambition into action from He Who Has Ears.",
  substackUrl: "https://hewhohasears.substack.com/",
  feedUrl: "https://hewhohasears.substack.com/feed",
};
