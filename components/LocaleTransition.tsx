'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

// Krátký fade hlavního obsahu při změně jazyka.
// Klíč = locale → při přepnutí CS/EN se obsah remountuje a jemně se prolne,
// takže přechod nebliká tvrdým překreslením.
export default function LocaleTransition({ children }: { children: React.ReactNode }) {
  const locale = useLocale();

  return (
    <motion.div
      key={locale}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
