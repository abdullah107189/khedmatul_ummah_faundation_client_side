import type {
  AboutContent,
  ActivityHighlight,
  ContactInfo,
  DonateInfo,
  DonationCampaign,
  GalleryItem,
  MediaVideoItem,
  NavItem,
  PillarItem,
  TeamMember,
} from "@/types/site";

export const SITE_META = {
  name: "খিদমাতুল উম্মাহ ফাউন্ডেশন",
  shortName: "খিদমাতুল উম্মাহ",
  description:
    "খিদমাতুল উম্মাহ ফাউন্ডেশন একটি মানবিক ও ইসলামিক সেবামূলক প্রতিষ্ঠান, যা শিক্ষা, সংস্কৃতি, সেবা ও দাওয়াহ কার্যক্রমের মাধ্যমে সমাজের কল্যাণে কাজ করে।",
  slogan: "মানবসেবায় ঈমানি অঙ্গীকার, উম্মাহর কল্যাণে সমন্বিত উদ্যোগ",
  url: "https://yourdomain.com",
  ogImage: "/ummah_logo.svg",
};
export const NAV_ITEMS: NavItem[] = [
  { label: "হোম", href: "/" },
  { label: "আমাদের সম্পর্কে", href: "/about" },
  {
    label: "কার্যক্রম",
    href: "/activities",
    children: [
      { label: "শিক্ষা", href: "/activities/education" },
      { label: "সংস্কৃতি", href: "/activities/culture" },
      { label: "সেবা", href: "/activities/service" },
      { label: "দাওয়াহ", href: "/activities/dawah" },
    ],
  },
  { label: "মিডিয়া", href: "/media" },
  { label: "স্বেচ্ছাসেবক", href: "/volunteer" },
  { label: "দান করুন", href: "/donate" },
  { label: "যোগাযোগ", href: "/contact" },
];

export const HOME_INTRO =
  "খিদমাতুল উম্মাহ ফাউন্ডেশন সমাজের অবহেলিত, দরিদ্র, এতিম, শিক্ষার্থী ও সাধারণ মানুষের কল্যাণে একটি বিশ্বাসযোগ্য প্ল্যাটফর্ম হিসেবে কাজ করছে। আমরা কুরআন-সুন্নাহভিত্তিক মূল্যবোধকে সামনে রেখে মানবিক সহায়তা, শিক্ষা প্রসার, ইসলামিক সংস্কৃতি এবং দাওয়াহ কার্যক্রম পরিচালনা করি।";

export const PILLARS: PillarItem[] = [
  {
    title: "শিক্ষা",
    description: "কুরআন শিক্ষা, মক্তব, বই বিতরণ ও শিক্ষা সহায়তার মাধ্যমে দ্বীনি ও সাধারণ জ্ঞানের ভিত্তি মজবুত করা।",
    href: "/activities/education",
  },
  {
    title: "সংস্কৃতি",
    description: "মাহফিল, সেমিনার, ইসলামিক অনুষ্ঠান ও প্রতিযোগিতার মাধ্যমে ইতিবাচক সাংস্কৃতিক চর্চা ছড়িয়ে দেওয়া।",
    href: "/activities/culture",
  },
  {
    title: "সেবা",
    description: "খাদ্য বিতরণ, চিকিৎসা সহায়তা, এতিম সহায়তা ও ত্রাণ কার্যক্রমের মাধ্যমে মানুষের পাশে থাকা।",
    href: "/activities/service",
  },
  {
    title: "দাওয়াহ",
    description: "ইসলাম প্রচার, লিফলেট বিতরণ ও দাওয়াহ ক্যাম্পেইনের মাধ্যমে আলোর বার্তা পৌঁছে দেওয়া।",
    href: "/activities/dawah",
  },
];

export const RUNNING_ACTIVITIES: ActivityHighlight[] = [
  {
    title: "খাদ্য বিতরণ",
    description: "অসহায় পরিবারগুলোর কাছে নিয়মিত খাদ্যসামগ্রী পৌঁছে দেওয়া হচ্ছে।",
    href: "/activities/service",
  },
  {
    title: "এতিম সহায়তা",
    description: "এতিম শিশুদের শিক্ষা, চিকিৎসা ও মৌলিক চাহিদা পূরণে সহায়তা করা হচ্ছে।",
    href: "/activities/service",
  },
  {
    title: "ইসলামিক শিক্ষা কার্যক্রম",
    description: "স্থানীয় মক্তব ও কুরআন শিক্ষা কেন্দ্রের মাধ্যমে শিশু-কিশোরদের জন্য ধারাবাহিক পাঠদান।",
    href: "/activities/education",
  },
];

export const DONATION_CAMPAIGNS: DonationCampaign[] = [
  {
    title: "ত্রাণ কার্যক্রম",
    target: 100000,
    raised: 60000,
    description: "বন্যা ও জরুরি দুর্যোগে ক্ষতিগ্রস্ত পরিবারগুলোর জন্য ত্রাণ সংগ্রহ।",
  },
  {
    title: "এতিম সহায়তা তহবিল",
    target: 150000,
    raised: 92000,
    description: "এতিম শিশুদের পড়াশোনা, খাদ্য ও পোশাকের জন্য সহায়তা।",
  },
];

export const GALLERY_PREVIEW: GalleryItem[] = [
  {
    title: "ইফতার ও খাদ্য সহায়তা বিতরণ",
    image: "/gallery/WhatsApp Image 2026-04-20 at 8.31.13 AM.jpeg",
    alt: "ইফতার ও খাদ্য সহায়তা বিতরণ কার্যক্রম",
    category: "সেবা",
  },
  {
    title: "শিক্ষা কার্যক্রমের ক্লাস সেশন",
    image: "/gallery/WhatsApp Image 2026-04-20 at 8.31.24 AM (3).jpeg",
    alt: "শিক্ষা কার্যক্রমের ক্লাস সেশন",
    category: "শিক্ষা",
  },
  {
    title: "সামাজিক দাওয়াহ ও আলোচনা",
    image: "/gallery/WhatsApp Image 2026-04-20 at 8.31.24 AM (10).jpeg",
    alt: "সামাজিক দাওয়াহ ও আলোচনা আয়োজন",
    category: "দাওয়াহ",
  },
  {
    title: "স্থানীয় পরিবারে সেবা পৌঁছে দেওয়া",
    image: "/gallery/WhatsApp Image 2026-04-20 at 8.31.24 AM (14).jpeg",
    alt: "স্থানীয় পরিবারে সেবা পৌঁছে দেওয়ার দৃশ্য",
    category: "সেবা",
  },
];

export const MEDIA_GALLERY: GalleryItem[] = [
  ...GALLERY_PREVIEW,
  {
    title: "কুরআন তিলাওয়াত ও দোয়া অনুষ্ঠান",
    image: "/gallery/WhatsApp Image 2026-04-20 at 8.31.24 AM (16).jpeg",
    alt: "কুরআন তিলাওয়াত ও দোয়া অনুষ্ঠান",
    category: "সংস্কৃতি",
  },
  {
    title: "মাদরাসা শিক্ষার্থীদের সহায়তা",
    image: "/gallery/WhatsApp Image 2026-04-20 at 8.31.24 AM (18).jpeg",
    alt: "মাদরাসা শিক্ষার্থীদের সহায়তা কার্যক্রম",
    category: "শিক্ষা",
  },
  {
    title: "সমন্বয় সভা ও পরিকল্পনা",
    image: "/gallery/WhatsApp Image 2026-04-20 at 8.31.24 AM (20).jpeg",
    alt: "সমন্বয় সভা ও পরিকল্পনা",
    category: "প্রশাসন",
  },
  {
    title: "ফিল্ড ভিজিট ও ডকুমেন্টেশন",
    image: "/gallery/WhatsApp Image 2026-04-20 at 8.31.24 AM (21).jpeg",
    alt: "ফিল্ড ভিজিট ও ডকুমেন্টেশন",
    category: "মিডিয়া",
  },
  {
    title: "স্বেচ্ছাসেবক টিমের প্রস্তুতি",
    image: "/gallery/WhatsApp Image 2026-04-20 at 8.31.24 AM (22).jpeg",
    alt: "স্বেচ্ছাসেবক টিমের প্রস্তুতি দৃশ্য",
    category: "স্বেচ্ছাসেবক",
  },
  {
    title: "সমাপনী দোয়া ও প্রতিফলন",
    image: "/gallery/WhatsApp Image 2026-04-20 at 8.31.24 AM (24).jpeg",
    alt: "সমাপনী দোয়া ও প্রতিফলনের ছবি",
    category: "দাওয়াহ",
  },
  {
    title: "উদ্যোগ বাস্তবায়নের মাঠচিত্র",
    image: "/gallery/WhatsApp Image 2026-04-20 at 8.31.24 AM (25).jpeg",
    alt: "উদ্যোগ বাস্তবায়নের মাঠচিত্র",
    category: "সেবা",
  },
  {
    title: "শিশুদের অংশগ্রহণমূলক সেশন",
    image: "/gallery/WhatsApp Image 2026-04-20 at 8.31.24 AM (27).jpeg",
    alt: "শিশুদের অংশগ্রহণমূলক সেশন",
    category: "শিক্ষা",
  },
  {
    title: "দাতাদের সাথে সমন্বয়",
    image: "/gallery/WhatsApp Image 2026-04-20 at 8.31.24 AM (28).jpeg",
    alt: "দাতাদের সাথে সমন্বয় সভা",
    category: "সমন্বয়",
  },
];

export const MEDIA_VIDEOS: MediaVideoItem[] = [
  {
    title: "সাম্প্রতিক কার্যক্রমের ভিডিও",
    description: "এই ভিডিওতে ফাউন্ডেশনের মাঠপর্যায়ের কাজ, টিম সমন্বয় এবং সেবামূলক উদ্যোগের ঝলক দেখানো হয়েছে।",
    duration: "Facebook Reel",
    url: "https://www.facebook.com/reel/1389286435574752",
    thumbnail: "/gallery/home_hero_section.jpeg",
    videoFile: "/videos/foundation-reel.mp4",
  },
];

export const CONTACT_INFO: ContactInfo = {
  mobile: "০১৭১২-৩৪৫৬৭৮",
  whatsapp: "০১৭১২-৩৪৫৬৭৮",
  facebook: "https://www.facebook.com/profile.php?id=100093416133606",
  officeAddress: "বায়তুল আমান জামে মসজিদ সংলগ্ন, চাঁদপুর সদর, চাঁদপুর, বাংলাদেশ",
  mapQuery: "Chandpur Sadar, Bangladesh",
};

export const DONATE_INFO: DonateInfo = {
  bkash: "০১৭১১-২২৩৩৪৪",
  nagad: "০১৮১১-২২৩৩৪৪",
  qrLabel: "খিদমাতুল উম্মাহ ফাউন্ডেশন - কিউআর দান",
  note: "দান করার পর স্ক্রিনশট পাঠান।",
};

export const ABOUT_CONTENT: AboutContent = {
  introduction:
    "খিদমাতুল উম্মাহ ফাউন্ডেশন একটি নিবেদিত মানবিক প্ল্যাটফর্ম, যেখানে দ্বীনি দৃষ্টিভঙ্গি, সামাজিক দায়িত্ববোধ এবং স্বচ্ছ ব্যবস্থাপনা একসাথে কাজ করে। আমরা মানুষের দুঃসময়ে পাশে দাঁড়ানোর পাশাপাশি দীর্ঘমেয়াদি সামাজিক পরিবর্তনের জন্য শিক্ষা, সংস্কৃতি ও দাওয়াহভিত্তিক উদ্যোগ পরিচালনা করি।",
  mission: [
    "অসহায়, এতিম, দরিদ্র ও দুর্যোগপীড়িত মানুষের পাশে ধারাবাহিক সহায়তা পৌঁছে দেওয়া।",
    "ইসলামিক শিক্ষা ও নৈতিক মূল্যবোধভিত্তিক প্রজন্ম গড়ে তোলা।",
    "সমাজে ইতিবাচক সাংস্কৃতিক পরিবেশ ও দায়িত্বশীল নাগরিক চেতনা জাগ্রত করা।",
    "দাওয়াহ কার্যক্রমের মাধ্যমে সঠিক ইসলামী জ্ঞান মানুষের কাছে সহজভাবে পৌঁছে দেওয়া।",
  ],
  founderMessage:
    "আমাদের লক্ষ্য শুধু তাৎক্ষণিক সহায়তা দেওয়া নয়; বরং একটি সুশৃঙ্খল, আল্লাহভীরু, দায়িত্বশীল ও কল্যাণমুখী সমাজ গঠনে দীর্ঘমেয়াদে কাজ করা। সকল শুভাকাঙ্ক্ষী, দাতা ও স্বেচ্ছাসেবকের সহযোগিতাই এই যাত্রার শক্তি।",
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "মাওলানা আবদুল হাকিম",
    role: "প্রতিষ্ঠাতা",
    description: "দ্বীনি শিক্ষা, দাওয়াহ এবং সামাজিক কল্যাণমূলক কাজের সমন্বয়ে ফাউন্ডেশনের দিকনির্দেশনা প্রদান করেন।",
  },
  {
    name: "মোঃ নাসির উদ্দিন",
    role: "নির্বাহী পরিচালক",
    description: "মাঠপর্যায়ের প্রকল্প পরিকল্পনা, তহবিল সমন্বয় এবং স্বেচ্ছাসেবক ব্যবস্থাপনা তদারকি করেন।",
  },
  {
    name: "সায়মা ইসলাম",
    role: "প্রোগ্রাম সমন্বয়ক",
    description: "শিক্ষা, সংস্কৃতি ও মিডিয়া কার্যক্রমের পরিকল্পনা ও বাস্তবায়নে কাজ করেন।",
  },
];

export const ADVISORS: TeamMember[] = [
  {
    name: "ড. মুহাম্মদ আতাউর রহমান",
    role: "শিক্ষা উপদেষ্টা",
    description: "ইসলামিক শিক্ষা কার্যক্রমের পাঠক্রম ও মানোন্নয়নে পরামর্শ দেন।",
  },
  {
    name: "মুফতি জিয়াউল করিম",
    role: "শরয়ি উপদেষ্টা",
    description: "ফাউন্ডেশনের কর্মসূচি শরিয়াহসম্মত ও সুনির্দিষ্ট রাখার জন্য নির্দেশনা প্রদান করেন।",
  },
  {
    name: "ইঞ্জি. কামরুল হাসান",
    role: "প্রযুক্তি ও উন্নয়ন উপদেষ্টা",
    description: "ভবিষ্যৎ ডিজিটাল প্রশাসন, তথ্যব্যবস্থাপনা ও সম্প্রসারণ কাঠামো প্রস্তুতে সহায়তা করেন।",
  },
];

export const VOLUNTEER_BENEFITS = [
  "মাঠপর্যায়ে মানবিক ও দ্বীনি সেবায় সরাসরি অংশ নেওয়ার সুযোগ",
  "প্রশিক্ষণ, সমন্বয় ও দায়িত্বভিত্তিক কাজের পরিবেশ",
  "ভবিষ্যতে প্রশাসনিক প্যানেল যুক্ত হলে স্বেচ্ছাসেবক ব্যবস্থাপনার জন্য প্রস্তুত ডেটা",
];

