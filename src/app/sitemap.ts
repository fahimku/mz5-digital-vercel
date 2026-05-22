import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

const routes = [
  "",
  "/services/branding",
  "/services/web-development",
  "/services/seo",
  "/services/ppc",
  "/services/crm-automation",
  "/services/ai-consulting",
  "/services/ai-agents",
  "/privacy-policy",
  "/terms-of-service",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
