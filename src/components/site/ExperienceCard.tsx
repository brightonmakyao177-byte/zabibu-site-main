import { Link } from "@tanstack/react-router";
import type { Experience } from "@/lib/experiences";
import { ArrowRight } from "lucide-react";

export function ExperienceCard({ e }: { e: Experience }) {
  return (
    <Link
      to="/experiences/$slug"
      params={{ slug: e.slug }}
      className="glass-card glass-card-hover group grid items-stretch overflow-hidden p-3 md:grid-cols-[280px_1fr]"
    >
      <div className="aspect-[4/3] overflow-hidden rounded-[1rem] bg-white/20 md:aspect-auto">
        <img src={e.image} alt={e.name} loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.04]" />
      </div>
      <div className="flex flex-col justify-center p-4 pt-6 md:p-7">
        <div className="text-[0.68rem] tracking-[0.22em] uppercase text-terracotta">{e.category}</div>
        <h3 className="font-display text-3xl mt-2 group-hover:text-terracotta transition-colors">{e.name}</h3>
        <p className="mt-3 text-sm text-muted-foreground max-w-xl leading-relaxed">{e.intro}</p>
        <div className="mt-5 flex items-center gap-6 text-xs text-muted-foreground">
          <span>Duration · {e.duration}</span>
          <span className="inline-flex items-center gap-1.5 text-charcoal">
            Read more <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
