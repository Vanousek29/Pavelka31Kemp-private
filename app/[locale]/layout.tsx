import type { Metadata } from 'next';
import { Bebas_Neue, Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import '../globals.css';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LocaleTransition from '@/components/LocaleTransition';

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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    metadataBase: new URL('https://jp31.cz'),
    title: t('home.title'),
    description: t('home.description'),
    alternates: {
      canonical: locale === routing.defaultLocale ? '/' : `/${locale}`,
      languages: {
        cs: '/',
        en: '/en',
      },
    },
    openGraph: {
      title: t('home.ogTitle'),
      description: t('home.ogDescription'),
      url: locale === routing.defaultLocale ? 'https://jp31.cz' : `https://jp31.cz/${locale}`,
      siteName: 'Pavelka 31 Kemp',
      images: ['/og-image.png'],
      locale: locale === 'cs' ? 'cs_CZ' : 'en_US',
      type: 'website',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Povolí statické renderování s next-intl
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body
        className={`${bebasNeue.variable} ${inter.variable} ${jetbrainsMono.variable} bg-p31-bg text-white font-body antialiased`}
      >
        <div className="fixed top-0 inset-x-0 z-[9999] bg-p31-red text-white text-center font-body font-medium text-sm md:text-base py-3 px-4 shadow-lg">
          Web je mimo provoz – za jeho vytvoření mi stále někdo dluží peníze.
        </div>
        {/* Web je jen na ukázku – nic se nedá kliknout ani vyplnit */}
        <div className="pointer-events-none select-none">
          <NextIntlClientProvider>
            <Navbar />
            <LocaleTransition>
              <main>{children}</main>
            </LocaleTransition>
            <Footer />
          </NextIntlClientProvider>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
