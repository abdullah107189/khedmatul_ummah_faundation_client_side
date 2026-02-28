import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility used by shadcn components to merge Tailwind classes safely.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
