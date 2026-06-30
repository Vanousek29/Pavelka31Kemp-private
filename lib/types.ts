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

// Strukturální data tieru – texty (role, desc) jsou v překladech pod terminy.tiers.<key>
export interface Tier {
  key: string;
  price: string;
  priceCzk: number;
  // contact = cena na dotaz / mimo standardní registraci → tlačítko vede na kontakt
  contact?: boolean;
}

// Trenér – jméno i role jsou v překladech pod trainers.byTag.<tag>
export interface Trainer {
  tag: string;
  photo?: string;
}

export interface Sponsor {
  name: string;
  url: string;
}

// Vizitka – mark (barva) je strukturální, isStat určuje umístění; texty v about.achievements (dle pořadí)
export interface Achievement {
  mark: string;
  isStat: boolean;
}

// Offering – num a glyph jsou strukturální; texty v features.offerings (dle pořadí)
export interface Offering {
  num: string;
  glyph: string;
}

// Den programu – časy a tagy jsou strukturální; texty v event.days.<id>
export interface DaySchedule {
  id: string;
  blocks: { time: string; tag?: string }[];
}

export interface GalleryItem {
  id: number;
  isVideo: boolean;
  src: string;
  aspect: string;
  stripeClass: string;
  // Doplňuje se za běhu z překladů (alt text / popisek)
  label?: string;
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

export interface StoredRegistration extends Registration {
  vs: string;
  typUcasti: string;
  cena: number;
  timestamp: string;
}

// Produkt – priceLabel zůstává (CZK); category a name jsou v překladech pod merch.products.<id>
export interface Product {
  id: number;
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
