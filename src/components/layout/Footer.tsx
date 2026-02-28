import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 border-t bg-white">
      <div className="container-app grid gap-8 py-10 text-sm md:grid-cols-4">
        <div>
          <h3 className="font-semibold">খেদমাতুল উম্মাহ</h3>
          <p className="mt-2 text-slate-600">স্বচ্ছ ও আমানতদার মানবসেবায় আমরা কাজ করি।</p>
        </div>
        <div>
          <h3 className="font-semibold">কুইক লিংক</h3>
          <div className="mt-2 space-y-1 text-slate-600">
            <Link href="/projects" className="block hover:text-primary">প্রকল্পসমূহ</Link>
            <Link href="/updates" className="block hover:text-primary">আপডেট</Link>
            <Link href="/donate" className="block hover:text-primary">দান করুন</Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold">যোগাযোগ</h3>
          <p className="mt-2 text-slate-600">ফোন: 01700-000000</p>
          <p className="text-slate-600">ইমেইল: info@kuf.org</p>
        </div>
        <div>
          <h3 className="font-semibold">দ্রুত দান (QR)</h3>
          <div className="mt-2 h-20 w-20 rounded-md border bg-slate-100" />
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} খেদমাতুল উম্মাহ ফাউন্ডেশন</div>
    </footer>
  );
}
