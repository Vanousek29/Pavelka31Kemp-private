'use client';

import { useState } from 'react';
import { useRouter } from '@/i18n/navigation';
import Modal from './ui/Modal';
import { generateVS } from '@/lib/utils';
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
  const [form, setForm] = useState<TeamForm>(emptyForm);

  const set = <K extends keyof TeamForm>(field: K, value: TeamForm[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const isValid =
    form.teamName.trim() && form.captainName.trim() && form.email.trim() && form.phone.trim();

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
      typUcasti: `${camp.name} – ${form.teamName.trim()}`,
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
          <div className="font-mono text-[10px] text-p31-red tracking-[0.3em] uppercase mb-2.5">Přihláška týmu</div>
          <div className="font-heading text-[34px] text-white tracking-[0.02em] leading-none uppercase">{camp.name}</div>
          <div className="font-mono text-[11px] text-p31-muted tracking-[0.15em] uppercase mt-2">{camp.location}</div>
        </div>
        <button
          onClick={onClose}
          className="w-9 h-9 bg-transparent border border-p31-border-lighter text-white cursor-pointer font-mono text-base transition-all hover:border-p31-red hover:text-p31-red flex-shrink-0 flex items-center justify-center"
          aria-label="Zavřít"
        >
          &times;
        </button>
      </div>

      {/* Body */}
      <div className="px-6 md:px-10 py-8">
        <div className="mb-6 text-center">
          <span className="font-heading text-[28px] text-p31-red tracking-[0.02em]">
            {camp.price.toLocaleString('cs-CZ')} Kč
          </span>
          {camp.priceNote && (
            <div className="font-mono text-[10px] text-p31-muted tracking-[0.15em] uppercase mt-1">{camp.priceNote}</div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <Field label="Název týmu" required value={form.teamName} onChange={(v) => set('teamName', v)} placeholder="Např. Medvědi Vsetín" />
          </div>
          <div className="sm:col-span-2">
            <Field label="Jméno kapitána" required value={form.captainName} onChange={(v) => set('captainName', v)} placeholder="Jméno a příjmení" />
          </div>
          <Field label="E-mail" required value={form.email} onChange={(v) => set('email', v)} type="email" placeholder="email@example.com" />
          <Field label="Telefon" required value={form.phone} onChange={(v) => set('phone', v)} type="tel" placeholder="+420 …" />
          <div>
            <div className="font-mono text-[10px] text-p31-muted tracking-[0.2em] uppercase mb-2">Počet hráčů <span className="text-p31-red">*</span></div>
            <select
              value={form.playerCount}
              onChange={(e) => set('playerCount', e.target.value)}
              className="w-full bg-p31-bg border border-p31-border-light text-white px-3.5 py-3 font-body text-sm outline-none"
            >
              <option value="3">3 hráči</option>
              <option value="4">4 hráči</option>
              <option value="5">5 hráčů</option>
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
              <span className="text-[13px] text-white leading-[1.4]">Máme vlastního brankáře</span>
            </label>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 md:px-10 py-6 border-t border-p31-border flex justify-between items-center gap-4 flex-wrap bg-[#0F0F0F]">
        <div>
          <div className="font-mono text-[10px] text-p31-muted tracking-[0.2em] uppercase">K úhradě</div>
          <div className="font-heading text-[32px] text-white tracking-[0.02em] leading-none">{camp.price.toLocaleString('cs-CZ')} Kč</div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="bg-transparent border border-p31-border-lighter text-white px-[22px] py-3.5 font-body text-[12px] font-semibold tracking-[0.18em] uppercase cursor-pointer hover:border-white transition-colors"
          >
            Zrušit
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
            Pokračovat k platbě &rarr;
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
