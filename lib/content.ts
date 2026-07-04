/**
 * Single source of truth for all site content. The design pass and copy
 * edits happen here without touching components.
 *
 * NOTE: bio + headline copy below is a first draft — Darren to review.
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
  headline: "Property management leader. Writer. Builder.",
  subheadline:
    "I lead property management teams by day and build AI-powered products by night — and write about both along the way.",
  email: "darren.emedo@gmail.com",
};

export const about = {
  heading: "About",
  /* DRAFT COPY — Darren to review */
  paragraphs: [
    "I'm Darren Emedo, a property management professional based in the UK. I'm a Team Leader at HML Group, where I look after leasehold blocks and the people who live in them — and the team that makes that happen.",
    "I hold a BSc (Hons), I'm a Member of The Property Institute (MTPI) and AssocRICS, and I mentor others working towards their TPI qualifications. I care about raising the standard of the profession, one well-run building and one well-trained property manager at a time.",
    "Outside the day job I build software products with AI — from an AI life-coaching service to a church community marketplace — and I write regularly about property management, leadership, and faith.",
  ],
};

export const whatIDo = {
  heading: "What I Do",
  items: [
    {
      title: "Property Management Leadership",
      description:
        "Leading leasehold block management teams at HML Group — service charge budgets, Section 20 consultations, building safety, and everything in between.",
    },
    {
      title: "Writing & Mentoring",
      description:
        "A LinkedIn newsletter on property management and leadership, a Substack on faith, and mentoring colleagues through their TPI qualifications.",
    },
    {
      title: "Building AI Products",
      description:
        "Designing and shipping web products end-to-end with AI — live projects below, more in the pipeline.",
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
    label: "Newsletter",
    description: "My LinkedIn newsletter on property management and leadership",
    href: "https://www.linkedin.com/newsletters/7308650091785936899/",
  },
  {
    label: "He Who Has Ears",
    description: "My Substack — writing on faith",
    href: "https://hewhohasears.substack.com/",
  },
];

export const blog = {
  heading: "Blog",
  substackUrl: "https://hewhohasears.substack.com/",
  feedUrl: "https://hewhohasears.substack.com/feed",
};
