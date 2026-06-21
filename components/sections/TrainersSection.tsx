import Image from 'next/image';
import { TRAINERS, SPONSORS } from '@/lib/constants';

export default function TrainersSection() {
  return (
    <>
      {/* Treneri */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-p31-border border border-p31-border mb-[100px]">
        {TRAINERS.map((t) => {
          const showPhoto = !!t.photo;
          return (
            <div key={t.name} className="bg-p31-bg transition-colors hover:bg-p31-bg-secondary flex flex-col">
              {showPhoto && (
                <div className="relative w-full aspect-[4/5] bg-p31-bg-tertiary overflow-hidden">
                  {t.photo ? (
                    <Image
                      src={t.photo}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 900px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="ph-stripes absolute inset-0 flex items-center justify-center">
                      <span className="font-heading text-[64px] text-[rgba(255,255,255,0.08)]">{t.tag}</span>
                    </div>
                  )}
                </div>
              )}
              <div className="px-[30px] py-[26px] flex-1 flex flex-col justify-center">
                <div className="font-mono text-[10px] tracking-[0.2em] text-p31-red uppercase mb-3">{t.role}</div>
                <h3 className="font-heading text-[30px] tracking-[0.02em] text-white font-normal leading-none m-0">{t.name}</h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Partneri */}
      <div className="flex items-center gap-4 mb-10">
        <span className="font-mono text-[11px] tracking-[0.3em] text-p31-red uppercase">Partneři kempu</span>
        <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-p31-border border border-p31-border">
        {SPONSORS.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-p31-bg px-6 py-[52px] flex items-center justify-center gap-3 no-underline transition-colors hover:bg-p31-bg-secondary"
          >
            <span className="font-heading text-[30px] tracking-[0.04em] text-white transition-colors">{s.name}</span>
          </a>
        ))}
      </div>
    </>
  );
}
