import { useState, useMemo } from "react";
import type { Property } from "@/lib/properties";
import { Link } from "@tanstack/react-router";

// Front-end inquiry panel. TODO: connect to a real inquiry / availability handler.
export function InquiryCard({ property }: { property: Property }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const d1 = new Date(checkIn), d2 = new Date(checkOut);
    const diff = Math.round((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
    return Math.max(0, diff);
  }, [checkIn, checkOut]);

  const subtotal = nights * property.pricePerNight;
  const taxes = Math.round((subtotal + property.cleaningFee) * (property.taxesPct / 100));
  const total = subtotal + property.cleaningFee + taxes;

  return (
    <aside className="glass-card p-6 lg:p-8">
      <div className="flex items-baseline justify-between">
        <div>
          <span className="font-display text-3xl text-charcoal">${property.pricePerNight}</span>
          <span className="text-sm text-muted-foreground"> / night</span>
        </div>
        <span className="text-[0.68rem] tracking-[0.18em] uppercase text-muted-foreground">Excl. taxes</span>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label>
          <span className="field-label">Check-in</span>
          <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="input-field" />
        </label>
        <label>
          <span className="field-label">Check-out</span>
          <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="input-field" />
        </label>
        <label className="sm:col-span-2">
          <span className="field-label">Guests</span>
          <select value={guests} onChange={(e) => setGuests(Number(e.target.value))} className="input-field">
            {Array.from({ length: property.guests }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>{n} guest{n > 1 ? "s" : ""}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-6 space-y-2 text-sm">
        <Row label={`$${property.pricePerNight} × ${nights || 0} nights`} value={`$${subtotal}`} />
        <Row label="Cleaning fee" value={`$${property.cleaningFee}`} />
        <Row label={`Taxes (${property.taxesPct}%)`} value={`$${taxes}`} />
      </div>
      <div className="mt-4 flex items-baseline justify-between border-t border-white/55 pt-4">
        <span className="text-[0.72rem] tracking-[0.18em] uppercase text-muted-foreground">Estimated total</span>
        <span className="font-display text-2xl text-charcoal">${total || 0}</span>
      </div>

      <div className="mt-6 space-y-2">
        <Link
          to="/booking"
          className="btn-primary w-full"
        >
          Check availability
        </Link>
        <Link to="/contact" className="btn-outline w-full">Send inquiry</Link>
      </div>
      <p className="mt-4 text-[0.7rem] text-muted-foreground leading-relaxed">
        Front-end only. Availability shown is indicative. Our team will confirm dates and rates by email within 24 hours.
      </p>
    </aside>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between text-muted-foreground">
      <span>{label}</span>
      <span className="text-charcoal">{value}</span>
    </div>
  );
}
