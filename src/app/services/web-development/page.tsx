import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { createMetadata } from "@/lib/seo";
import { servicePages } from "@/lib/site";

const page = servicePages["web-development"];

export const metadata = createMetadata({
  title: page.title,
  description: page.description,
  path: "/services/web-development",
  keywords: [
    "web development Ontario",
    "Next.js agency",
    "marketing website development",
    "React web apps",
  ],
});

export default function WebDevelopmentPage() {
  return <ServicePageTemplate slug="web-development" />;
}
