export default function GalleryPage() {
  return (
    <div className="space-y-6 py-6">
      <h1 className="text-2xl font-bold">গ্যালারি</h1>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-lg border bg-slate-100" />
        ))}
      </div>
    </div>
  );
}
