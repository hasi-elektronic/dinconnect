import { useState } from "react";
import { ChevronDown } from "lucide-react";

type AccordionItem = {
  q: string;
  a: string;
};

export function Accordion({ items }: { items: readonly AccordionItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="divide-y divide-navy-100 border-y border-navy-100">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div key={idx} className="py-1">
            <button
              type="button"
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors hover:text-navy-600"
              aria-expanded={isOpen}
            >
              <span className="font-display font-bold text-base md:text-lg text-navy">
                {item.q}
              </span>
              <ChevronDown
                className={`mt-1 h-5 w-5 flex-shrink-0 text-gold transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100 pb-5"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-anthracite/80 leading-relaxed pr-9">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
