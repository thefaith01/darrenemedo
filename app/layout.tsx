import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: `${site.name} — ${site.headline}`,
  description: site.subheadline,
  openGraph: {
    title: site.name,
    description: site.subheadline,
    url: site.domain,
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-base">
        <Header />
        <main className="min-h-screen bg-base text-ink">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
