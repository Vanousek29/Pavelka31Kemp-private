import type { Metadata } from 'next';
import MerchContent from './MerchContent';

export const metadata: Metadata = {
  title: 'Merch | Pavelka 31 Kemp',
  description: 'Oficiální merch brankářského kempu Pavelka 31. Coming soon.',
};

export default function MerchPage() {
  return <MerchContent />;
}
