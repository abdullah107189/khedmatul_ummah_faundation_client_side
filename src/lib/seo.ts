import type { Metadata } from "next";
import { SITE_META } from "@/data/site";

interface MetadataInput {
  title: string;
  description: string;
}

export function buildMetadata({ title, description }: MetadataInput): Metadata {
  const pageTitle = title === SITE_META.name ? title : `${title} | ${SITE_META.name}`;

  return {
    title: pageTitle,
    description,
    keywords: [
      "খিদমাতুল উম্মাহ ফাউন্ডেশন",
      "বাংলা চ্যারিটি ওয়েবসাইট",
      "ইসলামিক ফাউন্ডেশন",
      "দান",
      "স্বেচ্ছাসেবক",
      "সামাজিক সেবা",
    ],
    openGraph: {
      title: pageTitle,
      description,
      siteName: SITE_META.name,
      locale: "bn_BD",
      type: "website",
    },
  };
}
