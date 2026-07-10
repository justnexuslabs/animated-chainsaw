type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow = "CLASSIFIED TRANSMISSION",
  title,
  copy,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-3 font-heading text-[11px] font-bold uppercase tracking-[0.34em] text-neonGreen">
        {eyebrow}
      </p>
      <h2 className="font-heading text-3xl font-black uppercase leading-tight text-whiteSmoke sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-5 text-lg leading-8 text-whiteSmoke/72 sm:text-xl">{copy}</p>
      ) : null}
    </div>
  );
}
