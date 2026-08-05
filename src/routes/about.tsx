import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Compass,
  Heart,
  Home,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/about")({
  component: AboutPage,

  head: () => ({
    meta: [
      {
        title: "About — Zabibu Collection",
      },
      {
        name: "description",
        content:
          "Discover the story behind Zabibu Collection — a closely held group of Tanzanian homes shaped by local knowledge, thoughtful design and personal guest support.",
      },
      {
        property: "og:title",
        content: "About — Zabibu Collection",
      },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=1600&q=80",
      },
    ],
  }),
});

const principles = [
  {
    number: "01",
    icon: MapPin,
    title: "A sense of place",
    description:
      "Every home should feel connected to Tanzania — its light, landscape, materials and everyday rhythm.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Design with character",
    description:
      "We look for homes with personality, thoughtful details and a story that cannot be copied somewhere else.",
  },
  {
    number: "03",
    icon: Users,
    title: "A team we trust",
    description:
      "The people caring for a property matter just as much as the architecture, view or location.",
  },
  {
    number: "04",
    icon: Heart,
    title: "A reason to return",
    description:
      "The best homes leave guests already imagining their next stay before the first one has ended.",
  },
];

const collectionStats = [
  {
    value: "07",
    label: "Distinctive homes",
  },
  {
    value: "03",
    label: "Tanzanian regions",
  },
  {
    value: "01",
    label: "Local hosting team",
  },
  {
    value: "∞",
    label: "Reasons to return",
  },
];

const team = [
  {
    role: "Founder",
    location: "Tanzania",
    description: "Creative direction and collection vision",
  },
  {
    role: "Head of hosting",
    location: "Arusha",
    description: "Guest journeys and personal support",
  },
  {
    role: "Property manager",
    location: "Zanzibar",
    description: "Island homes and local experiences",
  },
  {
    role: "Property manager",
    location: "Mainland",
    description: "Safari stays and city residences",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <Nav transparent />

      <main>
        <section className="relative flex min-h-screen items-end overflow-hidden pt-28">
          <img
            src="https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=2200&q=85"
            alt="Historic carved doorway in Stone Town"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/15 to-charcoal/85" />

          <div className="absolute left-[8%] top-[22%] hidden h-24 w-24 rounded-full border border-white/25 bg-white/10 backdrop-blur-md md:block" />

          <div className="absolute right-[12%] top-[34%] hidden h-12 w-12 rounded-full border border-white/25 bg-white/10 backdrop-blur-md lg:block" />

          <div className="container-x relative z-10 pb-16 text-ivory md:pb-24">
            <div className="grid items-end gap-10 lg:grid-cols-[1fr_320px]">
              <div>
                <span className="eyebrow !text-ivory/75">Our story</span>

                <h1 className="mt-5 max-w-5xl font-display text-6xl leading-[0.92] text-ivory md:text-8xl lg:text-[8rem]">
                  A small collection,
                  <span className="block italic text-ivory/85">
                    closely held.
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-relaxed text-ivory/75 md:text-lg">
                  Seven homes across Tanzania, connected by thoughtful design,
                  local knowledge and people who genuinely care how your stay
                  feels.
                </p>
              </div>

              <div className="glass-card hidden border-white/20 bg-white/10 p-6 text-ivory backdrop-blur-xl lg:block">
                <Compass size={24} className="text-ivory/80" />

                <p className="mt-5 font-display text-2xl leading-snug text-ivory">
                  Not a hotel chain. Not a booking directory. A collection we
                  know personally.
                </p>

                <Link
                  to="/properties"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-ivory"
                >
                  Explore the collection
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="mt-14 flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-ivory/60">
              <span className="h-px w-16 bg-ivory/40" />
              Scroll to discover our story
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-terracotta/10 blur-3xl" />

          <div className="container-x relative z-10">
            <div className="grid gap-14 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <span className="eyebrow">The name</span>

                <h2 className="mt-5 max-w-md font-display text-5xl leading-tight md:text-6xl">
                  Zabibu means grapes.
                </h2>

                <div className="mt-8 flex h-20 w-20 items-center justify-center rounded-full border border-terracotta/20 bg-terracotta/10 text-terracotta">
                  <Sparkles size={26} />
                </div>
              </div>

              <div className="space-y-7 text-lg leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7">
                <p>
                  In Swahili, <span className="text-charcoal">zabibu</span> means
                  grapes — individual fruits growing together as one cluster.
                  It felt like the right name for a group of distinctive homes
                  cared for by one attentive team.
                </p>

                <p>
                  The collection began with two houses on the Zanzibar coast,
                  first opened to friends and later to travellers looking for
                  something more personal than a conventional hotel stay.
                </p>

                <p>
                  Seven properties later, the idea remains simple: a small,
                  well-run collection of places we know, trust and would happily
                  recommend to the people closest to us.
                </p>
              </div>
            </div>

            <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {collectionStats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card glass-card-hover group p-6 md:p-8"
                >
                  <div className="font-display text-5xl text-terracotta transition-transform duration-300 group-hover:-translate-y-1">
                    {stat.value}
                  </div>

                  <div className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="glass-section overflow-hidden py-20 md:py-28">
          <div className="container-x">
            <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative">
                <div className="glass-card overflow-hidden p-3">
                  <img
                    src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1600&q=85"
                    alt="Serengeti landscape at sunset"
                    className="aspect-[4/5] w-full rounded-[1rem] object-cover"
                  />
                </div>

                <div className="glass-card absolute -bottom-7 -right-4 hidden max-w-[220px] p-5 md:block">
                  <div className="text-[0.65rem] uppercase tracking-[0.18em] text-terracotta">
                    Our rule
                  </div>

                  <p className="mt-3 font-display text-2xl leading-snug">
                    We only include places we would stay in ourselves.
                  </p>
                </div>
              </div>

              <div>
                <span className="eyebrow">Our approach</span>

                <h2 className="mt-5 max-w-xl font-display text-5xl leading-tight md:text-6xl">
                  Homes chosen with feeling, not formulas.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                  We are drawn to places that feel memorable before anything
                  has even happened — a doorway, a view, a veranda, a team that
                  welcomes you like they already know you.
                </p>

                <div className="mt-10 grid gap-4">
                  {principles.map((principle) => {
                    const Icon = principle.icon;

                    return (
                      <div
                        key={principle.title}
                        className="glass-card glass-card-hover group grid gap-5 p-6 sm:grid-cols-[70px_1fr_auto] sm:items-center"
                      >
                        <div className="grid h-14 w-14 place-items-center rounded-full bg-terracotta/10 text-terracotta">
                          <Icon size={21} />
                        </div>

                        <div>
                          <div className="text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                            {principle.number}
                          </div>

                          <h3 className="mt-1 font-display text-2xl text-charcoal">
                            {principle.title}
                          </h3>

                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {principle.description}
                          </p>
                        </div>

                        <ArrowRight
                          size={18}
                          className="hidden text-terracotta transition-transform duration-300 group-hover:translate-x-1 sm:block"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="container-x">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <div>
                <span className="eyebrow">Tanzanian roots</span>

                <h2 className="mt-5 max-w-xl font-display text-5xl leading-tight md:text-6xl">
                  Built here.
                  <span className="block italic text-terracotta">
                    Run here.
                  </span>
                </h2>

                <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  Our team lives and works across Zanzibar, Dar es Salaam and
                  Arusha. Housekeepers, chefs, drivers, guides and property
                  managers are locally based and care for the collection
                  throughout the year.
                </p>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                  That local presence means recommendations are current,
                  arrivals feel personal and help is never coming from a distant
                  call centre.
                </p>

                <Link to="/contact" className="btn-primary mt-8">
                  Meet us in Tanzania
                  <ArrowRight size={15} />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card mt-12 overflow-hidden p-3">
                  <img
                    src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=85"
                    alt="Tanzanian landscape"
                    className="aspect-[4/5] w-full rounded-[1rem] object-cover"
                  />
                </div>

                <div className="glass-card overflow-hidden p-3">
                  <img
                    src="https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1000&q=85"
                    alt="Local Tanzanian experience"
                    className="aspect-[4/5] w-full rounded-[1rem] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="glass-section py-20 md:py-28">
          <div className="container-x">
            <div className="flex flex-wrap items-end justify-between gap-8">
              <div>
                <span className="eyebrow">The team</span>

                <h2 className="mt-5 max-w-xl font-display text-5xl leading-tight md:text-6xl">
                  People behind the collection.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                Different roles, one shared purpose: making every stay feel
                considered, smooth and genuinely welcoming.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member, index) => (
                <div
                  key={member.role}
                  className="glass-card glass-card-hover group overflow-hidden p-3"
                >
                  <div className="relative flex aspect-[4/5] items-end overflow-hidden rounded-[1rem] bg-gradient-to-br from-olive/20 via-white/20 to-terracotta/15">
                    <div className="absolute left-1/2 top-[22%] h-24 w-24 -translate-x-1/2 rounded-full bg-charcoal/10" />

                    <div className="absolute bottom-0 left-1/2 h-[55%] w-[78%] -translate-x-1/2 rounded-t-[50%] bg-charcoal/10" />

                    <div className="relative z-10 w-full p-5">
                      <span className="rounded-full border border-white/60 bg-white/35 px-3 py-1 text-[0.65rem] uppercase tracking-[0.15em] backdrop-blur-md">
                        Team portrait {index + 1}
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="text-[0.65rem] uppercase tracking-[0.18em] text-terracotta">
                      {member.location}
                    </div>

                    <h3 className="mt-2 font-display text-2xl text-charcoal">
                      {member.role}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="container-x">
            <div className="glass-card overflow-hidden p-3">
              <div className="relative min-h-[520px] overflow-hidden rounded-[1rem]">
                <img
                  src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2000&q=85"
                  alt="Tropical coastal stay"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/45 to-charcoal/10" />

                <div className="relative z-10 flex min-h-[520px] max-w-2xl flex-col justify-center p-8 text-ivory md:p-14">
                  <span className="eyebrow !text-ivory/70">
                    Your invitation
                  </span>

                  <h2 className="mt-5 font-display text-5xl leading-tight text-ivory md:text-6xl">
                    Come and experience the collection for yourself.
                  </h2>

                  <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/75">
                    Browse our homes, discover Tanzania and let our local team
                    help shape a stay that feels entirely your own.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      to="/properties"
                      className="inline-flex items-center gap-2 rounded-full bg-ivory px-6 py-3 text-sm font-medium text-charcoal transition hover:bg-terracotta hover:text-ivory"
                    >
                      Explore the stays
                      <ArrowRight size={15} />
                    </Link>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-ivory backdrop-blur-md transition hover:bg-white/20"
                    >
                      Speak with our team
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}