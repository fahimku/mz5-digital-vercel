"use client";

import { Accent } from "@/components/ui/Accent";
import { Container } from "@/components/ui/Container";
import { GrowReveal, GrowRevealStagger } from "@/components/motion/GrowReveal";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services, servicesIntro } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="relative py-14 sm:py-16 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(255,77,0,0.05),transparent_60%)]"
      />

      <Container className="relative z-10">
        <GrowReveal>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d00] shadow-[0_0_10px_rgba(255,77,0,0.9)]" />
            <span className="text-[11px] font-medium tracking-[0.22em] text-[#ff4d00] uppercase">
              What we do
            </span>
          </p>
        </GrowReveal>

        <div className="mt-6 grid gap-8 lg:mt-8 lg:grid-cols-[1fr_auto_1fr] lg:items-start lg:gap-0">
          <GrowReveal delay={0.05}>
            <h2 className="text-on-texture max-w-xl text-3xl leading-[1.12] font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.65rem] lg:pr-10">
              One studio, every layer of your <Accent>digital stack.</Accent>
            </h2>
          </GrowReveal>

          <div
            aria-hidden
            className="hidden w-px self-stretch bg-white/[0.1] lg:block"
          />

          <GrowReveal delay={0.1} className="lg:pl-10">
            <p className="max-w-md text-sm leading-relaxed text-zinc-500 sm:text-base">
              {servicesIntro}
            </p>
          </GrowReveal>
        </div>

        <GrowRevealStagger className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 md:grid-cols-2 md:gap-5 lg:mt-14 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </GrowRevealStagger>
      </Container>
    </section>
  );
}
