import type { Metadata } from 'next';
import PravidlaContent from './PravidlaContent';

export const metadata: Metadata = {
  title: 'Pravidla kempu | Pavelka 31 Kemp',
  description: 'Pravidla brankářského kempu Pavelka 31. Obecná pravidla, povinná výbava, storno podmínky.',
};

export default function PravidlaPage() {
  return <PravidlaContent />;
}
