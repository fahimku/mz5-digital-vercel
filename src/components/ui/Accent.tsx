import { type ReactNode } from "react";

export function Accent({ children }: { children: ReactNode }) {
  return (
    <em className="font-serif text-[#ff4d00] italic">{children}</em>
  );
}
