import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/button";
import { ACTIVITY_CATEGORIES } from "@/data/activities";
import { buildMetadata } from "@/lib/seo";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return ACTIVITY_CATEGORIES.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const category = ACTIVITY_CATEGORIES.find((item) => item.slug === resolvedParams.slug);

  if (!category) {
    return buildMetadata({
      title: "কার্যক্রম",
      description: "খিদমাতুল উম্মাহ ফাউন্ডেশনের কার্যক্রম।",
    });
  }

  return buildMetadata({
    title: category.title,
    description: category.description,
  });
}

export default async function ActivityCategoryPage({ params }: { params: Promise<Params> }) {
  const resolvedParams = await params;
  const category = ACTIVITY_CATEGORIES.find((item) => item.slug === resolvedParams.slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="space-y-16 pb-12">
      <PageHero
        title={`${category.title} বিভাগ`}
        description={category.description}
        primaryLabel="দান করুন"
        primaryHref="/donate"
        secondaryLabel="স্বেচ্ছাসেবক হোন"
        secondaryHref="/volunteer"
      />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="বিস্তারিত কার্যক্রম"
          title={`${category.title} বিভাগের অন্তর্ভুক্ত উদ্যোগ`}
          description="এই বিভাগটি ভবিষ্যতে প্রশাসনিক প্যানেল থেকে বিভাগভিত্তিক তথ্য, গ্যালারি, কার্যক্রম আপডেট এবং প্রতিবেদন সংযোজনের জন্য প্রস্তুত রাখা হয়েছে।"
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {category.items.map((item, index) => (
            <article
              key={item}
              className="rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-sm"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-lg font-bold text-emerald-700">
                {index + 1}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {category.title} বিভাগের এই উদ্যোগটি স্থানীয় পর্যায়ে সুশৃঙ্খল পরিকল্পনা এবং স্বেচ্ছাসেবক সমন্বয়ের মাধ্যমে পরিচালিত হয়।
              </p>
            </article>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/activities">
            <Button variant="outline">সব কার্যক্রমে ফিরে যান</Button>
          </Link>
          <Link href="/contact">
            <Button>যোগাযোগ করুন</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
