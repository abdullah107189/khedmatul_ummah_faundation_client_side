import Link from "next/link";
import type { Metadata } from "next";
import DonationProgressCard from "@/components/sections/DonationProgressCard";
import GalleryGrid from "@/components/sections/GalleryGrid";
import PageHero from "@/components/sections/PageHero";
import QrCodePreview from "@/components/sections/QrCodePreview";
import SectionHeading from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  CONTACT_INFO,
  DONATE_INFO,
  DONATION_CAMPAIGNS,
  GALLERY_PREVIEW,
  HOME_INTRO,
  PILLARS,
  RUNNING_ACTIVITIES,
  SITE_META,
} from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "হোম",
  description: SITE_META.description,
});

export default function HomePage() {
  return (
    <div className="space-y-16 pb-12 md:space-y-20">
      <PageHero
        title={SITE_META.slogan}
        description={HOME_INTRO}
        primaryLabel="দান করুন"
        primaryHref="/donate"
        secondaryLabel="স্বেচ্ছাসেবক হোন"
        secondaryHref="/volunteer"
      />

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-sm md:p-8">
          <SectionHeading
            eyebrow="আমাদের পরিচিতি"
            title="মানুষের পাশে দায়িত্বশীল, সুশৃঙ্খল এবং স্বচ্ছ উদ্যোগ"
            description={HOME_INTRO}
          />
        </div>
        <div className="surface-pattern rounded-[1.75rem] border border-emerald-100 p-6 shadow-sm md:p-8">
          <h3 className="text-xl font-semibold text-slate-900">অগ্রাধিকারভিত্তিক কাজ</h3>
          <div className="mt-5 space-y-4">
            {RUNNING_ACTIVITIES.map((activity) => (
              <div key={activity.title} className="rounded-2xl bg-white/80 p-4">
                <p className="text-base font-semibold text-slate-900">{activity.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="মূল স্তম্ভ"
          title="চারটি ভিত্তির উপর দাঁড়িয়ে আমাদের কাজ"
          description="প্রতিটি বিভাগ আলাদা পরিকল্পনা, আলাদা মাঠপর্যায়ের কাজ এবং দীর্ঘমেয়াদি সামাজিক প্রভাব নিয়ে পরিচালিত হয়।"
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {PILLARS.map((pillar) => (
            <Link
              key={pillar.title}
              href={pillar.href}
              className="group rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="inline-flex rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold tracking-[0.16em] text-emerald-700">
                {pillar.title}
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-600">{pillar.description}</p>
              <p className="mt-5 text-sm font-semibold text-amber-700">বিস্তারিত দেখুন</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="চলমান কার্যক্রম"
          title="এখন যে উদ্যোগগুলো চলছে"
          description="মানবিক সহায়তা, শিক্ষা ও দাওয়াহকে কেন্দ্র করে চলমান কার্যক্রমের কিছু নির্বাচিত অংশ।"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {RUNNING_ACTIVITIES.map((activity) => (
            <article key={activity.title} className="rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">{activity.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{activity.description}</p>
              <Link href={activity.href} className="mt-5 inline-flex text-sm font-semibold text-emerald-700">
                আরও জানুন
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="দান অগ্রগতি"
          title="চলমান তহবিল সংগ্রহ"
          description="লক্ষ্য, সংগ্রহ এবং অগ্রগতি স্পষ্টভাবে দেখানো হচ্ছে যাতে দাতারা চলমান অবস্থা বুঝতে পারেন।"
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {DONATION_CAMPAIGNS.map((campaign) => (
            <DonationProgressCard key={campaign.title} campaign={campaign} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="গ্যালারি"
            title="সাম্প্রতিক কার্যক্রমের কিছু দৃশ্য"
            description="মাঠপর্যায়ের কাজের সাম্প্রতিক ফটো আপডেটের একটি সংক্ষিপ্ত প্রিভিউ।"
          />
          <Link href="/media">
            <Button variant="outline">সব মিডিয়া দেখুন</Button>
          </Link>
        </div>
        <GalleryGrid items={GALLERY_PREVIEW} />
      </section>

      <section className="grid gap-6 rounded-[2rem] border border-emerald-100 bg-[linear-gradient(135deg,_rgba(236,253,245,0.96),_rgba(255,251,235,0.96))] p-6 shadow-sm md:p-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <SectionHeading
            eyebrow="স্বেচ্ছাসেবক"
            title="আপনার সময়, দক্ষতা ও আন্তরিকতা সমাজের জন্য মূল্যবান"
            description="ফিল্ড সাপোর্ট, ইভেন্ট ম্যানেজমেন্ট, শিক্ষা কার্যক্রম, মিডিয়া ডকুমেন্টেশন এবং ত্রাণ বিতরণে স্বেচ্ছাসেবক হিসেবে যুক্ত হতে পারেন।"
          />
          <Link href="/volunteer">
            <Button size="lg">ফর্ম পূরণ করুন</Button>
          </Link>
        </div>
        <div className="rounded-[1.75rem] bg-white/80 p-6">
          <h3 className="text-xl font-semibold text-slate-900">যোগদানের ক্ষেত্র</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            {["ত্রাণ বিতরণ", "শিক্ষা কার্যক্রম", "মিডিয়া সাপোর্ট", "দাওয়াহ প্রোগ্রাম"].map((item) => (
              <div key={item} className="rounded-2xl border border-emerald-100 bg-white px-4 py-3">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-sm md:p-8">
          <SectionHeading
            eyebrow="দান তথ্য"
            title="সহজ উপায়ে অনুদান পাঠান"
            description="অনলাইন পেমেন্ট গেটওয়ে ছাড়াই সরাসরি বিকাশ অথবা নগদ নম্বরে দান পাঠানো যাবে।"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-emerald-100 bg-emerald-50 p-5">
              <p className="text-sm text-slate-500">বিকাশ নম্বর</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">{DONATE_INFO.bkash}</p>
            </div>
            <div className="rounded-[1.5rem] border border-emerald-100 bg-amber-50 p-5">
              <p className="text-sm text-slate-500">নগদ নম্বর</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">{DONATE_INFO.nagad}</p>
            </div>
          </div>
          <p className="mt-5 text-sm text-amber-700">{DONATE_INFO.note}</p>
        </div>
        <QrCodePreview label={DONATE_INFO.qrLabel} />
      </section>

      <section className="grid gap-6 rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-sm md:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="space-y-3">
          <SectionHeading
            eyebrow="যোগাযোগ"
            title="সরাসরি যোগাযোগ করতে চান?"
            description="সাধারণ তথ্য, দান, স্বেচ্ছাসেবক সমন্বয় অথবা মাঠপর্যায়ের কার্যক্রম সম্পর্কে জানতে আমাদের সাথে যুক্ত থাকুন।"
          />
          <div className="space-y-2 text-sm text-slate-600">
            <p>মোবাইল: {CONTACT_INFO.mobile}</p>
            <p>হোয়াটসঅ্যাপ: {CONTACT_INFO.whatsapp}</p>
            <p>অফিস ঠিকানা: {CONTACT_INFO.officeAddress}</p>
          </div>
        </div>
        <Link href="/contact">
          <Button size="lg" variant="outline">
            যোগাযোগ পেজে যান
          </Button>
        </Link>
      </section>
    </div>
  );
}
