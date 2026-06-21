export interface Camp {
  id: string;
  name: string;
  dateFrom: string;
  dateTo: string;
  location: string;
  city: string;
  ageGroup: string;
  price: number;
  capacity: number;
  registered: number;
  status: 'open' | 'few_spots' | 'full';
}

export interface Tier {
  key: string;
  role: string;
  price: string;
  priceCzk: number;
  desc: string;
}

export interface Trainer {
  name: string;
  role: string;
  tag: string;
  photo?: string;
}

export interface Sponsor {
  name: string;
  url: string;
}

export interface Achievement {
  mark: string;
  kind: string;
  title: string;
  detail: string;
}

export interface Offering {
  num: string;
  glyph: string;
  title: string;
  desc: string;
}

export interface DaySchedule {
  id: string;
  date: string;
  weekday: string;
  sraz: string;
  blocks: { time: string; label: string }[];
  note: string;
}

export interface Rule {
  num: string;
  title: string;
  body: string;
}

export interface GalleryItem {
  id: number;
  tag: string;
  label: string;
  isVideo: boolean;
  src: string;
  aspect: string;
  stripeClass: string;
}

export interface Registration {
  role: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  phone: string;
  parentName: string;
  parentPhone: string;
  dressSize: string;
  note: string;
  agreeRules: boolean;
  agreeGdpr: boolean;
}

export interface Product {
  id: number;
  category: string;
  name: string;
  priceLabel: string;
  available: boolean;
}

export interface ContactInfo {
  email: string;
  phone: string;
  instagram: string;
  instagramUrl: string;
  company: string;
}
