export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface PillarItem {
  title: string;
  description: string;
  href: string;
}

export interface ActivityHighlight {
  title: string;
  description: string;
  href: string;
}

export interface DonationCampaign {
  title: string;
  target: number;
  raised: number;
  description: string;
}

export interface GalleryItem {
  title: string;
  image: string;
  alt: string;
  category: string;
}

export interface MediaVideoItem {
  title: string;
  description: string;
  duration: string;
  url: string;
  thumbnail: string;
  videoFile?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
}

export interface ContactInfo {
  mobile: string;
  whatsapp: string;
  facebook: string;
  officeAddress: string;
  mapQuery: string;
}

export interface DonateInfo {
  bkash: string;
  nagad: string;
  qrLabel: string;
  note: string;
}

export interface AboutContent {
  introduction: string;
  mission: string[];
  founderMessage: string;
}
