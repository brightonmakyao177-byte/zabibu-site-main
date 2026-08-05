import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { journalPosts } from "@/lib/journal";

export const Route = createFileRoute("/journal")({
  component: JournalPage,
  head: () => ({
    meta: [
      { title: "Journal — Zabibu Collection" },
      {
        name: "description",
        content:
          "Travel notes, safari guidance and thoughtful stories from Tanzania and Zanzibar.",
      },
    ],
  }),
});

function JournalPage() {
  const [featured, ...articles] = journalPosts;

  return (
    <div className="min-h-screen bg-transparent">
      <Nav />
      <PageHero
        eyebrow="Journal"
        title="Stories from the collection."
        intro="Travel notes, local perspectives and practical guidance for experiencing Tanzania thoughtfully."
      />

      <main>
        <section className="pb-12 pt-6 md:pb-20">
          <div className="container-x">
            <Link
              to="/journal/$slug"
              params={{ slug: featured.slug }}
              className="glass-card glass-card-hover group grid overflow-hidden p-3 lg:grid-cols-[1.25fr_0.75fr]"
            >
              <div className="overflow-hidden rounded-[1rem]">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="aspect-[16/10] h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-center p-6 md:p-10">
                <div className="eyebrow">Featured story</div>
                <h2 className="mt-4 font-display text-4xl leading-tight text-charcoal md:text-5xl">
                  {featured.title}
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span>{featured.category}</span>
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays size={14} />
                    {featured.date}
                  </span>
                </div>
                <span className="mt-7 inline-flex items-center gap-2 text-sm text-charcoal">
                  Read the story
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container-x">
            <div className="mb-12">
              <span className="eyebrow">Latest stories</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                Notes for the journey.
              </h2>
            </div>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((post) => (
                <Link
                  key={post.slug}
                  to="/journal/$slug"
                  params={{ slug: post.slug }}
                  className="glass-card glass-card-hover group flex h-full flex-col overflow-hidden p-3"
                >
                  <div className="aspect-[4/5] overflow-hidden rounded-[1rem] bg-white/25">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col px-3 pb-3 pt-6">
                    <div className="flex items-center justify-between gap-3 text-[0.67rem] uppercase tracking-[0.18em]">
                      <span className="text-terracotta">{post.category}</span>
                      <span className="text-muted-foreground">{post.date}</span>
                    </div>

                    <h2 className="mt-3 font-display text-3xl leading-tight transition-colors group-hover:text-terracotta">
                      {post.title}
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
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
      </main>

      <Footer />
    </div>
  );
}
