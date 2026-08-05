import { useMemo, useState } from "react";
import type { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import { addDays, startOfDay } from "date-fns";

export function AvailabilityCalendar({ propertySlug }: { propertySlug: string }) {
  const [range, setRange] = useState<DateRange | undefined>();
  const today = useMemo(() => startOfDay(new Date()), []);
  const unavailable = useMemo(() => {
    const seed = propertySlug.split("").reduce((sum, letter) => sum + letter.charCodeAt(0), 0);
    return [seed % 11 + 6, seed % 17 + 17, seed % 13 + 31].flatMap((offset) => [
      addDays(today, offset),
      addDays(today, offset + 1),
    ]);
  }, [propertySlug, today]);

  return (
    <div className="glass-card p-4 sm:p-6">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-terracotta">Availability</p>
          <h3 className="mt-1 font-display text-2xl text-charcoal">Choose your dates</h3>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-2"><i className="h-3 w-3 rounded-sm bg-primary" /> Selected</span>
          <span className="flex items-center gap-2"><i className="h-3 w-3 rounded-sm bg-muted" /> Unavailable</span>
        </div>
      </div>
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        numberOfMonths={2}
        disabled={[{ before: today }, ...unavailable]}
        className="mx-auto w-full [--cell-size:2.25rem]"
      />
      <p className="mt-4 border-t border-white/55 pt-4 text-xs leading-relaxed text-muted-foreground">
        Dates are indicative until connected to your booking system. Final availability is confirmed during checkout.
      </p>
    </div>
  );
}
