import Link from "next/link";
import { connectLinks, footerResources, navItems } from "@/src/config/navigation";

export function Footer() {
  return (
    <footer className="border-t border-cyberGreen/20 bg-obsidian pb-24 pt-12 lg:pb-10">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <p className="font-heading text-lg font-black tracking-[0.24em] text-whiteSmoke">
            DONLIEN.XYZ
          </p>
          <p className="mt-4 max-w-sm text-whiteSmoke/62">
            Official transmission layer for Project DONLIEN and the LIENIVERSE.
          </p>
          <p className="mt-6 font-heading text-xs uppercase tracking-[0.24em] text-neonGreen">
            Transmission Status: Online
          </p>
        </div>
        <FooterColumn title="Navigation" items={navItems} />
        <FooterColumn title="Resources" items={footerResources} />
        <div>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.26em] text-whiteSmoke">
            Connect
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {connectLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="border border-cyberGreen/35 px-3 py-2 font-heading text-[11px] uppercase tracking-[0.18em] text-whiteSmoke/68 transition hover:border-neonGreen hover:text-neonGreen"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-whiteSmoke/55">Contact: command@donlien.xyz</p>
          <p className="mt-6 text-xs text-whiteSmoke/38">
            Copyright 2026 DonLien.xyz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  items: { label: string; href: string }[];
};

function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div>
      <p className="font-heading text-xs font-bold uppercase tracking-[0.26em] text-whiteSmoke">
        {title}
      </p>
      <div className="mt-4 grid gap-3">
        {items.map((item) => (
          <Link
            key={`${title}-${item.href}`}
            href={item.href}
            className="text-sm uppercase tracking-[0.14em] text-whiteSmoke/55 transition hover:text-neonGreen"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
