"use client";

import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { GrowReveal } from "@/components/motion/GrowReveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="contact-section relative overflow-hidden border-t border-white/[0.06] py-12 lg:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_50%,rgba(255,77,0,0.06),transparent_60%)]"
      />

      <Container className="relative z-10">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <GrowReveal className="lg:pt-4">
            <p className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d00] shadow-[0_0_10px_rgba(255,77,0,0.9)]" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-[#ff4d00] uppercase">
                Let&apos;s build something great
              </span>
            </p>
            <h2 className="text-on-texture mt-5 max-w-lg text-3xl leading-[1.15] font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.65rem]">
              Have an ambitious project?{" "}
              <em className="font-serif text-[#ff4d00] italic">
                Let&apos;s make it inevitable.
              </em>
            </h2>
          </GrowReveal>

          <GrowReveal delay={0.12}>
            <ContactForm />
          </GrowReveal>
        </div>
      </Container>
    </section>
  );
}
