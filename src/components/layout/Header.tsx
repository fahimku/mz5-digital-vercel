"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "@/components/layout/MobileNav";
import { NavDropdown } from "@/components/layout/NavDropdown";
import { navItemClass } from "@/components/layout/nav-styles";
import { mainNavLinks, navMenus, siteConfig } from "@/lib/site";

export function Header() {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 80],
    ["rgba(0,0,0,0)", "rgba(0,0,0,0.92)"],
  );
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <motion.header
      style={{ backgroundColor: background }}
      className="fixed top-0 right-0 left-0 z-50 backdrop-blur-md supports-[padding:max(0px)]:pt-[env(safe-area-inset-top)]"
    >
      <motion.div
        style={{ opacity: borderOpacity }}
        className="absolute inset-x-0 bottom-0 h-px bg-white/10"
      />
      <Container className="flex h-14 items-center gap-3 sm:h-16 sm:gap-4 lg:h-[72px] lg:gap-6">
        <Logo />

        <nav
          className="hidden min-w-0 flex-1 md:flex md:items-center md:justify-center"
          aria-label="Main"
        >
          <ul className="flex items-center gap-0.5 lg:gap-2">
            {navMenus.map((menu) => (
              <li key={menu.label}>
                <NavDropdown label={menu.label} items={menu.items} />
              </li>
            ))}
            {mainNavLinks.map((link) => (
              <li key={link.href + link.label}>
                <Link href={link.href} className={navItemClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-2.5 lg:gap-3">
          <Button
            href={siteConfig.userPortalUrl}
            variant="secondary"
            className="hidden !px-3.5 !py-2 text-xs whitespace-nowrap sm:inline-flex md:!px-4 md:!py-2.5 md:text-sm lg:!px-5"
          >
            User Portal
          </Button>
          <Button
            href="/#contact"
            variant="primary"
            showArrow
            className="hidden !px-3.5 !py-2 text-xs whitespace-nowrap sm:inline-flex md:!px-4 md:!py-2.5 md:text-sm lg:!px-5"
          >
            Start a project
          </Button>
          <MobileNav />
        </div>
      </Container>
    </motion.header>
  );
}
