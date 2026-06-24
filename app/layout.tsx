import type { Metadata } from 'next';
import { Bebas_Neue, Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jp31.cz'),
  title: 'Pavelka 31 Kemp | Brankářský kemp Jaroslava Pavelky',
  description: 'Hokejový brankářský kemp pro mladé brankáře. Tréninky na ledě, suchá příprava, video analýza.',
  openGraph: {
    title: 'Pavelka 31 Kemp',
    description: 'Brankářský kemp Jaroslava Pavelky',
    url: 'https://jp31.cz',
    siteName: 'Pavelka 31 Kemp',
    images: ['/og-image.png'],
    locale: 'cs_CZ',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${bebasNeue.variable} ${inter.variable} ${jetbrainsMono.variable} bg-p31-bg text-white font-body antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
