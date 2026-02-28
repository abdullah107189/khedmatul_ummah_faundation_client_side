"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const methods = [
  { key: "bkash", label: "বিকাশ", number: "01711-111111" },
  { key: "nagad", label: "নগদ", number: "01822-222222" },
  { key: "rocket", label: "রকেট", number: "01933-333333" }
];

export default function DonatePage() {
  const [active, setActive] = useState(methods[0]);
  const [toast, setToast] = useState("");

  const copyNumber = async () => {
    await navigator.clipboard.writeText(active.number);
    setToast("নম্বর কপি হয়েছে");
    setTimeout(() => setToast(""), 1500);
  };

  return (
    <div className="space-y-6 py-6">
      <section className="rounded-xl border bg-white p-6">
        <h1 className="text-2xl font-bold">দান করুন</h1>
        <p className="mt-2 text-sm text-slate-600">শুধুমাত্র QR ও মোবাইল নম্বরের মাধ্যমে দান গ্রহণ করা হয়।</p>
      </section>

      <section className="rounded-xl border bg-white p-6">
        <div className="flex flex-wrap gap-2">
          {methods.map((m) => (
            <Button key={m.key} variant={active.key === m.key ? "default" : "outline"} onClick={() => setActive(m)}>
              {m.label}
            </Button>
          ))}
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <div className="h-56 rounded-lg border bg-slate-100" />
          <div>
            <p className="text-sm text-slate-600">{active.label} নম্বর</p>
            <p className="mt-1 text-xl font-semibold">{active.number}</p>
            <Button className="mt-3" onClick={copyNumber}>নম্বর কপি করুন</Button>
            {toast ? <p className="mt-2 text-sm text-green-700">{toast}</p> : null}
            <div className="mt-4 rounded-md bg-slate-50 p-3 text-sm text-slate-600">রেফারেন্সে লিখুন: দান - আপনার নাম</div>
          </div>
        </div>
      </section>
    </div>
  );
}
