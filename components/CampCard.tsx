'use client';

import type { Camp } from '@/lib/types';

interface CampCardProps {
  camp: Camp;
  onRegister: () => void;
}

export default function CampCard({ camp, onRegister }: CampCardProps) {
  const spotsLeft = camp.capacity - camp.registered;
  const progress = (camp.registered / camp.capacity) * 100;

  const statusLabel = camp.status === 'full' ? 'Obsazeno' : camp.status === 'few_spots' ? 'Poslední místa' : 'Volná místa';
  const statusColor = camp.status === 'full' ? '#6a6a6a' : camp.status === 'few_spots' ? '#f59e0b' : '#4ade80';

  return (
    <div className="bg-p31-bg-secondary border border-p31-border p-8 flex flex-col transition-all hover:border-[rgba(206,17,38,0.4)] hover:-translate-y-1">
      <div className="font-mono text-[10px] tracking-[0.25em] uppercase mb-4" style={{ color: statusColor }}>
        {statusLabel}
      </div>
      <h3 className="font-heading text-[28px] tracking-[0.02em] text-white font-normal leading-none m-0 mb-2">{camp.name}</h3>
      <div className="font-mono text-[11px] text-p31-muted tracking-[0.15em] uppercase mb-1">
        {new Date(camp.dateFrom).toLocaleDateString('cs-CZ')} -- {new Date(camp.dateTo).toLocaleDateString('cs-CZ')}
      </div>
      <div className="text-sm text-p31-muted mb-1">{camp.location}</div>
      <div className="text-sm text-p31-muted mb-4">{camp.ageGroup}</div>

      {/* Cena */}
      <div className="font-heading text-[36px] text-white tracking-[0.02em] leading-none mb-4">
        od {camp.price.toLocaleString('cs-CZ')} Kč
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex justify-between mb-1.5">
          <span className="font-mono text-[10px] text-p31-muted tracking-[0.2em] uppercase">Obsazenost</span>
          <span className="font-mono text-[10px] text-p31-muted tracking-[0.2em]">{camp.registered}/{camp.capacity}</span>
        </div>
        <div className="h-1 bg-[rgba(255,255,255,0.06)] w-full">
          <div
            className="h-full transition-all"
            style={{
              width: `${progress}%`,
              background: camp.status === 'full' ? '#6a6a6a' : camp.status === 'few_spots' ? '#f59e0b' : '#CE1126',
            }}
          />
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={onRegister}
        disabled={camp.status === 'full'}
        className="mt-auto w-full py-4 font-body text-[12px] font-semibold tracking-[0.18em] uppercase border-none cursor-pointer transition-all text-white"
        style={{
          background: camp.status === 'full' ? '#333' : '#CE1126',
          cursor: camp.status === 'full' ? 'not-allowed' : 'pointer',
          opacity: camp.status === 'full' ? 0.6 : 1,
        }}
      >
        {camp.status === 'full' ? 'Obsazeno' : 'Přihlásit se →'}
      </button>
    </div>
  );
}
