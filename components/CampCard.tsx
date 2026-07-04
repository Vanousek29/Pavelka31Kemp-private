'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Calendar, MapPin, Users, Dumbbell } from 'lucide-react';
import { formatDate, formatPrice } from '@/lib/utils';
import type { Camp } from '@/lib/types';

// Barvy teček podle typu aktivity v programu (klíče = ProgramBlock.typ)
const typColors: Record<string, string> = {
  led: '#CE1126',
  sucha: '#D9A441',
  sraz: '#B0B0B0',
  trenink: '#4ade80',
};

interface CampCardProps {
  camp: Camp;
}

export default function CampCard({ camp }: CampCardProps) {
  const t = useTranslations('camps');
  const locale = useLocale();
  const freeSpots = camp.capacity - camp.registered;

  return (
    <div className="bg-p31-bg-secondary border border-p31-border border-l-2 border-l-p31-red flex flex-col">
      {/* Header */}
      <div className="px-8 py-8 border-b border-p31-border">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[rgba(206,17,38,0.12)] border border-[rgba(206,17,38,0.3)]">
            <Dumbbell size={13} className="text-p31-red" />
            <span className="font-mono text-[10px] text-p31-red tracking-[0.25em] uppercase">
              {camp.type === 'training' ? t('badgeTraining') : t('badgeIndividual')}
            </span>
          </span>
          {camp.status === 'open' && (
            <span className="font-mono text-[10px] text-[#4ade80] tracking-[0.2em] uppercase">{t('statusOpen')}</span>
          )}
        </div>
        <h3 className="font-heading text-[36px] text-white leading-[0.95] tracking-[0.01em] m-0 uppercase">
          {t(`items.${camp.id}.name`)}
        </h3>
        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] text-p31-muted tracking-[0.12em] uppercase">
            <Calendar size={13} className="text-p31-red" />
            {formatDate(camp.dateFrom, locale)}
          </span>
          <span className="inline-flex items-center gap-2 font-mono text-[11px] text-p31-muted tracking-[0.12em] uppercase">
            <MapPin size={13} className="text-p31-red" />
            {camp.location}
          </span>
          <span className="inline-flex items-center gap-2 font-mono text-[11px] text-p31-muted tracking-[0.12em] uppercase">
            <Users size={13} className="text-p31-red" />
            {t('ageGroup')}
          </span>
        </div>
      </div>

      {/* Program */}
      {camp.program && camp.program.length > 0 && (
        <div className="px-8 py-7 border-b border-p31-border flex-1">
          <div className="font-mono text-[10px] text-p31-red tracking-[0.3em] uppercase mb-5">{t('programLabel')}</div>
          <div className="flex flex-col gap-px bg-p31-border border border-p31-border">
            {camp.program.map((block, i) => (
              <div key={i} className="bg-p31-bg-secondary px-5 py-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: typColors[block.typ] || '#B0B0B0' }}
                  />
                  <span className="font-mono text-[13px] text-p31-red tracking-[0.1em]">{block.cas}</span>
                </div>
                <span className="text-[14px] text-white">{t(`typ.${block.typ}`)}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Cena + kapacita */}
      <div className="px-8 py-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="font-mono text-[10px] text-p31-muted tracking-[0.2em] uppercase mb-1">{t('priceLabel')}</div>
          <div className="font-heading text-[36px] text-white leading-none tracking-[0.02em]">
            {formatPrice(camp.price, locale)}
          </div>
        </div>
        <div className="font-mono text-[10px] text-p31-muted tracking-[0.15em] uppercase">
          {freeSpots > 0 ? t('freeSpots', { count: freeSpots }) : t('full')}
        </div>
      </div>
    </div>
  );
}
