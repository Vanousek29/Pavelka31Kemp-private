import { PAYMENT } from './constants';

export function buildSpayd(amount: number, vs: string, message: string): string {
  const acc = `${PAYMENT.iban}+${PAYMENT.bic}`;
  return `SPD*1.0*ACC:${acc}*AM:${amount}.00*CC:${PAYMENT.currency}*MSG:${message}*X-VS:${vs}`;
}
