import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { createMetadata } from "@/lib/seo";
import { servicePages } from "@/lib/site";

const page = servicePages["ai-agents"];

export const metadata = createMetadata({
  title: page.title,
  description: page.description,
  path: "/services/ai-agents",
  keywords: [
    "custom AI agents",
    "AI support automation",
    "business AI agents",
    "CRM AI integration",
  ],
});

export default function AiAgentsPage() {
  return <ServicePageTemplate slug="ai-agents" />;
}
