import { Link } from "@tanstack/react-router";
import type { Destination } from "@/lib/destinations";

export function DestinationCard({ d, size = "md" }: { d: Destination; size?: "sm" | "md" | "lg" }) {
  const aspect = size === "lg" ? "aspect-[4/5]" : size === "sm" ? "aspect-square" : "aspect-[3/4]";

  return (
    <Link
      to="/destinations/$slug"
      params={{ slug: d.slug }}
      className="glass-card glass-card-hover group block h-full overflow-hidden p-3"
      aria-label={`Explore ${d.name}`}
    >
      <div className={`relative overflow-hidden rounded-[1rem] bg-white/20 ${aspect}`}>
        <img src={d.image} alt={d.name} loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 text-ivory">
          <div className="text-[0.65rem] tracking-[0.22em] uppercase opacity-80">{d.region}</div>
          <div className="font-display text-2xl leading-tight mt-1">{d.name}</div>
        </div>
      </div>
    </Link>
  );
}
