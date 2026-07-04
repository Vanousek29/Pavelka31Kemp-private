'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Trophy, Check, Medal, MapPin, Calendar, Users } from 'lucide-react';
import { formatDate, formatPrice } from '@/lib/utils';
import type { Camp } from '@/lib/types';
import TournamentRegistrationForm from './TournamentRegistrationForm';
import TournamentTable from './TournamentTable';

interface TournamentCardProps {
  camp: Camp;
}

export default function TournamentCard({ camp }: TournamentCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const tr = useTranslations('tournament');
  const locale = useLocale();
  const t = camp.tournament;
  if (!t) return null;

  const freeSpots = t.tymy.filter((tym) => tym.status === 'volno').length;
  const included = tr.raw('included') as string[];
  const prizes = tr.raw('prizes') as string[];

  return (
    <>
      <div className="bg-p31-bg-secondary border border-p31-border border-l-2 border-l-p31-red">
        {/* Header */}
        <div className="px-8 md:px-11 py-10 border-b border-p31-border">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[rgba(206,17,38,0.12)] border border-[rgba(206,17,38,0.3)]">
              <Trophy size={13} className="text-p31-red" />
              <span className="font-mono text-[10px] text-p31-red tracking-[0.25em] uppercase">{tr('badge')}</span>
            </span>
            {freeSpots > 0 && (
              <span className="font-mono text-[10px] text-[#D9A441] tracking-[0.2em] uppercase">
                {tr('lastSpots', { count: freeSpots })}
              </span>
            )}
          </div>
          <h3
            className="font-heading text-white leading-[0.92] tracking-[0.01em] m-0 uppercase"
            style={{ fontSize: 'clamp(44px, 6vw, 88px)' }}
          >
            {t.nazev}
          </h3>
          <div className="flex flex-wrap gap-x-8 gap-y-2 mt-6">
            <span className="inline-flex items-center gap-2.5 font-mono text-[12px] text-p31-muted tracking-[0.12em] uppercase">
              <Calendar size={14} className="text-p31-red" />
              {formatDate(camp.dateFrom, locale)}
            </span>
            <span className="inline-flex items-center gap-2.5 font-mono text-[12px] text-p31-muted tracking-[0.12em] uppercase">
              <MapPin size={14} className="text-p31-red" />
              {camp.location}
            </span>
            <span className="inline-flex items-center gap-2.5 font-mono text-[12px] text-p31-muted tracking-[0.12em] uppercase">
              <Users size={14} className="text-p31-red" />
              {tr('team')}
            </span>
          </div>
          <p className="text-[15px] leading-[1.6] text-p31-muted mt-6 mb-0 max-w-[640px]">
            <span className="text-white font-semibold">{tr('format')}</span>
          </p>
        </div>

        {/* Grid týmů */}
        <div className="px-8 md:px-11 py-10 border-b border-p31-border">
          <div className="font-mono text-[11px] text-p31-red tracking-[0.3em] uppercase mb-6">{tr('teamsLabel')}</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {t.tymy.map((tym, i) =>
              tym.status === 'obsazeno' ? (
                <div
                  key={i}
                  className="px-5 py-5 bg-[rgba(255,255,255,0.02)] border border-p31-border flex items-center justify-between gap-3"
                >
                  <span className="text-[15px] text-p31-muted line-through">{tym.nazev}</span>
                  <span className="font-mono text-[9px] text-[#B0B0B0] tracking-[0.2em] uppercase px-2 py-1 border border-p31-border">
                    {tr('occupied')}
                  </span>
                </div>
              ) : (
                <div
                  key={i}
                  className="px-5 py-5 bg-[rgba(206,17,38,0.06)] border-2 border-dashed border-p31-red flex items-center justify-center"
                >
                  <span className="font-mono text-[12px] text-p31-red tracking-[0.2em] uppercase font-semibold">
                    {tr('freeSpot')}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Křížová tabulka základní skupiny */}
        <TournamentTable teams={t.tymy} />

        {/* Dvě kolony: v ceně + ceny/medaile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-p31-border border-b border-p31-border">
          {/* Zahrnuto */}
          <div className="bg-p31-bg-secondary px-8 md:px-11 py-10">
            <div className="font-mono text-[11px] text-p31-red tracking-[0.3em] uppercase mb-6">{tr('includedLabel')}</div>
            <ul className="flex flex-col gap-3.5 m-0 p-0 list-none">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={18} className="text-[#4ade80] flex-shrink-0 mt-0.5" />
                  <span className="text-[15px] text-white leading-[1.45]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ceny a medaile */}
          <div className="bg-p31-bg-secondary px-8 md:px-11 py-10">
            <div className="font-mono text-[11px] text-p31-red tracking-[0.3em] uppercase mb-6">{tr('prizesLabel')}</div>
            <ul className="flex flex-col gap-3.5 m-0 p-0 list-none">
              {prizes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Medal size={18} className="text-[#D9A441] flex-shrink-0 mt-0.5" />
                  <span className="text-[15px] text-white leading-[1.45]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ubytování – poznámka */}
        <div className="px-8 md:px-11 py-8 border-b border-p31-border bg-[rgba(206,17,38,0.04)]">
          <div className="font-mono text-[10px] text-p31-red tracking-[0.3em] uppercase mb-2.5">{tr('accommodationLabel')}</div>
          <p className="text-sm leading-[1.6] text-p31-muted m-0 max-w-[680px]">{tr('accommodation')}</p>
        </div>

        {/* Přihlášení + cena + CTA */}
        <div className="px-8 md:px-11 py-8 flex flex-wrap items-center justify-between gap-6">
          <div>
            <div className="font-mono text-[10px] text-p31-muted tracking-[0.2em] uppercase mb-1.5">
              {tr('pricePerTeam')}
            </div>
            <div className="font-heading text-[48px] text-white leading-none tracking-[0.02em]">
              {formatPrice(camp.price, locale)}
            </div>
            <div className="font-mono text-[11px] text-p31-muted tracking-[0.12em] mt-2.5 max-w-[360px]">
              {tr('signupNote')}
            </div>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            disabled={freeSpots === 0}
            className="bg-p31-red text-white border-none px-8 py-4 font-body text-[12px] font-semibold tracking-[0.18em] uppercase cursor-pointer transition-all hover:bg-p31-red-hover hover:shadow-[0_0_24px_rgba(206,17,38,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {freeSpots === 0 ? tr('full') : tr('registerTeam')} &rarr;
          </button>
        </div>
      </div>

      <TournamentRegistrationForm open={modalOpen} onClose={() => setModalOpen(false)} camp={camp} />
    </>
  );
}
