"use client";

import { ReactNode } from "react";

interface SheetProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Sheet({ open, onClose, children }: SheetProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex md:hidden" aria-modal="true" role="dialog">
      <button className="absolute inset-0 bg-slate-900/50" onClick={onClose} aria-label="বন্ধ করুন" />
      <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[linear-gradient(180deg,_rgba(255,255,255,0.98),_rgba(240,253,244,0.96))] p-5 shadow-xl">
        {children}
      </div>
    </div>
  );
}
