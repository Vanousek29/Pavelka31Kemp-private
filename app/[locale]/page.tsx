import { setRequestLocale } from 'next-intl/server';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen flex items-center justify-center px-5 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(206,17,38,0.10), transparent 70%)',
        }}
      />

      {/* Watermark */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading leading-[0.8] text-p31-red opacity-[0.05] pointer-events-none select-none"
        style={{ fontSize: 'clamp(300px, 50vw, 700px)' }}
      >
        $$
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-p31-red/40 bg-p31-red/10 text-p31-red text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-full">
          <span className="w-2 h-2 rounded-full bg-p31-red animate-pulse" />
          Stránka uzavřena na neurčito
        </div>

        {/* Headline */}
        <h1 className="font-heading text-6xl md:text-8xl leading-none tracking-wide text-white">
          ZAVŘENO
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-white/70 font-body">
          Bohužel, provoz byl <span className="text-white font-semibold">dočasně</span> pozastaven.
        </p>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Funny reason */}
        <div className="space-y-4 text-white/60 font-body text-sm md:text-base leading-relaxed">
          <p>
            Důvod uzavření:{' '}
            <span className="text-white/90 font-medium">
              „Nepředvídané výpadky v cashflow způsobené třetí stranou."
            </span>
          </p>
          <p>
            Konkrétně:{' '}
            <span className="text-p31-red font-medium">
              někdo nám dluží prachy. Už přes 2 měsíce.
            </span>
          </p>
          <p className="text-white/40 italic text-xs">
            Ty víš, kdo jsi. Doufáme, že tahle stránka ti připomene cestu k bankovnímu účtu. 👋
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Footer note */}
        <p className="text-white/25 font-mono text-xs uppercase tracking-widest">
          Provoz bude obnoven ihned po připsání dlužné částky.
          <br />
          Nebo až nám dojde trpělivost — co nastane dřív.
        </p>
      </div>
    </div>
  );
}
