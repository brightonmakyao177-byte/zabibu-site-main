import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Mail,
  ShieldCheck,
} from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export type PolicySection = {
  id: string;
  title: string;
  content: ReactNode;
};

type PolicyPageProps = {
  eyebrow: string;
  title: string;
  introduction: string;
  lastUpdated: string;
  sections: PolicySection[];
  notice?: string;
};

export function PolicyPage({
  eyebrow,
  title,
  introduction,
  lastUpdated,
  sections,
  notice,
}: PolicyPageProps) {
  return (
    <div className="min-h-screen bg-transparent">
      <Nav transparent />

      <main>
        <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-charcoal pt-32 text-ivory">
          <img
            src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=2200&q=85"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-55"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal/90" />

          <div className="container-x relative z-10 pb-16 md:pb-24">
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-ivory/65">
              <Link to="/" className="transition hover:text-ivory">
                Home
              </Link>

              <ChevronRight size={13} />

              <span>{eyebrow}</span>
            </div>

            <span className="eyebrow mt-10 !text-ivory/75">{eyebrow}</span>

            <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.98] text-ivory md:text-7xl lg:text-[6.5rem]">
              {title}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-ivory/75 md:text-lg">
              {introduction}
            </p>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.14em] text-ivory/75 backdrop-blur-md">
              <CalendarDays size={14} />
              Last updated: {lastUpdated}
            </div>
          </div>
        </section>

        <section className="relative py-20 md:py-28">
          <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-terracotta/10 blur-3xl" />

          <div className="container-x relative z-10 grid gap-10 lg:grid-cols-[260px_minmax(0,760px)] lg:justify-center">
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-6">
                <div className="glass-card p-6">
                  <span className="eyebrow">On this page</span>

                  <nav className="mt-6 space-y-1">
                    {sections.map((section, index) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="group flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-muted-foreground transition hover:bg-white/40 hover:text-charcoal"
                      >
                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/60 bg-white/30 text-[0.65rem]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span>{section.title}</span>
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="glass-card p-6">
                  <ShieldCheck className="text-terracotta" size={24} />

                  <h3 className="mt-4 font-display text-2xl">
                    Need clarification?
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Speak with our team before confirming your booking.
                  </p>

                  <Link to="/contact" className="link-underline mt-5">
                    Contact Zabibu
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </aside>

            <div>
              {notice && (
                <div className="mb-8 flex gap-4 rounded-[1.25rem] border border-terracotta/20 bg-terracotta/5 p-5 text-sm leading-relaxed text-charcoal">
                  <CircleAlert
                    className="mt-0.5 shrink-0 text-terracotta"
                    size={20}
                  />

                  <p>{notice}</p>
                </div>
              )}

              <div className="space-y-6">
                {sections.map((section, index) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="glass-card scroll-mt-32 p-7 md:p-10"
                  >
                    <div className="flex items-start gap-5">
                      <span className="hidden h-10 w-10 shrink-0 place-items-center rounded-full bg-terracotta/10 text-xs font-medium text-terracotta sm:grid">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0 flex-1">
                        <h2 className="font-display text-3xl leading-tight text-charcoal md:text-4xl">
                          {section.title}
                        </h2>

                        <div className="policy-content mt-6 space-y-5 text-[0.97rem] leading-[1.85] text-muted-foreground">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
              </div>

              <div className="glass-card mt-10 overflow-hidden p-3">
                <div className="grid overflow-hidden rounded-[1rem] bg-olive text-ivory md:grid-cols-[1fr_auto] md:items-center">
                  <div className="p-7 md:p-9">
                    <span className="eyebrow !text-ivory/65">
                      Questions about these terms?
                    </span>

                    <h2 className="mt-3 font-display text-3xl text-ivory">
                      Our team is here to help.
                    </h2>

                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-ivory/70">
                      Contact us before booking if you need clarification about
                      payments, cancellations, personal information or special
                      arrangements.
                    </p>
                  </div>

                  <div className="px-7 pb-7 md:p-9">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-ivory px-6 py-3 text-sm font-medium text-charcoal transition hover:bg-terracotta hover:text-ivory"
                    >
                      <Mail size={15} />
                      Contact us
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

export function PolicyList({ children }: { children: ReactNode }) {
  return <ul className="space-y-4">{children}</ul>;
}

export function PolicyListItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2
        className="mt-1 shrink-0 text-terracotta"
        size={17}
      />

      <span>{children}</span>
    </li>
  );
}

export function PolicyHighlight({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/60 bg-white/30 p-5 text-charcoal">
      {children}
    </div>
  );
}