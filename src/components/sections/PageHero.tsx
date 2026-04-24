import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  backgroundImage?: string;
}

export default function PageHero({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  backgroundImage,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-[2rem] px-5 py-10 shadow-[0_20px_60px_-30px_rgba(5,150,105,0.35)] sm:px-6 md:px-10 md:py-16",
        backgroundImage
          ? "min-h-[360px] border border-emerald-900/20"
          : "border border-emerald-200 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.24),_transparent_36%),linear-gradient(135deg,_rgba(240,253,244,0.96),_rgba(255,251,235,0.9))]",
      )}
    >
      {backgroundImage ? (
        <>
          <Image src={backgroundImage} alt="Hero background" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(2,6,23,0.82)_0%,rgba(2,6,23,0.68)_45%,rgba(15,23,42,0.3)_100%)]" />
        </>
      ) : (
        <div className="absolute inset-y-0 right-0 hidden w-40 translate-x-1/4 rounded-full bg-emerald-200/40 blur-3xl md:block" />
      )}

      <div className="relative max-w-3xl space-y-5">
        <p
          className={cn(
            "inline-flex rounded-full border px-4 py-1 text-xs font-semibold tracking-[0.24em]",
            backgroundImage
              ? "border-white/30 bg-white/10 text-emerald-100 backdrop-blur"
              : "border-emerald-200 bg-white/80 text-emerald-700",
          )}
        >
          খিদমাতুল উম্মাহ ফাউন্ডেশন
        </p>
        <h1 className={cn("text-3xl font-bold leading-tight md:text-5xl", backgroundImage ? "text-white" : "text-slate-950")}>{title}</h1>
        <p className={cn("max-w-2xl text-sm leading-7 md:text-lg", backgroundImage ? "text-slate-100" : "text-slate-700")}>{description}</p>
        {(primaryLabel && primaryHref) || (secondaryLabel && secondaryHref) ? (
          <div className="flex flex-wrap gap-3 pt-2">
            {primaryLabel && primaryHref ? (
              <Link href={primaryHref}>
                <Button size="lg" className={cn(backgroundImage ? "bg-emerald-500 text-white hover:bg-emerald-600" : "")}>{primaryLabel}</Button>
              </Link>
            ) : null}
            {secondaryLabel && secondaryHref ? (
              <Link href={secondaryHref}>
                <Button
                  size="lg"
                  variant="outline"
                  className={cn(backgroundImage ? "border-white/50 bg-white/10 text-white hover:bg-white/20" : "")}
                >
                  {secondaryLabel}
                </Button>
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
