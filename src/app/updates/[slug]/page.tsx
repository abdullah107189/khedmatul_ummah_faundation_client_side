export default async function UpdateDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <div className="space-y-6 py-6">
      <h1 className="text-2xl font-bold">আপডেট: {slug}</h1>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <div className="h-40 rounded-lg border bg-slate-100" />
        <div className="h-40 rounded-lg border bg-slate-100" />
        <div className="h-40 rounded-lg border bg-slate-100" />
      </div>
      <a className="text-primary" href="#">সম্পূর্ণ রিপোর্ট দেখুন</a>
    </div>
  );
}
