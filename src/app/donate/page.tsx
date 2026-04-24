import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import QrCodePreview from "@/components/sections/QrCodePreview";
import SectionHeading from "@/components/sections/SectionHeading";
import { DONATE_INFO } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "দান করুন",
  description: "বিকাশ, নগদ এবং কিউআর কোডের মাধ্যমে অনুদান দেওয়ার তথ্য।",
});

export default function DonatePage() {
  return (
    <div className="space-y-16 pb-12">
      <PageHero
        title="দান করুন"
        description="অনলাইন পেমেন্ট গেটওয়ে ছাড়াই সরাসরি মোবাইল ব্যাংকিং নম্বরে দান পাঠানোর জন্য প্রয়োজনীয় তথ্য এখানে দেওয়া হয়েছে।"
      />

      <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-sm md:p-8">
          <SectionHeading
            eyebrow="অনুদান তথ্য"
            title="বিকাশ ও নগদ নম্বর"
            description="দান পাঠানোর পর অনুগ্রহ করে স্ক্রিনশট পাঠিয়ে নিশ্চিত করুন।"
          />
          <div className="mt-8 space-y-4">
            <div className="rounded-[1.5rem] border border-emerald-100 bg-emerald-50 p-5">
              <p className="text-sm text-slate-500">বিকাশ নম্বর</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{DONATE_INFO.bkash}</p>
            </div>
            <div className="rounded-[1.5rem] border border-emerald-100 bg-amber-50 p-5">
              <p className="text-sm text-slate-500">নগদ নম্বর</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{DONATE_INFO.nagad}</p>
            </div>
          </div>
          <p className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            {DONATE_INFO.note}
          </p>
        </div>

        <QrCodePreview label={DONATE_INFO.qrLabel} />
      </section>
    </div>
  );
}
