import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

// Ceny zůstávají v CZK v obou jazycích – formátujeme jen oddělovač tisíců.
export function formatPrice(amount: number, locale: string = 'cs'): string {
  return amount.toLocaleString(locale === 'cs' ? 'cs-CZ' : 'en-US') + ' Kč';
}

// CS: 12. 7. 2026 · EN: Jul 12, 2026
export function formatDate(dateStr: string, locale: string = 'cs'): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale === 'cs' ? 'cs-CZ' : 'en-US', {
    day: 'numeric',
    month: locale === 'cs' ? 'numeric' : 'short',
    year: 'numeric',
  });
}

export function generateVS(): string {
  const now = new Date();
  const date = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
  const rand = String(Math.floor(Math.random() * 1000)).padStart(3, '0');
  return date + rand;
}
