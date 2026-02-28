import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function VolunteerPage() {
  return (
    <div className="space-y-6 py-6">
      <section className="rounded-xl border bg-white p-6">
        <h1 className="text-2xl font-bold">স্বেচ্ছাসেবক হোন</h1>
        <p className="mt-2 text-sm text-slate-600">আপনার সময়, দক্ষতা ও প্রচেষ্টা কারো জীবনে পরিবর্তন আনতে পারে।</p>
      </section>
      <section className="space-y-3 rounded-xl border bg-white p-6">
        <Input placeholder="নাম" />
        <Input placeholder="ফোন" />
        <Input placeholder="জেলা" />
        <Input placeholder="আগ্রহের ক্ষেত্র" />
        <Button>আবেদন জমা দিন</Button>
      </section>
    </div>
  );
}
