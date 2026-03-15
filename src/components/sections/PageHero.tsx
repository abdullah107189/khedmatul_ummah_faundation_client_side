import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PageHeroProps {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function PageHero({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-emerald-200 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.24),_transparent_36%),linear-gradient(135deg,_rgba(240,253,244,0.96),_rgba(255,251,235,0.9))] px-6 py-12 shadow-[0_20px_60px_-30px_rgba(5,150,105,0.35)] md:px-10 md:py-16">
      <div className="absolute inset-y-0 right-0 hidden w-40 translate-x-1/4 rounded-full bg-emerald-200/40 blur-3xl md:block" />
      <div className="relative max-w-3xl space-y-5">
        <p className="inline-flex rounded-full border border-emerald-200 bg-white/80 px-4 py-1 text-xs font-semibold tracking-[0.24em] text-emerald-700">
          খিদমাতুল উম্মাহ ফাউন্ডেশন
        </p>
        <h1 className="text-3xl font-bold leading-tight text-slate-950 md:text-5xl">{title}</h1>
        <p className="text-sm leading-7 text-slate-700 md:text-lg">{description}</p>
        {(primaryLabel && primaryHref) || (secondaryLabel && secondaryHref) ? (
          <div className="flex flex-wrap gap-3 pt-2">
            {primaryLabel && primaryHref ? (
              <Link href={primaryHref}>
                <Button size="lg">{primaryLabel}</Button>
              </Link>
            ) : null}
            {secondaryLabel && secondaryHref ? (
              <Link href={secondaryHref}>
                <Button size="lg" variant="outline">
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
