import { Search, MapPin, CalendarDays, Users } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

// Front-end search UI only. TODO: wire to real availability lookup.
export function SearchBar({ variant = "light" }: { variant?: "light" | "on-image" }) {
  const navigate = useNavigate();
  const [dest, setDest] = useState("");

  const wrap = variant === "on-image"
    ? "glass-panel bg-white/28"
    : "glass-panel";

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); navigate({ to: "/properties" }); }}
      className={"w-full rounded-[1.5rem] p-2 md:p-3 " + wrap}
    >
      <div className="grid gap-1 md:grid-cols-[1.4fr_1fr_1fr_0.9fr_auto] md:items-stretch">
        <Field icon={<MapPin size={14} />} label="Destination">
          <input
            value={dest}
            onChange={(e) => setDest(e.target.value)}
            placeholder="Zanzibar, Serengeti, Arusha…"
            className="w-full bg-transparent text-sm text-charcoal outline-none placeholder:text-muted-foreground/70"
          />
        </Field>
        <Field icon={<CalendarDays size={14} />} label="Check-in">
          <input type="date" className="w-full bg-transparent text-sm text-charcoal outline-none" />
        </Field>
        <Field icon={<CalendarDays size={14} />} label="Check-out">
          <input type="date" className="w-full bg-transparent text-sm text-charcoal outline-none" />
        </Field>
        <Field icon={<Users size={14} />} label="Guests">
          <select className="w-full bg-transparent text-sm text-charcoal outline-none">
            {[1,2,3,4,5,6,7,8].map((n) => <option key={n}>{n} guest{n>1?"s":""}</option>)}
          </select>
        </Field>
        <button type="submit" className="btn-primary md:h-full">
          <Search size={15} /><span>Search</span>
        </button>
      </div>
    </form>
  );
}

function Field({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <label className="glass-soft flex min-h-14 items-center gap-3 px-3 py-2.5 transition-colors md:rounded-none md:border-y-0 md:border-l-0 md:bg-transparent md:shadow-none md:last:border-r-0">
      <span className="text-muted-foreground shrink-0">{icon}</span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="text-[0.62rem] font-medium tracking-[0.18em] uppercase text-muted-foreground">{label}</span>
        {children}
      </span>
    </label>
  );
}
