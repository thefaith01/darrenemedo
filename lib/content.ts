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
    "Associate Director of Residential Management at Regency, mentor rising professionals through The Property Institute, and writer on the systems and mindset behind lasting progress.",
  email: "darren.emedo@gmail.com",
  keywords: [
    "Darren Emedo",
    "Darren Emedo HML Group",
    "Darren Emedo property management",
    "Darren Emedo Property Institute",
    "Darren Emedo He Who Has Ears",
    "Darren Emedo In Progress newsletter",
    "property management leader London",
    "block management Team Leader",
    "MTPI AssocRICS",
  ],
};

export const about = {
  heading: "About",
  paragraphs: [
    "I'm Darren Emedo, a property management leader based in London. I'm currently Associate Director of Residential Management at Regency, leading the residential department and inculcating a culture of empathy and customer excellence. I'm also driving operational efficiency projects across the business, with a strong focus on creating processes that let our staff thrive and have the capacity to go above and beyond, building a platform for growth and expansion.",
    "I previously spent two years at HML Group, progressing from Property Manager to Senior Property Manager & Client Engagement Manager to Team Leader, where I led a wonderful team, supporting their development alongside senior escalations, technical guidance, and compliance across their portfolios.",
    "My path here wasn't a straight line. I spent almost a decade leading the property management function at an independent estate agency, ran a private client-side block management business on the side, and joined HML Group in 2023.",
    "I hold a BSc (Hons) in International Business from Brunel University, I'm a Member of The Property Institute (MTPI) and an AssocRICS, and I've passed my RICS APC preliminary review; I'm submitting my final submission in August 2026 and interviewing in October 2026 towards MRICS chartership.",
    "Beyond my day-to-day portfolio, I've built things that went beyond the job description: a groupwide client retention and early-warning system that reversed a year-on-year rise in client losses and cut attrition by roughly a third; a national briefing to over 100 property managers on a new business-development incentive scheme; and a monthly Employee NPS tracker now used to spot what's working across the business and repeat it. I'm also a volunteer mentor with The Property Institute's Mentor Circles, coaching early-career property professionals through leadership development and career progression.",
    "Outside of property, I write In Progress, a newsletter and Substack (He Who Has Ears) on mindset, systems, and the gap between ambition and action, drawing on ideas from Napoleon Hill and Atomic Habits alongside my own difficult lessons in discipline, fear, and self-advocacy. I also build software end-to-end with AI, because the same principle applies everywhere: systems beat goals.",
  ],
};

export const highlights = [
  "Led a groupwide client retention initiative that reversed a year-on-year rise in losses, cutting attrition by roughly a third.",
  "Delivered a live national briefing to 100+ property managers on a new business-development incentive scheme.",
  "Built the Employee NPS tracker now used monthly to identify high-performing teams and repeat what works.",
  "Volunteer mentor with The Property Institute's Mentor Circles, coaching early-career property professionals.",
  "Led a six-figure communal heating replacement project for a London residential block end-to-end, from options appraisal and lease compliance through statutory consultation and contractor procurement.",
];

export const whatIDo = {
  heading: "What I Do",
  items: [
    {
      title: "Property Management Leadership",
      description:
        "Associate Director of Residential Management at Regency, leading residential teams and oversight of properties with multi-million-pound service charge budgets and building safety compliance obligations.",
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
