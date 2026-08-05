import { Link } from "@tanstack/react-router";
import { Heart, Users, BedDouble } from "lucide-react";
import type { Property } from "@/lib/properties";

type Variant = "default" | "featured" | "compact";

export function PropertyCard({ p, variant = "default" }: { p: Property; variant?: Variant }) {
  const aspect =
    variant === "featured" ? "aspect-[16/10]" : variant === "compact" ? "aspect-[4/3]" : "aspect-[5/4]";

  return (
    <article className="glass-card glass-card-hover group flex h-full flex-col overflow-hidden p-3">
      <Link to="/properties/$slug" params={{ slug: p.slug }} className="block">
        <div className={"relative overflow-hidden rounded-[1rem] bg-white/20 " + aspect}>
          <img
            src={p.image}
            alt={p.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
          />
          <button
            onClick={(e) => { e.preventDefault(); /* TODO: save to favourites */ }}
            aria-label="Save"
            className="glass-icon absolute right-4 top-4 h-9 w-9 rounded-full text-charcoal transition-colors hover:bg-white/70"
          >
            <Heart size={15} />
          </button>
        </div>
      </Link>
      <div className="mt-5 flex flex-1 items-start justify-between gap-4 px-2">
        <div className="min-w-0">
          <div className="text-[0.7rem] tracking-[0.2em] uppercase text-muted-foreground">
            {p.type} · {p.location}
          </div>
          <h3 className="mt-1.5 font-display text-2xl leading-tight text-charcoal">
            <Link to="/properties/$slug" params={{ slug: p.slug }} className="hover:text-terracotta transition-colors">
              {p.name}
            </Link>
          </h3>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Users size={13} /> {p.guests} guests</span>
            <span className="inline-flex items-center gap-1.5"><BedDouble size={13} /> {p.bedrooms} bedrooms</span>
          </div>
        </div>
        <div className="text-right shrink-0">
          <div className="text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">From</div>
          <div className="font-display text-xl text-charcoal leading-tight">${p.pricePerNight}</div>
          <div className="text-[0.7rem] text-muted-foreground">/ night</div>
        </div>
      </div>
      <div className="mb-2 mt-5 px-2 pt-1">
        <Link to="/properties/$slug" params={{ slug: p.slug }} className="link-underline">
          View stay
        </Link>
      </div>
    </article>
  );
}
