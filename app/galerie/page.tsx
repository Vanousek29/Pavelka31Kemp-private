import type { Metadata } from 'next';
import GalleryGrid from '@/components/sections/GalleryGrid';

export const metadata: Metadata = {
  title: 'Galerie | Pavelka 31 Kemp',
  description: 'Fotky a videa z brankářského kempu Pavelka 31.',
};

export default function GaleriePage() {
  return (
    <div className="px-5 md:px-8 pt-[140px] pb-[120px]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-[11px] tracking-[0.3em] text-p31-red uppercase">Galerie · z ledu</span>
          <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
        </div>
        <h1
          className="font-heading leading-[0.9] tracking-[0.005em] m-0 mb-6 text-white font-normal"
          style={{ fontSize: 'clamp(56px, 8vw, 120px)' }}
        >
          Foto<br /><span className="text-p31-red">&amp; video</span>
        </h1>
        <p className="text-[17px] leading-[1.6] text-p31-muted max-w-[600px] m-0 mb-10">
          Záběry z předchozích ročníků. Klikni na dlaždici pro detail.
        </p>

        <GalleryGrid />
      </div>
    </div>
  );
}
