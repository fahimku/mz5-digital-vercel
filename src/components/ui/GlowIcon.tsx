import { type LucideIcon } from "lucide-react";
import { type ReactNode } from "react";

type GlowIconProps = {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const boxSize = {
  sm: "neon-icon-box neon-icon-box--sm",
  md: "neon-icon-box",
  lg: "neon-icon-box neon-icon-box--lg",
} as const;

const iconSize = {
  sm: "h-3.5 w-3.5",
  md: "h-5 w-5",
  lg: "h-6 w-6",
} as const;

export function GlowIcon({ icon: Icon, size = "md", className = "" }: GlowIconProps) {
  return (
    <div className={`${boxSize[size]} ${className}`.trim()}>
      <Icon className={`${iconSize[size]} neon-icon-svg`} strokeWidth={1.75} />
    </div>
  );
}

export function GlowIconBox({
  children,
  size = "md",
  className = "",
}: {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  return (
    <div className={`${boxSize[size]} ${className}`.trim()}>{children}</div>
  );
}
