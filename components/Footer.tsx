import Link from 'next/link';
import { CONTACT } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-p31-footer border-t border-p31-border px-5 md:px-8 pt-20 pb-8">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 lg:gap-14 pb-14 border-b border-p31-border">
          {/* Logo + popis */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-[42px] h-[42px] border-[1.5px] border-p31-red flex items-center justify-center bg-p31-bg">
                <span className="font-heading text-[22px] text-white tracking-[0.02em] leading-none">31</span>
              </div>
              <span className="font-heading text-[22px] tracking-[0.12em] text-white">PAVELKA 31 KEMP</span>
            </div>
            <p className="text-sm text-p31-muted leading-[1.7] max-w-[360px] mb-6">
              Brankářský kemp Jaroslava Pavelky. Kapka resort Vsetín · 26.--27. 6. 2026.
            </p>
            <div className="flex gap-2">
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[38px] h-[38px] border border-p31-border-light flex items-center justify-center text-white no-underline transition-all hover:border-p31-red hover:text-p31-red"
                aria-label="Instagram"
              >
                <span className="font-heading text-sm">IG</span>
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="w-[38px] h-[38px] border border-p31-border-light flex items-center justify-center text-white no-underline transition-all hover:border-p31-red hover:text-p31-red"
                aria-label="E-mail"
              >
                <span className="font-heading text-sm">@</span>
              </a>
            </div>
          </div>

          {/* Kemp */}
          <div>
            <div className="font-mono text-[10px] text-p31-muted tracking-[0.3em] uppercase mb-5">Kemp</div>
            <div className="flex flex-col gap-3">
              <Link href="/terminy" className="text-white font-body text-sm hover:text-p31-red transition-colors no-underline">Termíny</Link>
              <Link href="/pravidla" className="text-white font-body text-sm hover:text-p31-red transition-colors no-underline">Pravidla</Link>
              <Link href="/galerie" className="text-white font-body text-sm hover:text-p31-red transition-colors no-underline">Galerie</Link>
            </div>
          </div>

          {/* Tym */}
          <div>
            <div className="font-mono text-[10px] text-p31-muted tracking-[0.3em] uppercase mb-5">Tým</div>
            <div className="flex flex-col gap-3">
              <Link href="/treneri" className="text-white font-body text-sm hover:text-p31-red transition-colors no-underline">Trenéři</Link>
              <Link href="/kontakt" className="text-white font-body text-sm hover:text-p31-red transition-colors no-underline">Kontakt</Link>
            </div>
          </div>

          {/* Sledujte */}
          <div>
            <div className="font-mono text-[10px] text-p31-muted tracking-[0.3em] uppercase mb-5">Sledujte</div>
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-white no-underline inline-flex items-center gap-2 transition-colors hover:text-p31-red"
            >
              {CONTACT.instagram} <span className="font-mono text-xs">&nearr;</span>
            </a>
          </div>
        </div>

        <div className="pt-8 flex justify-between items-center flex-wrap gap-4">
          <span className="font-mono text-[10px] text-[#6a6a6a] tracking-[0.2em] uppercase">&copy; 2026 Pavelka 31 Kemp · Všechna práva vyhrazena</span>
          <span className="font-mono text-[10px] text-[#6a6a6a] tracking-[0.2em] uppercase">Brankářský kemp · CZE</span>
        </div>
      </div>
    </footer>
  );
}
