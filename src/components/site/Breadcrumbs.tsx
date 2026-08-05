import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[0.72rem] tracking-[0.14em] uppercase text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((c, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {c.to ? (
              <Link to={c.to as string} className="hover:text-charcoal transition-colors">{c.label}</Link>
            ) : (
              <span className="text-charcoal">{c.label}</span>
            )}
            {i < items.length - 1 && <ChevronRight size={12} className="opacity-60" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}
