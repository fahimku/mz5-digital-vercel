"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  Code2,
  Layout,
  LineChart,
  MessageSquare,
  ShoppingCart,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useId, useRef } from "react";
import { heroTechTags } from "@/lib/site";

const CENTER = { x: 50, y: 50 };

const tagIcons: Record<(typeof heroTechTags)[number]["icon"], LucideIcon> = {
  code: Code2,
  layout: Layout,
  cart: ShoppingCart,
  chart: LineChart,
  message: MessageSquare,
};

function ConnectionLines({ reduced }: { reduced: boolean }) {
  const gradId = useId().replace(/:/g, "");

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id={`${gradId}-line`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff4d00" stopOpacity="0.05" />
          <stop offset="40%" stopColor="#ff4d00" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ff6b2e" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      {heroTechTags.map((tag, i) => (
        <g key={tag.label}>
          <line
            x1={CENTER.x}
            y1={CENTER.y}
            x2={tag.connect.x}
            y2={tag.connect.y}
            stroke={`url(#${gradId}-line)`}
            strokeWidth="0.35"
            strokeLinecap="round"
            className="hero-connect-line"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
          {!reduced && (
            <circle
              r="0.6"
              fill="#ff4d00"
              className="hero-connect-pulse"
              style={{ animationDelay: `${i * 0.6}s` }}
            >
              <animateMotion
                dur={`${3 + i * 0.5}s`}
                repeatCount="indefinite"
                path={`M ${CENTER.x} ${CENTER.y} L ${tag.connect.x} ${tag.connect.y}`}
              />
            </circle>
          )}
        </g>
      ))}
    </svg>
  );
}

function CentralDashboard({ reduced }: { reduced: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="hero-dashboard relative z-10 w-full"
    >
      <div className="hero-dashboard-glow" aria-hidden />
      <div className="relative overflow-hidden rounded-2xl border border-[#ff4d00]/25 bg-[rgba(6,6,8,0.92)] p-3 shadow-[0_0_50px_rgba(255,77,0,0.2),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl sm:rounded-3xl sm:p-4">
        <div className="mb-3 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/90 shadow-[0_0_6px_rgba(239,68,68,0.6)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 h-2 flex-1 rounded-full bg-white/5" />
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
          <div className="col-span-2 space-y-2 rounded-xl border border-white/[0.06] bg-black/50 p-2.5">
            <div className="flex items-center justify-between">
              <div className="h-2 w-16 rounded bg-white/10" />
              <Sparkles className="h-3.5 w-3.5 text-[#ff4d00]" style={{ filter: "drop-shadow(0 0 4px rgba(255,77,0,0.8))" }} />
            </div>
            <motion.div
              animate={reduced ? undefined : { opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="h-20 rounded-lg bg-gradient-to-br from-[#ff4d00]/30 via-[#ff4d00]/10 to-transparent sm:h-24"
            />
            <div className="flex gap-1.5">
              <div className="h-2 flex-1 rounded bg-white/10" />
              <div className="h-2 w-10 rounded bg-[#ff4d00]/50 shadow-[0_0_8px_rgba(255,77,0,0.4)]" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex h-14 items-center justify-center rounded-xl border border-[#ff4d00]/20 bg-[#ff4d00]/10 sm:h-16">
              <LineChart className="h-5 w-5 text-[#ff4d00]" style={{ filter: "drop-shadow(0 0 6px rgba(255,77,0,0.7))" }} />
            </div>
            <div className="h-8 rounded-lg bg-white/[0.04]" />
            <div className="h-8 rounded-lg bg-white/[0.04]" />
          </div>
        </div>

        <div className="mt-2.5 flex gap-2">
          <div className="h-1.5 flex-1 rounded-full bg-white/10" />
          <div className="h-1.5 w-14 rounded-full bg-[#ff4d00]/60 shadow-[0_0_10px_rgba(255,77,0,0.5)]" />
        </div>

        {!reduced && (
          <>
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-[#ff4d00]/12 to-transparent"
            />
            <div className="hero-trail hero-trail--1" aria-hidden />
            <div className="hero-trail hero-trail--2" aria-hidden />
          </>
        )}
      </div>
    </motion.div>
  );
}

function TechTag({
  label,
  icon,
  position,
  index,
  reduced,
}: {
  label: string;
  icon: (typeof heroTechTags)[number]["icon"];
  position: string;
  index: number;
  reduced: boolean;
}) {
  const Icon = tagIcons[icon];

  return (
    <motion.div
      className={`absolute z-20 ${position}`}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.35 + index * 0.1 }}
    >
      <motion.div
        animate={
          reduced
            ? undefined
            : { y: [0, index % 2 === 0 ? -6 : 6, 0] }
        }
        transition={
          reduced
            ? undefined
            : {
                duration: 4.5 + index * 0.35,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        className="hero-tech-tag group/tag"
      >
        <span className="hero-tech-tag-orbit" aria-hidden />
        <span className="hero-tech-tag-inner flex items-center gap-2.5 rounded-full py-2 pr-4 pl-2 sm:gap-3 sm:py-2.5 sm:pr-5 sm:pl-2.5">
          <span className="hero-tech-tag-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full sm:h-9 sm:w-9">
            <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
          </span>
          <span className="max-w-[120px] text-[11px] leading-tight font-medium text-white sm:max-w-none sm:text-xs">
            {label}
          </span>
        </span>
      </motion.div>
    </motion.div>
  );
}

function SparkParticles({ reduced }: { reduced: boolean }) {
  if (reduced) return null;

  const sparks = [
    { top: "22%", left: "45%", delay: 0 },
    { top: "38%", left: "62%", delay: 0.8 },
    { top: "55%", left: "40%", delay: 1.4 },
    { top: "30%", left: "55%", delay: 2 },
  ];

  return (
    <>
      {sparks.map((s, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute z-[2] h-1 w-1 rounded-full bg-[#ff4d00] shadow-[0_0_8px_2px_rgba(255,77,0,0.8)]"
          style={{ top: s.top, left: s.left }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.4, 0.8] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: s.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

type HeroTechVisualProps = {
  scale?: MotionValue<number>;
};

export function HeroTechVisual({ scale }: HeroTechVisualProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const internalScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.08, 1.18]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.45], [0.7, 1]);
  const combinedScale = scale ?? internalScale;

  return (
    <div
      ref={ref}
      className="hero-visual relative mx-auto aspect-square w-full max-w-[520px] lg:max-w-none"
      aria-hidden
    >
      <motion.div
        style={{ scale: combinedScale }}
        className="relative h-full w-full origin-center"
      >
        <motion.div
          style={{ opacity: glowOpacity }}
          className="hero-ambient-glow pointer-events-none absolute inset-[0%] rounded-full"
        />

        <motion.div
          animate={
            reduced ? undefined : { scale: [1, 1.03, 1], opacity: [0.85, 1, 0.85] }
          }
          transition={
            reduced
              ? undefined
              : { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }
          className="relative h-full w-full"
        >
          <ConnectionLines reduced={!!reduced} />
          <SparkParticles reduced={!!reduced} />

          <div className="absolute left-1/2 top-1/2 z-10 w-[62%] max-w-[320px] -translate-x-1/2 -translate-y-1/2">
            <CentralDashboard reduced={!!reduced} />
          </div>

          {heroTechTags.map((tag, i) => (
            <TechTag
              key={tag.label}
              label={tag.label}
              icon={tag.icon}
              position={tag.position}
              index={i}
              reduced={!!reduced}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
