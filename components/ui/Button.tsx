'use client';

import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'default' | 'lg';
}

export default function Button({ variant = 'primary', size = 'default', className = '', children, ...props }: ButtonProps) {
  const base = 'font-body font-semibold tracking-[0.18em] uppercase cursor-pointer transition-all duration-200 inline-flex items-center gap-3';
  const sizes = {
    default: 'px-6 py-3.5 text-[12px]',
    lg: 'px-8 py-[18px] text-[13px]',
  };
  const variants = {
    primary: 'bg-p31-red text-white border-none hover:bg-p31-red-hover hover:shadow-[0_0_40px_rgba(206,17,38,0.5)] hover:-translate-y-0.5',
    outline: 'bg-transparent text-white border border-[rgba(255,255,255,0.2)] hover:border-white hover:bg-[rgba(255,255,255,0.04)]',
    ghost: 'bg-transparent text-p31-muted border-none hover:text-white p-0',
  };

  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
