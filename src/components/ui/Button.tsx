"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  showArrow?: boolean;
};

const variants = {
  primary: "btn-neon",
  secondary: "btn-glass",
  ghost: "bg-transparent text-muted hover:text-white px-4",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
  disabled = false,
  showArrow = false,
}: ButtonProps) {
  const classes =
    `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`.trim();

  const content = (
    <>
      {children}
      {showArrow && variant === "primary" && (
        <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
      )}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 25 },
  };

  if (href) {
    const fullWidth =
      /\b!?w-full\b/.test(className) &&
      !/\b(sm|md|lg|xl|2xl):!?w-auto\b/.test(className);
    return (
      <motion.div
        {...motionProps}
        className={fullWidth ? "flex w-full" : "inline-flex"}
      >
        <Link href={href} className={classes} onClick={onClick}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...(disabled ? {} : motionProps)}
    >
      {content}
    </motion.button>
  );
}
