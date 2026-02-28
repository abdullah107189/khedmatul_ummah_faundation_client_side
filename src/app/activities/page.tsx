import Link from "next/link";

const items = ["শিক্ষা", "ত্রাণ", "দাওয়াহ", "দক্ষতা উন্নয়ন", "স্বাস্থ্য", "শীতবস্ত্র"];

export default function ActivitiesPage() {
  return (
    <div className="space-y-6 py-6">
      <h1 className="text-2xl font-bold">কার্যক্রম</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item} className="rounded-xl border bg-white p-5">
            <p className="font-semibold">{item}</p>
            <Link href="/projects" className="mt-3 inline-block text-sm text-primary">প্রকল্প দেখুন</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
