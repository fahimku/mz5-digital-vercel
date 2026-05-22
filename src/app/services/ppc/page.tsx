import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { createMetadata } from "@/lib/seo";
import { servicePages } from "@/lib/site";

const page = servicePages.ppc;

export const metadata = createMetadata({
  title: "Online Advertising",
  description: page.description,
  path: "/services/ppc",
  keywords: [
    "Google Ads agency",
    "Meta ads management",
    "PPC Ontario",
    "performance marketing",
  ],
});

export default function PpcPage() {
  return <ServicePageTemplate slug="ppc" />;
}
