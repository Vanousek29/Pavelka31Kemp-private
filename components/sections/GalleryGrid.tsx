'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from '@/components/ui/Lightbox';
import { GALLERY } from '@/lib/constants';
import type { GalleryItem } from '@/lib/types';

type Filter = 'all' | 'photos' | 'videos';

export default function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered: GalleryItem[] = filter === 'photos'
    ? GALLERY.filter((g) => !g.isVideo)
    : filter === 'videos'
      ? GALLERY.filter((g) => g.isVideo)
      : GALLERY;

  const filters: { key: Filter; label: string; count: number }[] = [
    { key: 'all', label: 'Vše', count: GALLERY.length },
    { key: 'photos', label: 'Fotky', count: GALLERY.filter((g) => !g.isVideo).length },
    { key: 'videos', label: 'Videa', count: GALLERY.filter((g) => g.isVideo).length },
  ];

  return (
    <>
      {/* Filter */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => { setFilter(f.key); setLightboxIndex(null); }}
            className="px-5 py-2.5 font-body text-[12px] font-semibold tracking-[0.16em] uppercase cursor-pointer transition-all border"
            style={{
              background: filter === f.key ? '#CE1126' : 'transparent',
              borderColor: filter === f.key ? '#CE1126' : 'rgba(255,255,255,0.15)',
              color: filter === f.key ? '#fff' : '#B0B0B0',
            }}
          >
            {f.label} <span className="font-mono text-[10px] opacity-60">({f.count})</span>
          </button>
        ))}
      </div>

      {/* Masonry */}
      <div className="columns-1 sm:columns-2 lg:columns-4 gap-3">
        {filtered.map((g, i) => (
          <div
            key={g.id}
            onClick={() => setLightboxIndex(i)}
            className="break-inside-avoid mb-3 relative cursor-pointer overflow-hidden transition-transform hover:scale-[0.99]"
          >
            <div
              className={g.stripeClass}
              style={{ aspectRatio: g.aspect, position: 'relative' }}
            >
              {g.isVideo ? (
                <>
                  <video
                    src={g.src}
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover block"
                  />
                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.25)]">
                    <div className="w-16 h-16 bg-[rgba(206,17,38,0.95)] rounded-full flex items-center justify-center shadow-[0_0_0_8px_rgba(206,17,38,0.15)]">
                      <span className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-1 bg-[rgba(10,10,10,0.7)] backdrop-blur-[4px] font-mono text-[9px] text-white tracking-[0.2em] uppercase">
                    Video
                  </div>
                </>
              ) : (
                <Image
                  src={g.src}
                  alt={g.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 25vw"
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length)}
          onNext={() => setLightboxIndex((lightboxIndex + 1) % filtered.length)}
        />
      )}
    </>
  );
}
