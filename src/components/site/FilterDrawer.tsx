import { useState, type ReactNode } from "react";
import { X, SlidersHorizontal } from "lucide-react";

// Front-end filter UI only. TODO: wire filters to real results.
export function FilterDrawer({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="glass-control inline-flex min-h-10 items-center gap-2 rounded-full px-4 py-2.5 text-[0.72rem] uppercase tracking-[0.16em] lg:hidden"
      >
        <SlidersHorizontal size={14} /> Filters
      </button>
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-charcoal/40" onClick={() => setOpen(false)} />
          <div className="glass-panel absolute inset-y-3 right-3 w-[calc(100%_-_1.5rem)] max-w-sm overflow-y-auto rounded-[1.75rem] p-6">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="eyebrow">Filters</span>
              <button onClick={() => setOpen(false)} aria-label="Close" className="glass-icon h-9 w-9 rounded-full"><X size={18} /></button>
            </div>
            <div className="mt-6">{children}</div>
            <button onClick={() => setOpen(false)} className="btn-primary w-full mt-8">Apply filters</button>
          </div>
        </div>
      )}
    </>
  );
}
