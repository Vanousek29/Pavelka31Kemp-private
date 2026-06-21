import type { Metadata } from 'next';
import KontaktContent from './KontaktContent';

export const metadata: Metadata = {
  title: 'Kontakt | Pavelka 31 Kemp',
  description: 'Kontaktní údaje brankářského kempu Pavelka 31.',
};

export default function KontaktPage() {
  return <KontaktContent />;
}
