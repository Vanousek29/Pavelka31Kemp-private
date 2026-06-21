# Pavelka 31 Kemp

Brankarsky kemp Jaroslava Pavelky – webova prezentace.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript** (strict)
- **Tailwind CSS v3** – custom barvy, fonty z prototypu
- **Framer Motion** – scroll reveal animace
- **qrcode.react** – QR platba (SPAYD format)
- **lucide-react** – ikony
- **next/font/google** – Bebas Neue, Inter, JetBrains Mono

## Spusteni

```bash
npm install
npm run dev
```

Aplikace bezi na [http://localhost:3000](http://localhost:3000).

## Struktura stranek

| Cesta | Obsah |
|---|---|
| `/` | Homepage (hero, o Jaroslavovi, co nabizi, terminy, CTA) |
| `/pravidla` | Pravidla kempu (6 accordion sekci) |
| `/terminy` | Terminy + registracni modal |
| `/platba/[id]` | QR platba po registraci |
| `/treneri` | Treneri & partneri |
| `/galerie` | Masonry galerie (fotky + videa s lightboxem) |
| `/kontakt` | Kontakt + formular |
| `/merch` | Coming soon + email signup |

## Build & deploy

```bash
npm run build
npm start
```

Doporuceny hosting: **Vercel** (zero-config deploy).

## TODO pro klienta

- [ ] Doplnit realne platebni udaje (IBAN, BIC) v `lib/constants.ts`
- [ ] Doplnit Jardovo telefonni cislo
- [ ] Doplnit ICO a sidlo spolku
- [ ] Doplnit ostry e-mail az pobezi domena
- [ ] Vlozit Google Maps embed na kontaktni stranku
- [ ] Napojit registracni formular na backend (Formspree / Supabase / API route)
- [ ] Napojit kontaktni formular na backend
- [ ] Nahradit OG image placeholder realnym obrazkem (1200x630)
- [ ] Pridat fotky treneru (aktualne jen Jaroslav ma fotku)
- [ ] Doplnit texty pravidel (aktualni jsou navrhy, dat na kontrolu pravnicce)
- [ ] Merch – az bude pripraveny, prepnout karty na dostupne
- [ ] Newsletter/merch signup – napojit na Mailchimp/newsletter sluzbu
