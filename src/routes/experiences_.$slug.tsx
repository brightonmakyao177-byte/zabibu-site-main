import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Clock } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { getExperience } from "@/lib/experiences";

export const Route = createFileRoute("/experiences_/$slug")({
  loader: ({ params }) => {
    const exp = getExperience(params.slug);

    if (!exp) {
      throw notFound();
    }

    return { exp };
  },

  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          {
            title: `${loaderData.exp.name} — Experiences — Zabibu Collection`,
          },
          {
            name: "description",
            content: loaderData.exp.short,
          },
          {
            property: "og:title",
            content: `${loaderData.exp.name} — Zabibu Collection`,
          },
          {
            property: "og:description",
            content: loaderData.exp.short,
          },
          {
            property: "og:image",
            content: loaderData.exp.image,
          },
        ]
      : [
          {
            title: "Experience not found — Zabibu Collection",
          },
          {
            name: "robots",
            content: "noindex",
          },
        ],
  }),

  component: ExperienceDetail,
  notFoundComponent: ExperienceNotFound,
});

const galleries: Record<string, string[]> = {
  "safari-journeys": [
    "photo-1516426122078-c23e76319801",
    "photo-1535338454770-8be927b5a00b",
    "photo-1547970810-dc1eac37d174",
    "photo-1523805009345-7448845a9e53",
  ],

  "cultural-experiences": [
    "photo-1505691938895-1758d7feb511",
    "photo-1596436889106-be35e843f974",
    "photo-1533104816931-20fa691ff6ca",
    "photo-1529156069898-49953e39b3ac",
  ],

  "airport-transfers": [
    "photo-1436491865332-7a61a109cc05",
    "photo-1542296332-2e4473faf563",
    "photo-1483450388369-9ed95738483c",
    "photo-1515569067071-ec3b51335dd0",
  ],

  "private-dining": [
    "photo-1504674900247-0877df9cc836",
    "photo-1414235077428-338989a2e8c0",
    "photo-1517248135467-4c7edcad34c5",
    "photo-1541544741938-0af808871cc0",
  ],

  "beach-activities": [
    "photo-1507525428034-b723cf961d3e",
    "photo-1544551763-46a013bb70d5",
    "photo-1530789253388-582c481c54b0",
    "photo-1510414842594-a61c69b5ae57",
  ],

  "mountain-excursions": [
    "photo-1552083375-1447ce886485",
    "photo-1464822759023-fed622ff2c3b",
    "photo-1454496522488-7a8e488e8606",
    "photo-1500530855697-b586d89ba3ee",
  ],
};

const image = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`;

function ExperienceNotFound() {
  return (
    <div className="min-h-screen bg-transparent">
      <Nav />

      <main className="container-x flex min-h-[75vh] items-center justify-center pb-24 pt-40">
        <div className="glass-card max-w-xl p-10 text-center md:p-14">
          <div className="eyebrow">Experiences</div>

          <h1 className="mt-4 font-display text-5xl text-charcoal">
            Experience not found.
          </h1>

          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            This experience may have moved or the link may be incorrect.
          </p>

          <Link to="/experiences" className="btn-primary mt-8">
            Browse experiences
            <ArrowRight size={15} />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function ExperienceDetail() {
  const { exp } = Route.useLoaderData();

  const gallery = (galleries[exp.slug] ?? []).map(image);
  const featuredImage = gallery[0] ?? exp.image;
  const remainingGalleryImages = gallery.slice(1);

  return (
    <div className="min-h-screen bg-transparent">
      <Nav transparent />

      <main>
        <section className="relative flex min-h-[76vh] items-end overflow-hidden pt-28">
          <img
            src={exp.image}
            alt={exp.name}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/25 to-charcoal/35" />

          <div className="container-x relative z-10 pb-16 text-ivory md:pb-20">
            <Breadcrumbs
              items={[
                {
                  label: "Experiences",
                  to: "/experiences",
                },
                {
                  label: exp.name,
                },
              ]}
            />

            <div className="eyebrow mt-7 !text-ivory/80">
              {exp.category}
            </div>

            <h1 className="mt-4 max-w-5xl font-display text-6xl leading-[0.98] text-ivory md:text-8xl">
              {exp.name}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/80 md:text-lg">
              {exp.short}
            </p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-ivory backdrop-blur-md">
              <Clock size={15} />
              {exp.duration}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-x grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="eyebrow">About</span>

              <h2 className="mt-4 max-w-md font-display text-4xl leading-tight md:text-5xl">
                What to expect.
              </h2>
            </div>

            <div className="space-y-7 text-lg text-muted-foreground lg:col-span-6 lg:col-start-7">
              <p className="leading-relaxed">{exp.intro}</p>

              <ul className="glass-card divide-y divide-white/55 overflow-hidden p-2">
                {exp.details.map((detail: string) => (
                  <li
                    key={detail}
                    className="flex items-center gap-4 px-4 py-5 text-base text-charcoal"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-terracotta/10 text-terracotta">
                      <Check size={15} />
                    </span>

                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="btn-primary mt-7">
                Ask about this experience
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        <section className="glass-section py-20 md:py-28">
          <div className="container-x">
            <div className="mb-12">
              <span className="eyebrow">Gallery</span>

              <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
                A glimpse of the experience.
              </h2>
            </div>

            <div className="grid grid-cols-12 gap-4 md:gap-6">
              <div className="glass-card col-span-12 overflow-hidden p-3 md:col-span-7">
                <img
                  src={featuredImage}
                  alt={`${exp.name} featured`}
                  className="aspect-[4/3] w-full rounded-[1rem] object-cover"
                />
              </div>

              <div className="col-span-12 grid grid-cols-2 gap-4 md:col-span-5 md:gap-6">
                {remainingGalleryImages.map((src, index) => (
                  <div
                    key={src}
                    className={`glass-card overflow-hidden p-3 ${
                      index === 0 ? "col-span-2" : ""
                    }`}
                  >
                    <img
                      src={src}
                      alt={`${exp.name} gallery image ${index + 2}`}
                      className={`w-full rounded-[1rem] object-cover ${
                        index === 0
                          ? "aspect-[16/9]"
                          : "aspect-square"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-x">
            <div className="glass-card overflow-hidden p-3">
              <div className="grid overflow-hidden rounded-[1rem] bg-olive text-ivory lg:grid-cols-[1.15fr_0.85fr]">
                <div className="p-8 md:p-12">
                  <span className="eyebrow !text-ivory/70">
                    Add it to your stay
                  </span>

                  <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight text-ivory md:text-5xl">
                    Let us arrange the details.
                  </h2>

                  <p className="mt-5 max-w-lg text-sm leading-relaxed text-ivory/75">
                    Speak with our team about availability, timing, transfers
                    and how this experience can fit into your Tanzania journey.
                  </p>

                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-ivory px-6 py-3 text-sm font-medium text-charcoal transition hover:bg-terracotta hover:text-ivory"
                  >
                    Speak with our team
                    <ArrowRight size={15} />
                  </Link>
                </div>

                <img
                  src={featuredImage}
                  alt=""
                  className="h-full min-h-[320px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}