import { type ReactNode } from "react";
import { GrowReveal } from "@/components/motion/GrowReveal";

type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  children,
  className = "",
  align = "left",
}: SectionHeadingProps) {
  return (
    <GrowReveal className={align === "center" ? "text-center" : ""}>
      <h2
        className={`text-on-texture max-w-4xl text-3xl leading-[1.12] font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] ${className}`}
      >
        {children}
      </h2>
    </GrowReveal>
  );
}
