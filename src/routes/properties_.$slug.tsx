import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { getProperty } from "@/lib/properties";
import { propertyPages } from "@/components/properties/pages";

export const Route = createFileRoute("/properties_/$slug")({
  loader: ({ params }) => {
    const property = getProperty(params.slug);
    if (!property || !(params.slug in propertyPages)) throw notFound();
    return { property };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.property.name} — ${loaderData.property.location} — Zabibu Collection` },
      { name: "description", content: loaderData.property.short },
      { property: "og:title", content: `${loaderData.property.name} — Zabibu Collection` },
      { property: "og:description", content: loaderData.property.short },
      { property: "og:image", content: loaderData.property.image },
    ] : [{ title: "Stay not found — Zabibu Collection" }, { name: "robots", content: "noindex" }],
  }),
  component: PropertyRoute,
  notFoundComponent: () => <div className="min-h-screen bg-transparent"><Nav /><div className="container-x pb-24 pt-40 text-center"><h1 className="font-display text-5xl">Stay not found</h1><p className="mt-4 text-muted-foreground">That property is not part of the collection.</p><Link to="/properties" className="btn-primary mt-8">Browse the collection</Link></div><Footer /></div>,
});

function PropertyRoute() {
  const { property } = Route.useLoaderData();
  const Page = propertyPages[property.slug as keyof typeof propertyPages];
  return <Page />;
}
