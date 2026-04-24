import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import VolunteerRegistrationForm from "@/components/sections/VolunteerRegistrationForm";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "স্বেচ্ছাসেবক",
  description: "খিদমাতুল উম্মাহ ফাউন্ডেশনের স্বেচ্ছাসেবক নিবন্ধন ফর্ম।",
});

export default function VolunteerPage() {
  return (
    <div className="space-y-12 pb-12">
      <PageHero
        title="স্বেচ্ছাসেবক নিবন্ধন"
        description="ব্যক্তিগত তথ্য, ঠিকানা, শিক্ষাগত তথ্য, সামাজিক যোগাযোগ এবং পূর্ব অভিজ্ঞতাসহ পূর্ণাঙ্গ স্বেচ্ছাসেবক নিবন্ধন ফর্ম।"
      />
      <VolunteerRegistrationForm />
    </div>
  );
}
