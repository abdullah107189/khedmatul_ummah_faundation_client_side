"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const methods = [
  { name: "বিকাশ", number: "01711-111111" },
  { name: "নগদ", number: "01822-222222" },
  { name: "রকেট", number: "01933-333333" }
];

export default function QuickDonateStrip() {
  const [message, setMessage] = useState("");

  const copyNumber = async (value: string) => {
    await navigator.clipboard.writeText(value);
    setMessage("নম্বর কপি হয়েছে");
    setTimeout(() => setMessage(""), 1600);
  };

  return (
    <section className="rounded-xl border bg-white p-4 md:p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">দ্রুত দান</h2>
        {message ? <span className="rounded bg-slate-900 px-2 py-1 text-xs text-white">{message}</span> : null}
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {methods.map((m) => (
          <div key={m.name} className="rounded-lg border p-4">
            <p className="font-medium">{m.name}</p>
            <div className="mt-2 h-20 w-20 rounded border bg-slate-100" />
            <p className="mt-2 text-sm text-slate-700">{m.number}</p>
            <Button variant="outline" className="mt-2 w-full" onClick={() => copyNumber(m.number)}>
              নম্বর কপি করুন
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
