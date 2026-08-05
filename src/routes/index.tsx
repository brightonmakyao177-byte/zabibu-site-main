import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Compass,
  Heart,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PropertyCard } from "@/components/site/PropertyCard";
import { SearchBar } from "@/components/site/SearchBar";
import { DestinationCard } from "@/components/site/DestinationCard";
import { ExperienceCard } from "@/components/site/ExperienceCard";

import { properties } from "@/lib/properties";
import { destinations } from "@/lib/destinations";
import { experiences } from "@/lib/experiences";
import { journalPosts } from "@/lib/journal";

export const Route = createFileRoute("/")({
  component: Home,

  head: () => ({
    meta: [
      {
        title: "Zabibu Collection — Curated stays in Tanzania",
      },
      {
        name: "description",
        content:
          "Distinctive villas, apartments and retreats across Tanzania, brought together through thoughtful local hospitality.",
      },
      {
        property: "og:title",
        content: "Zabibu Collection — Curated stays in Tanzania",
      },
      {
        property: "og:description",
        content:
          "Distinctive villas, apartments and retreats across Tanzania.",
      },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
      },
    ],
  }),
});

const highlights = [
  {
    icon: MapPin,
    title: "Local knowledge",
    description: "Recommendations shaped by people who live here.",
  },
  {
    icon: Heart,
    title: "Closely held",
    description: "Every home is known and supported personally.",
  },
  {
    icon: ShieldCheck,
    title: "One attentive team",
    description: "Support from your first message to check-out.",
  },
  {
    icon: Sparkles,
    title: "Thoughtful details",
    description: "The small touches that make a stay memorable.",
  },
];

function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-transparent">
      <Nav transparent />

      <main>
        <Hero />
        <Intro />
        <Collection />
        <DestinationsSection />
        <ZabibuExperience />
        <ExperiencesSection />
        <BrandStory />
        <JournalPreview />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2200&q=85"
        alt="A private tropical villa in Tanzania"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/10 to-charcoal/80" />

      <div className="absolute left-[7%] top-[20%] hidden h-24 w-24 rounded-full border border-white/20 bg-white/10 backdrop-blur-md md:block" />

      <div className="absolute right-[10%] top-[30%] hidden h-14 w-14 rounded-full border border-white/20 bg-white/10 backdrop-blur-md lg:block" />

      <div className="container-x relative z-10 pb-12 pt-36 text-ivory md:pb-20">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div>
            <span className="eyebrow !text-ivory/80">
              Curated stays in Tanzania
            </span>

            <h1 className="mt-5 max-w-5xl font-display text-6xl leading-[0.9] text-ivory md:text-8xl lg:text-[8.5rem]">
              Stay somewhere
              <span className="block italic text-ivory/85">
                worth remembering.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-ivory/80 md:text-lg">
              Distinctive villas, apartments and retreats brought together
              through thoughtful Tanzanian hospitality and personal local
              support.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/properties"
                className="inline-flex items-center gap-2 rounded-full bg-ivory px-6 py-3 text-sm font-medium text-charcoal transition hover:bg-terracotta hover:text-ivory"
              >
                Explore the collection
                <ArrowRight size={15} />
              </Link>

              <Link
                to="/booking"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-ivory backdrop-blur-md transition hover:bg-white/20"
              >
                Plan your stay
              </Link>
            </div>
          </div>

          <div className="glass-card hidden border-white/20 bg-white/10 p-6 text-ivory backdrop-blur-xl lg:block">
            <Compass size={25} className="text-ivory/80" />

            <p className="mt-5 font-display text-2xl leading-snug text-ivory">
              Seven distinctive homes, one local team and countless ways to
              experience Tanzania.
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-ivory/65">
              <MapPin size={14} />
              Zanzibar · Arusha · Serengeti
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-5xl">
          <SearchBar variant="on-image" />
        </div>

        <a
          href="#intro"
          className="mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-ivory/60 transition hover:text-ivory"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md">
            <ArrowDown size={14} />
          </span>
          Discover Zabibu
        </a>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section
      id="intro"
      className="relative overflow-hidden py-20 md:py-32"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-terracotta/10 blur-3xl" />

      <div className="container-x relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Our approach</span>

            <h2 className="mt-5 max-w-xl font-display text-5xl leading-tight md:text-6xl">
              A more considered way to experience Tanzania.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-5 lg:col-start-8">
            <p>
              Zabibu Collection brings together distinctive properties across
              Tanzania, from ocean-facing villas to highland residences and
              safari retreats.
            </p>

            <p>
              Every home is one we know personally. Local guides, drivers,
              chefs and property teams care for the details so your stay feels
              smooth, personal and unmistakably Tanzanian.
            </p>

            <Link to="/about" className="link-underline mt-5">
              Read our story
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-4 md:gap-6">
          <div className="glass-card col-span-12 overflow-hidden p-3 md:col-span-8">
            <div className="group relative overflow-hidden rounded-[1rem]">
              <img
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=85"
                alt="Thoughtfully designed Zabibu interior"
                className="aspect-[16/10] w-full object-cover transition-transform duration-[1000ms] group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 text-ivory">
                <div className="text-xs uppercase tracking-[0.18em] text-ivory/70">
                  Thoughtful design
                </div>

                <div className="mt-2 font-display text-3xl">
                  Homes with a sense of place.
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 md:-mt-16 md:pt-24">
            <div className="glass-card overflow-hidden p-3">
              <div className="group relative overflow-hidden rounded-[1rem]">
                <img
                  src="https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=1200&q=85"
                  alt="Stone Town architectural detail"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-[1000ms] group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 p-5 text-ivory">
                  <div className="font-display text-2xl">
                    Rooted in Tanzania.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="glass-card glass-card-hover group p-6"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-terracotta/10 text-terracotta transition-transform duration-300 group-hover:-translate-y-1">
                  <Icon size={20} />
                </span>

                <h3 className="mt-5 font-display text-2xl text-charcoal">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Collection() {
  const [featured, ...rest] = properties;
  const secondary = rest.slice(0, 2);
  const smaller = rest.slice(2, 6);

  if (!featured) {
    return null;
  }

  return (
    <section className="glass-section py-20 md:py-32">
      <div className="container-x">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">The collection</span>

            <h2 className="mt-4 max-w-2xl font-display text-5xl leading-tight md:text-6xl">
              Distinctive homes,
              <span className="block italic text-terracotta">
                one collection.
              </span>
            </h2>
          </div>

          <Link to="/properties" className="link-underline">
            View all stays
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-12 gap-8 md:gap-10">
          <div className="col-span-12 lg:col-span-7">
            <PropertyCard p={featured} variant="featured" />
          </div>

          <div className="col-span-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {secondary.map((property) => (
              <PropertyCard
                key={property.slug}
                p={property}
                variant="compact"
              />
            ))}
          </div>

          {smaller.map((property) => (
            <div
              key={property.slug}
              className="col-span-12 sm:col-span-6 lg:col-span-3"
            >
              <PropertyCard p={property} variant="compact" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DestinationsSection() {
  const featured = destinations.slice(0, 4);

  if (featured.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-olive/10 blur-3xl" />

      <div className="container-x relative z-10">
        <div className="mb-14 grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <span className="eyebrow">Destinations</span>

            <h2 className="mt-4 max-w-3xl font-display text-5xl leading-tight md:text-6xl">
              From highland mornings to Indian Ocean evenings.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <Link to="/destinations" className="link-underline">
              Explore all destinations
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {featured[0] && (
            <div className="col-span-12 md:col-span-6">
              <DestinationCard d={featured[0]} size="lg" />
            </div>
          )}

          <div className="col-span-12 grid grid-cols-2 gap-4 md:col-span-6 md:gap-6">
            {featured.slice(1).map((destination) => (
              <DestinationCard
                key={destination.slug}
                d={destination}
                size="md"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ZabibuExperience() {
  const features = [
    {
      title: "Carefully selected stays",
      description:
        "Every property is chosen for its design, setting and quality of care.",
    },
    {
      title: "Local knowledge",
      description:
        "Advice from people who know what to see, what to skip and when to go.",
    },
    {
      title: "Personal guest support",
      description:
        "One attentive point of contact before, during and after your stay.",
    },
    {
      title: "Thoughtful experiences",
      description:
        "Safaris, transfers, chefs and guides arranged through trusted local partners.",
    },
  ];

  return (
    <section className="mx-3 overflow-hidden rounded-[1.75rem] sm:mx-5">
      <div className="relative overflow-hidden bg-olive py-20 text-ivory md:py-28">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/10" />

        <div className="absolute -bottom-40 left-[20%] h-96 w-96 rounded-full border border-white/10" />

        <div className="container-x relative z-10 grid items-center gap-14 lg:grid-cols-2">
          <div className="glass-card overflow-hidden border-white/15 bg-white/10 p-3">
            <div className="group relative overflow-hidden rounded-[1rem]">
              <img
                src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1600&q=85"
                alt="Safari landscape at sunset"
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1000ms] group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.16em] backdrop-blur-md">
                  <Star size={13} />
                  The Zabibu experience
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="eyebrow !text-ivory/65">
              What makes us different
            </span>

            <h2 className="mt-5 max-w-xl font-display text-5xl leading-tight text-ivory md:text-6xl">
              Quiet, personal and unmistakably Tanzanian.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/70">
              We combine distinctive homes with the human support needed to
              make travel feel effortless.
            </p>

            <div className="mt-10 divide-y divide-white/15 border-y border-white/15">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group grid gap-4 py-6 md:grid-cols-[60px_1fr_1.5fr] md:items-center"
                >
                  <span className="text-xs text-ivory/45">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="font-display text-2xl text-ivory">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-ivory/65">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm text-ivory"
            >
              Discover our approach
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperiencesSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container-x">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">Experiences</span>

            <h2 className="mt-4 max-w-2xl font-display text-5xl leading-tight md:text-6xl">
              Ways to spend your days.
            </h2>
          </div>

          <Link to="/experiences" className="link-underline">
            All experiences
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="space-y-5">
          {experiences.slice(0, 4).map((experience) => (
            <ExperienceCard key={experience.slug} e={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandStory() {
  return (
    <section className="glass-section py-20 md:py-32">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <span className="eyebrow">The name</span>

            <h2 className="mt-5 max-w-4xl font-display text-5xl leading-tight md:text-7xl">
              Zabibu means grapes in Swahili—
              <span className="italic text-terracotta">
                {" "}
                a small cluster, tended together.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              The collection began with two houses on the coast and a belief
              that Tanzania deserved a slower, more thoughtful kind of travel.
              The idea remains the same: fewer, better homes cared for by people
              who live here.
            </p>

            <Link to="/about" className="link-underline mt-8">
              Read the Zabibu story
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="glass-card p-8 md:p-10">
            <Users size={27} className="text-terracotta" />

            <p className="mt-6 font-display text-3xl leading-snug text-charcoal">
              Individual homes. Distinct personalities. One team connecting
              everything.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/60 bg-white/30 p-4">
                <div className="font-display text-4xl text-terracotta">
                  {properties.length}
                </div>

                <div className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Properties
                </div>
              </div>

              <div className="rounded-2xl border border-white/60 bg-white/30 p-4">
                <div className="font-display text-4xl text-terracotta">
                  {destinations.length}
                </div>

                <div className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Destinations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function JournalPreview() {
  const featuredArticles = journalPosts.slice(0, 3);

  return (
    <section className="py-20 md:py-32">
      <div className="container-x">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">Journal</span>

            <h2 className="mt-4 max-w-2xl font-display text-5xl leading-tight md:text-6xl">
              Stories, notes and inspiration from Tanzania.
            </h2>
          </div>

          <Link to="/journal" className="link-underline">
            All articles
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {featuredArticles.map((post, index) => (
            <Link
              key={post.slug}
              to="/journal/$slug"
              params={{ slug: post.slug }}
              className={`glass-card glass-card-hover group flex h-full flex-col overflow-hidden p-3 ${
                index === 1 ? "md:translate-y-10" : ""
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1rem] bg-white/25">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5 text-ivory">
                  <div className="text-[0.67rem] uppercase tracking-[0.18em] text-ivory/70">
                    {post.category}
                  </div>

                  <h3 className="mt-2 font-display text-3xl leading-tight text-ivory">
                    {post.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm text-charcoal">
                  Read article
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative mx-3 mb-3 flex min-h-[78vh] items-center overflow-hidden rounded-[1.75rem] sm:mx-5 sm:mb-5">
      <img
        src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2200&q=85"
        alt="Serengeti wildlife at sunset"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/45 to-charcoal/15" />

      <div className="container-x relative z-10 py-24 text-ivory">
        <div className="max-w-3xl">
          <span className="eyebrow !text-ivory/75">
            Ready when you are
          </span>

          <h2 className="mt-5 font-display text-6xl leading-[0.95] text-ivory md:text-8xl">
            Let Tanzania
            <span className="block italic text-ivory/85">
              stay with you.
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-ivory/75">
            Discover the collection or speak with our local team to create a
            stay shaped around you.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 rounded-full bg-ivory px-6 py-3 text-sm font-medium text-charcoal transition hover:bg-terracotta hover:text-ivory"
            >
              Explore the collection
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
    </section>
  );
}