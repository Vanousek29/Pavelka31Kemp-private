'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/lib/constants';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.2, 0.6, 0.2, 1] as const },
};

export default function MerchContent() {
  const t = useTranslations('merch');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSignup = () => {
    if (!email.trim()) return;
    // TODO: napojit na backend (newsletter / Mailchimp / Supabase)
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <motion.div {...reveal} className="px-5 md:px-8 pt-[140px] pb-[120px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-[11px] tracking-[0.3em] text-p31-red uppercase">{t('sectionLabel')}</span>
          <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
        </div>
        <h1
          className="font-heading leading-[0.9] tracking-[0.005em] m-0 mb-6 text-white font-normal"
          style={{ fontSize: 'clamp(56px, 8vw, 120px)' }}
        >
          {t('titleLine1')}<br /><span className="text-p31-red">{t('titleHighlight')}</span>
        </h1>
        <p className="text-[17px] leading-[1.6] text-p31-muted max-w-[600px] m-0 mb-10">
          {t('intro')}
        </p>

        {/* Email signup */}
        <div className="flex gap-3 mb-20 max-w-[500px] flex-wrap">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('emailPlaceholder')}
            className="flex-1 min-w-[240px] bg-p31-bg border border-p31-border-light text-white px-4 py-3.5 font-body text-sm outline-none"
          />
          <button
            onClick={handleSignup}
            className="bg-p31-red text-white border-none px-6 py-3.5 font-body text-[12px] font-semibold tracking-[0.18em] uppercase cursor-pointer transition-all hover:bg-p31-red-hover"
          >
            {subscribed ? t('subscribed') : t('subscribe')}
          </button>
        </div>

        {/* Products preview */}
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-[11px] tracking-[0.3em] text-p31-red uppercase">{t('preparingLabel')}</span>
          <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
