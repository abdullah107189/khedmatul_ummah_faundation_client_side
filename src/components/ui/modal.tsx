"use client";

import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface ModalProps {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export function Modal({ open, title, children, onClose }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
        <h3 className="mb-3 text-lg font-semibold">{title}</h3>
        <div className="mb-5 text-sm text-slate-600">{children}</div>
        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  );
}
