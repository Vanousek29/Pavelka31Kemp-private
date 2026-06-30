'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import QRPayment from '@/components/QRPayment';
import type { StoredRegistration } from '@/lib/types';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.2, 0.6, 0.2, 1] as const },
};

interface PlatbaContentProps {
  id: string;
}

export default function PlatbaContent({ id }: PlatbaContentProps) {
  const t = useTranslations('platba');
  const [registration, setRegistration] = useState<StoredRegistration | null>(null);

  useEffect(() => {
    const data = localStorage.getItem(`registration-${id}`);
    if (data) {
      try {
        setRegistration(JSON.parse(data));
      } catch {
        // noop
      }
    }
  }, [id]);

  return (
    <motion.div {...reveal} className="px-5 md:px-8 pt-[140px] pb-[120px]">
      <div className="max-w-[1100px] mx-auto">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-2 bg-[rgba(60,180,100,0.1)] border border-[rgba(60,180,100,0.3)] mb-8">
          <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#4ade80] uppercase">{t('badge', { vs: id })}</span>
        </div>

        <h1
          className="font-heading leading-[0.9] tracking-[0.005em] m-0 mb-6 text-white font-normal"
          style={{ fontSize: 'clamp(56px, 8vw, 120px)' }}
        >
          {t('titleLine1')}<br /><span className="text-p31-red">{t('titleHighlight')}</span>
        </h1>
        <p className="text-[17px] leading-[1.6] text-p31-muted max-w-[600px] m-0 mb-16">
          {t.rich('intro', { b: (chunks) => <strong className="text-white">{chunks}</strong> })}
        </p>

        <QRPayment vs={id} registration={registration} />

        <div className="mt-12">
          <Link
            href="/"
            className="text-p31-muted font-body text-[12px] font-medium tracking-[0.18em] uppercase no-underline hover:text-white transition-colors"
          >
            &larr; {t('back')}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
