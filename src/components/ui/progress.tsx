import { cn } from "@/lib/utils";

interface ProgressProps {
  value: number;
  className?: string;
}

export function Progress({ value, className }: ProgressProps) {
  const safeValue = Math.max(0, Math.min(100, value));

  return (
    <div className={cn("h-3 w-full overflow-hidden rounded-full bg-emerald-100", className)}>
      <div
        className="h-full rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-400 transition-all duration-500"
        style={{ width: `${safeValue}%` }}
      />
    </div>
  );
}
