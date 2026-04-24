import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/button";
import { ACTIVITY_CATEGORIES } from "@/data/activities";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "কার্যক্রম",
  description: "শিক্ষা, সংস্কৃতি, সেবা এবং দাওয়াহভিত্তিক কার্যক্রমের সারসংক্ষেপ ও পৃথক ক্যাটাগরি পেজ।",
});

export default function ActivitiesPage() {
  return (
    <div className="space-y-16 pb-12">
      <PageHero
        title="আমাদের কার্যক্রম"
        description="শিক্ষা, সংস্কৃতি, সেবা এবং দাওয়াহ এই চারটি প্রধান বিভাগে আমাদের উদ্যোগ বিস্তৃত। প্রতিটি বিভাগের জন্য আলাদা পরিকল্পনা, বাস্তবায়ন ও সম্প্রসারণ কাঠামো রাখা হয়েছে।"
      />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="প্রধান বিভাগ"
          title="ক্যাটাগরি অনুযায়ী কার্যক্রম"
          description="প্রতিটি বিভাগে থাকা উপ-কার্যক্রমগুলো পরবর্তী সময়ে প্রশাসনিক প্যানেল থেকে আলাদাভাবে ব্যবস্থাপনা করা যাবে এমনভাবে কাঠামো তৈরি করা হয়েছে।"
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {ACTIVITY_CATEGORIES.map((category) => (
            <article key={category.slug} className="rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-sm md:p-8">
              <div className="inline-flex rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold tracking-[0.18em] text-emerald-700">
                {category.title}
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-600">{category.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <span key={item} className="rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm text-slate-700">
                    {item}
                  </span>
                ))}
              </div>
              <Link href={`/activities/${category.slug}`} className="mt-8 inline-block">
                <Button variant="outline">বিস্তারিত পেজ</Button>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
