import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="grid gap-6 py-6 lg:grid-cols-2">
      <section className="rounded-xl border bg-white p-6">
        <h1 className="text-2xl font-bold">যোগাযোগ</h1>
        <p className="mt-3 text-sm text-slate-600">ঠিকানা: ঢাকা, বাংলাদেশ</p>
        <p className="text-sm text-slate-600">ফোন: 01700-000000</p>
        <p className="text-sm text-slate-600">ইমেইল: info@kuf.org</p>
        <div className="mt-4 h-48 rounded-lg border bg-slate-100" />
      </section>
      <section className="space-y-3 rounded-xl border bg-white p-6">
        <Input placeholder="আপনার নাম" />
        <Input placeholder="ফোন নম্বর" />
        <Input placeholder="বিষয়" />
        <textarea className="min-h-28 w-full rounded-md border border-slate-300 p-3 text-sm" placeholder="আপনার বার্তা" />
        <Button>বার্তা পাঠান</Button>
      </section>
    </div>
  );
}
