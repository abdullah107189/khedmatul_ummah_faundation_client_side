import Link from "next/link";
import QuickDonateStrip from "@/components/sections/QuickDonateStrip";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "সহায়তা পাওয়া পরিবার", value: "১২,৫০০+" },
  { label: "চলমান প্রকল্প", value: "১৮" },
  { label: "স্বেচ্ছাসেবক", value: "৩২০+" }
];

export default function HomePage() {
  return (
    <div className="space-y-8 py-6 md:py-10">
      <section className="rounded-2xl border bg-white p-6 md:p-10">
        <h1 className="text-2xl font-bold md:text-4xl">মানবতার সেবায়, আপনার দানই আশার আলো</h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-600 md:text-base">স্বচ্ছতা, আমানতদারি ও ধারাবাহিক সেবার মাধ্যমে অসহায় মানুষের পাশে থাকি।</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/donate"><Button>দান করুন</Button></Link>
          <Link href="/projects"><Button variant="outline">আমাদের প্রকল্প</Button></Link>
        </div>
      </section>

      <QuickDonateStrip />

      <section className="grid gap-4 md:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border bg-white p-5">
            <p className="text-2xl font-bold text-primary">{s.value}</p>
            <p className="mt-1 text-sm text-slate-600">{s.label}</p>
          </div>
        ))}
      </section>

      <section className="rounded-xl border bg-white p-6">
        <h2 className="text-xl font-semibold">স্বচ্ছতা প্রতিবেদন</h2>
        <p className="mt-2 text-sm text-slate-600">আপনার অনুদান কোথায় ব্যয় হয় তা নিয়মিত রিপোর্টে প্রকাশ করা হয়।</p>
        <Link href="/updates" className="mt-4 inline-block"><Button variant="outline">রিপোর্ট দেখুন</Button></Link>
      </section>
    </div>
  );
}
