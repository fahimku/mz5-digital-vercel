import { LegalPage } from "@/components/legal/LegalPage";
import { privacyPolicy } from "@/lib/legal/privacy";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "How MZ5 Digital collects, uses, and protects your personal information.",
  path: "/privacy-policy",
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  return <LegalPage {...privacyPolicy} />;
}
