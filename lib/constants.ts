import type { Tier, Trainer, Sponsor, Achievement, Offering, DaySchedule, GalleryItem, ContactInfo, Product, Camp } from './types';

export const PAYMENT = {
  iban: 'CZ1030300000003659422010',
  bic: 'AIRACZPP',
  accountPretty: '3659422010 / 3030',
  defaultAmount: 3500,
  currency: 'CZK',
} as const;

export const CONTACT: ContactInfo = {
  email: 'jaryna61@seznam.cz',
  phone: '+420 731 739 375',
  instagram: '@pavelka_jaroslav31',
  instagramUrl: 'https://www.instagram.com/pavelka_jaroslav31',
  company: 'Pavelka 31 Kemp z.s.',
};

// Navigace: klíč odkazuje na překlad nav.items.<key>
export const NAV_ITEMS = [
  { key: 'home', href: '/' },
  { key: 'terminy', href: '/terminy' },
  { key: 'pravidla', href: '/pravidla' },
  { key: 'galerie', href: '/galerie' },
  { key: 'treneri', href: '/treneri' },
  { key: 'kontakt', href: '/kontakt' },
] as const;

// Program kempu – časy a tagy (texty viz event.days.<id> v překladech)
export const EVENT = {
  // Dva termíny na stejném místě (texty viz event.terms.<id>)
  termIds: ['jul', 'aug'],
  days: [
    {
      id: 'd1',
      blocks: [
        { time: '15:15–16:15', tag: 'led' },
        { time: '16:40–17:00', tag: 'sucha' },
        { time: '17:15–17:30', tag: 'video' },
      ],
    },
    {
      id: 'd2',
      blocks: [
        { time: '9:10–9:30', tag: 'sucha' },
        { time: '10:00–11:00', tag: 'led' },
      ],
    },
  ] as DaySchedule[],
  // Vlastní jména hostů – nepřekládají se; role viz event.guestRoles (dle pořadí)
  guestNames: ['Michal Gago', 'Libor Kašík', 'Martin Vojtek'],
};

export const PRICES = {
  brankar_1den: 699,
  hrac_1den: 499,
  strelec: 199,
  brankar_2dny: 1050,
  hrac_2dny: 1050,
} as const;

// Cenové kategorie – cena v CZK (stejná v obou jazycích); role a popis viz terminy.tiers.<key>
export const TIERS: Tier[] = [
  { key: 'brankar_1den', price: '699 Kč', priceCzk: 699 },
  { key: 'brankar_2dny', price: '1 050 Kč', priceCzk: 1050 },
  { key: 'hrac_1den', price: '499 Kč', priceCzk: 499 },
  { key: 'hrac_2dny', price: '1 050 Kč', priceCzk: 1050 },
  { key: 'strelec', price: '199 Kč', priceCzk: 199 },
  { key: 'individual', price: '', priceCzk: 0, contact: true },
];

// Termíny a akce – nové akce 2026 (individuální tréninky, tréninkový den, turnaj)
// Názvy akcí viz camps.items.<id>.name; texty turnaje viz tournament.* v překladech
export const CAMPS: Camp[] = [
  {
    id: 'individual-5-7',
    type: 'individual',
    dateFrom: '2026-07-05',
    dateTo: '2026-07-05',
    location: 'Kapka Resort Vsetín',
    city: 'Vsetín',
    program: [
      { cas: '20:00', typ: 'sraz' },
      { cas: '20:15–21:00', typ: 'sucha' },
      { cas: '21:30–22:30', typ: 'led' },
    ],
    price: 599,
    capacity: 20,
    registered: 0,
    status: 'open',
  },
  {
    id: 'individual-6-7',
    type: 'individual',
    dateFrom: '2026-07-06',
    dateTo: '2026-07-06',
    location: 'Kapka Resort Vsetín',
    city: 'Vsetín',
    program: [
      { cas: '12:00–13:00', typ: 'led' },
      { cas: '13:30–14:30', typ: 'sucha' },
    ],
    price: 599,
    capacity: 20,
    registered: 0,
    status: 'open',
  },
  {
    id: 'training-aug',
    type: 'training',
    dateFrom: '2026-08-01',
    dateTo: '2026-08-01',
    location: 'Kapka Resort Vsetín',
    city: 'Vsetín',
    program: [
      { cas: 'TBD', typ: 'trenink' },
    ],
    price: 699,
    capacity: 20,
    registered: 0,
    status: 'open',
  },
  {
    id: 'medvedi-turnaj',
    type: 'tournament',
    dateFrom: '2026-08-02',
    dateTo: '2026-08-02',
    location: 'Kapka Resort Vsetín',
    city: 'Vsetín',
    price: 3500,
    capacity: 5,
    registered: 2, // Mojža team, Jareček team – obsazené
    status: 'few_spots', // poslední 3 volné týmy
    tournament: {
      nazev: 'Medvěd Cup',
      cena: 3500,
      tymy: [
        { nazev: 'Mojža team', status: 'obsazeno' },
        { nazev: 'Jarček team', status: 'obsazeno' },
        // Nazev volných míst se nezobrazuje – v UI se překládá tournament.freeSpot
        { nazev: '', status: 'volno' },
        { nazev: '', status: 'volno' },
        { nazev: '', status: 'volno' },
      ],
      rozhodci: true,
      sponzori: true,
    },
  },
];

// Trenéři – tag + foto; jméno a role viz trainers.byTag.<tag>
export const TRAINERS: Trainer[] = [
  { tag: 'JP31', photo: '/media/pavelka.jpg' },
  { tag: 'OBR', photo: '/media/benda.jpg' },
  { tag: 'ÚT', photo: '/media/sadovikov.jpg' },
  { tag: 'STŘ' },
];

export const SPONSORS: Sponsor[] = [
  { name: 'Hejduksport.cz', url: 'https://www.hejduksport.cz' },
  { name: 'Koju.cz', url: 'https://www.koju.cz' },
  { name: 'CCM', url: 'https://www.ccmhockey.com' },
  { name: 'Valcuj.cz', url: 'https://www.valcuj.cz' },
];

// Aktuální kluby – názvy klubů jsou vlastní jména; detail viz about.clubDetails (dle pořadí)
export const CURRENT_CLUBS = ['HC Slavia Praha', 'Mountfield HK'];

// Vizitka – barva (mark) + zařazení (isStat); texty viz about.achievements (dle pořadí)
export const ACHIEVEMENTS: Achievement[] = [
  { mark: '#D9A441', isStat: false },
  { mark: '#B0B0B0', isStat: false },
  { mark: '#CE1126', isStat: false },
  { mark: '#B0B0B0', isStat: false },
  { mark: '#B0B0B0', isStat: false },
  { mark: '#C0C5CC', isStat: false },
  { mark: '#C97B4A', isStat: false },
  { mark: '#C0C5CC', isStat: false },
  { mark: '#CE1126', isStat: true },
  { mark: '#CE1126', isStat: true },
  { mark: '#CE1126', isStat: true },
];

// Program nabídky – num + glyph; texty viz features.offerings (dle pořadí)
export const OFFERINGS: Offering[] = [
  { num: '01', glyph: '⟁' },
  { num: '02', glyph: '▶' },
  { num: '03', glyph: '◇' },
  { num: '04', glyph: '⊹' },
];

export const GALLERY: GalleryItem[] = [
  { id: 1, isVideo: false, src: '/media/tym.jpg', aspect: '4/3', stripeClass: 'ph-stripes' },
  { id: 2, isVideo: true, src: '/media/video-1.mp4', aspect: '9/16', stripeClass: 'ph-stripes-red' },
  { id: 3, isVideo: false, src: '/media/slavia-deti.jpg', aspect: '16/10', stripeClass: 'ph-stripes' },
  { id: 4, isVideo: false, src: '/media/gameday.jpg', aspect: '4/5', stripeClass: 'ph-stripes-red' },
  { id: 5, isVideo: true, src: '/media/video-2.mp4', aspect: '9/16', stripeClass: 'ph-stripes' },
  { id: 6, isVideo: false, src: '/media/liberec-karta.jpg', aspect: '3/4', stripeClass: 'ph-stripes' },
  { id: 7, isVideo: true, src: '/media/video-3.mp4', aspect: '4/5', stripeClass: 'ph-stripes-red' },
  { id: 8, isVideo: false, src: '/media/slavia-rozcvicka.jpg', aspect: '1/1', stripeClass: 'ph-stripes' },
  { id: 9, isVideo: true, src: '/media/video-4.mp4', aspect: '9/16', stripeClass: 'ph-stripes' },
  { id: 10, isVideo: true, src: '/media/video-5.mp4', aspect: '4/5', stripeClass: 'ph-stripes-red' },
  { id: 11, isVideo: true, src: '/media/video-6.mp4', aspect: '9/16', stripeClass: 'ph-stripes' },
];

// Produkty – cena v CZK; kategorie a název viz merch.products.<id>
export const PRODUCTS: Product[] = [
  { id: 1, priceLabel: '690 Kč', available: false },
  { id: 2, priceLabel: '1 690 Kč', available: false },
  { id: 3, priceLabel: '590 Kč', available: false },
  { id: 4, priceLabel: '1 990 Kč', available: false },
  { id: 5, priceLabel: '890 Kč', available: false },
  { id: 6, priceLabel: '490 Kč', available: false },
];
