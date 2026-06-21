'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Modal from './ui/Modal';
import { TIERS, EVENT } from '@/lib/constants';
import { generateVS } from '@/lib/utils';
import type { Registration } from '@/lib/types';

interface RegistrationFormProps {
  open: boolean;
  onClose: () => void;
  defaultRole?: string;
}

const emptyForm: Registration = {
  role: '',
  firstName: '',
  lastName: '',
  birthDate: '',
  email: '',
  phone: '',
  parentName: '',
  parentPhone: '',
  dressSize: '',
  note: '',
  agreeRules: false,
  agreeGdpr: false,
};

export default function RegistrationForm({ open, onClose, defaultRole = '' }: RegistrationFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<Registration>({ ...emptyForm, role: defaultRole });

  const set = (field: keyof Registration, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const selectedTier = TIERS.find((t) => t.key === form.role);
  const isValid = form.role && form.firstName.trim() && form.lastName.trim() && form.birthDate && form.email.trim() && form.phone.trim() && form.agreeRules && form.agreeGdpr;

  const handleSubmit = () => {
    if (!isValid) return;
    const vs = generateVS();
    // TODO: napojit na backend (Formspree / Supabase / API route)
    const data = { ...form, vs, tier: selectedTier, timestamp: new Date().toISOString() };
    localStorage.setItem(`registration-${vs}`, JSON.stringify(data));
    onClose();
    router.push(`/platba/${vs}`);
  };

  return (
    <Modal open={open} onClose={onClose}>
      {/* Header */}
      <div className="px-6 md:px-10 py-8 border-b border-p31-border flex items-start justify-between gap-6">
        <div>
          <div className="font-mono text-[10px] text-p31-red tracking-[0.3em] uppercase mb-2.5">Registrace</div>
          <div className="font-heading text-[34px] text-white tracking-[0.02em] leading-none">{EVENT.title}</div>
          <div className="font-mono text-[11px] text-p31-muted tracking-[0.15em] uppercase mt-2">{EVENT.place} · {EVENT.dateRange}</div>
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
        {/* Kategorie */}
        <div className="mb-6">
          <div className="font-mono text-[10px] text-p31-muted tracking-[0.2em] uppercase mb-2.5">Kategorie <span className="text-p31-red">*</span></div>
          <div className="grid grid-cols-3 gap-2">
            {TIERS.map((t) => {
              const active = form.role === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => set('role', t.key)}
                  className="p-3 cursor-pointer text-left transition-all border"
                  style={{
                    background: active ? '#CE1126' : '#0A0A0A',
                    borderColor: active ? '#CE1126' : 'rgba(255,255,255,0.12)',
                    color: active ? '#fff' : '#B0B0B0',
                  }}
                >
                  <div className="font-body text-[12px] font-semibold tracking-[0.04em]">{t.role}</div>
                  <div className="font-heading text-[24px] tracking-[0.02em] mt-1 leading-none">{t.price}</div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField label="Jméno" required value={form.firstName} onChange={(v) => set('firstName', v)} placeholder="Tomáš" />
          <InputField label="Příjmení" required value={form.lastName} onChange={(v) => set('lastName', v)} placeholder="Novák" />
          <div className="sm:col-span-2">
            <InputField label="Datum narození" required value={form.birthDate} onChange={(v) => set('birthDate', v)} type="date" />
          </div>
          <InputField label="E-mail" required value={form.email} onChange={(v) => set('email', v)} type="email" placeholder="jana@email.cz" />
          <InputField label="Telefon" required value={form.phone} onChange={(v) => set('phone', v)} type="tel" placeholder="+420 ..." />
          <InputField label="Jméno rodiče" value={form.parentName} onChange={(v) => set('parentName', v)} placeholder="Jana Nováková" />
          <InputField label="Telefon na rodiče" value={form.parentPhone} onChange={(v) => set('parentPhone', v)} type="tel" placeholder="+420 ..." />
          <div className="sm:col-span-2">
            <div className="font-mono text-[10px] text-p31-muted tracking-[0.2em] uppercase mb-2">Velikost dresu</div>
            <select
              value={form.dressSize}
              onChange={(e) => set('dressSize', e.target.value)}
              className="w-full bg-p31-bg border border-p31-border-light text-white px-3.5 py-3 font-body text-sm outline-none"
            >
              <option value="">Vyber velikost...</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <div className="font-mono text-[10px] text-p31-muted tracking-[0.2em] uppercase mb-2">Poznámka / zdravotní omezení</div>
            <textarea
              rows={3}
              value={form.note}
              onChange={(e) => set('note', e.target.value)}
              placeholder="Alergie, zdravotní omezení, požadavky…"
              className="w-full bg-p31-bg border border-p31-border-light text-white px-3.5 py-3 font-body text-sm outline-none resize-y"
            />
          </div>
        </div>

        {/* Checkboxy */}
        <div className="flex flex-col gap-2 mt-6">
          <label className="flex items-start gap-3 cursor-pointer p-3.5 bg-[rgba(255,255,255,0.02)] border border-p31-border">
            <input
              type="checkbox"
              checked={form.agreeRules}
              onChange={() => set('agreeRules', !form.agreeRules)}
              className="mt-0.5 accent-p31-red"
            />
            <span className="text-[13px] text-p31-muted leading-[1.5]">
              Souhlasím s{' '}
              <Link href="/pravidla" className="text-p31-red underline" target="_blank">pravidly kempu</Link>
              {' '}<span className="text-p31-red">*</span>
            </span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3.5 bg-[rgba(255,255,255,0.02)] border border-p31-border">
            <input
              type="checkbox"
              checked={form.agreeGdpr}
              onChange={() => set('agreeGdpr', !form.agreeGdpr)}
              className="mt-0.5 accent-p31-red"
            />
            <span className="text-[13px] text-p31-muted leading-[1.5]">
              Souhlasím se zpracováním osobních údajů podle GDPR <span className="text-p31-red">*</span>
            </span>
          </label>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 md:px-10 py-6 border-t border-p31-border flex justify-between items-center gap-4 flex-wrap bg-[#0F0F0F]">
        <div>
          <div className="font-mono text-[10px] text-p31-muted tracking-[0.2em] uppercase">K platbě</div>
          <div className="font-heading text-[32px] text-white tracking-[0.02em] leading-none">{selectedTier ? selectedTier.price : '--'}</div>
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

function InputField({ label, required, value, onChange, type = 'text', placeholder }: {
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
