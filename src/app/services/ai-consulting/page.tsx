import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { createMetadata } from "@/lib/seo";
import { servicePages } from "@/lib/site";

const page = servicePages["ai-consulting"];

export const metadata = createMetadata({
  title: page.title,
  description: page.description,
  path: "/services/ai-consulting",
  keywords: [
    "AI consulting Ontario",
    "AI strategy for business",
    "enterprise AI adoption",
    "AI governance",
  ],
});

export default function AiConsultingPage() {
  return <ServicePageTemplate slug="ai-consulting" />;
}
