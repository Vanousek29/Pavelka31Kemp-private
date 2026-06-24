'use client';

import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { buildSpayd } from '@/lib/spayd';
import { PAYMENT } from '@/lib/constants';
import type { StoredRegistration } from '@/lib/types';

interface QRPaymentProps {
  vs: string;
  registration: StoredRegistration | null;
}

export default function QRPayment({ vs, registration }: QRPaymentProps) {
  const [copyLabel, setCopyLabel] = useState('Zkopírovat platební údaje');

  const amount = registration?.cena || 0;
  const firstName = registration?.firstName || 'Jméno';
  const lastName = registration?.lastName || 'Příjmení';
  const typUcasti = registration?.typUcasti || '–';
  const msg = `Pavelka31 - ${firstName.trim()} ${lastName.trim()}`;
  const spayd = buildSpayd(amount, vs, msg);

  const paymentRows = [
    { label: 'Částka', value: `${amount.toLocaleString('cs-CZ')} Kč` },
    { label: 'Číslo účtu', value: PAYMENT.accountPretty },
    { label: 'IBAN', value: PAYMENT.iban },
    { label: 'Variabilní symbol', value: vs },
    { label: 'Zpráva pro příjemce', value: msg },
  ];

  const copyPayment = async () => {
    const text = `Pavelka 31 Kemp -- Kapka resort\nTyp účasti: ${typUcasti}\nČástka: ${amount.toLocaleString('cs-CZ')} Kč\nČíslo účtu: ${PAYMENT.accountPretty}\nIBAN: ${PAYMENT.iban}\nBIC: ${PAYMENT.bic}\nVS: ${vs}\nZpráva: ${msg}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopyLabel('Zkopírováno ✓');
      setTimeout(() => setCopyLabel('Zkopírovat platební údaje'), 2000);
    } catch {
      setCopyLabel('Zkopírovat platební údaje');
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 lg:gap-14 items-start">
      {/* QR card */}
      <div className="bg-p31-bg-secondary border border-[rgba(255,255,255,0.08)] p-8">
        {/* Přehled nad QR */}
        <div className="mb-6 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-p31-muted tracking-[0.2em] uppercase">Typ účasti</span>
            <span className="font-body text-sm text-white font-semibold">{typUcasti}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-p31-muted tracking-[0.2em] uppercase">Jméno</span>
            <span className="font-body text-sm text-white">{firstName} {lastName}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-p31-muted tracking-[0.2em] uppercase">Číslo účtu</span>
            <span className="font-mono text-sm text-white">{PAYMENT.accountPretty}</span>
          </div>
        </div>

        <div className="bg-white p-5 flex items-center justify-center aspect-square">
          <QRCodeSVG value={spayd} size={340} level="M" />
        </div>
        <div className="mt-5 text-center">
          <div className="font-heading text-[48px] text-p31-red tracking-[0.02em] leading-none">{amount.toLocaleString('cs-CZ')} Kč</div>
          <div className="font-mono text-[10px] text-p31-muted tracking-[0.3em] uppercase mt-1.5">SPAYD · CZK</div>
        </div>
      </div>

      {/* Manual details */}
      <div>
        <div className="font-mono text-[11px] text-p31-muted tracking-[0.3em] uppercase mb-6">Bankovní převod</div>
        <div className="flex flex-col gap-px bg-p31-border border border-p31-border mb-6">
          {paymentRows.map((row) => (
            <div key={row.label} className="bg-p31-bg px-6 py-5 flex items-center justify-between gap-4">
              <div className="font-mono text-[10px] text-p31-muted tracking-[0.25em] uppercase">{row.label}</div>
              <div className="font-mono text-sm text-white text-right break-all">{row.value}</div>
            </div>
          ))}
        </div>

        <button
          onClick={copyPayment}
          className="bg-p31-red border-none text-white px-6 py-4 font-body text-[12px] font-semibold tracking-[0.18em] uppercase cursor-pointer transition-all hover:bg-p31-red-hover hover:shadow-[0_0_24px_rgba(206,17,38,0.4)] inline-flex items-center gap-3 mr-3"
        >
          {copyLabel}
          <span className="font-mono">&#9112;</span>
        </button>

        <div className="mt-10 p-6 bg-[rgba(206,17,38,0.04)] border-l-2 border-l-p31-red">
          <div className="font-mono text-[10px] text-p31-red tracking-[0.3em] uppercase mb-2.5">Důležité</div>
          <p className="text-sm leading-[1.6] text-p31-muted m-0">
            Použij variabilní symbol <strong className="text-white">{vs}</strong>, ať platbu spárujeme. Po připsání ti pošleme potvrzení e‑mailem.
          </p>
        </div>
      </div>
    </div>
  );
}
