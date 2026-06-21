'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACT } from '@/lib/constants';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.2, 0.6, 0.2, 1] as const },
};

export default function KontaktContent() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    // TODO: napojit na backend (Formspree / Supabase / API route)
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <motion.div {...reveal} className="px-5 md:px-8 pt-[140px] pb-[120px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-[11px] tracking-[0.3em] text-p31-red uppercase">Kontakt</span>
          <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
        </div>
        <h1
          className="font-heading leading-[0.9] tracking-[0.005em] m-0 mb-16 text-white font-normal"
          style={{ fontSize: 'clamp(56px, 8vw, 120px)' }}
        >
          Napiš<br /><span className="text-p31-red">nám</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* Contact info */}
          <div>
            <div className="flex flex-col gap-8">
              <div>
                <div className="font-mono text-[10px] text-p31-muted tracking-[0.3em] uppercase mb-2.5">E-mail</div>
                <a href={`mailto:${CONTACT.email}`} className="font-heading text-[36px] text-white tracking-[0.02em] no-underline hover:text-p31-red transition-colors">
                  {CONTACT.email}
                </a>
              </div>
              <div>
                <div className="font-mono text-[10px] text-p31-muted tracking-[0.3em] uppercase mb-2.5">Telefon</div>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="font-heading text-[36px] text-white tracking-[0.02em] no-underline hover:text-p31-red transition-colors">
                  {CONTACT.phone}
                </a>
                {/* DOPLNIT: Jardovo cislo */}
              </div>
              <div>
                <div className="font-mono text-[10px] text-p31-muted tracking-[0.3em] uppercase mb-2.5">Instagram</div>
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-[36px] text-white tracking-[0.02em] no-underline hover:text-p31-red transition-colors inline-flex items-center gap-3.5"
                >
                  {CONTACT.instagram}
                  <span className="font-mono text-[20px]">&nearr;</span>
                </a>
              </div>
              <div>
                <div className="font-mono text-[10px] text-p31-muted tracking-[0.3em] uppercase mb-2.5">Provozovatel</div>
                <div className="text-[15px] text-white leading-[1.7]">
                  {CONTACT.company}<br />
                  <span className="text-p31-muted">{/* DOPLNIT: ICO a sidlo spolku */}</span>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-12">
              <div className="font-mono text-[10px] text-p31-muted tracking-[0.3em] uppercase mb-3">Kde nás najdeš</div>
              <div className="ph-stripes aspect-video flex flex-col items-center justify-center gap-2.5 border border-p31-border relative">
                <div className="w-7 h-9 border-[1.5px] border-p31-red rounded-[14px_14px_14px_2px] rotate-[-45deg] relative">
                  <div className="absolute inset-[6px] rounded-full bg-p31-red" />
                </div>
                <div className="font-mono text-[10px] text-[rgba(255,255,255,0.4)] tracking-[0.3em] uppercase">Google Maps embed</div>
                {/* TODO: vlozit embed z Map */}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-p31-bg-secondary border border-p31-border p-8 md:p-10">
            <div className="font-mono text-[11px] text-p31-red tracking-[0.3em] uppercase mb-6">Napiš zprávu</div>
            <div className="flex flex-col gap-[18px]">
              <div>
                <div className="font-mono text-[10px] text-p31-muted tracking-[0.2em] uppercase mb-2">Jméno</div>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                  className="w-full bg-p31-bg border border-p31-border-light text-white px-4 py-3.5 font-body text-sm outline-none transition-colors"
                />
              </div>
              <div>
                <div className="font-mono text-[10px] text-p31-muted tracking-[0.2em] uppercase mb-2">E-mail</div>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                  className="w-full bg-p31-bg border border-p31-border-light text-white px-4 py-3.5 font-body text-sm outline-none transition-colors"
                />
              </div>
              <div>
                <div className="font-mono text-[10px] text-p31-muted tracking-[0.2em] uppercase mb-2">Zpráva</div>
                <textarea
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                  className="w-full bg-p31-bg border border-p31-border-light text-white px-4 py-3.5 font-body text-sm outline-none resize-y transition-colors"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="bg-p31-red text-white border-none px-6 py-4 font-body text-[12px] font-semibold tracking-[0.18em] uppercase cursor-pointer transition-all mt-2 hover:bg-p31-red-hover hover:shadow-[0_0_24px_rgba(206,17,38,0.4)]"
              >
                {sent ? 'Odesláno ✓' : 'Odeslat zprávu →'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
