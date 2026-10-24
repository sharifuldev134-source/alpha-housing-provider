"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  defaultOpenIndex?: number;
}

export function FaqAccordion({ items, defaultOpenIndex = 0 }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-3.5">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`border rounded-xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? "border-slate-300 bg-white shadow-xs"
                : "border-slate-200/90 bg-white hover:border-slate-300"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="text-[15.5px] font-semibold text-slate-900 leading-snug">
                {item.question}
              </span>
              <span className="shrink-0 text-slate-500 rounded-full p-1 bg-slate-50 border border-slate-100">
                {isOpen ? (
                  <Minus className="w-4 h-4 text-slate-700" />
                ) : (
                  <Plus className="w-4 h-4 text-slate-500" />
                )}
              </span>
            </button>

            {isOpen && (
              <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100/70 animate-in fade-in-50 duration-200">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
