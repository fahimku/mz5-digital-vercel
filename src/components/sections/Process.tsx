"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faFileLines,
  faPenNib,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Accent } from "@/components/ui/Accent";
import { Container } from "@/components/ui/Container";
import { GrowReveal, GrowRevealStagger, growStaggerItem } from "@/components/motion/GrowReveal";
import { processSteps } from "@/lib/site";

const stepIconMap: Record<
  (typeof processSteps)[number]["icon"],
  IconDefinition
> = {
  bullseye: faBullseye,
  file: faFileLines,
  pen: faPenNib,
  rocket: faRocket,
};

export function Process() {
  return (
    <section
      id="process"
      className="relative border-y border-white/[0.06] py-14 sm:py-16 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_50%,rgba(255,77,0,0.04),transparent_65%)]"
      />

      <Container className="relative z-10">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-start lg:gap-14 xl:gap-20">
          <div className="lg:sticky lg:top-28">
            <GrowReveal>
              <p className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d00] shadow-[0_0_10px_rgba(255,77,0,0.9)]" />
                <span className="text-[11px] font-semibold tracking-[0.22em] text-[#ff4d00] uppercase">
                  Our process
                </span>
              </p>
            </GrowReveal>
            <GrowReveal delay={0.06} className="mt-5">
              <h2 className="text-on-texture max-w-sm text-3xl leading-[1.12] font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.65rem]">
                A clear path from <Accent>brief</Accent> to <Accent>growth</Accent>.
              </h2>
            </GrowReveal>
          </div>

          <GrowRevealStagger className="process-steps-wrap">
            <div className="process-track" aria-hidden>
              <svg
                className="process-track-svg"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="process-line-grad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#ff4d00" stopOpacity="0.15" />
                    <stop offset="50%" stopColor="#ff4d00" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#ff4d00" stopOpacity="0.15" />
                  </linearGradient>
                </defs>
                <line
                  x1="12.5"
                  y1="5"
                  x2="87.5"
                  y2="5"
                  stroke="url(#process-line-grad)"
                  strokeWidth="0.35"
                  strokeDasharray="1.2 2.2"
                  strokeLinecap="round"
                  className="process-track-line-svg"
                />
                {[25, 50, 75, 93.75].map((x, i) => (
                  <circle
                    key={x}
                    cx={x}
                    cy={5}
                    r="1.15"
                    className="process-track-dot-svg"
                    style={{ animationDelay: `${i * 0.35}s` }}
                  />
                ))}
              </svg>
              <div className="process-track-glow" />
            </div>

            <div className="process-steps-grid">
              {processSteps.map((step) => (
                <motion.div
                  key={step.step}
                  variants={growStaggerItem}
                  className="process-step group/step"
                >
                  <div className="process-step-icon-ring">
                    <div className="process-step-icon-shine" aria-hidden />
                    <FontAwesomeIcon
                      icon={stepIconMap[step.icon]}
                      className="process-step-fa-icon"
                    />
                  </div>

                  <div className="process-step-content">
                    <p className="process-step-num">
                      <span className="process-step-num-dot" aria-hidden />
                      {step.step}
                    </p>

                    <h3 className="process-step-title">{step.title}</h3>
                    <p className="process-step-desc">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </GrowRevealStagger>
        </div>
      </Container>
    </section>
  );
}
