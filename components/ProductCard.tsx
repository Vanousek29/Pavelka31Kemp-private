import { useTranslations } from 'next-intl';
import type { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const t = useTranslations('merch');
  return (
    <div className="bg-p31-bg-secondary border border-p31-border p-6 flex flex-col transition-all hover:border-[rgba(206,17,38,0.4)]">
      {/* Placeholder image */}
      <div className="ph-stripes aspect-square flex items-center justify-center mb-4">
        <span className="font-heading text-[48px] text-[rgba(255,255,255,0.1)]">31</span>
      </div>
      <div className="font-mono text-[9px] text-p31-muted tracking-[0.2em] uppercase mb-2">{t(`products.${product.id}.category`)}</div>
      <h3 className="font-heading text-[22px] text-white font-normal leading-none m-0 mb-2">{t(`products.${product.id}.name`)}</h3>
      <div className="font-heading text-[24px] text-p31-red tracking-[0.02em] leading-none mt-auto pt-3">{product.priceLabel}</div>
      <div className="font-mono text-[10px] text-p31-muted tracking-[0.2em] uppercase mt-2">{t('comingSoon')}</div>
    </div>
  );
}
