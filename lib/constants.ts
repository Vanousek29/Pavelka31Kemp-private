import type { Tier, Trainer, Sponsor, Achievement, Offering, DaySchedule, Rule, GalleryItem, ContactInfo, Product } from './types';

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

export const NAV_ITEMS = [
  { label: 'Domů', href: '/' },
  { label: 'Termíny', href: '/terminy' },
  { label: 'Pravidla', href: '/pravidla' },
  { label: 'Galerie', href: '/galerie' },
  { label: 'Trenéři', href: '/treneri' },
  { label: 'Kontakt', href: '/kontakt' },
] as const;

export const EVENT = {
  title: 'Kemp Kapka resort',
  place: 'Kapka resort, Vsetín',
  dateRange: '26.–27. června 2026',
  days: [
    {
      id: 'd1',
      date: '26. 6.',
      weekday: 'Pátek',
      sraz: 'Sraz 14:30',
      blocks: [
        { time: '15:15–16:15', label: 'Trénink na ledě' },
        { time: '16:45–17:15', label: 'Suchá příprava' },
      ],
      note: 'Možnost společné večeře (hradí každý sám). Ovoce a voda k dispozici.',
    },
    {
      id: 'd2',
      date: '27. 6.',
      weekday: 'Sobota',
      sraz: 'Sraz nejpozději 9:00',
      blocks: [
        { time: '10:00–11:00', label: 'Trénink na ledě' },
        { time: '+ 30 min', label: 'Suchá příprava + led' },
      ],
      note: 'Po tréninku výklus, video a káva / voda zdarma. Každý dostane malý dárek.',
    },
  ] as DaySchedule[],
  included: ['Ovoce a voda k dispozici', 'Video analýza po tréninku', 'Výklus po zátěži', 'Káva / voda zdarma', 'Malý dárek pro každého'],
};

export const TIERS: Tier[] = [
  { key: 'brankar', role: 'Brankář', price: '699 Kč', priceCzk: 699, desc: 'Kompletní program – led, suchá příprava i video analýza.' },
  { key: 'hrac', role: 'Hráč / dovednosti', price: '599 Kč', priceCzk: 599, desc: 'Dovednostní trénink a střelba s trenéry.' },
  { key: 'strelec', role: 'Střelec', price: '200 Kč', priceCzk: 200, desc: 'Jen střelba na brankáře (na ledě).' },
];

export const TRAINERS: Trainer[] = [
  { name: 'Jaroslav Pavelka', role: 'Brankáři', tag: 'JP31', photo: '/media/pavelka.jpg' },
  { name: 'Vítek Benda', role: 'Obránci · tábor', tag: 'OBR', photo: '/media/benda.jpg' },
  { name: 'Stanislav Sadovikov', role: 'Útočníci · skills', tag: 'ÚT', photo: '/media/sadovikov.jpg' },
  { name: 'Střelci', role: 'Dorost · juniorka Morava', tag: 'STŘ' },
];

export const SPONSORS: Sponsor[] = [
  { name: 'Hejduksport.cz', url: 'https://www.hejduksport.cz' },
  { name: 'Koju.cz', url: 'https://www.koju.cz' },
  { name: 'CCM', url: 'https://www.ccmhockey.com' },
  { name: 'Valcuj.cz', url: 'https://www.valcuj.cz' },
];

export const CURRENT_CLUBS = [
  { club: 'HC Slavia Praha', detail: 'Smlouva do roku 2028' },
  { club: 'Mountfield HK', detail: 'Stále aktivní hráč' },
];

export const ACHIEVEMENTS: Achievement[] = [
  { mark: '#D9A441', kind: 'Ocenění', title: 'Hardest Working Player', detail: 'Dickies · OHL Player of the Year' },
  { mark: '#B0B0B0', kind: 'Zámoří · OHL', title: 'Niagara IceDogs · Windsor Spitfires', detail: 'Kanadská juniorka (OHL)' },
  { mark: '#CE1126', kind: 'Reprezentace', title: 'ČR U16 · U17 · U18', detail: 'Mládežnické reprezentace' },
  { mark: '#B0B0B0', kind: 'Mezinárodní', title: 'Liga mistrů (CHL)', detail: 'Mountfield HK · HC Škoda Plzeň' },
  { mark: '#B0B0B0', kind: 'Mezinárodní', title: 'Spengler Cup', detail: 'Mountfield HK' },
  { mark: '#C0C5CC', kind: 'Stříbro ELH', title: '2020 / 21', detail: 'Bílí Tygři Liberec' },
  { mark: '#C97B4A', kind: 'Bronz ELH', title: '2016 / 17', detail: 'Mountfield HK' },
  { mark: '#C0C5CC', kind: 'Stříbro', title: 'Maxa liga', detail: 'Stříbrná medaile' },
  { mark: '#CE1126', kind: 'Statistika', title: '90+ startů', detail: 'Tipsport Extraliga' },
  { mark: '#CE1126', kind: 'Statistika', title: '200+ startů', detail: 'Maxa liga / Chance liga' },
  { mark: '#CE1126', kind: 'Kariéra', title: '15+ let', detail: 'Profesionální kariéra' },
];

export const OFFERINGS: Offering[] = [
  { num: '01', glyph: '⟁', title: 'Led & suchá příprava', desc: 'Dva dny tréninku – ledové i mimoledové bloky pro maximální posun.' },
  { num: '02', glyph: '▶', title: 'Video analýza', desc: 'Po tréninku společný rozbor a zpětná vazba. Vidíš, co jsi neviděl.' },
  { num: '03', glyph: '◇', title: 'Top trenérský tým', desc: 'Brankáři, obránci i útočníci trénují odděleně se specialisty.' },
  { num: '04', glyph: '⊹', title: 'Zázemí & dárek', desc: 'Ovoce a voda k dispozici, výklus, káva a malý dárek pro každého.' },
];

export const RULES: Rule[] = [
  { num: '01', title: 'Obecná pravidla kempu', body: 'Účast od 8 let, rodič / zákonný zástupce podepisuje účastnickou smlouvu. Tréninky probíhají dle denního harmonogramu, který obdržíš e‑mailem 14 dní před kempem. Příchod 30 min před prvním tréninkem, odchod po video analýze. Po celou dobu kempu zajištěn pedagogický dozor. Účastník respektuje pokyny trenérského týmu a chová se ohleduplně k ostatním.' },
  { num: '02', title: 'Povinná výbava', body: 'Kompletní brankářská výstroj v dobrém technickém stavu (helma s funkčním krytím povinně!), 2× hokejka, 2× košile, ručník, lahev na pití (min. 1 L), svačina na každý den, hygienické potřeby. Doporučujeme vlastní masku. Sušárna v aréně k dispozici, ale druhá sada výstroje pomůže. Stuha na hokejku, izolepa, drobné opravy zajistíme.' },
  { num: '03', title: 'Storno podmínky', body: 'Storno více než 30 dní před začátkem kempu: vratka 100 % bez storno poplatku. 30–14 dní: vratka 50 % uhrazené částky. Méně než 14 dní: bez vratky, lze najít vlastního náhradníka (stejná věková kategorie). Při zdravotních důvodech s doložením lékařské zprávy vrátíme 80 % bez ohledu na termín storna.' },
  { num: '04', title: 'Zdravotní způsobilost', body: 'Rodič / zákonný zástupce při příjezdu odevzdá podepsané prohlášení o zdravotní způsobilosti dítěte (formulář pošleme e‑mailem). Uveď všechny alergie, chronická onemocnění a užívané léky. Při akutním onemocnění (teplota, infekce) účast není možná. Na kempu je k dispozici zdravotník, vážnější zranění řešíme s rodičem a místní záchrannou službou.' },
  { num: '05', title: 'GDPR a souhlas s focením', body: 'Registrací uděluješ souhlas se zpracováním osobních údajů pro účely organizace kempu, evidence účastníků, plateb a komunikace. Souhlasíš s pořízením fotografií a videozáznamů během tréninků a jejich použitím v propagačních materiálech kempu (web, Instagram, Facebook). Nesouhlas s focením lze uvést v poznámce při registraci. Souhlas lze kdykoliv odvolat e‑mailem na info@pavelka31kemp.cz.' },
  { num: '06', title: 'Pojištění', body: 'Kemp má sjednanou pojistku odpovědnosti za škodu vůči třetím osobám. Účastník je povinen mít vlastní zdravotní pojištění (kartička pojišťovny) a doporučujeme úrazové pojištění. Škody na svěřené výstroji aréně řeší rodič / zákonný zástupce. Ztráty osobních věcí v šatně kemp nehradí.' },
];

export const GALLERY: GalleryItem[] = [
  { id: 1, tag: 'Kemp', label: 'Společný kemp', isVideo: false, src: '/media/tym.jpg', aspect: '4/3', stripeClass: 'ph-stripes' },
  { id: 2, tag: 'Trénink', label: 'Na ledě', isVideo: true, src: '/media/video-1.mp4', aspect: '9/16', stripeClass: 'ph-stripes-red' },
  { id: 3, tag: 'Slavia', label: 'S klukama', isVideo: false, src: '/media/slavia-deti.jpg', aspect: '16/10', stripeClass: 'ph-stripes' },
  { id: 4, tag: 'Berani', label: 'Gameday', isVideo: false, src: '/media/gameday.jpg', aspect: '4/5', stripeClass: 'ph-stripes-red' },
  { id: 5, tag: 'Zákroky', label: 'Reflexy', isVideo: true, src: '/media/video-2.mp4', aspect: '9/16', stripeClass: 'ph-stripes' },
  { id: 6, tag: 'Liberec', label: 'Tygří karta', isVideo: false, src: '/media/liberec-karta.jpg', aspect: '3/4', stripeClass: 'ph-stripes' },
  { id: 7, tag: 'Sestřih', label: 'Z tréninku', isVideo: true, src: '/media/video-3.mp4', aspect: '4/5', stripeClass: 'ph-stripes-red' },
  { id: 8, tag: 'Slavia', label: 'Rozcvička', isVideo: false, src: '/media/slavia-rozcvicka.jpg', aspect: '1/1', stripeClass: 'ph-stripes' },
  { id: 9, tag: 'Highlight', label: 'Zákrok', isVideo: true, src: '/media/video-4.mp4', aspect: '9/16', stripeClass: 'ph-stripes' },
  { id: 10, tag: 'Video', label: 'Na ledě II', isVideo: true, src: '/media/video-5.mp4', aspect: '4/5', stripeClass: 'ph-stripes-red' },
  { id: 11, tag: 'Video', label: 'Trénink', isVideo: true, src: '/media/video-6.mp4', aspect: '9/16', stripeClass: 'ph-stripes' },
];

export const PRODUCTS: Product[] = [
  { id: 1, category: 'Apparel', name: 'Tričko P31 Black', priceLabel: '690 Kč', available: false },
  { id: 2, category: 'Apparel', name: 'Mikina Goalie Crew', priceLabel: '1 690 Kč', available: false },
  { id: 3, category: 'Accessories', name: 'Kšiltovka 31', priceLabel: '590 Kč', available: false },
  { id: 4, category: 'Apparel', name: 'Hřejivá vesta', priceLabel: '1 990 Kč', available: false },
  { id: 5, category: 'Gear', name: 'Taška P31', priceLabel: '890 Kč', available: false },
  { id: 6, category: 'Accessories', name: 'Šála Klub 31', priceLabel: '490 Kč', available: false },
];

export const CAMPS = [
  {
    id: 'vsetin-cerven-2026',
    name: 'Kapka resort Vsetín',
    dateFrom: '2026-06-26',
    dateTo: '2026-06-27',
    location: 'Kapka resort, Vsetín',
    city: 'Vsetín',
    ageGroup: 'Všechny kategorie',
    price: 699,
    capacity: 30,
    registered: 12,
    status: 'open' as const,
  },
  {
    id: 'praha-srpen-2026',
    name: 'Letní kemp Praha',
    dateFrom: '2026-08-10',
    dateTo: '2026-08-12',
    location: 'Zimní stadion Eden, Praha',
    city: 'Praha',
    ageGroup: 'U12–U15',
    price: 2500,
    capacity: 25,
    registered: 22,
    status: 'few_spots' as const,
  },
  {
    id: 'liberec-zari-2026',
    name: 'Podzimní kemp Liberec',
    dateFrom: '2026-09-05',
    dateTo: '2026-09-07',
    location: 'Home Credit Arena, Liberec',
    city: 'Liberec',
    ageGroup: 'U10–U14',
    price: 2800,
    capacity: 20,
    registered: 20,
    status: 'full' as const,
  },
  {
    id: 'vsetin-rijen-2026',
    name: 'Podzimní Vsetín',
    dateFrom: '2026-10-15',
    dateTo: '2026-10-16',
    location: 'Kapka resort, Vsetín',
    city: 'Vsetín',
    ageGroup: 'U8–U12',
    price: 1500,
    capacity: 30,
    registered: 5,
    status: 'open' as const,
  },
];
