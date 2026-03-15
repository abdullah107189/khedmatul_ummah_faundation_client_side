interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl space-y-3 ${alignment}`.trim()}>
      {eyebrow ? (
        <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-xs font-semibold tracking-[0.24em] text-emerald-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">{title}</h2>
      {description ? <p className="text-sm leading-7 text-slate-600 md:text-base">{description}</p> : null}
    </div>
  );
}
