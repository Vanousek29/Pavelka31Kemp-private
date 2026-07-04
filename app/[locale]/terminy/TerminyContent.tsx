'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { CAMPS } from '@/lib/constants';
import CampCard from '@/components/CampCard';
import TournamentCard from '@/components/TournamentCard';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.2, 0.6, 0.2, 1] as const },
};

export default function TerminyContent() {
  const t = useTranslations('terminy');
  const te = useTranslations('event');
  const tc = useTranslations('camps');
  const tt = useTranslations('tournament');

  return (
    <motion.div {...reveal} className="px-5 md:px-8 pt-[140px] pb-[120px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-[11px] tracking-[0.3em] text-p31-red uppercase">{t('sectionLabel')}</span>
          <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
        </div>
        <h1
          className="font-heading leading-[0.9] tracking-[0.005em] m-0 mb-5 text-white font-normal"
          style={{ fontSize: 'clamp(56px, 8vw, 120px)' }}
        >
          {t('titleLine1')}<br /><span className="text-p31-red">{t('titleHighlight')}</span>
        </h1>
        <div className="font-mono text-[13px] text-p31-muted tracking-[0.2em] uppercase">{te('place')}</div>
        <p className="text-[17px] leading-[1.6] text-p31-muted max-w-[620px] mt-5 mb-0">
          {t('intro')}
        </p>

        {/* Akce a individuální tréninky – každá jako samostatná karta */}
        {CAMPS.some((camp) => camp.type === 'individual' || camp.type === 'training') && (
          <>
            <div className="flex items-center gap-4 mt-16 mb-10">
              <span className="font-mono text-[11px] tracking-[0.3em] text-p31-red uppercase">{tc('sectionLabel')}</span>
              <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CAMPS.filter((camp) => camp.type === 'individual' || camp.type === 'training').map((camp) => (
                <CampCard key={camp.id} camp={camp} />
              ))}
            </div>
          </>
        )}

        {/* Turnaje – samostatná sekce, poslední na stránce */}
        {CAMPS.some((camp) => camp.type === 'tournament') && (
          <>
            <div className="flex items-center gap-4 mt-24 mb-10">
              <span className="font-mono text-[11px] tracking-[0.3em] text-p31-red uppercase">{tt('sectionLabel')}</span>
              <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
            </div>
            <div className="flex flex-col gap-6">
              {CAMPS.filter((camp) => camp.type === 'tournament').map((camp) => (
                <div key={camp.id} id={camp.id} className="scroll-mt-28">
                  <TournamentCard camp={camp} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}
