import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { destinations } from "@/lib/destinations";
import { DestinationCard } from "@/components/site/DestinationCard";

export const Route = createFileRoute("/destinations")({
  component: DestinationsPage,
  head: () => ({
    meta: [
      { title: "Destinations — Zabibu Collection" },
      { name: "description", content: "The corners of Tanzania where our properties sit — the reef, the plains, the coffee highlands and the coast." },
      { property: "og:title", content: "Destinations — Zabibu Collection" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=80" },
    ],
  }),
});

function DestinationsPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <Nav />
      <PageHero eyebrow="Destinations" title="Tanzania, from the highlands to the coast." intro="A short introduction to the corners of the country where our seven properties sit." />
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            {destinations.map((d, i) => (
              <div key={d.slug} className={i % 5 === 0 ? "col-span-12 md:col-span-8" : "col-span-12 sm:col-span-6 md:col-span-4"}>
                <DestinationCard d={d} size={i % 5 === 0 ? "lg" : "md"} />
                <div className="mt-4 max-w-md px-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.short}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
