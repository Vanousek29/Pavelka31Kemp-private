'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { X } from 'lucide-react';
import { Link } from '@/i18n/navigation';

const STORAGE_KEY = 'p31-medved-cup-banner-dismissed';

// Upoutávka na Medvěd Cup – zavřená zůstává skrytá po dobu session (sessionStorage)
export default function TournamentBanner() {
  const t = useTranslations('tournament.banner');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) !== '1') setVisible(true);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="relative w-full overflow-hidden border-y border-[rgba(206,17,38,0.35)] bg-gradient-to-r from-[#3d060e] via-[#5a0a15] to-[#3d060e]">
      {/* Posouvající se lesk */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.08)] to-transparent animate-p31-shine pointer-events-none"
      />

      <Link
        href="/terminy#medvedi-turnaj"
        className="flex items-center justify-center gap-2.5 sm:gap-4 px-10 sm:px-14 py-3 no-underline group"
      >
        <span className="w-1.5 h-1.5 bg-p31-red rounded-full animate-p31-pulse flex-shrink-0" />
        <span className="font-mono text-[10px] sm:text-[11px] text-white tracking-[0.15em] sm:tracking-[0.2em] uppercase text-center leading-relaxed">
          {t('title')}
          <span className="hidden sm:inline"> · {t('teams')}</span>
          <span> · {t('date')}</span>
        </span>
        <span className="font-mono text-[13px] text-white transition-transform group-hover:translate-x-1 flex-shrink-0">
          &rarr;
        </span>
      </Link>

      <button
        onClick={dismiss}
        aria-label={t('close')}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none text-[rgba(255,255,255,0.6)] cursor-pointer p-1.5 transition-colors hover:text-white"
      >
        <X size={15} />
      </button>
    </div>
  );
}
