import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Features from '@/components/sections/Features';
import CampPreview from '@/components/sections/CampPreview';
import CTABanner from '@/components/sections/CTABanner';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <About />
      <Features />
      <CampPreview />
      <CTABanner />
    </>
  );
}
