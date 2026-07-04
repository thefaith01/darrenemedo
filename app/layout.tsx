import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { site, connections } from "@/lib/content";
import "./globals.css";

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
    <html lang="en">
      <body className="bg-base">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Header />
        <main className="min-h-screen bg-base text-ink">{children}</main>
        <SiteFooter />
        <ScrollReveal />
      </body>
    </html>
  );
}
