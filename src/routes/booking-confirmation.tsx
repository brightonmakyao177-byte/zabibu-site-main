import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/booking-confirmation")({
  component: BookingConfirmation,
  head: () => ({
    meta: [
      { title: "Booking confirmation template — Zabibu Collection" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function BookingConfirmation() {
  return (
    <div className="min-h-screen bg-transparent">
      <Nav />
      <PageHero eyebrow="Front-end template" title="Booking confirmation." intro="This is a design template. It is not shown automatically after a real submission." />
      <section className="py-16">
        <div className="glass-card container-x max-w-3xl p-10">
          <div className="eyebrow">Reference · #ZBB-000000 (placeholder)</div>
          <h2 className="mt-4 font-display text-4xl">Thank you, [Guest name].</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Your stay at <span className="text-charcoal">[Property name]</span> is confirmed for <span className="text-charcoal">[dates]</span>. A full itinerary and property notes will follow by email closer to your arrival.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 border-y border-border py-6">
            <div><div className="eyebrow">Check-in</div><div className="mt-2 font-display text-2xl">[Date, time]</div></div>
            <div><div className="eyebrow">Check-out</div><div className="mt-2 font-display text-2xl">[Date, time]</div></div>
            <div><div className="eyebrow">Guests</div><div className="mt-2 font-display text-2xl">[N]</div></div>
            <div><div className="eyebrow">Property manager</div><div className="mt-2 font-display text-2xl">[Name]</div></div>
          </div>
          <div className="mt-8">
            <Link to="/" className="btn-primary">Back to home</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
