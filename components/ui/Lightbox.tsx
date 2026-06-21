'use client';

import { useEffect, useCallback } from 'react';
import type { GalleryItem } from '@/lib/types';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ items, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const item = items[currentIndex];

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  if (!item) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-[rgba(0,0,0,0.95)] backdrop-blur-[12px] z-[250] flex items-center justify-center p-6"
    >
      {/* Zavrit */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-11 h-11 bg-transparent border border-[rgba(255,255,255,0.2)] text-white cursor-pointer font-mono text-lg z-[2] hover:border-p31-red transition-colors"
        aria-label="Zavřít"
      >
        &times;
      </button>

      {/* Predchozi */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.2)] text-white cursor-pointer font-heading text-2xl z-[2] hover:border-p31-red transition-colors"
        aria-label="Předchozí"
      >
        &lsaquo;
      </button>

      {/* Dalsi */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.2)] text-white cursor-pointer font-heading text-2xl z-[2] hover:border-p31-red transition-colors"
        aria-label="Další"
      >
        &rsaquo;
      </button>

      <div onClick={(e) => e.stopPropagation()} className="max-w-[1100px] w-full">
        <div className="flex items-center justify-center bg-black min-h-[200px] max-h-[82vh] overflow-hidden">
          {item.isVideo ? (
            <video
              src={item.src}
              controls
              autoPlay
              muted
              playsInline
              className="max-w-full max-h-[82vh] block bg-black"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.src}
              alt={item.label}
              className="max-w-full max-h-[82vh] object-contain block"
            />
          )}
        </div>
        <div className="mt-4 flex justify-end items-center px-1">
          <div className="font-mono text-[11px] text-p31-muted tracking-[0.2em]">
            {currentIndex + 1} / {items.length}
          </div>
        </div>
      </div>
    </div>
  );
}
