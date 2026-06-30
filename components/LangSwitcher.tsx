'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

const LABELS: Record<string, string> = { cs: 'CS', en: 'EN' };

export default function LangSwitcher({ className = '' }: { className?: string }) {
  const t = useTranslations('langSwitcher');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const switchTo = (next: string) => {
    if (next === locale) return;
    startTransition(() => {
      // Zachová aktuální stránku (pathname je bez prefixu) a nepřeskočí na začátek
      router.replace(pathname, { locale: next, scroll: false });
    });
  };

  return (
    <div
      className={`inline-flex items-center border border-[rgba(255,255,255,0.1)] overflow-hidden ${className}`}
      role="group"
      aria-label={t('label')}
    >
      {routing.locales.map((loc, i) => {
        const active = loc === locale;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => switchTo(loc)}
            disabled={isPending}
            aria-pressed={active}
            className={`font-mono text-[11px] tracking-[0.18em] px-2.5 py-1.5 leading-none transition-colors cursor-pointer ${
              i > 0 ? 'border-l border-[rgba(255,255,255,0.1)]' : ''
            } ${
              active
                ? 'bg-p31-red text-white'
                : 'bg-transparent text-p31-muted hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
            }`}
          >
            {LABELS[loc] ?? loc.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
