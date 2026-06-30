import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import TrainersSection from '@/components/sections/TrainersSection';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.treneri' });
  return { title: t('title'), description: t('description') };
}

export default async function TreneriPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <TreneriContent />;
}

function TreneriContent() {
  const t = useTranslations('treneri');
  return (
    <div className="px-5 md:px-8 pt-[140px] pb-[120px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-[11px] tracking-[0.3em] text-p31-red uppercase">{t('sectionLabel')}</span>
          <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
        </div>
        <h1
          className="font-heading leading-[0.9] tracking-[0.005em] m-0 mb-6 text-white font-normal"
          style={{ fontSize: 'clamp(56px, 8vw, 120px)' }}
        >
          {t('titleLine1')}<br /><span className="text-p31-red">{t('titleHighlight')}</span>
        </h1>
        <p className="text-[17px] leading-[1.6] text-p31-muted max-w-[600px] m-0 mb-16">
          {t('intro')}
        </p>

        <TrainersSection />
      </div>
    </div>
  );
}
