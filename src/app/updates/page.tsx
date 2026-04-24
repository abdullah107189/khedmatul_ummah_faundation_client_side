import Link from "next/link";

const updates = [
  { slug: "relief-feb", title: "ফেব্রুয়ারি ত্রাণ আপডেট" },
  { slug: "education-drive", title: "শিক্ষা সহায়তা আপডেট" },
  { slug: "winter-report", title: "শীতকালীন কার্যক্রম রিপোর্ট" }
];

export default function UpdatesPage() {
  return (
    <div className="space-y-6 py-6">
      <h1 className="text-2xl font-bold">আপডেট ও সংবাদ</h1>
      <div className="space-y-3">
        {updates.map((u) => (
          <Link key={u.slug} href={`/updates/${u.slug}`} className="block rounded-xl border bg-white p-5 hover:border-primary">
            {u.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
