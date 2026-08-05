import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export type FAQ = { q: string; a: string };

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="glass-card divide-y divide-white/55 overflow-hidden px-6 md:px-8">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-display text-xl md:text-2xl text-charcoal">{it.q}</span>
              <span className="glass-icon h-9 w-9 shrink-0 rounded-full text-muted-foreground">{isOpen ? <Minus size={17} /> : <Plus size={17} />}</span>
            </button>
            {isOpen && (
              <div className="pb-8 pr-10 text-sm text-muted-foreground leading-relaxed max-w-3xl">{it.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
