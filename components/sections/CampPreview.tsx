'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.2, 0.6, 0.2, 1] as const },
};

export default function CampPreview() {
  const t = useTranslations('campPreview');
  return (
    <motion.section {...reveal} className="px-5 md:px-8 py-[140px] bg-p31-bg">
      <div className="max-w-[1240px] mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-14 gap-8 flex-wrap">
          <div className="flex-1 min-w-[280px]">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[11px] tracking-[0.3em] text-p31-red uppercase">{t('sectionLabel')}</span>
              <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)] max-w-[200px]" />
            </div>
            <h2
              className="font-heading leading-[0.92] tracking-[0.005em] m-0 text-white font-normal"
              style={{ fontSize: 'clamp(48px, 6vw, 96px)' }}
            >
              {t('headingPre')} <span className="text-p31-red">{t('headingHighlight')}</span>
            </h2>
          </div>
          <Link
            href="/terminy"
            className="bg-transparent border border-[rgba(255,255,255,0.2)] px-6 py-3.5 font-body text-[12px] font-semibold tracking-[0.18em] uppercase text-white no-underline cursor-pointer transition-all hover:border-p31-red hover:text-p31-red"
          >
            {t('detailButton')} &rarr;
          </Link>
        </div>

        {/* Camp card */}
        <div className="bg-p31-bg-secondary border border-p31-border relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute -right-[30px] top-1/2 -translate-y-1/2 font-heading text-[300px] leading-[0.8] text-p31-red opacity-[0.06] pointer-events-none tracking-[-0.04em]"
          >
            31
          </div>
          <div className="relative grid grid-cols-1 lg:grid-cols-[360px_1fr]">
            {/* Datum */}
            <div className="p-8 lg:p-[52px_44px] border-b lg:border-b-0 lg:border-r border-p31-border bg-[rgba(206,17,38,0.04)]">
              <div className="inline-flex items-center gap-2.5 mb-[30px]">
                <span className="w-1.5 h-1.5 bg-p31-red rounded-full animate-p31-pulse" />
                <span className="font-mono text-[10px] tracking-[0.3em] text-p31-red uppercase">{t('badge')}</span>
              </div>
              <div className="flex items-baseline gap-3 whitespace-nowrap">
                <span className="font-heading text-[60px] leading-[0.85] text-white tracking-[0.005em]">{t('dateBig')}</span>
                <span className="font-heading text-[60px] leading-[0.85] text-p31-red tracking-[0.005em]">{t('dateMonth')}</span>
              </div>
              <div className="font-mono text-[11px] tracking-[0.25em] text-p31-muted uppercase mt-[22px]">{t('dateSub')}</div>
              <div className="font-mono text-[11px] tracking-[0.2em] text-p31-red uppercase mt-2.5">{t('secondDate')}</div>
            </div>

            {/* Info + CTA */}
            <div className="p-8 lg:p-[52px_44px] flex flex-col justify-center">
              <h3
                className="font-heading leading-[0.95] tracking-[0.005em] m-0 mb-[18px] text-white font-normal"
                style={{ fontSize: 'clamp(38px, 4vw, 58px)' }}
              >
                {t('placePre')} <span className="text-p31-red">{t('placeHighlight')}</span>
              </h3>
              <p className="text-base leading-[1.6] text-p31-muted m-0 mb-[34px] max-w-[460px]">
                {t('description')}
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link
                  href="/terminy"
                  className="bg-p31-red text-white border-none px-7 py-4 font-body text-[12px] font-semibold tracking-[0.18em] uppercase no-underline cursor-pointer transition-all duration-300 hover:bg-p31-red-hover hover:shadow-[0_0_32px_rgba(206,17,38,0.45)] hover:-translate-y-0.5"
                >
                  {t('ctaRegister')} &rarr;
                </Link>
                <Link
                  href="/terminy"
                  className="bg-transparent text-white border border-[rgba(255,255,255,0.2)] px-7 py-4 font-body text-[12px] font-semibold tracking-[0.18em] uppercase no-underline cursor-pointer transition-all hover:border-white hover:bg-[rgba(255,255,255,0.04)]"
                >
                  {t('ctaProgram')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
