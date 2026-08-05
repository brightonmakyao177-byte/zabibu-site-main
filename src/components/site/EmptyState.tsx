import { Link } from "@tanstack/react-router";

export function EmptyState({
  title,
  description,
  actionLabel,
  actionTo,
}: {
  title: string;
  description: string;
  actionLabel?: string;
  actionTo?: string;
}) {
  return (
    <div className="glass-card p-10 text-center md:p-16">
      <h3 className="font-display text-3xl">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">{description}</p>
      {actionLabel && actionTo && (
        <div className="mt-6">
          <Link to={actionTo as string} className="btn-primary">{actionLabel}</Link>
        </div>
      )}
    </div>
  );
}
