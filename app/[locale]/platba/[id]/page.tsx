import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import PlatbaContent from './PlatbaContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.platba' });
  return { title: t('title'), description: t('description') };
}

export default async function PlatbaPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  setRequestLocale(locale);
  return <PlatbaContent id={id} />;
}
