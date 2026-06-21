'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/lib/constants';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] px-5 md:px-8 py-[18px] flex items-center justify-between bg-p31-glass backdrop-blur-[20px] border-b border-p31-border">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="w-[42px] h-[42px] border-[1.5px] border-p31-red flex items-center justify-center relative bg-p31-bg">
            <span className="font-heading text-[22px] text-white tracking-[0.02em] leading-none">31</span>
            <div className="absolute -top-[3px] -right-[3px] w-[6px] h-[6px] bg-p31-red" />
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className="font-heading text-[18px] tracking-[0.12em] text-white">PAVELKA</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-p31-muted mt-[2px]">GOALIE CAMP</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2.5 font-body text-[12px] font-medium tracking-[0.16em] uppercase relative transition-colors hover:text-white no-underline ${
                pathname === item.href ? 'text-white' : 'text-p31-muted'
              }`}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute bottom-1 left-4 right-4 h-[1.5px] bg-p31-red" />
              )}
            </Link>
          ))}
          <Link
            href="/terminy"
            className="ml-4 bg-p31-red border-none px-[22px] py-3 font-body text-[12px] font-semibold tracking-[0.16em] uppercase text-white no-underline transition-all hover:bg-p31-red-hover hover:shadow-[0_0_24px_rgba(206,17,38,0.4)]"
          >
            Registrace &rarr;
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex md:hidden w-11 h-11 items-center justify-center flex-col gap-[5px] bg-transparent border border-p31-border-lighter cursor-pointer p-0"
          aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}
        >
          <span
            className="w-[18px] h-[1.5px] bg-white block transition-all duration-200"
            style={{ transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }}
          />
          <span
            className="w-[18px] h-[1.5px] bg-white block transition-opacity duration-200"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="w-[18px] h-[1.5px] bg-white block transition-all duration-200"
            style={{ transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed top-[77px] inset-x-0 bottom-0 z-[99] bg-[rgba(10,10,10,0.96)] backdrop-blur-[16px] overflow-y-auto"
          style={{ padding: '32px 24px calc(32px + env(safe-area-inset-bottom))' }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col gap-1 max-w-[480px] mx-auto"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`bg-transparent border-none cursor-pointer py-5 px-2 font-heading text-[34px] max-[720px]:text-[30px] max-[560px]:text-[24px] tracking-[0.02em] text-left border-b border-p31-border flex justify-between items-center no-underline ${
                  pathname === item.href ? 'text-white' : 'text-p31-muted'
                }`}
              >
                <span>{item.label}</span>
                <span className="font-mono text-sm text-p31-red">&rarr;</span>
              </Link>
            ))}
            <Link
              href="/terminy"
              className="mt-7 bg-p31-red text-white border-none py-5 px-6 font-body text-[13px] font-semibold tracking-[0.18em] uppercase cursor-pointer no-underline text-center"
            >
              Registrace &rarr;
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
