import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "group inline-flex min-h-11 items-center justify-center gap-2 border px-5 py-3 font-heading text-[10px] font-black uppercase tracking-[0.16em] transition",
        variant === "primary"
          ? "border-neonGreen bg-neonGreen text-obsidian shadow-neon hover:bg-whiteSmoke"
          : "border-cyberGreen/60 bg-charcoal/70 text-whiteSmoke hover:border-neonGreen hover:text-neonGreen",
        className
      )}
    >
      {children}
      <ArrowRight size={16} className="transition group-hover:translate-x-1" />
    </Link>
  );
}
