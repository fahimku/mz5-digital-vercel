import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

/** Production site URL — set NEXT_PUBLIC_SITE_URL in Vercel when using a custom domain */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mz5-digital-vercel.vercel.app"
).replace(/\/$/, "");

export const defaultTitle = `${siteConfig.name} | Digital Agency Ontario`;
export const defaultDescription =
  "MZ5 Digital is an Ontario digital agency for branding, web development, SEO, paid media, CRM automation, and AI — built for ambitious brands that want measurable growth.";

export const defaultKeywords = [
  "MZ5 Digital",
  "digital agency Ontario",
  "web development agency",
  "branding agency Canada",
  "SEO services Ontario",
  "performance marketing",
  "CRM automation",
  "AI consulting",
  "Shopify development",
  "Next.js development",
] as const;

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — branding, web, SEO & performance marketing`,
};

type CreateMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description = defaultDescription,
  path = "",
  keywords = [...defaultKeywords],
  noIndex = false,
}: CreateMetadataOptions = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : defaultTitle;
  const canonical = path ? `${siteUrl}${path}` : siteUrl;

  return {
    metadataBase: new URL(siteUrl),
    title: title ?? defaultTitle,
    description,
    keywords,
    authors: [{ name: siteConfig.name, url: siteUrl }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: "en_CA",
      url: canonical,
      siteName: siteConfig.name,
      title: pageTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [ogImage.url],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

export const rootMetadata: Metadata = {
  ...createMetadata(),
  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  category: "business",
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  email: siteConfig.email,
  description: defaultDescription,
  sameAs: [
    "https://linkedin.com/company/mz5digital",
    "https://instagram.com/mz5digital",
    "https://x.com/mz5digital",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteUrl,
  description: defaultDescription,
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    logo: `${siteUrl}/logo.png`,
  },
};
