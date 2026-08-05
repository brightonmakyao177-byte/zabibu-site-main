import { Search, MapPin, CalendarDays, Users } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export function SearchPanel({ floating = false }: { floating?: boolean }) {
  const navigate = useNavigate();
  const [dest, setDest] = useState("");

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); navigate({ to: "/properties" }); }}
      className={
        "glass-panel rounded-[1.5rem] p-3 " +
        (floating ? "md:absolute md:-bottom-10 md:left-6 md:right-6" : "")
      }
    >
      <div className="grid gap-2 md:grid-cols-[1.4fr_1fr_1fr_0.9fr_auto] md:items-stretch">
        <Field icon={<MapPin size={16} />} label="Destination">
          <input
            value={dest}
            onChange={(e) => setDest(e.target.value)}
            placeholder="Zanzibar, Serengeti…"
            className="w-full bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground/70"
          />
        </Field>
        <Field icon={<CalendarDays size={16} />} label="Check-in">
          <input type="date" className="w-full bg-transparent text-sm font-medium text-foreground outline-none" />
        </Field>
        <Field icon={<CalendarDays size={16} />} label="Check-out">
          <input type="date" className="w-full bg-transparent text-sm font-medium text-foreground outline-none" />
        </Field>
        <Field icon={<Users size={16} />} label="Guests">
          <select className="w-full bg-transparent text-sm font-medium text-foreground outline-none">
            {[1,2,3,4,5,6,7,8].map((n) => <option key={n}>{n} guest{n>1?"s":""}</option>)}
          </select>
        </Field>
        <button type="submit" className="btn-primary h-full px-6">
          <Search size={18} /> <span className="hidden sm:inline">Search</span>
        </button>
      </div>
    </form>
  );
}

function Field({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <label className="glass-soft flex min-h-16 items-center gap-3 px-4 py-3 transition hover:bg-white/45">
      <span className="glass-icon h-8 w-8 shrink-0 rounded-full text-primary">{icon}</span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
        {children}
      </span>
    </label>
  );
}
