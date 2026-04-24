import Link from "next/link";

export default async function ProjectDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <div className="grid gap-6 py-6 lg:grid-cols-[1fr_320px]">
      <div className="space-y-4">
        <div className="h-56 rounded-xl border bg-slate-100" />
        <h1 className="text-2xl font-bold">প্রকল্প: {slug}</h1>
        <p className="text-sm text-slate-600">এই প্রকল্পের মাধ্যমে সুবিধাবঞ্চিত মানুষের পাশে থাকি।</p>
        <div className="rounded-xl border bg-white p-5">
          <h3 className="font-semibold">আপডেট টাইমলাইন</h3>
          <p className="mt-2 text-sm text-slate-600">ছবি, ভিডিও ও রিপোর্ট ধারাবাহিকভাবে যুক্ত করা হবে।</p>
        </div>
      </div>
      <aside className="h-fit rounded-xl border bg-white p-5 lg:sticky lg:top-24">
        <h3 className="font-semibold">এই প্রকল্পে দান করুন</h3>
        <div className="mt-3 h-24 w-24 rounded border bg-slate-100" />
        <p className="mt-2 text-sm">বিকাশ: 01711-111111</p>
        <p className="text-sm">রেফারেন্স: {slug}</p>
        <Link href="/donate" className="mt-3 inline-block text-sm text-primary">সম্পূর্ণ নির্দেশনা</Link>
      </aside>
    </div>
  );
}
