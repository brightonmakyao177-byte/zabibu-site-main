import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { FAQAccordion, type FAQ } from "@/components/site/FAQAccordion";

export const Route = createFileRoute("/faq")({
  component: FAQPage,
  head: () => ({
    meta: [
      { title: "FAQ — Zabibu Collection" },
      { name: "description", content: "Answers to common questions about booking, payments, cancellations and staying with the Zabibu Collection." },
    ],
  }),
});

const SECTIONS: { title: string; items: FAQ[] }[] = [
  {
    title: "Reservations",
    items: [
      { q: "How do I make a booking?", a: "Send us an inquiry from any property page or the contact form. Our team will confirm dates, rates and any extras by email within one working day." },
      { q: "How far in advance should I book?", a: "For peak coastal months (December – February, July – August) and safari season, we recommend six months. Off-peak, we can often accept bookings closer to travel." },
    ],
  },
  {
    title: "Payments",
    items: [
      { q: "How do I pay?", a: "Once dates are confirmed, we invoice for a 30% deposit to hold the booking, with the balance due 60 days before arrival." },
      { q: "Which currencies do you accept?", a: "All rates are quoted in US dollars. Bank transfer is our standard method." },
    ],
  },
  {
    title: "Cancellations",
    items: [
      { q: "What is the cancellation policy?", a: "Each property has its own policy, listed on the property page. As a general rule, cancellations more than 60 days before arrival are refunded in full, less a small administration fee." },
    ],
  },
  {
    title: "Arrival & children",
    items: [
      { q: "What time is check-in?", a: "Standard check-in is from 15:00 and check-out by 11:00. We do our best to accommodate early arrivals." },
      { q: "Are children welcome?", a: "Children are welcome at all coastal and highland properties. Vine Hill Safari Lodge is best suited to children aged 8 and up." },
      { q: "Do you accept pets?", a: "We do not accept pets at any Zabibu property." },
    ],
  },
  {
    title: "Transfers & special requests",
    items: [
      { q: "Can you arrange airport transfers?", a: "Yes — we work with a small number of drivers we know well, on all islands and the mainland." },
      { q: "Can you book restaurants, chefs or excursions?", a: "Yes. Please let us know at the time of booking or during your stay and we'll arrange it." },
    ],
  },
  {
    title: "Contacting the property",
    items: [
      { q: "Who do I speak to during my stay?", a: "You'll have a named property manager for the duration of your stay, reachable by phone and WhatsApp." },
    ],
  },
];

function FAQPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <Nav />
      <PageHero eyebrow="FAQ" title="Common questions." />
      <section className="py-16">
        <div className="container-x max-w-4xl space-y-16">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-3xl mb-6">{s.title}</h2>
              <FAQAccordion items={s.items} />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
