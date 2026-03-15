import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/sections/SectionHeading";
import TeamMemberCard from "@/components/sections/TeamMemberCard";
import { ABOUT_CONTENT, ADVISORS, SITE_META, TEAM_MEMBERS } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "আমাদের সম্পর্কে",
  description: "খিদমাতুল উম্মাহ ফাউন্ডেশনের পরিচিতি, লক্ষ্য, উদ্দেশ্য, প্রতিষ্ঠাতার বক্তব্য ও টিম পরিচিতি।",
});

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-12">
      <PageHero
        title="আমাদের পরিচিতি"
        description="আমরা একটি বাংলা-ভিত্তিক, ইসলামিক মূল্যবোধসম্পন্ন, আধুনিক ও সুশৃঙ্খল মানবিক ফাউন্ডেশন ওয়েব উপস্থিতি গড়ে তুলছি।"
      />

      <section className="rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-sm md:p-8">
        <SectionHeading title="আমাদের পরিচিতি" description={ABOUT_CONTENT.introduction} />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-sm md:p-8">
          <SectionHeading
            eyebrow="লক্ষ্য ও উদ্দেশ্য"
            title="মানুষের উপকারে টেকসই কাজের কাঠামো"
            description="তাৎক্ষণিক সহায়তা এবং দীর্ঘমেয়াদি সামাজিক উন্নয়ন, দুই দিকেই আমরা পরিকল্পিতভাবে কাজ করি।"
          />
          <div className="mt-6 space-y-3">
            {ABOUT_CONTENT.mission.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-4 text-sm text-slate-700">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-600" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-emerald-100 bg-[linear-gradient(180deg,_rgba(255,251,235,0.9),_rgba(240,253,244,0.96))] p-6 shadow-sm md:p-8">
          <SectionHeading eyebrow="প্রতিষ্ঠাতার বক্তব্য" title="একটি দায়িত্বশীল দাওয়াহ ও সেবামূলক যাত্রা" />
          <p className="mt-6 text-sm leading-8 text-slate-700">{ABOUT_CONTENT.founderMessage}</p>
          <p className="mt-6 text-sm font-semibold text-emerald-700">{TEAM_MEMBERS[0]?.name}</p>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="আমাদের টিম"
          title="কার্যক্রম পরিচালনায় যাঁরা আছেন"
          description={`${SITE_META.shortName} এর মাঠপর্যায়ের পরিকল্পনা, সমন্বয় ও বাস্তবায়নে নিবেদিত টিম সদস্যরা কাজ করছেন।`}
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {TEAM_MEMBERS.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="উপদেষ্টা পরিষদ"
          title="নীতিগত ও কৌশলগত সহায়তা"
          description="দ্বীনি, শিক্ষা ও প্রযুক্তিগত পরামর্শের মাধ্যমে প্রতিষ্ঠানকে সুশৃঙ্খল ও ভবিষ্যতমুখী রাখতে উপদেষ্টা পরিষদ কাজ করছে।"
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {ADVISORS.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
}
