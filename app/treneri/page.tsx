import type { Metadata } from 'next';
import TrainersSection from '@/components/sections/TrainersSection';

export const metadata: Metadata = {
  title: 'Trenéři & partneři | Pavelka 31 Kemp',
  description: 'Trenérský tým brankářského kempu Pavelka 31 a partneři kempu.',
};

export default function TreneriPage() {
  return (
    <div className="px-5 md:px-8 pt-[140px] pb-[120px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-[11px] tracking-[0.3em] text-p31-red uppercase">Tým · Kapka resort</span>
          <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
        </div>
        <h1
          className="font-heading leading-[0.9] tracking-[0.005em] m-0 mb-6 text-white font-normal"
          style={{ fontSize: 'clamp(56px, 8vw, 120px)' }}
        >
          Trenéři<br /><span className="text-p31-red">&amp; partneři</span>
        </h1>
        <p className="text-[17px] leading-[1.6] text-p31-muted max-w-[600px] m-0 mb-16">
          Každá kategorie má svého specialistu. Brankáři, obránci i útočníci trénují odděleně.
        </p>

        <TrainersSection />
      </div>
    </div>
  );
}
