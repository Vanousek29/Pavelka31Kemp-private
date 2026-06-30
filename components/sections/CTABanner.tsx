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

export default function CTABanner() {
  const t = useTranslations('cta');
  return (
    <motion.section {...reveal} className="px-5 md:px-8 pb-[140px] bg-p31-bg">
      <div className="max-w-[1240px] mx-auto bg-p31-bg-secondary border border-p31-border p-10 md:p-[80px_56px] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -right-10 top-1/2 -translate-y-1/2 font-heading text-[340px] leading-[0.8] text-p31-red opacity-[0.08] pointer-events-none tracking-[-0.04em]"
        >
          31
        </div>
        <div className="relative max-w-[600px]">
          <span className="font-mono text-[11px] tracking-[0.3em] text-p31-red uppercase">{t('label')}</span>
          <h2
            className="font-heading leading-[0.95] tracking-[0.005em] mt-4 mb-7 text-white font-normal"
            style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}
          >
            {t('headingLine1')}<br />{t('headingLine2')}<br />{t('headingLine3')}
          </h2>
          <p className="text-base leading-[1.6] text-p31-muted m-0 mb-9">
            {t('description')}
          </p>
          <Link
            href="/terminy"
            className="bg-p31-red text-white border-none px-8 py-[18px] font-body text-[13px] font-semibold tracking-[0.18em] uppercase no-underline cursor-pointer transition-all duration-300 hover:bg-p31-red-hover hover:shadow-[0_0_40px_rgba(206,17,38,0.5)] hover:-translate-y-0.5 inline-block"
          >
            {t('button')} &rarr;
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
