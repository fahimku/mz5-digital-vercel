"use client";

import { NeonFrame } from "@/components/ui/NeonFrame";
import { type ReactNode } from "react";

export function ContactFormGlow({ children }: { children: ReactNode }) {
  return <NeonFrame variant="live">{children}</NeonFrame>;
}
