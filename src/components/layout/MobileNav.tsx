"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { navLinks } from "@/lib/site";

const menuItem = {
  hidden: { opacity: 0, x: 24 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.08 + i * 0.05,
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  const panel = (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Close menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mobile-menu-backdrop fixed inset-0 z-[90] bg-black/75 backdrop-blur-sm"
            onClick={close}
          />

          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 380, damping: 36 }}
            className="mobile-menu-panel fixed inset-y-0 right-0 z-[100] flex w-[min(100%,22rem)] flex-col border-l border-white/[0.08] bg-[#050505]/98 shadow-[-24px_0_80px_rgba(0,0,0,0.65)] backdrop-blur-xl"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_100%_0%,rgba(255,77,0,0.12),transparent_55%)]"
            />

            <div className="relative flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
              <Logo />
              <button
                type="button"
                onClick={close}
                className="mobile-nav-toggle mobile-nav-toggle--open"
                aria-label="Close menu"
              >
                <span className="mobile-nav-toggle-bars" aria-hidden>
                  <span />
                  <span />
                  <span />
                </span>
              </button>
            </div>

            <nav className="relative flex-1 overflow-y-auto px-5 py-6" aria-label="Mobile">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href + link.label}
                    custom={i}
                    variants={menuItem}
                    initial="hidden"
                    animate="show"
                  >
                    <Link
                      href={link.href}
                      onClick={close}
                      className="mobile-menu-link group"
                    >
                      <span className="mobile-menu-link-index">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="mobile-menu-link-label">{link.label}</span>
                      <span className="mobile-menu-link-arrow" aria-hidden>
                        →
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="relative border-t border-white/[0.06] p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.35 }}
              >
                <Button
                  href="/#contact"
                  showArrow
                  className="!w-full justify-center !py-3.5"
                  onClick={close}
                >
                  Start a project
                </Button>
                <p className="mt-4 text-center text-xs text-zinc-600">
                  Ontario · Canada & international
                </p>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`mobile-nav-toggle ${open ? "mobile-nav-toggle--open" : ""}`}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <span className="mobile-nav-toggle-bars" aria-hidden>
          <span />
          <span />
          <span />
        </span>
      </button>

      {mounted && createPortal(panel, document.body)}
    </div>
  );
}
