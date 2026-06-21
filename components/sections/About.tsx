'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CURRENT_CLUBS, ACHIEVEMENTS } from '@/lib/constants';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.2, 0.6, 0.2, 1] as const },
};

export default function About() {
  const isStat = (a: { kind: string }) => a.kind === 'Statistika' || a.kind === 'Kariéra';
  const vizitkaStats = ACHIEVEMENTS.filter(isStat);
  const vizitkaTiles = ACHIEVEMENTS.filter((a) => !isStat(a));
  const vizitkaChips = ['Reprezentace ČR', 'Tipsport ELH', 'OHL · Kanada'];

  return (
    <motion.section
      {...reveal}
      id="about-section"
      className="px-5 md:px-8 py-[140px] bg-p31-bg relative"
    >
      <div className="max-w-[1240px] mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-[11px] tracking-[0.3em] text-p31-red uppercase">01 / Trenér</span>
          <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
        </div>

        {/* Grid: photo + text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* Photo */}
          <div className="relative aspect-[4/5] overflow-hidden bg-p31-bg-tertiary">
            <Image
              src="/media/liberec-karta.jpg"
              alt="Jaroslav Pavelka"
              fill
              className="object-cover object-top"
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <div className="absolute -bottom-2 -right-2 w-full h-full border border-p31-red pointer-events-none -z-[1]" />
          </div>

          {/* Text */}
          <div>
            <h2
              className="font-heading leading-[0.92] tracking-[0.005em] m-0 mb-8 text-white font-normal"
              style={{ fontSize: 'clamp(48px, 5vw, 84px)' }}
            >
              Brankářem<br />se nerodíš.<br /><span className="text-p31-red">Stáváš se jím.</span>
            </h2>
            <div className="text-base leading-[1.75] text-p31-muted max-w-[480px]">
              <p className="mb-[18px]">
                Jaroslav Pavelka je profesionální brankář s více než <strong className="text-white">15 lety</strong> na ledě. Prošel kanadskou juniorkou OHL (Niagara IceDogs, Windsor Spitfires), reprezentoval ČR v kategoriích U16 až U18 a v extralize si připsal přes 90 startů.
              </p>
              <p>
                Na kempu předává to, co sám roky piluje na nejvyšší úrovni -- od techniky po čtení hry.
              </p>
            </div>

            {/* Aktualne */}
            <div className="mt-11">
              <div className="font-mono text-[10px] text-p31-red tracking-[0.3em] uppercase mb-[18px]">Aktuálně</div>
              <div className="flex flex-col gap-2.5">
                {CURRENT_CLUBS.map((c) => (
                  <div key={c.club} className="flex items-baseline justify-between gap-4 px-5 py-4 bg-[rgba(255,255,255,0.02)] border border-p31-border border-l-2 border-l-p31-red">
                    <span className="font-heading text-[22px] tracking-[0.03em] text-white">{c.club}</span>
                    <span className="font-mono text-[10px] text-p31-muted tracking-[0.15em] uppercase text-right">{c.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="mt-14 py-7 px-8 border-l-2 border-l-p31-red bg-[rgba(206,17,38,0.04)]">
              <div className="font-heading text-[64px] leading-[0.5] text-p31-red opacity-60">&ldquo;</div>
              <p className="mt-[-10px] font-body text-lg leading-[1.55] text-white italic font-light">
                Když jsem začínal, neměl jsem trenéra, který by se brankářům věnoval naplno. <span className="text-p31-red">Pavelka 31 Kemp je odpověď.</span>
              </p>
              <div className="mt-4 font-mono text-[10px] text-p31-muted tracking-[0.3em] uppercase">&mdash; Jaroslav Pavelka</div>
            </div>
          </div>
        </div>

        {/* Karierni vizitka */}
        <div className="mt-24">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-[11px] tracking-[0.3em] text-p31-red uppercase">Kariérní vizitka</span>
            <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
          </div>

          <div className="border border-[rgba(255,255,255,0.08)] bg-[#0d0d0d]">
            {/* Header */}
            <div className="flex items-center justify-between gap-6 px-6 md:px-9 py-[30px] border-b border-[rgba(255,255,255,0.08)] flex-wrap">
              <div className="flex items-center gap-[18px]">
                <div className="w-[54px] h-[54px] border-[1.5px] border-p31-red flex items-center justify-center relative bg-p31-bg flex-shrink-0">
                  <span className="font-heading text-[28px] text-white leading-none">31</span>
                  <div className="absolute -top-[3px] -right-[3px] w-[7px] h-[7px] bg-p31-red" />
                </div>
                <div>
                  <div className="font-heading text-[30px] tracking-[0.04em] text-white leading-none">Jaroslav Pavelka</div>
                  <div className="font-mono text-[10px] tracking-[0.3em] text-p31-muted uppercase mt-2">Brankář · Goalie</div>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                {vizitkaChips.map((chip) => (
                  <span key={chip} className="font-mono text-[9px] tracking-[0.2em] text-white uppercase px-3 py-[7px] border border-[rgba(255,255,255,0.14)]">{chip}</span>
                ))}
              </div>
            </div>

            {/* Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-p31-border">
              {vizitkaTiles.map((a) => (
                <div key={a.title} className="bg-p31-bg px-[26px] py-7 flex flex-col gap-3.5 transition-colors hover:bg-p31-bg-secondary">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: a.mark }} />
                    <span className="font-mono text-[10px] tracking-[0.2em] text-p31-muted uppercase">{a.kind}</span>
                  </div>
                  <div>
                    <div className="font-heading text-[26px] tracking-[0.02em] text-white leading-[1.05]">{a.title}</div>
                    <div className="text-[13px] text-p31-muted mt-1.5 leading-[1.4]">{a.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats footer */}
            <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-[rgba(255,255,255,0.08)]">
              {vizitkaStats.map((s) => (
                <div key={s.title} className="px-[30px] py-[30px] border-r border-p31-border">
                  <div className="font-heading text-[40px] text-p31-red leading-[0.95]">{s.title}</div>
                  <div className="font-mono text-[10px] text-p31-muted tracking-[0.2em] uppercase mt-2.5">{s.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
