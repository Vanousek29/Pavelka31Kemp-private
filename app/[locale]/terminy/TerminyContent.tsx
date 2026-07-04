'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { EVENT, TIERS, CAMPS } from '@/lib/constants';
import RegistrationForm from '@/components/RegistrationForm';
import CampCard from '@/components/CampCard';
import TournamentCard from '@/components/TournamentCard';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.2, 0.6, 0.2, 1] as const },
};

const tagColors: Record<string, string> = {
  led: '#CE1126',
  sucha: '#D9A441',
  video: '#4ade80',
};

export default function TerminyContent() {
  const t = useTranslations('terminy');
  const te = useTranslations('event');
  const tc = useTranslations('camps');
  const tt = useTranslations('tournament');
  const [modalOpen, setModalOpen] = useState(false);
  const [defaultRole, setDefaultRole] = useState('');

  const openRegistration = (role: string) => {
    setDefaultRole(role);
    setModalOpen(true);
  };

  const guestRoles = te.raw('guestRoles') as string[];
  const included = te.raw('included') as string[];

  return (
    <>
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

          {/* Program heading */}
          <div className="flex items-center gap-4 mt-16 mb-10">
            <span className="font-mono text-[11px] tracking-[0.3em] text-p31-red uppercase">{t('programLabel')}</span>
            <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
          </div>

          {/* Program - dny */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {EVENT.days.map((day) => {
              const blockLabels = te.raw(`days.${day.id}.blocks`) as string[];
              return (
                <div key={day.id} className="bg-p31-bg-secondary border border-p31-border p-10">
                  <div className="flex items-baseline justify-between gap-3 mb-1.5">
                    <span className="font-heading text-[44px] text-white leading-none tracking-[0.02em] uppercase">{te(`days.${day.id}.label`)}</span>
                  </div>
                  <div className="font-mono text-[11px] text-p31-muted tracking-[0.15em] uppercase mb-6">{te(`days.${day.id}.sraz`)}</div>
                  <div className="flex flex-col gap-px bg-p31-border border border-p31-border mb-5">
                    {day.blocks.map((b, bi) => (
                      <div key={b.time} className="bg-p31-bg-secondary px-[22px] py-[18px] flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          {b.tag && (
                            <span
                              className="w-2 h-2 rounded-full flex-shrink-0"
                              style={{ backgroundColor: tagColors[b.tag] || '#B0B0B0' }}
                            />
                          )}
                          <span className="font-mono text-sm text-p31-red tracking-[0.1em]">{b.time}</span>
                        </div>
                        <span className="text-[15px] text-white">{blockLabels[bi]}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm leading-[1.6] text-p31-muted m-0">{te(`days.${day.id}.note`)}</p>
                </div>
              );
            })}
          </div>

          {/* Legenda */}
          <div className="flex flex-wrap gap-5 mb-20">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#CE1126' }} />
              <span className="font-mono text-[10px] text-p31-muted tracking-[0.15em] uppercase">{t('legendIce')}</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D9A441' }} />
              <span className="font-mono text-[10px] text-p31-muted tracking-[0.15em] uppercase">{t('legendDry')}</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#4ade80' }} />
              <span className="font-mono text-[10px] text-p31-muted tracking-[0.15em] uppercase">{t('legendVideo')}</span>
            </span>
          </div>

          {/* Hosté tréninku */}
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-[11px] tracking-[0.3em] text-p31-red uppercase">{t('guestsLabel')}</span>
            <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
            {EVENT.guestNames.map((name, i) => (
              <div key={name} className="bg-p31-bg-secondary border border-p31-border p-8 flex flex-col items-start">
                <div className="w-10 h-10 bg-[rgba(206,17,38,0.12)] border border-[rgba(206,17,38,0.3)] flex items-center justify-center mb-5">
                  <span className="font-heading text-[18px] text-p31-red leading-none">{name.charAt(0)}</span>
                </div>
                <div className="font-heading text-[22px] text-white tracking-[0.02em] leading-tight mb-1.5">{name}</div>
                <div className="font-mono text-[10px] text-p31-muted tracking-[0.2em] uppercase">{guestRoles[i]}</div>
              </div>
            ))}
          </div>

          {/* Cenik / kategorie */}
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-[11px] tracking-[0.3em] text-p31-red uppercase">{t('priceLabel')}</span>
            <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TIERS.map((tier) => (
              <div key={tier.key} className="bg-p31-bg-secondary border border-p31-border p-8 flex flex-col transition-all hover:border-[rgba(206,17,38,0.4)] hover:-translate-y-1">
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-p31-muted mb-[14px]">{t(`tiers.${tier.key}.role`)}</div>
                {tier.contact ? (
                  <div className="font-heading text-[28px] text-white leading-none tracking-[0.02em]">{t('priceOnRequest')}</div>
                ) : (
                  <div className="font-heading text-[48px] text-white leading-none tracking-[0.02em]">{tier.price}</div>
                )}
                <p className="text-sm leading-[1.6] text-p31-muted mt-[14px] mb-6 flex-1">{t(`tiers.${tier.key}.desc`)}</p>
                {tier.contact ? (
                  <Link
                    href="/kontakt"
                    className="bg-p31-red text-white border-none px-[22px] py-4 font-body text-[12px] font-semibold tracking-[0.18em] uppercase no-underline text-center cursor-pointer transition-all hover:bg-p31-red-hover hover:shadow-[0_0_24px_rgba(206,17,38,0.4)]"
                  >
                    {t('individualCta')} &rarr;
                  </Link>
                ) : (
                  <button
                    onClick={() => openRegistration(tier.key)}
                    className="bg-p31-red text-white border-none px-[22px] py-4 font-body text-[12px] font-semibold tracking-[0.18em] uppercase cursor-pointer transition-all hover:bg-p31-red-hover hover:shadow-[0_0_24px_rgba(206,17,38,0.4)]"
                  >
                    {t('signupButton')} &rarr;
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Individuální trénink – poznámka */}
          <div className="mt-6 px-8 md:px-11 py-8 bg-[rgba(206,17,38,0.04)] border border-p31-border border-l-2 border-l-p31-red">
            <div className="font-mono text-[10px] text-p31-red tracking-[0.3em] uppercase mb-2.5">{t('individualLabel')}</div>
            <p className="text-sm leading-[1.6] text-p31-muted m-0 max-w-[680px]">{t('individualText')}</p>
          </div>

          {/* V cene */}
          <div className="mt-16 px-8 md:px-11 py-10 bg-p31-bg-secondary border border-p31-border">
            <div className="font-mono text-[11px] text-p31-red tracking-[0.3em] uppercase">{t('includedLabel')}</div>
            <div className="flex flex-wrap gap-3 mt-[22px]">
              {included.map((inc) => (
                <span key={inc} className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)]">
                  <span className="w-1.5 h-1.5 bg-p31-red rounded-full" />
                  <span className="text-sm text-white">{inc}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Akce a individuální tréninky – každá jako samostatná karta */}
          {CAMPS.some((camp) => camp.type === 'individual' || camp.type === 'training') && (
            <>
              <div className="flex items-center gap-4 mt-24 mb-10">
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

          {/* Turnaje – samostatná sekce pod standardními termíny */}
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

      <RegistrationForm
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultRole={defaultRole}
      />
    </>
  );
}
