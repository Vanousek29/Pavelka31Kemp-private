'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Accordion from '@/components/ui/Accordion';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.2, 0.6, 0.2, 1] as const },
};

type RuleItem = { num: string; title: string; body: string };

export default function PravidlaContent() {
  const t = useTranslations('pravidla');
  const rules = t.raw('rules') as RuleItem[];

  return (
    <motion.div {...reveal} className="px-5 md:px-8 pt-[140px] pb-[120px]">
      <div className="max-w-[920px] mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-[11px] tracking-[0.3em] text-p31-red uppercase">{t('sectionLabel')}</span>
          <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
        </div>
        <h1
          className="font-heading leading-[0.9] tracking-[0.005em] m-0 mb-6 text-white font-normal"
          style={{ fontSize: 'clamp(56px, 8vw, 120px)' }}
        >
          {t('titleLine1')}<br /><span className="text-p31-red">{t('titleHighlight')}</span>
        </h1>
        <p className="text-[17px] leading-[1.6] text-p31-muted max-w-[600px] m-0 mb-16">
          {t('intro')}
        </p>

        <Accordion items={rules} />
      </div>
    </motion.div>
  );
}
