import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { PropertyCard } from "@/components/site/PropertyCard";
import { EmptyState } from "@/components/site/EmptyState";
import { properties } from "@/lib/properties";

export const Route = createFileRoute("/favorites")({
  component: FavouritesPage,
  head: () => ({
    meta: [
      { title: "Saved stays — Zabibu Collection" },
      { name: "description", content: "Stays you've saved from the Zabibu Collection." },
    ],
  }),
});

// TODO: swap localStorage placeholder for real user favourites.
function FavouritesPage() {
  const [slugs, setSlugs] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem("zabibu-favs");
      if (raw) setSlugs(JSON.parse(raw));
    } catch {}
    setReady(true);
  }, []);

  const saved = properties.filter((p) => slugs.includes(p.slug));

  return (
    <div className="min-h-screen bg-transparent">
      <Nav />
      <PageHero eyebrow="Saved" title="Your saved stays." />
      <section className="py-16">
        <div className="container-x">
          {!ready ? null : saved.length === 0 ? (
            <EmptyState
              title="No saved stays yet."
              description="Tap the heart icon on any property to keep it here."
              actionLabel="Browse the collection"
              actionTo="/properties"
            />
          ) : (
            <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {saved.map((p) => <PropertyCard key={p.slug} p={p} />)}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
