import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import TerminyContent from './TerminyContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.terminy' });
  return { title: t('title'), description: t('description') };
}

export default async function TerminyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <TerminyContent />;
}
