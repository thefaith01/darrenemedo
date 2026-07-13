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

export type Testimonial = {
  author: string;
  rating: number;
  text: string;
  source: string;
  url: string;
  date: string;
};

export const site = {
  name: "Darren Emedo",
  domain: "https://www.darrenemedo.com",
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
    "I'm a Bible-believing Christian poorly attempting to live out the example of Jesus, failing regularly in my pursuit of living out my beliefs completely. I have a strong conviction in the truth claims of the Bible and I'm willing to discuss them respectfully with those of similar and differing views. I don't claim to be a saint or better than anyone else, but my Christian worldview and outlook give me the hope and positive perspective many have come to know. It's the engine room of what makes me.",
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

export const testimonials: Testimonial[] = [
  {
    author: "Natasha",
    rating: 5,
    text: "The best thing about HML is Darren Emedo! Darren has been a wonderful property manager for our company. He is kind, attentive, polite and solutions-oriented. He doesn't shy away from addressing trickier issues that have been left unattended in the past and he does so in an efficient and thorough way. He is very knowledgeable and engages with the residents and the wider community. We are very lucky to have you, Darren!",
    source: "Trustpilot",
    url: "https://www.trustpilot.com/reviews/672cb5e8195293a644959c4f",
    date: "7 Nov 2024",
  },
  {
    author: "Elizabeth Boultbee",
    rating: 5,
    text: "Darren Emedo is the best property manager we have ever had at HML after years of mediocrity. I would certainly recommend him.",
    source: "Trustpilot",
    url: "https://www.trustpilot.com/reviews/672e1c292aefdf231546d633",
    date: "8 Nov 2024",
  },
  {
    author: "Dave H",
    rating: 5,
    text: "I have always found Darren to be a very helpful manager of the estate on which I live and for which he has responsibilities for. Having talked to previous managers over a number of years I have found Darren to be the best yet. He is responsive and self motivated, often coming up with good ideas for the benefit of the estate as a whole as well as for me personally when I have had problems with the current parking system. He is a good listener and takes his responsibilities seriously and carries out his job in a professional way.",
    source: "Trustpilot",
    url: "https://www.trustpilot.com/reviews/672a934ee4808a9a866d7406",
    date: "5 Nov 2024",
  },
  {
    author: "Nathan",
    rating: 5,
    text: "I rarely ever do reviews, and have never done for the many property agents I've worked with. However, on this occasion for Darren at HML / London, it is thoroughly merited. Of all the PMs we've had for our building, he genuinely is the best we've had. He's responsive, attentive and gets things done. I hope he remains on our account.",
    source: "Trustpilot",
    url: "https://www.trustpilot.com/reviews/673363f9305cbf941789de28",
    date: "12 Nov 2024",
  },
  {
    author: "Craig Simms",
    rating: 5,
    text: "Darren is the best property manager we've had from HML. Reliable and responsive, he's completely changed my perception of the service HML can provide to a smaller property. He's an asset to HML and has made us no longer consider changing from HML.",
    source: "Trustpilot",
    url: "https://www.trustpilot.com/reviews/672a63f0ba2d15acb6fd0ad2",
    date: "5 Nov 2024",
  },
  {
    author: "Kish Desai",
    rating: 5,
    text: "We need to apply for garage conversion permission for our rental property, which is managed by HML. Our estate manager is Darren-Martyn Emedo. I explained the issue to him and the urgency. Fearing this could take weeks or months, he immediately understood my issue, found a solution and got it all done within a couple of days. Eternally grateful he looked after us so promptly and empathetically.",
    source: "Trustpilot",
    url: "https://www.trustpilot.com/reviews/67a4ae109af281d3e8aff790",
    date: "6 Feb 2025",
  },
  {
    author: "Verified Customer",
    rating: 5,
    text: "Darren-Martyn Emedo is the reason for this 5 star rating. To finally have a property manager who takes the initiative, responds in a very timely manner and sees things through is very welcome and highly appreciated. If it wasn't for him, this rating would be lower.",
    source: "Trustpilot",
    url: "https://www.trustpilot.com/reviews/672a6b5352a364fd6c71de0e",
    date: "5 Nov 2024",
  },
  {
    author: "Jeremy McIlroy",
    rating: 5,
    text: "Darren has done a great job in helping our Right To Manage company through some demanding projects over the last 12 months and has greatly enhanced our long standing relationship with HML. Many thanks.",
    source: "Trustpilot",
    url: "https://www.trustpilot.com/reviews/67338c3cbd88d657dc769806",
    date: "12 Nov 2024",
  },
  {
    author: "Phil",
    rating: 5,
    text: "Understanding and responsive, Darren immediately took ownership of the issue I was having and not only got it solved, but found the root cause from the third party contractor causing me the issue. Great service.",
    source: "Trustpilot",
    url: "https://www.trustpilot.com/reviews/67a108b89961bf0bb0a409f4",
    date: "3 Feb 2025",
  },
  {
    author: "Moe",
    rating: 5,
    text: "Darren has been a great support in addressing concerns in relation to the management of Crispin Way. He has always responded to raised issues with immediate effect and a quick turn around. I hope this collaboration continues in delivering the great service he has provided to date.",
    source: "Trustpilot",
    url: "https://www.trustpilot.com/reviews/672ce6a7a4ede5b8a14955a0",
    date: "7 Nov 2024",
  },
  {
    author: "Sophie Daker",
    rating: 5,
    text: "Darren has been amazing at dealing with any issues we have had during the sale of our property and raising our requests with the appropriate persons. He is always incredibly responsive.",
    source: "Trustpilot",
    url: "https://www.trustpilot.com/reviews/672b4b8d5bbb7b1428d45114",
    date: "6 Nov 2024",
  },
  {
    author: "Steve McGuire",
    rating: 5,
    text: "Darren is new to Brunel Point but is like a breath of fresh air. He is friendly, helpful, responsive and most importantly gets things done. Huge improvement and an asset to HML.",
    source: "Trustpilot",
    url: "https://www.trustpilot.com/reviews/672a665af96c8e9580e54598",
    date: "5 Nov 2024",
  },
  {
    author: "J Y",
    rating: 5,
    text: "Requested a fire risk assessment document from Darren-Martyn Emedo and he was very quick in replying. Managed to get the doc to me quickly without much fuss and soon after the actual assessment took place. Very helpful and efficient.",
    source: "Trustpilot",
    url: "https://www.trustpilot.com/reviews/6732854d6516332202fca515",
    date: "12 Nov 2024",
  },
  {
    author: "Steven Greenwood",
    rating: 5,
    text: "Darren Emedo was very efficient and easy to interact with concerning quite an urgent issue. His pro-activeness prevented the issue from escalating and it was able to get resolved fully and quickly. He is definitely an asset to HML.",
    source: "Trustpilot",
    url: "https://www.trustpilot.com/reviews/66310b42c4b05475eb466e9f",
    date: "30 Apr 2024",
  },
  {
    author: "I Walter",
    rating: 5,
    text: "I have had to contact Darren-Martyn Emedo on a few occasions when I needed problems resolved. He has provided an excellent service by always responding to calls and dealing with issues effectively and promptly.",
    source: "Trustpilot",
    url: "https://www.trustpilot.com/reviews/672aa0775de7212dc25c3012",
    date: "6 Nov 2024",
  },
  {
    author: "P Strickland",
    rating: 5,
    text: "Darren Martyn Emedo at HML is our property manager and we are lucky to have him. He works hard and is responsive.",
    source: "Trustpilot",
    url: "https://www.trustpilot.com/reviews/673cc8c20652661148a8538e",
    date: "19 Nov 2024",
  },
  {
    author: "Ben",
    rating: 5,
    text: "Very complete service. Responsive on issues big, complex and small. Online portal very good, and big shout to our very hard working property manager, Darren Martyn Emedo!",
    source: "Trustpilot",
    url: "https://www.trustpilot.com/reviews/672b39a80e5c01c1e08f6ba3",
    date: "6 Nov 2024",
  },
  {
    author: "Frank Tropea",
    rating: 5,
    text: "Darren has always been courteous and helpful, and we have always managed to sort any issue that may have arisen. Hopefully we can continue this cooperation for the good of Coulthurst Court.",
    source: "Trustpilot",
    url: "https://www.trustpilot.com/reviews/672b43dc5eafe62fd92e434c",
    date: "6 Nov 2024",
  },
  {
    author: "Omar",
    rating: 5,
    text: "Darren is a fantastic property manager who looks after the place and is very quick to respond to situations, always getting the best outcome.",
    source: "Trustpilot",
    url: "https://www.trustpilot.com/reviews/673db900c4b0a4c1f19a2ad2",
    date: "20 Nov 2024",
  },
  {
    author: "Omar Radwan",
    rating: 5,
    text: "I recently contacted Darren-Martyn Emedo about a leak, and he responded promptly and supportively, making the process smooth and reassuring. Much appreciated!",
    source: "Trustpilot",
    url: "https://www.trustpilot.com/reviews/672a6766629a02ed4679ae1c",
    date: "5 Nov 2024",
  },
  {
    author: "Steven King",
    rating: 5,
    text: "Darren Emedo has been extremely proactive in getting stuck into longstanding issues we've experienced in our estate, generating real results and progress across a range of issues.",
    source: "Trustpilot",
    url: "https://www.trustpilot.com/reviews/672b3e49a7c66e956b17dea3",
    date: "6 Nov 2024",
  },
  {
    author: "Radwan Dakmak",
    rating: 5,
    text: "Great rate of response to any problem. I want to commend Darren our property manager for the great job he's doing.",
    source: "Trustpilot",
    url: "https://www.trustpilot.com/reviews/672aa8478717a97677bed6a8",
    date: "6 Nov 2024",
  },
  {
    author: "David Spencer",
    rating: 5,
    text: "Darren has been a great building manager, really responsive and takes action to address issues.",
    source: "Trustpilot",
    url: "https://www.trustpilot.com/reviews/67a0f44978e1712cea022b5b",
    date: "3 Feb 2025",
  },
  {
    author: "Peter Maddock",
    rating: 5,
    text: "Darren is always quick to respond and a problem solver.",
    source: "Trustpilot",
    url: "https://www.trustpilot.com/reviews/672e24b878198a50c8159dd1",
    date: "8 Nov 2024",
  },
  {
    author: "Philip Donald",
    rating: 5,
    text: "Darren Emedo has been incredibly responsive and helpful.",
    source: "Trustpilot",
    url: "https://www.trustpilot.com/reviews/672c8d2d8daa3dcce3fb261e",
    date: "7 Nov 2024",
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
