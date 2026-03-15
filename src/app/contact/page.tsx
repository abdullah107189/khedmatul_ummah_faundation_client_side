import Link from "next/link";
import type { Metadata } from "next";
import MapEmbed from "@/components/sections/MapEmbed";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "যোগাযোগ",
  description: "মোবাইল নম্বর, হোয়াটসঅ্যাপ, ফেসবুক, অফিস ঠিকানা এবং মানচিত্র।",
});

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-12">
      <PageHero
        title="যোগাযোগ"
        description="ফাউন্ডেশনের সাথে যোগাযোগ, দান নিশ্চিতকরণ, স্বেচ্ছাসেবক সমন্বয় এবং কার্যক্রম সম্পর্কিত তথ্যের জন্য এই পেজ ব্যবহার করুন।"
      />

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-sm md:p-8">
          <SectionHeading eyebrow="সরাসরি যোগাযোগ" title="প্রয়োজনীয় তথ্য" />
          <div className="mt-8 space-y-4 text-sm text-slate-700">
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-4">
              <p className="text-slate-500">মোবাইল নম্বর</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{CONTACT_INFO.mobile}</p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-white px-4 py-4">
              <p className="text-slate-500">হোয়াটসঅ্যাপ</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{CONTACT_INFO.whatsapp}</p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-white px-4 py-4">
              <p className="text-slate-500">ফেসবুক</p>
              <Link href={CONTACT_INFO.facebook} className="mt-2 block text-lg font-semibold text-emerald-700">
                ফেসবুক পেজ
              </Link>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-white px-4 py-4">
              <p className="text-slate-500">অফিস ঠিকানা</p>
              <p className="mt-2 leading-7 text-slate-900">{CONTACT_INFO.officeAddress}</p>
            </div>
          </div>
          <div className="mt-6">
            <Link href="/donate">
              <Button>দান সংক্রান্ত তথ্য</Button>
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <SectionHeading eyebrow="মানচিত্র" title="অফিস লোকেশন" />
          <MapEmbed query={CONTACT_INFO.mapQuery} />
        </div>
      </section>
    </div>
  );
}
