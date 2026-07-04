'use client';

import { useTranslations } from 'next-intl';
import type { TournamentTeam } from '@/lib/types';

interface TournamentTableProps {
  teams: TournamentTeam[];
}

// Křížová tabulka "každý s každým" – skóre se doplní až po odehrání zápasů
export default function TournamentTable({ teams }: TournamentTableProps) {
  const t = useTranslations('tournament.table');

  const teamLabel = (team: TournamentTeam, i: number) =>
    team.status === 'obsazeno' ? (
      <span className="text-white font-semibold">{team.nazev}</span>
    ) : (
      <span className="inline-flex items-center gap-2 text-p31-muted opacity-60">
        {t('teamPlaceholder', { num: i + 1 })}
        <span className="font-mono text-[8px] text-p31-red tracking-[0.15em] uppercase px-1.5 py-0.5 border border-[rgba(206,17,38,0.4)] opacity-100">
          {t('freeBadge')}
        </span>
      </span>
    );

  return (
    <div className="px-8 md:px-11 py-10 border-b border-p31-border">
      <div className="font-mono text-[11px] text-p31-red tracking-[0.3em] uppercase mb-6">
        {t('title')}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse">
          <thead>
            <tr>
              <th className="bg-p31-bg border border-p31-border px-4 py-3.5" />
              {teams.map((team, i) => (
                <th
                  key={i}
                  className="bg-p31-bg border border-p31-border px-4 py-3.5 text-center font-mono text-[10px] tracking-[0.1em] uppercase font-normal whitespace-nowrap"
                >
                  {teamLabel(team, i)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {teams.map((rowTeam, ri) => (
              <tr key={ri}>
                <th className="bg-p31-bg border border-p31-border px-4 py-3.5 text-left font-mono text-[10px] tracking-[0.1em] uppercase font-normal whitespace-nowrap">
                  {teamLabel(rowTeam, ri)}
                </th>
                {teams.map((_, ci) =>
                  ri === ci ? (
                    <td
                      key={ci}
                      aria-hidden="true"
                      className="bg-[rgba(255,255,255,0.03)] border border-p31-border px-4 py-3.5"
                    />
                  ) : (
                    <td
                      key={ci}
                      className="bg-p31-bg-secondary border border-p31-border px-4 py-3.5 text-center font-mono text-[13px] text-p31-muted opacity-40"
                    >
                      —
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-[13px] leading-[1.6] text-p31-muted mt-5 mb-0">{t('note')}</p>
    </div>
  );
}
