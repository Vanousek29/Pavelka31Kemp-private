import type { Metadata } from 'next';
import PlatbaContent from './PlatbaContent';

export const metadata: Metadata = {
  title: 'Platba | Pavelka 31 Kemp',
  description: 'Platební údaje pro kemp Pavelka 31.',
};

export default function PlatbaPage({ params }: { params: { id: string } }) {
  return <PlatbaContent id={params.id} />;
}
