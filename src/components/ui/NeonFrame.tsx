"use client";

import { type ReactNode } from "react";

type NeonVariant = "live" | "hover" | "subtle";

type NeonFrameProps = {
  children: ReactNode;
  variant?: NeonVariant;
  className?: string;
  innerClassName?: string;
};

const shellClass: Record<NeonVariant, string> = {
  live: "neon-shell neon-shell--live",
  hover: "neon-shell neon-shell--hover group/neon",
  subtle: "neon-shell neon-shell--subtle",
};

export function NeonFrame({
  children,
  variant = "hover",
  className = "",
  innerClassName = "",
}: NeonFrameProps) {
  return (
    <div className={`${shellClass[variant]} ${className}`.trim()}>
      <div className="neon-orbit" aria-hidden />
      {variant === "live" && (
        <>
          <div className="neon-flare neon-flare--tl" aria-hidden />
          <div className="neon-flare neon-flare--br" aria-hidden />
        </>
      )}
      <div className={`neon-inner ${innerClassName}`.trim()}>{children}</div>
    </div>
  );
}
