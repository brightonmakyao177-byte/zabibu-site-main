import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { experiences } from "@/lib/experiences";
import { ExperienceCard } from "@/components/site/ExperienceCard";

export const Route = createFileRoute("/experiences")({
  component: ExperiencesPage,
  head: () => ({
    meta: [
      { title: "Experiences — Zabibu Collection" },
      { name: "description", content: "Safari journeys, cultural mornings, transfers and private dining, arranged with the small operators we work with regularly." },
      { property: "og:title", content: "Experiences — Zabibu Collection" },
    ],
  }),
});

function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <Nav />
      <PageHero eyebrow="Experiences" title="Ways to spend your days." intro="From reef snorkelling to a Serengeti drive, arranged with the small operators we have worked with for years." />
      <section className="py-16 md:py-24">
        <div className="container-x space-y-5">
          {experiences.map((e) => <ExperienceCard key={e.slug} e={e} />)}
        </div>
      </section>
      <Footer />
    </div>
  );
}
