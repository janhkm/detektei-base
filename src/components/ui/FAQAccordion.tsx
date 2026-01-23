"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";
import { FAQ } from "@/data/types";

interface FAQAccordionProps {
  faqs: FAQ[];
  className?: string;
}

export function FAQAccordion({ faqs, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={clsx("space-y-3", className)}>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white rounded-xl border border-primary-100 overflow-hidden"
        >
          <button
            className="w-full flex items-center justify-between p-5 text-left hover:bg-primary-50/50 transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span className="font-semibold text-primary-900 pr-4">
              {faq.question}
            </span>
            <ChevronDown
              className={clsx(
                "h-5 w-5 text-primary-500 flex-shrink-0 transition-transform duration-200",
                openIndex === index && "rotate-180"
              )}
            />
          </button>
          <div
            className={clsx(
              "overflow-hidden transition-all duration-200",
              openIndex === index ? "max-h-96" : "max-h-0"
            )}
          >
            <div className="px-5 pb-5 text-primary-600 leading-relaxed faq-answer">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
