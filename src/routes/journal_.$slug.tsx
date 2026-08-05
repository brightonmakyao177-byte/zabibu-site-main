import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  Quote,
} from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { getJournalPost, journalPosts } from "@/lib/journal";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export const Route = createFileRoute("/journal_/$slug")({
  loader: ({ params }) => {
    const post = getJournalPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} — Zabibu Journal` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:image", content: loaderData.post.image },
          { property: "og:type", content: "article" },
        ]
      : [
          { title: "Article not found — Zabibu Collection" },
          { name: "robots", content: "noindex" },
        ],
  }),
  component: JournalArticlePage,
  notFoundComponent: JournalNotFound,
});

function JournalNotFound() {
  return (
    <div className="min-h-screen bg-transparent">
      <Nav />
      <main className="container-x flex min-h-[75vh] items-center justify-center pb-24 pt-40">
        <div className="glass-card max-w-xl p-10 text-center md:p-14">
          <div className="eyebrow">Journal</div>
          <h1 className="mt-4 font-display text-5xl">Article not found.</h1>
          <p className="mt-5 text-sm text-muted-foreground">
            The story may have moved or the address may be incorrect.
          </p>
          <Link to="/journal" className="btn-primary mt-8">
            <ArrowLeft size={15} />
            Return to the journal
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function JournalArticlePage() {
  const { post } = Route.useLoaderData();
  const related = journalPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);
  const readingTime = getReadingTime(post.body);

  return (
    <div className="min-h-screen bg-transparent">
      <Nav transparent />

      <article>
        <section className="relative flex min-h-[88vh] items-end overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/15 to-charcoal/85" />

          <div className="container-x relative z-10 pb-16 pt-36 text-ivory md:pb-24">
            <Breadcrumbs
              items={[
                { label: "Journal", to: "/journal" },
                { label: post.title },
              ]}
            />

            <div className="mt-10 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.17em] text-ivory/80">
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-md">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-2">
                <CalendarDays size={14} />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 size={14} />
                {readingTime} min read
              </span>
            </div>

            <h1 className="mt-7 max-w-5xl font-display text-5xl leading-[0.98] text-ivory md:text-7xl lg:text-[6.2rem]">
              {post.title}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-ivory/80 md:text-lg">
              {post.excerpt}
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-x max-w-3xl">
            <div className="space-y-8 text-[1.05rem] leading-[1.9] text-charcoal md:text-lg">
              {post.body.map((paragraph: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: number) => (
                <div key={`${post.slug}-${index}`}>
                  <p>{paragraph}</p>

                  {index === 1 && (
                    <blockquote className="glass-card relative my-12 overflow-hidden p-8 md:p-10">
                      <Quote
                        size={44}
                        className="absolute right-6 top-6 text-terracotta/15"
                      />
                      <p className="relative font-display text-3xl leading-snug md:text-4xl">
                        The most memorable journeys leave enough room for a
                        place to reveal its own rhythm.
                      </p>
                    </blockquote>
                  )}
                </div>
              ))}
            </div>

            <div className="glass-card mt-16 overflow-hidden p-3">
              <div className="grid overflow-hidden rounded-[1rem] bg-olive text-ivory md:grid-cols-[1.1fr_0.9fr]">
                <div className="p-8 md:p-10">
                  <span className="eyebrow !text-ivory/70">
                    Plan your stay
                  </span>
                  <h2 className="mt-4 font-display text-4xl text-ivory">
                    Let this story become part of your journey.
                  </h2>
                  <p className="mt-5 text-sm leading-relaxed text-ivory/75">
                    Speak with the Zabibu team about stays, transfers and
                    thoughtful experiences across Tanzania.
                  </p>
                  <Link
                    to="/contact"
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-ivory px-6 py-3 text-sm font-medium text-charcoal transition hover:bg-terracotta hover:text-ivory"
                  >
                    Start a conversation
                    <ArrowRight size={15} />
                  </Link>
                </div>

                <img
                  src={post.image}
                  alt=""
                  className="h-full min-h-[280px] w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-12 border-t border-border pt-8">
              <Link to="/journal" className="link-underline">
                <ArrowLeft size={14} />
                Back to all stories
              </Link>
            </div>
          </div>
        </section>
      </article>

      <section className="glass-section py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow">Continue reading</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                More from the journal.
              </h2>
            </div>
            <Link to="/journal" className="link-underline">
              View all stories
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                to="/journal/$slug"
                params={{ slug: item.slug }}
                className="glass-card glass-card-hover group overflow-hidden p-3"
              >
                <div className="overflow-hidden rounded-[1rem]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="text-[0.67rem] uppercase tracking-[0.18em] text-terracotta">
                    {item.category}
                  </div>
                  <h3 className="mt-3 font-display text-2xl leading-tight group-hover:text-terracotta">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {item.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function getReadingTime(paragraphs: string[]) {
  const words = paragraphs.join(" ").trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}
