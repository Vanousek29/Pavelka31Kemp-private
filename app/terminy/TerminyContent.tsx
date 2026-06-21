'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { EVENT, TIERS } from '@/lib/constants';
import RegistrationForm from '@/components/RegistrationForm';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.2, 0.6, 0.2, 1] as const },
};

export default function TerminyContent() {
  const [modalOpen, setModalOpen] = useState(false);
  const [defaultRole, setDefaultRole] = useState('');

  const openRegistration = (role: string) => {
    setDefaultRole(role);
    setModalOpen(true);
  };

  return (
    <>
      <motion.div {...reveal} className="px-5 md:px-8 pt-[140px] pb-[120px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[11px] tracking-[0.3em] text-p31-red uppercase">Sezóna 2026 · Registrace otevřena</span>
            <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
          </div>
          <h1
            className="font-heading leading-[0.9] tracking-[0.005em] m-0 mb-5 text-white font-normal"
            style={{ fontSize: 'clamp(56px, 8vw, 120px)' }}
          >
            Kemp<br /><span className="text-p31-red">Kapka resort</span>
          </h1>
          <div className="font-mono text-[13px] text-p31-muted tracking-[0.2em] uppercase">{EVENT.dateRange} · {EVENT.place}</div>
          <p className="text-[17px] leading-[1.6] text-p31-muted max-w-[620px] mt-5 mb-0">
            Dva dny intenzivního tréninku na ledě i na suchu. Vyber si kategorii a rezervuj si místo.
          </p>

          {/* Program - dny */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 mb-20">
            {EVENT.days.map((day) => (
              <div key={day.id} className="bg-p31-bg-secondary border border-p31-border p-10">
                <div className="flex items-baseline justify-between gap-3 mb-1.5">
                  <span className="font-heading text-[64px] text-white leading-none tracking-[0.005em]">{day.date}</span>
                  <span className="font-heading text-[20px] text-p31-red tracking-[0.08em] uppercase">{day.weekday}</span>
                </div>
                <div className="font-mono text-[11px] text-p31-muted tracking-[0.15em] uppercase mb-6">{day.sraz}</div>
                <div className="flex flex-col gap-px bg-p31-border border border-p31-border mb-5">
                  {day.blocks.map((b) => (
                    <div key={b.time} className="bg-p31-bg-secondary px-[22px] py-[18px] flex items-center justify-between gap-4">
                      <span className="font-mono text-sm text-p31-red tracking-[0.1em]">{b.time}</span>
                      <span className="text-[15px] text-white">{b.label}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm leading-[1.6] text-p31-muted m-0">{day.note}</p>
              </div>
            ))}
          </div>

          {/* Cenik / kategorie */}
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-[11px] tracking-[0.3em] text-p31-red uppercase">Ceník · Přihlášení</span>
            <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TIERS.map((t) => (
              <div key={t.key} className="bg-p31-bg-secondary border border-p31-border p-9 flex flex-col transition-all hover:border-[rgba(206,17,38,0.4)] hover:-translate-y-1">
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-p31-muted mb-[18px]">{t.role}</div>
                <div className="font-heading text-[64px] text-white leading-none tracking-[0.02em]">{t.price}</div>
                <p className="text-sm leading-[1.6] text-p31-muted mt-[18px] mb-7 flex-1">{t.desc}</p>
                <button
                  onClick={() => openRegistration(t.key)}
                  className="bg-p31-red text-white border-none px-[22px] py-4 font-body text-[12px] font-semibold tracking-[0.18em] uppercase cursor-pointer transition-all hover:bg-p31-red-hover hover:shadow-[0_0_24px_rgba(206,17,38,0.4)]"
                >
                  Přihlásit se &rarr;
                </button>
              </div>
            ))}
          </div>

          {/* V cene */}
          <div className="mt-16 px-8 md:px-11 py-10 bg-p31-bg-secondary border border-p31-border">
            <div className="font-mono text-[11px] text-p31-red tracking-[0.3em] uppercase">V ceně kempu</div>
            <div className="flex flex-wrap gap-3 mt-[22px]">
              {EVENT.included.map((inc) => (
                <span key={inc} className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)]">
                  <span className="w-1.5 h-1.5 bg-p31-red rounded-full" />
                  <span className="text-sm text-white">{inc}</span>
                </span>
              ))}
            </div>
          </div>
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
