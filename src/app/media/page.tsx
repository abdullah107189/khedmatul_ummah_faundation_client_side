import type { Metadata } from "next";
import GalleryGrid from "@/components/sections/GalleryGrid";
import MediaVideoShowcase from "@/components/sections/MediaVideoShowcase";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/sections/SectionHeading";
import { MEDIA_GALLERY, MEDIA_VIDEOS } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "মিডিয়া",
  description: "ছবি গ্যালারি, ভিডিও গ্যালারি এবং কার্যক্রমের মিডিয়া ডকুমেন্টেশন।",
});

export default function MediaPage() {
  return (
    <div className="space-y-16 pb-12">
      <PageHero
        title="মিডিয়া"
        description="ছবি, ভিডিও এবং মাঠপর্যায়ের কার্যক্রমের ডকুমেন্টেশন এক জায়গায় সাজানো হয়েছে। পরবর্তী পর্যায়ে প্রশাসনিক প্যানেল থেকে মিডিয়া ব্যবস্থাপনা যুক্ত করা যাবে।"
      />

      <section className="space-y-8">
        <SectionHeading eyebrow="ছবি গ্যালারি" title="সাম্প্রতিক ছবির সংগ্রহ" />
        <GalleryGrid items={MEDIA_GALLERY} />
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="ভিডিও গ্যালারি"
          title="ভিডিও কনটেন্ট"
          description="ভিডিও কার্ডে ক্লিক করলে একই ওয়েবসাইটের ভেতরেই মডাল ওপেন হবে এবং সেখানেই ভিডিও দেখা যাবে।"
        />
        <MediaVideoShowcase videos={MEDIA_VIDEOS} />
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="কার্যক্রমের ছবি"
          title="বিভাগভিত্তিক ডকুমেন্টেশন"
          description="শিক্ষা, সংস্কৃতি, সেবা ও দাওয়াহ প্রতিটি বিভাগের জন্য পুনরায় ব্যবহারযোগ্য গ্যালারি বিন্যাস তৈরি করা হয়েছে।"
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {["শিক্ষা", "সংস্কৃতি", "সেবা", "দাওয়াহ"].map((category) => (
            <div key={category} className="rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{category}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                এই বিভাগের ফটো ও ভিডিও কনটেন্ট ভবিষ্যতে আলাদাভাবে publish এবং manage করা যাবে।
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
