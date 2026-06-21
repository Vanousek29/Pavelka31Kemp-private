'use client';

import { motion } from 'framer-motion';
import { OFFERINGS } from '@/lib/constants';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.2, 0.6, 0.2, 1] as const },
};

export default function Features() {
  return (
    <motion.section {...reveal} className="px-5 md:px-8 py-[140px] bg-p31-bg">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-[11px] tracking-[0.3em] text-p31-red uppercase">02 / Program</span>
          <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
        </div>
        <h2
          className="font-heading leading-[0.92] tracking-[0.005em] m-0 mb-20 text-white font-normal max-w-[900px]"
          style={{ fontSize: 'clamp(48px, 6vw, 96px)' }}
        >
          Co kemp <span className="text-p31-red">nabízí</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-p31-border border border-p31-border">
          {OFFERINGS.map((offer) => (
            <div key={offer.num} className="bg-p31-bg p-8 md:px-8 md:py-10 transition-colors hover:bg-p31-bg-secondary">
              <div className="font-mono text-[11px] text-p31-red tracking-[0.2em] mb-6">{offer.num}</div>
              <div className="w-12 h-12 border border-p31-border-lighter flex items-center justify-center mb-7">
                <span className="font-heading text-[22px] text-white">{offer.glyph}</span>
              </div>
              <h3 className="font-heading text-[28px] tracking-[0.02em] text-white font-normal leading-none m-0 mb-3.5">{offer.title}</h3>
              <p className="text-sm leading-[1.6] text-p31-muted m-0">{offer.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
