"use client";

import Image from "next/image";
import { useState } from "react";
import { clsx } from "clsx";

type DonLienImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  label?: string;
};

export function DonLienImage({
  src,
  alt,
  className,
  imgClassName,
  priority = false,
  label = "DONLIEN VISUAL"
}: DonLienImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={clsx(
        "relative overflow-hidden border border-cyberGreen/30 bg-obsidian/70 shadow-neon",
        className
      )}
    >
      {failed ? (
        <div className="flex min-h-72 flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.16),transparent_58%)] p-6 text-center">
          <p className="font-heading text-xs uppercase tracking-[0.28em] text-neonGreen">
            {label}
          </p>
          <p className="max-w-xs text-sm uppercase tracking-[0.18em] text-whiteSmoke/60">
            Asset pending at {src}
          </p>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 44vw, 100vw"
          priority={priority}
          className={clsx("object-contain", imgClassName)}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
