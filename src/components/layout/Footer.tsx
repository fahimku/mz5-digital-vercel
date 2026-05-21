import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import {
  footerCompanyLinks,
  footerServiceLinks,
  siteConfig,
  socialLinks,
} from "@/lib/site";

function SocialIcon({ name }: { name: (typeof socialLinks)[number]["icon"] }) {
  const className = "h-4 w-4";
  if (name === "linkedin") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }
  if (name === "dribbble") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm7.568 5.302c1.4 1.822 2.252 4.102 2.352 6.588-.223-.047-2.223-.447-4.296-.223-.047-.67-.119-1.34-.268-2.01 2.27-.894 4.12-2.01 4.212-4.355zm-3.12-2.68c.074 2.01 1.563 3.12 3.492 3.94-1.34.67-2.902 1.116-4.567 1.34-.67-2.455-1.786-4.12-3.715-4.94 1.563-.67 3.268-1.116 4.79-.34zM8.98 3.94c1.34 1.116 2.455 2.68 3.12 4.79-2.01.447-4.12.67-6.23.67C6.23 6.9 7.42 5.08 8.98 3.94zM2.01 12c0-.223.022-.447.074-.67 2.455.074 4.79.67 6.9 1.786-.447 1.563-1.116 3.12-2.01 4.49C4.79 16.45 2.68 14.34 2.01 12zm3.715 7.568c.894-1.34 1.786-2.902 2.252-4.567 2.01.67 3.715 1.786 4.94 3.715-1.563.894-3.268 1.563-5.08 1.852-.223-.67-.447-1.34-.67-2.01-.074 0-.148-.074-.223-.074 0 .074 0 .148.074.223.67.67 1.34 1.34 2.01 1.786-.67.447-1.34.894-2.01 1.34-.447 0-.894-.074-1.34-.223 1.116-1.116 2.01-2.455 2.68-3.94z" />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-[#050505]/95 py-16 backdrop-blur-sm">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo className="mb-5" />
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              A digital studio in Ontario blending strategy, design and
              engineering for brands ready to grow.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-4 text-sm font-semibold text-white">Services</h4>
            <ul className="space-y-2.5">
              {footerServiceLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-4 text-sm font-semibold text-white">Company</h4>
            <ul className="space-y-2.5">
              {footerCompanyLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 lg:text-right">
            <h4 className="mb-4 text-sm font-semibold text-white">
              Let&apos;s connect
            </h4>
            <div className="flex gap-3 lg:justify-end">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="neon-social h-10 w-10"
                >
                  <SocialIcon name={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">{siteConfig.copyright}</p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-muted hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-xs text-muted hover:text-white"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
