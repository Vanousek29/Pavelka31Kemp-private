import type { Metadata } from 'next';
import TerminyContent from './TerminyContent';

export const metadata: Metadata = {
  title: 'Termíny a registrace | Pavelka 31 Kemp',
  description: 'Termíny brankářského kempu Pavelka 31. Registrace, program a ceník.',
};

export default function TerminyPage() {
  return <TerminyContent />;
}
