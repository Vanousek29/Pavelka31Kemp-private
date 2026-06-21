import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Features from '@/components/sections/Features';
import CampPreview from '@/components/sections/CampPreview';
import CTABanner from '@/components/sections/CTABanner';

export default function HomePage() {
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
