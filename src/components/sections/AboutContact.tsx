"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faMicrochip,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Accent } from "@/components/ui/Accent";
import { Container } from "@/components/ui/Container";
import { GrowReveal } from "@/components/motion/GrowReveal";
import { GrowRevealStagger, growStaggerItem } from "@/components/motion/GrowReveal";
import { values } from "@/lib/site";

const valueIconMap: Record<
  (typeof values)[number]["icon"],
  IconDefinition
> = {
  wand: faWandMagicSparkles,
  microchip: faMicrochip,
  bullseye: faBullseye,
};

export function AboutContact() {
  return (
    <section
      id="about"
      className="about-contact-section relative overflow-hidden pt-14 pb-6 sm:pt-16 sm:pb-8 lg:pt-24 lg:pb-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_35%_40%,rgba(255,77,0,0.05),transparent_55%),radial-gradient(ellipse_60%_50%_at_85%_75%,rgba(255,77,0,0.04),transparent_60%)]"
      />

      <Container className="relative z-10">
        <div className="about-contact-grid">
          <div className="about-contact-about lg:pr-12 xl:pr-16">
            <GrowReveal>
              <p className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d00] shadow-[0_0_10px_rgba(255,77,0,0.9)]" />
                <span className="text-[11px] font-semibold tracking-[0.22em] text-[#ff4d00] uppercase">
                  About us
                </span>
              </p>
            </GrowReveal>

            <GrowReveal delay={0.05} className="mt-5">
              <h2 className="text-on-texture max-w-lg text-3xl leading-[1.12] font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.65rem]">
                A studio that blends <Accent>clarity,</Accent> creativity and
                technology.
              </h2>
            </GrowReveal>

            <GrowReveal delay={0.1} className="mt-8 space-y-5">
              <p className="max-w-lg text-sm leading-relaxed text-zinc-500 sm:text-[0.95rem]">
                MZ5 Digital is a full-service studio for branding, web
                development, SEO and performance marketing. We work with teams
                who care about craft, data and long-term impact — not one-off
                deliverables.
              </p>
              <p className="max-w-lg text-sm leading-relaxed text-zinc-500 sm:text-[0.95rem]">
                Based in Ontario, we collaborate with clients across Canada and
                internationally. Senior strategists and builders stay on your
                project from discovery through deployment.
              </p>
            </GrowReveal>

            <div className="about-contact-hr-wrap mt-10 lg:mt-12" aria-hidden>
              <div className="about-contact-hr" />
            </div>
          </div>

          <div
            className="about-divider about-contact-divider hidden lg:flex"
            aria-hidden
          >
            <span className="about-divider-line" />
            <span className="about-divider-dot" />
            <span className="about-divider-line" />
          </div>

          <GrowRevealStagger className="about-contact-values flex flex-col justify-start gap-8 lg:pl-12 xl:pl-16">
            {values.map((item) => (
              <motion.div
                key={item.title}
                variants={growStaggerItem}
                className="about-value group/value"
              >
                <div className="about-value-icon">
                  <FontAwesomeIcon
                    icon={valueIconMap[item.icon]}
                    className="about-value-fa-icon"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold text-white sm:text-[1.05rem]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </GrowRevealStagger>
        </div>
      </Container>
    </section>
  );
}
