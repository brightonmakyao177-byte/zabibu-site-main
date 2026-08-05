import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PropertyCard } from "@/components/site/PropertyCard";
import { getDestination } from "@/lib/destinations";
import { propertiesByRegion } from "@/lib/properties";

export const Route = createFileRoute("/destinations_/$slug")({
  loader: ({ params }) => {
    const dest = getDestination(params.slug);
    if (!dest) throw notFound();
    return { dest };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.dest.name} — Zabibu Collection` },
          { name: "description", content: loaderData.dest.short },
          { property: "og:title", content: `${loaderData.dest.name} — Zabibu Collection` },
          { property: "og:image", content: loaderData.dest.image },
        ]
      : [{ title: "Destination not found" }, { name: "robots", content: "noindex" }],
  }),
  component: DestinationDetail,
  notFoundComponent: DestinationNotFound,
});

function DestinationNotFound() {
  return (
    <div className="min-h-screen bg-transparent">
      <Nav />
      <div className="container-x pt-40 pb-24 text-center">
        <h1 className="font-display text-5xl">Destination not found</h1>
        <Link to="/destinations" className="btn-primary mt-8">Browse destinations</Link>
      </div>
      <Footer />
    </div>
  );
}

function DestinationDetail() {
  const { dest } = Route.useLoaderData();
  const stays = propertiesByRegion(dest.slug);

  return (
    <div className="min-h-screen bg-transparent">
      <Nav transparent />
      <section className="relative min-h-[70vh] flex items-end pt-28">
        <img src={dest.image} alt={dest.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="container-x relative z-10 pb-16 text-ivory">
          <Breadcrumbs items={[{ label: "Destinations", to: "/destinations" }, { label: dest.name }]} />
          <div className="mt-6 eyebrow !text-ivory/80">{dest.region}</div>
          <h1 className="mt-4 font-display text-ivory text-6xl md:text-8xl">{dest.name}</h1>
        </div>
      </section>

      <section className="py-24 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">About</span>
            <h2 className="mt-4 font-display text-4xl">A quiet introduction.</h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 text-muted-foreground leading-relaxed text-lg">
            <p>{dest.intro}</p>
          </div>
        </div>
      </section>

      {stays.length > 0 && (
        <section className="glass-section py-24">
          <div className="container-x">
            <div className="mb-12">
              <span className="eyebrow">Stays here</span>
              <h2 className="mt-3 font-display text-4xl">Our properties in {dest.name}</h2>
            </div>
            <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {stays.map((p) => <PropertyCard key={p.slug} p={p} variant="compact" />)}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
