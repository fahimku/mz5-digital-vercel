"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "@/components/layout/MobileNav";
import { navItemClass } from "@/components/layout/nav-styles";
import { navLinks } from "@/lib/site";

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
      <Container className="flex h-14 items-center justify-between sm:h-16 lg:h-[72px]">
        <Logo />

        <nav
          className="hidden md:flex md:flex-1 md:items-center md:justify-center"
          aria-label="Main"
        >
          <ul className="flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <li key={link.href + link.label}>
                <Link href={link.href} className={navItemClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Button
            href="/#contact"
            variant="primary"
            showArrow
            className="hidden !px-5 !py-2.5 text-sm sm:inline-flex"
          >
            Start a project
          </Button>
          <MobileNav />
        </div>
      </Container>
    </motion.header>
  );
}
