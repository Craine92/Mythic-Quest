type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <header className={`max-w-3xl ${alignment}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6A64A]">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-title text-3xl leading-tight text-[#EAF0FF] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-[#AAB4D6] sm:text-base">
          {description}
        </p>
      ) : null}
    </header>
  );
}
