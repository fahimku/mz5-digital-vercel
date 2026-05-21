"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import { useRef } from "react";
import { HeroStats } from "@/components/sections/HeroStats";
import { HeroTechVisual } from "@/components/sections/HeroTechVisual";
import { Button } from "@/components/ui/Button";
import { Accent } from "@/components/ui/Accent";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const heroVisualScale = useTransform(scrollYProgress, [0, 0.5, 0.85], [0.92, 1.05, 1.14]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_72%_38%,rgba(255,77,0,0.14),transparent_58%)]"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 flex items-center gap-2"
            >
              <span className="h-2 w-2 rounded-full bg-[#ff4d00] shadow-[0_0_14px_rgba(255,77,0,0.9)]" />
              <span className="text-[11px] tracking-[0.22em] text-zinc-500 uppercase sm:text-xs">
                {siteConfig.tagline}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="text-on-texture text-4xl leading-[1.06] font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.35rem] xl:text-6xl"
            >
              Brands built to <Accent>grow</Accent>, systems built to{" "}
              <Accent>scale</Accent>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="text-on-texture mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
            >
              We turn ambitious ideas into digital products — branding, web,
              growth and technology in one studio built for momentum.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button href="/#contact" showArrow>
                Start a project
              </Button>
              <Button href="#" variant="secondary">
                <Play className="h-4 w-4 fill-current" />
                Play showreel
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ scale: heroVisualScale }}
            className="relative hidden origin-center lg:block"
          >
            <HeroTechVisual />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 lg:mt-20"
        >
          <div className="mb-12 lg:hidden">
            <HeroTechVisual />
          </div>

          <HeroStats />
        </motion.div>
      </Container>
    </section>
  );
}
