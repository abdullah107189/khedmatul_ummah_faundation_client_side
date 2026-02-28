export default function AboutPage() {
  return (
    <div className="space-y-6 py-6">
      <section className="rounded-xl border bg-white p-6">
        <h1 className="text-2xl font-bold">আমাদের সম্পর্কে</h1>
        <p className="mt-2 text-sm text-slate-600">অরাজনৈতিক, স্বচ্ছ ও মানবসেবামূলক উদ্যোগ হিসেবে আমরা শিক্ষা, ত্রাণ ও কল্যাণে কাজ করি।</p>
      </section>
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border bg-white p-5"><h3 className="font-semibold">অরাজনৈতিক</h3></div>
        <div className="rounded-xl border bg-white p-5"><h3 className="font-semibold">স্বচ্ছতা</h3></div>
        <div className="rounded-xl border bg-white p-5"><h3 className="font-semibold">মানবসেবা</h3></div>
      </section>
    </div>
  );
}
