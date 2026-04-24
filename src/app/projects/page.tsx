import Link from "next/link";
import { Input } from "@/components/ui/input";

const projects = [
  { slug: "winter-relief", title: "শীতার্তদের কম্বল বিতরণ", status: "চলমান" },
  { slug: "orphan-education", title: "এতিম শিশু শিক্ষা সহায়তা", status: "চলমান" },
  { slug: "ramadan-food", title: "রামাদান ফুড প্যাক", status: "সম্পন্ন" }
];

export default function ProjectsPage() {
  return (
    <div className="space-y-6 py-6">
      <h1 className="text-2xl font-bold">প্রকল্পসমূহ</h1>
      <Input placeholder="প্রকল্প খুঁজুন" />
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <div key={p.slug} className="rounded-xl border bg-white p-5">
            <span className="rounded bg-slate-100 px-2 py-1 text-xs">{p.status}</span>
            <h3 className="mt-3 font-semibold">{p.title}</h3>
            <div className="mt-4 flex gap-2">
              <Link href={`/projects/${p.slug}`} className="text-sm text-primary">বিস্তারিত</Link>
              <Link href="/donate" className="text-sm text-primary">এই প্রকল্পে দান করুন</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
