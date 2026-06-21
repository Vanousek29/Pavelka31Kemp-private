import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

export function formatPrice(amount: number): string {
  return amount.toLocaleString('cs-CZ') + ' Kc';
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('cs-CZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function generateVS(): string {
  const ts = Date.now().toString().slice(-6);
  return '20260' + ts.slice(-3);
}
