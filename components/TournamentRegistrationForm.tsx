'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import Modal from './ui/Modal';
import { formatPrice, generateVS } from '@/lib/utils';
import type { Camp } from '@/lib/types';

interface TournamentRegistrationFormProps {
  open: boolean;
  onClose: () => void;
  camp: Camp;
}

interface TeamForm {
  teamName: string;
  captainName: string;
  email: string;
  phone: string;
  playerCount: string;
  goalie: boolean;
}

const emptyForm: TeamForm = {
  teamName: '',
  captainName: '',
  email: '',
  phone: '',
  playerCount: '3',
  goalie: true,
};

export default function TournamentRegistrationForm({ open, onClose, camp }: TournamentRegistrationFormProps) {
  const router = useRouter();
  const t = useTranslations('tournament.form');
  const tr = useTranslations('tournament');
  const locale = useLocale();
  const [form, setForm] = useState<TeamForm>(emptyForm);

  const set = <K extends keyof TeamForm>(field: K, value: TeamForm[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const isValid =
    form.teamName.trim() && form.captainName.trim() && form.email.trim() && form.phone.trim();

  const tournamentName = camp.tournament?.nazev ?? camp.id;

  const handleSubmit = () => {
    if (!isValid) return;
    const vs = generateVS();
    const data = {
      role: 'tournament',
      firstName: form.captainName.trim(),
      lastName: '',
      email: form.email.trim(),
      phone: form.phone.trim(),
      teamName: form.teamName.trim(),
      playerCount: Number(form.playerCount),
      goalie: form.goalie,
      typUcasti: `${tournamentName} – ${form.teamName.trim()}`,
      cena: camp.price,
      timestamp: new Date().toISOString(),
      vs,
    };
    localStorage.setItem(`registration-${vs}`, JSON.stringify(data));
    onClose();
    router.push(`/platba/${vs}`);
  };

  return (
    <Modal open={open} onClose={onClose}>
      {/* Header */}
      <div className="px-6 md:px-10 py-8 border-b border-p31-border flex items-start justify-between gap-6">
        <div>
          <div className="font-mono text-[10px] text-p31-red tracking-[0.3em] uppercase mb-2.5">{t('label')}</div>
          <div className="font-heading text-[34px] text-white tracking-[0.02em] leading-none uppercase">{tournamentName}</div>
          <div className="font-mono text-[11px] text-p31-muted tracking-[0.15em] uppercase mt-2">{camp.location}</div>
        </div>
        <button
          onClick={onClose}
          className="w-9 h-9 bg-transparent border border-p31-border-lighter text-white cursor-pointer font-mono text-base transition-all hover:border-p31-red hover:text-p31-red flex-shrink-0 flex items-center justify-center"
          aria-label={t('close')}
        >
          &times;
        </button>
      </div>

      {/* Body */}
      <div className="px-6 md:px-10 py-8">
        <div className="mb-6 text-center">
          <span className="font-heading text-[28px] text-p31-red tracking-[0.02em]">
            {formatPrice(camp.price, locale)}
          </span>
          <div className="font-mono text-[10px] text-p31-muted tracking-[0.15em] uppercase mt-1">{tr('priceNote')}</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <Field label={t('teamName')} required value={form.teamName} onChange={(v) => set('teamName', v)} placeholder={t('teamNamePlaceholder')} />
          </div>
          <div className="sm:col-span-2">
            <Field label={t('captainName')} required value={form.captainName} onChange={(v) => set('captainName', v)} placeholder={t('captainPlaceholder')} />
          </div>
          <Field label={t('email')} required value={form.email} onChange={(v) => set('email', v)} type="email" placeholder="email@example.com" />
          <Field label={t('phone')} required value={form.phone} onChange={(v) => set('phone', v)} type="tel" placeholder="+420 …" />
          <div>
            <div className="font-mono text-[10px] text-p31-muted tracking-[0.2em] uppercase mb-2">{t('playerCount')} <span className="text-p31-red">*</span></div>
            <select
              value={form.playerCount}
              onChange={(e) => set('playerCount', e.target.value)}
              className="w-full bg-p31-bg border border-p31-border-light text-white px-3.5 py-3 font-body text-sm outline-none"
            >
              {[3, 4, 5].map((n) => (
                <option key={n} value={String(n)}>
                  {t('players', { count: n })}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <label className="flex items-center gap-3 cursor-pointer w-full p-3.5 bg-[rgba(255,255,255,0.02)] border border-p31-border">
              <input
                type="checkbox"
                checked={form.goalie}
                onChange={() => set('goalie', !form.goalie)}
                className="accent-p31-red"
              />
              <span className="text-[13px] text-white leading-[1.4]">{t('ownGoalie')}</span>
            </label>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 md:px-10 py-6 border-t border-p31-border flex justify-between items-center gap-4 flex-wrap bg-[#0F0F0F]">
        <div>
          <div className="font-mono text-[10px] text-p31-muted tracking-[0.2em] uppercase">{t('toPay')}</div>
          <div className="font-heading text-[32px] text-white tracking-[0.02em] leading-none">{formatPrice(camp.price, locale)}</div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="bg-transparent border border-p31-border-lighter text-white px-[22px] py-3.5 font-body text-[12px] font-semibold tracking-[0.18em] uppercase cursor-pointer hover:border-white transition-colors"
          >
            {t('cancel')}
          </button>
          <button
            onClick={handleSubmit}
            disabled={!isValid}
            className="text-white border-none px-[26px] py-3.5 font-body text-[12px] font-semibold tracking-[0.18em] uppercase transition-all"
            style={{
              background: isValid ? '#CE1126' : '#3a1a1d',
              cursor: isValid ? 'pointer' : 'not-allowed',
              opacity: isValid ? 1 : 0.6,
            }}
          >
            {t('continueToPayment')} &rarr;
          </button>
        </div>
      </div>
    </Modal>
  );
}

function Field({ label, required, value, onChange, type = 'text', placeholder }: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <div className="font-mono text-[10px] text-p31-muted tracking-[0.2em] uppercase mb-2">
        {label} {required && <span className="text-p31-red">*</span>}
      </div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-p31-bg border border-p31-border-light text-white px-3.5 py-3 font-body text-sm outline-none"
      />
    </div>
  );
}
