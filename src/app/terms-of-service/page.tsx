import { LegalPage } from "@/components/legal/LegalPage";
import { termsOfService } from "@/lib/legal/terms";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms of Service",
  description:
    "Terms governing use of the MZ5 Digital website and agency services.",
  path: "/terms-of-service",
  noIndex: true,
});

export default function TermsOfServicePage() {
  return <LegalPage {...termsOfService} />;
}
