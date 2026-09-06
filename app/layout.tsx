import type { Metadata } from "next";
import { AppProviders } from "@/components/providers/AppProviders";
import { CustomCursor } from "@/components/chrome/CustomCursor";
import { ScrollProgress } from "@/components/chrome/ScrollProgress";
import { SiteHeader } from "@/components/chrome/SiteHeader";
import { SkipLink } from "@/components/chrome/SkipLink";
import { site } from "@/content/site";
import { horizon, satoshi } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.founder }],
  creator: site.founder,
  keywords: [
    "TheRonnyStack",
    "digital studio",
    "web design",
    "UI/UX",
    "branding",
    "SEO",
    "Raunak Sharma",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  email: site.email,
  description: site.description,
  founder: {
    "@type": "Person",
    name: site.founder,
  },
  slogan: site.phrase,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${horizon.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SkipLink />
        <AppProviders>
          <CustomCursor />
          <ScrollProgress />
          <SiteHeader />
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
