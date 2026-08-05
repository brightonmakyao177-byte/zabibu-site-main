import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/guest-guidelines")({
  component: GuestGuidelines,
  head: () => ({ meta: [{ title: "Guest guidelines — Zabibu Collection" }] }),
});

function GuestGuidelines() {
  return (
    <div className="min-h-screen bg-transparent">
      <Nav />
      <PageHero eyebrow="For guests" title="Guest guidelines." intro="A few notes to help your stay run smoothly." />
      <section className="py-16">
        <div className="container-x max-w-3xl">
          <ul className="divide-y divide-border border-y border-border">
            {[
              { t: "Respect the home", d: "Each property is looked after with care. Please treat it as you would a friend's house." },
              { t: "Local team", d: "You'll have a named property manager. They are your first point of contact for anything at all." },
              { t: "Quiet hours", d: "22:00 – 07:00 at all coastal and highland properties." },
              { t: "Photography", d: "Please ask before photographing staff or neighbours." },
              { t: "Sustainability", d: "Water and electricity are precious on the coast — please use them thoughtfully." },
            ].map((g) => (
              <li key={g.t} className="py-6 grid md:grid-cols-[240px_1fr] gap-4">
                <div className="font-display text-xl">{g.t}</div>
                <div className="text-muted-foreground text-sm leading-relaxed">{g.d}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}
