export const siteConfig = {
  name: "MZ5 Digital",
  tagline: "DIGITAL GROWTH. POWERED BY DESIGN.",
  email: "hello@mz5digital.com",
  contactInbox: "muhammad.fahim@mz5digital.com",
  copyright: "© 2026 MZ5 Digital. All rights reserved.",
};

export const mainNavLinks = [
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

export const marketingMenuLinks = [
  {
    label: "Digital Marketing",
    href: "/services/ppc",
    description: "Paid search, social & performance growth",
  },
  {
    label: "SEO & Content",
    href: "/services/seo",
    description: "Organic growth & technical SEO",
  },
] as const;

export const webDevelopmentMenuLinks = [
  {
    label: "SaaS Application",
    href: "/services/web-development",
    description: "Scalable SaaS products & platforms",
  },
  {
    label: "Web Development",
    href: "/services/web-development",
    description: "Fast, scalable sites & web apps",
  },
] as const;

export const aiMenuLinks = [
  {
    label: "AI Agents",
    href: "/services/ai-agents",
    description: "Custom agents for ops & support",
  },
  {
    label: "AI Automation",
    href: "/services/crm-automation",
    description: "Workflows, integrations & intelligent automation",
  },
] as const;

export const navMenus = [
  { label: "Marketing", items: marketingMenuLinks },
  { label: "Web Development", items: webDevelopmentMenuLinks },
  { label: "AI", items: aiMenuLinks },
] as const;

/** @deprecated Use mainNavLinks */
export const navLinks = mainNavLinks;

export const footerServiceLinks = [
  { label: "Digital Marketing", href: "/services/ppc" },
  { label: "SEO & Content", href: "/services/seo" },
  { label: "SaaS Application", href: "/services/web-development" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "AI Agents", href: "/services/ai-agents" },
  { label: "AI Automation", href: "/services/crm-automation" },
] as const;

export const footerCompanyLinks = [
  { label: "About", href: "/#about" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/company/mz5digital", icon: "linkedin" },
  { label: "Instagram", href: "https://instagram.com/mz5digital", icon: "instagram" },
  { label: "X", href: "https://x.com/mz5digital", icon: "x" },
] as const;

/** @deprecated Use marketingMenuLinks */
export const marketingLinks = marketingMenuLinks;

/** @deprecated Use aiMenuLinks */
export const aiLinks = aiMenuLinks;

/** @deprecated Use navMenus */
export const serviceLinks = [
  ...marketingMenuLinks,
  ...webDevelopmentMenuLinks,
  ...aiMenuLinks,
] as const;

export const stats = [
  { value: "100+", label: "Projects Delivered", icon: "users" },
  { value: "10 yrs", label: "Proven Expertise", icon: "clock" },
  { value: "3.4M+", label: "Users Impacted", icon: "star" },
  { value: "24/7", label: "Support", icon: "bolt" },
] as const;

export const heroTechTags = [
  {
    label: "Software Development",
    icon: "code",
    position: "top-[0%] left-[-4%] sm:left-[0%]",
    connect: { x: 28, y: 22 },
  },
  {
    label: "UI/UX",
    icon: "layout",
    position: "top-[10%] right-[-6%] sm:right-[-2%]",
    connect: { x: 72, y: 18 },
  },
  {
    label: "E-Commerce",
    icon: "cart",
    position: "top-[42%] left-[-8%] sm:left-[-4%]",
    connect: { x: 22, y: 52 },
  },
  {
    label: "Digital Marketing",
    icon: "chart",
    position: "top-[48%] right-[-8%] sm:right-[-4%]",
    connect: { x: 78, y: 55 },
  },
  {
    label: "Consulting",
    icon: "message",
    position: "bottom-[2%] left-[8%] sm:left-[12%]",
    connect: { x: 38, y: 82 },
  },
] as const;

/** @deprecated Use heroTechTags */
export const heroOrbitLabels = heroTechTags.map((t) => ({
  label: t.label,
  position: t.position,
}));

export const servicesIntro =
  "From strategy to execution, we deliver end-to-end digital solutions tailored to your business goals.";

export const services = [
  {
    category: "Marketing",
    title: "Digital Marketing",
    description:
      "Paid search, social and performance campaigns tuned for ROAS with clear reporting and ongoing optimization.",
    tags: ["Google Ads", "Meta Ads", "CRO"],
    href: "/services/ppc",
    icon: "chart",
  },
  {
    category: "Marketing",
    title: "SEO & Content",
    description:
      "Technical SEO, content strategy and authority building designed for sustainable organic growth.",
    tags: ["SEO Audit", "Content", "Analytics"],
    href: "/services/seo",
    icon: "search",
  },
  {
    category: "Web Development",
    title: "SaaS Application",
    description:
      "Multi-tenant SaaS platforms, dashboards and subscription products built on modern stacks to scale with your users.",
    tags: ["SaaS", "APIs", "Billing"],
    href: "/services/web-development",
    icon: "cloud",
  },
  {
    category: "Web Development",
    title: "Web Development",
    description:
      "High-performance marketing sites and web apps with clean architecture, strong UX and measurable conversion.",
    tags: ["Next.js", "React", "CMS"],
    href: "/services/web-development",
    icon: "code",
  },
  {
    category: "AI",
    title: "AI Agents",
    description:
      "Custom AI agents for support, sales ops and internal workflows — connected to your data and built for reliability.",
    tags: ["Agents", "Support", "Integrations"],
    href: "/services/ai-agents",
    icon: "robot",
  },
  {
    category: "AI",
    title: "AI Automation",
    description:
      "Intelligent workflows, CRM automation and stack integrations that connect tools and follow up without manual busywork.",
    tags: ["Automation", "HubSpot", "Workflows"],
    href: "/services/crm-automation",
    icon: "bolt",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "We dive deep into your brand, audience, and goals.",
    icon: "bullseye",
  },
  {
    step: "02",
    title: "Define",
    description:
      "We map the strategy and create a clear plan.",
    icon: "file",
  },
  {
    step: "03",
    title: "Design",
    description:
      "We craft experiences that are beautiful and functional.",
    icon: "pen",
  },
  {
    step: "04",
    title: "Deploy",
    description:
      "We build, test and launch with continuous optimization.",
    icon: "rocket",
  },
] as const;

export const values = [
  {
    title: "Creative Excellence",
    description:
      "Brand and campaign work that feels distinctive, intentional and built to last beyond trends.",
    icon: "wand",
  },
  {
    title: "Technical Precision",
    description:
      "Modern stacks, clean architecture and performance you can measure — not just admire.",
    icon: "microchip",
  },
  {
    title: "Results Focused",
    description:
      "Every engagement ties back to revenue, leads or efficiency — not vanity metrics.",
    icon: "bullseye",
  },
] as const;

export const budgetOptions = [
  "$5k – $10k",
  "$10k – $25k",
  "$25k – $50k",
  "$50k+",
] as const;

export const needOptions = [
  "Digital Marketing",
  "SEO & Content",
  "SaaS Application",
  "Web Development",
  "AI Agents",
  "AI Automation",
  "Multiple services",
] as const;

export type ServiceSlug =
  | "branding"
  | "web-development"
  | "seo"
  | "ppc"
  | "crm-automation"
  | "ai-consulting"
  | "ai-agents";

export const servicePages: Record<
  ServiceSlug,
  {
    title: string;
    headline: string;
    accent: string;
    description: string;
    features: string[];
    deliverables: string[];
  }
> = {
  branding: {
    title: "Branding",
    headline: "Identity that feels inevitable, not improvised.",
    accent: "inevitable",
    description:
      "We build brand systems that scale — from positioning and voice to logos, typography and guidelines your team can actually use.",
    features: [
      "Brand strategy & positioning workshops",
      "Logo systems & visual identity",
      "Typography, colour & design tokens",
      "Brand guidelines & asset libraries",
    ],
    deliverables: [
      "Positioning narrative",
      "Logo suite & lockups",
      "Brand guidelines PDF",
      "Social & marketing templates",
    ],
  },
  "web-development": {
    title: "Web Development",
    headline: "Sites and apps built to perform under pressure.",
    accent: "perform",
    description:
      "From marketing sites to custom web applications, we ship fast, accessible experiences on modern stacks — optimized for SEO, conversion and maintainability.",
    features: [
      "Next.js & React applications",
      "Marketing & landing page builds",
      "CMS integration & content workflows",
      "Performance, accessibility & Core Web Vitals",
    ],
    deliverables: [
      "Production-ready codebase",
      "Responsive UI across devices",
      "Analytics & form integrations",
      "Deployment & handoff documentation",
    ],
  },
  seo: {
    title: "SEO",
    headline: "Organic growth you can measure and defend.",
    accent: "measure",
    description:
      "Technical foundations, content strategy and authority building — structured for rankings that compound, not spikes that fade.",
    features: [
      "Technical SEO audits & fixes",
      "Keyword research & content planning",
      "On-page optimization & schema",
      "Reporting dashboards & iteration",
    ],
    deliverables: [
      "SEO audit & roadmap",
      "Content briefs & templates",
      "Monthly performance reports",
      "Ongoing optimization sprints",
    ],
  },
  ppc: {
    title: "Online Advertising",
    headline: "Paid campaigns tuned for ROAS, not impressions.",
    accent: "ROAS",
    description:
      "Google Ads, Meta and performance campaigns with clear structure, creative testing and reporting you can trust.",
    features: [
      "Account structure & campaign setup",
      "Landing page alignment & CRO",
      "Creative testing & audience targeting",
      "Weekly optimization & reporting",
    ],
    deliverables: [
      "Campaign architecture",
      "Conversion tracking setup",
      "Creative & copy variants",
      "Performance dashboards",
    ],
  },
  "crm-automation": {
    title: "CRM & Automation",
    headline: "Systems that connect your stack and follow up for you.",
    accent: "connect",
    description:
      "We implement CRMs, marketing automation and integrations so leads flow cleanly from first touch to closed deal.",
    features: [
      "HubSpot & CRM setup",
      "Lead routing & lifecycle stages",
      "Email workflows & nurture sequences",
      "Zapier, webhooks & custom integrations",
    ],
    deliverables: [
      "CRM architecture & pipeline design",
      "Automation playbooks",
      "Integration map & documentation",
      "Team training & handoff",
    ],
  },
  "ai-consulting": {
    title: "AI Consulting",
    headline: "Practical AI strategy tied to real business outcomes.",
    accent: "outcomes",
    description:
      "We help leadership teams assess opportunities, choose tools and roll out AI with governance, training and measurable pilots.",
    features: [
      "Use-case discovery workshops",
      "Tool & vendor evaluation",
      "Policy, privacy & governance guidance",
      "Pilot design & success metrics",
    ],
    deliverables: [
      "AI opportunity roadmap",
      "Vendor shortlist & recommendations",
      "Pilot scope & implementation plan",
      "Executive briefing materials",
    ],
  },
  "ai-agents": {
    title: "AI Agents",
    headline: "Custom agents that handle work, not just chat.",
    accent: "work",
    description:
      "We build AI agents for support, sales ops and internal workflows — connected to your data and designed for reliability.",
    features: [
      "Support & FAQ agents",
      "Lead qualification & routing",
      "Internal knowledge assistants",
      "API & CRM integrations",
    ],
    deliverables: [
      "Agent architecture & prompts",
      "Deployed agent on your stack",
      "Monitoring & escalation flows",
      "Maintenance & iteration plan",
    ],
  },
};
