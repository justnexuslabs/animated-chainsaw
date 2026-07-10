import type { ReactNode } from "react";
import { clsx } from "clsx";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
};

export function GlassCard({ children, className, as: Tag = "div" }: GlassCardProps) {
  return (
    <Tag
      className={clsx(
        "border border-cyberGreen/25 bg-obsidian/58 p-5 shadow-panel backdrop-blur-xl",
        "before:pointer-events-none before:absolute before:inset-0 before:border before:border-white/5 before:bg-[linear-gradient(135deg,rgba(57,255,20,0.055),transparent_36%)]",
        "relative overflow-hidden",
        className
      )}
    >
      {children}
    </Tag>
  );
}
