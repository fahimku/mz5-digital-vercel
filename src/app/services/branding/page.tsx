import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { createMetadata } from "@/lib/seo";
import { servicePages } from "@/lib/site";

const page = servicePages.branding;

export const metadata = createMetadata({
  title: page.title,
  description: page.description,
  path: "/services/branding",
  keywords: [
    "branding agency Ontario",
    "brand identity design",
    "logo design Canada",
    "brand strategy",
  ],
});

export default function BrandingPage() {
  return <ServicePageTemplate slug="branding" />;
}
