import Link from "next/link";

const kpis = [
  { label: "মোট প্রকল্প", value: "১৮" },
  { label: "মোট আপডেট", value: "৫৪" },
  { label: "স্বেচ্ছাসেবক আবেদন", value: "৯৬" },
  { label: "ডোনেশন মেথড", value: "৩" }
];

export default function DashboardPage() {
  return (
    <div className="space-y-6 py-6">
      <h1 className="text-2xl font-bold">অ্যাডমিন ড্যাশবোর্ড</h1>
      <div className="grid gap-4 md:grid-cols-4">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-xl border bg-white p-5">
            <p className="text-2xl font-bold text-primary">{k.value}</p>
            <p className="text-sm text-slate-600">{k.label}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <Link href="/dashboard/projects" className="rounded-xl border bg-white p-4">প্রকল্প ব্যবস্থাপনা</Link>
        <Link href="/dashboard/donation-settings" className="rounded-xl border bg-white p-4">ডোনেশন সেটিংস</Link>
        <Link href="/dashboard/updates" className="rounded-xl border bg-white p-4">আপডেট ব্যবস্থাপনা</Link>
        <Link href="/dashboard/gallery" className="rounded-xl border bg-white p-4">গ্যালারি ব্যবস্থাপনা</Link>
        <Link href="/dashboard/volunteers" className="rounded-xl border bg-white p-4">স্বেচ্ছাসেবক আবেদন</Link>
      </div>
    </div>
  );
}
