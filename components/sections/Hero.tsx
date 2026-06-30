'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.2, 0.6, 0.2, 1] as const },
};

type HeroStat = { value: string; label: string };

export default function Hero() {
  const t = useTranslations('hero');
  const stats = t.raw('stats') as HeroStat[];
  const scrollToAbout = () => {
    const el = document.getElementById('about-section');
    if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center px-5 md:px-8 pt-[120px] pb-20 overflow-hidden">
      {/* Radial gradients */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(206,17,38,0.12), transparent 70%), radial-gradient(ellipse 60% 40% at 20% 30%, rgba(120,180,255,0.04), transparent 70%)' }} />

      {/* Watermark 31 */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading leading-[0.8] text-p31-red opacity-[0.06] pointer-events-none select-none tracking-[-0.04em]"
        style={{ fontSize: 'clamp(400px, 60vw, 900px)' }}
      >
        31
      </div>

      {/* Bottom fade */}
      <div aria-hidden="true" className="absolute left-0 right-0 bottom-0 h-[38%] bg-gradient-to-b from-transparent to-p31-bg pointer-events-none z-[1]" />

      <motion.div {...reveal} className="relative max-w-[1100px] text-center z-[2]">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-2 border border-p31-border-light bg-[rgba(255,255,255,0.02)] backdrop-blur-[8px] mb-8">
          <span className="w-1.5 h-1.5 bg-p31-red rounded-full animate-p31-pulse" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-p31-muted uppercase">{t('badge')}</span>
        </div>

        {/* Title */}
        <h1
          className="font-heading leading-[0.88] tracking-[0.005em] m-0 text-white font-normal"
          style={{ fontSize: 'clamp(64px, 11vw, 180px)' }}
        >
          Pavelka<br />
          <span className="inline-block">
            <span className="text-p31-red">31</span>
            <span className="text-white"> Kemp</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-[640px] mx-auto mt-9 text-lg leading-[1.55] text-p31-muted">
          {t('subtitle')}
        </p>

        {/* CTAs */}
        <div className="flex gap-3.5 justify-center mt-11 flex-wrap">
          <Link
            href="/terminy"
            className="bg-p31-red text-white border-none px-8 py-[18px] font-body text-[13px] font-semibold tracking-[0.18em] uppercase no-underline transition-all duration-300 inline-flex items-center gap-3 hover:bg-p31-red-hover hover:shadow-[0_0_40px_rgba(206,17,38,0.5)] hover:-translate-y-0.5"
          >
            {t('ctaRegister')}
            <span className="font-mono">&rarr;</span>
          </Link>
          <button
            onClick={scrollToAbout}
            className="bg-transparent text-white border border-[rgba(255,255,255,0.2)] px-8 py-[18px] font-body text-[13px] font-semibold tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:border-white hover:bg-[rgba(255,255,255,0.04)]"
          >
            {t('ctaMoreInfo')}
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-p31-border border border-p31-border max-w-[720px] mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-p31-bg py-[18px] px-3">
              <div className="font-heading text-[32px] text-p31-red leading-none">{stat.value}</div>
              <div className="font-mono text-[10px] text-p31-muted tracking-[0.2em] uppercase mt-1.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
