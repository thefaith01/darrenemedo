import type { Metadata } from "next";
import { Public_Sans, Source_Serif_4 } from "next/font/google";
import { Header } from "@/components/Header";
import { HeaderScrollState } from "@/components/HeaderScrollState";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { site, connections } from "@/lib/content";
import "./globals.css";

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} | ${site.headline}`,
    template: `%s | ${site.name}`,
  },
  description: site.subheadline,
  keywords: site.keywords,
  authors: [{ name: site.name, url: site.domain }],
  creator: site.name,
  verification: {
    google: "Yj_hZq33Ah9TLNz8BtHDBGoI33F7WyX4a7URn7xl5y4",
  },
  alternates: {
    canonical: site.domain,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: `${site.name} | ${site.headline}`,
    description: site.subheadline,
    url: site.domain,
    siteName: site.name,
    type: "profile",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.headline}`,
    description: site.subheadline,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.domain,
  image: `${site.domain}/profile.jpg`,
  jobTitle: "Associate Director, Residential Management",
  worksFor: {
    "@type": "Organization",
    name: "Regency",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Brunel University London",
  },
  memberOf: {
    "@type": "Organization",
    name: "The Property Institute",
  },
  email: `mailto:${site.email}`,
  description: site.subheadline,
  sameAs: connections.map((c) => c.href),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-base overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {/* Sentinel watched by HeaderScrollState: once it leaves the
            viewport the page has scrolled and the header turns solid. */}
        <div id="top-sentinel" aria-hidden="true" className="absolute left-0 top-0 h-2 w-px" />
        <Header />
        <main id="main" tabIndex={-1} className="min-h-[100dvh] bg-base text-ink focus:outline-none">
          {children}
        </main>
        <SiteFooter />
        <HeaderScrollState />
        <ScrollReveal />
      </body>
    </html>
  );
}
