import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { createMetadata } from "@/lib/seo";
import { servicePages } from "@/lib/site";

const page = servicePages.seo;

export const metadata = createMetadata({
  title: page.title,
  description: page.description,
  path: "/services/seo",
  keywords: [
    "SEO agency Ontario",
    "technical SEO",
    "organic search marketing",
    "content SEO strategy",
  ],
});

export default function SeoPage() {
  return <ServicePageTemplate slug="seo" />;
}
