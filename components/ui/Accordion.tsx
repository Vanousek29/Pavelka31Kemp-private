'use client';

import { useState } from 'react';

interface AccordionItem {
  num: string;
  title: string;
  body: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: number;
}

export default function Accordion({ items, defaultOpen = 0 }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpen);

  return (
    <div className="flex flex-col gap-px bg-p31-border border border-p31-border">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.num} className="bg-p31-bg">
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="w-full bg-transparent border-none cursor-pointer py-7 px-8 flex items-center justify-between gap-6 text-left transition-colors hover:bg-[rgba(255,255,255,0.02)]"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-6">
                <span className="font-mono text-[11px] text-p31-red tracking-[0.2em]">{item.num}</span>
                <h3 className="font-heading text-[26px] tracking-[0.02em] text-white font-normal leading-none m-0">{item.title}</h3>
              </div>
              <div
                className="w-8 h-8 border border-p31-border-lighter flex items-center justify-center flex-shrink-0 transition-transform duration-300"
                style={{ transform: `rotate(${isOpen ? 45 : 0}deg)` }}
              >
                <span className="font-mono text-sm text-white">+</span>
              </div>
            </button>
            {isOpen && (
              <div className="px-8 pb-8 text-[15px] leading-[1.75] text-p31-muted">
                <div className="pl-[50px] border-l border-[rgba(206,17,38,0.4)] pt-2">
                  {item.body}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
