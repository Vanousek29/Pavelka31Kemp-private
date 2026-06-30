'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { CONTACT } from '@/lib/constants';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.2, 0.6, 0.2, 1] as const },
};

export default function KontaktContent() {
  const t = useTranslations('kontakt');
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
          <span className="font-mono text-[11px] tracking-[0.3em] text-p31-red uppercase">{t('sectionLabel')}</span>
          <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
        </div>
        <h1
          className="font-heading leading-[0.9] tracking-[0.005em] m-0 mb-16 text-white font-normal"
          style={{ fontSize: 'clamp(56px, 8vw, 120px)' }}
        >
          {t('titleLine1')}<br /><span className="text-p31-red">{t('titleHighlight')}</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* Contact info */}
          <div>
            <div className="flex flex-col gap-8">
              <div>
                <div className="font-mono text-[10px] text-p31-muted tracking-[0.3em] uppercase mb-2.5">{t('emailLabel')}</div>
                <a href={`mailto:${CONTACT.email}`} className="font-heading text-[36px] text-white tracking-[0.02em] no-underline hover:text-p31-red transition-colors">
                  {CONTACT.email}
                </a>
              </div>
              <div>
                <div className="font-mono text-[10px] text-p31-muted tracking-[0.3em] uppercase mb-2.5">{t('phoneLabel')}</div>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="font-heading text-[36px] text-white tracking-[0.02em] no-underline hover:text-p31-red transition-colors">
                  {CONTACT.phone}
                </a>
              </div>
              <div>
                <div className="font-mono text-[10px] text-p31-muted tracking-[0.3em] uppercase mb-2.5">{t('instagramLabel')}</div>
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-[36px] text-white tracking-[0.02em] no-underline hover:text-p31-red transition-colors inline-flex items-center gap-3.5"
                >
                  {CONTACT.instagram}
                </a>
              </div>
              <div>
                <div className="font-mono text-[10px] text-p31-muted tracking-[0.3em] uppercase mb-2.5">{t('operatorLabel')}</div>
                <div className="text-[15px] text-white leading-[1.7]">
                  {CONTACT.company}<br />
                  <span className="text-p31-muted">{t('address')}</span>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div className="font-mono text-[10px] text-p31-muted tracking-[0.3em] uppercase mb-3">{t('mapLabel')}</div>
              <div className="aspect-video border border-p31-border overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2588.0!2d17.9927!3d49.3344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47134a5e8e8e8e8e%3A0x0!2sLhota+u+Vset%C3%ADna+307%2C+755+01+Lhota+u+Vset%C3%ADna!5e0!3m2!1scs!2scz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t('mapTitle')}
                />
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-p31-bg-secondary border border-p31-border p-8 md:p-10">
            <div className="font-mono text-[11px] text-p31-red tracking-[0.3em] uppercase mb-6">{t('formLabel')}</div>
            <div className="flex flex-col gap-[18px]">
              <div>
                <div className="font-mono text-[10px] text-p31-muted tracking-[0.2em] uppercase mb-2">{t('nameLabel')}</div>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                  className="w-full bg-p31-bg border border-p31-border-light text-white px-4 py-3.5 font-body text-sm outline-none transition-colors"
                />
              </div>
              <div>
                <div className="font-mono text-[10px] text-p31-muted tracking-[0.2em] uppercase mb-2">{t('emailLabel')}</div>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                  className="w-full bg-p31-bg border border-p31-border-light text-white px-4 py-3.5 font-body text-sm outline-none transition-colors"
                />
              </div>
              <div>
                <div className="font-mono text-[10px] text-p31-muted tracking-[0.2em] uppercase mb-2">{t('messageLabel')}</div>
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
                {sent ? t('sent') : `${t('send')} →`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
