"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({ className, ...props }, ref) => {
  return (
    <select
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-2xl border border-emerald-200 bg-white px-4 py-2 text-sm text-slate-900 shadow-sm outline-none ring-offset-white transition focus-visible:ring-2 focus-visible:ring-emerald-600 disabled:cursor-not-allowed disabled:bg-slate-100",
        className,
      )}
      {...props}
    />
  );
});

Select.displayName = "Select";

export { Select };
