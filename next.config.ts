import Link from "next/link";
import { mobileNavItems } from "@/src/config/navigation";

export function MobileBottomNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-cyberGreen/25 bg-obsidian/92 px-2 pb-[env(safe-area-inset-bottom)] pt-2 backdrop-blur-xl lg:hidden"
      aria-label="Mobile navigation"
    >
      <div className="mx-auto grid max-w-md grid-cols-5 gap-1">
        {mobileNavItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex min-h-14 flex-col items-center justify-center gap-1 text-whiteSmoke/60 transition hover:text-neonGreen"
            >
              <Icon size={18} aria-hidden="true" />
              <span className="font-heading text-[9px] font-bold uppercase tracking-[0.08em]">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
