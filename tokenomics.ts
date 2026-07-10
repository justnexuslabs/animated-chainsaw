import Link from "next/link";
import { Radio } from "lucide-react";
import { navItems } from "@/src/config/navigation";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cyberGreen/20 bg-obsidian/82 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid size-8 place-items-center rounded-full border border-neonGreen/60 bg-neonGreen/10 text-neonGreen">
            <Radio size={18} />
          </span>
          <span className="font-heading text-sm font-black tracking-[0.14em] text-whiteSmoke">
            DONLIEN.XYZ
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-heading text-[10px] font-bold uppercase tracking-[0.12em] text-whiteSmoke/70 transition hover:text-neonGreen"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/lienity"
          className="hidden border border-neonGreen/60 bg-neonGreen/10 px-4 py-2 font-heading text-[10px] font-black uppercase tracking-[0.14em] text-neonGreen transition hover:bg-neonGreen hover:text-obsidian sm:inline-flex"
        >
          Join LIENITY
        </Link>
      </div>
    </header>
  );
}
