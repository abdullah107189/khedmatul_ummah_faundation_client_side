import type { Metadata } from "next";
import { SITE_META } from "@/data/site";

export function buildMetadata({
  title,
  description,
}: {
  title: string;
  description: string;
}): Metadata {
  return {
    metadataBase: new URL(SITE_META.url),

    title: {
      default: title,
      template: `%s | ${SITE_META.shortName}`,
    },

    description,

    keywords: [
      "খিদমাতুল উম্মাহ",
      "দান",
      "জাকাত",
      "ইসলামিক সেবা",
      "charity Bangladesh",
    ],

    openGraph: {
      title,
      description,
      url: SITE_META.url,
      siteName: SITE_META.shortName,
      locale: "bn_BD",
      type: "website",
      images: [
        {
          url: SITE_META.ogImage,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SITE_META.ogImage],
    },

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: SITE_META.url,
    },
  };
}