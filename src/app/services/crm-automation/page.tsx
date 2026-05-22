import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { createMetadata } from "@/lib/seo";
import { servicePages } from "@/lib/site";

const page = servicePages["crm-automation"];

export const metadata = createMetadata({
  title: page.title,
  description: page.description,
  path: "/services/crm-automation",
  keywords: [
    "CRM automation",
    "HubSpot setup",
    "marketing automation Ontario",
    "sales workflow automation",
  ],
});

export default function CrmAutomationPage() {
  return <ServicePageTemplate slug="crm-automation" />;
}
