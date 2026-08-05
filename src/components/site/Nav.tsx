import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Heart, Menu, X } from "lucide-react";
import { destinations } from "@/lib/destinations";
import { siteConfig } from "@/lib/site-config";
import logo from "@/assets/zabibu-logo.jpg";

type NavProps = {
  transparent?: boolean;
};

const links: {
  to: string;
  label: string;
  hasMenu?: boolean;
}[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/properties", label: "Our Collection" },
  {
    to: "/destinations",
    label: "Destinations",
    hasMenu: true,
  },
  { to: "/experiences", label: "Experiences" },
  { to: "/contact", label: "Contact" },
];

export function Nav({ transparent: _transparent = false }: NavProps) {
  const [open, setOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);

  // Close the mobile menu with Escape and prevent background scrolling.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      {/* Desktop and mobile header */}
      <header className="pointer-events-none fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5 sm:pt-4">
        <div
          className={[
            "pointer-events-auto mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4",
            "rounded-2xl border border-white/35 bg-white/20 text-black",
            "shadow-[0_18px_55px_-24px_rgba(0,0,0,0.45)]",
            "backdrop-blur-2xl backdrop-saturate-150",
            "sm:h-[4.5rem] sm:px-6",
          ].join(" ")}
        >
          {/* Logo */}
          <Link
            to="/"
            aria-label="Zabibu Collection home"
            className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
          >
            <img
              src={logo}
              alt="Zabibu"
              className={[
                "h-9 w-9 shrink-0 rounded-full object-cover",
                "ring-1 ring-white/60",
                "transition-transform duration-300 group-hover:scale-105",
                "sm:h-10 sm:w-10",
              ].join(" ")}
            />

            <span className="font-display text-xl leading-none tracking-tight sm:text-2xl">
              Zabibu
            </span>

            <span className="hidden text-[0.6rem] uppercase tracking-[0.26em] opacity-65 sm:inline">
              Collection
            </span>
          </Link>

          {/* Desktop links */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {links.map((link) =>
              link.hasMenu ? (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => setDestOpen(true)}
                  onMouseLeave={() => setDestOpen(false)}
                >
                  <Link
                    to={link.to}
                    className={[
                      "inline-flex items-center gap-1.5 rounded-full px-3.5 py-2",
                      "text-[0.7rem] font-medium uppercase tracking-[0.13em]",
                      "transition-colors hover:bg-white/30",
                    ].join(" ")}
                  >
                    {link.label}

                    <ChevronDown
                      size={13}
                      className={[
                        "transition-transform duration-200",
                        destOpen ? "rotate-180" : "",
                      ].join(" ")}
                    />
                  </Link>

                  {/* Glassy destinations dropdown */}
                  <div
                    className={[
                      "absolute left-1/2 top-full w-[360px] -translate-x-1/2 pt-3",
                      "transition-all duration-200",
                      destOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-1 opacity-0",
                    ].join(" ")}
                  >
                    <div
                      className={[
                        "rounded-2xl border border-white/40 bg-white/30 p-5",
                        "text-black backdrop-blur-2xl backdrop-saturate-150",
                        "shadow-[0_24px_70px_-28px_rgba(0,0,0,0.48)]",
                      ].join(" ")}
                    >
                      <div className="mb-3 text-[0.62rem] font-medium uppercase tracking-[0.22em] opacity-60">
                        Explore Tanzania
                      </div>

                      <ul className="grid grid-cols-2 gap-1">
                        {destinations.map((destination) => (
                          <li key={destination.slug}>
                            <Link
                              to="/destinations/$slug"
                              params={{
                                slug: destination.slug,
                              }}
                              className="block rounded-xl px-3 py-2.5 text-sm transition-colors hover:bg-white/35"
                            >
                              {destination.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  activeOptions={{
                    exact: link.to === "/",
                  }}
                  className={[
                    "rounded-full px-3.5 py-2",
                    "text-[0.7rem] font-medium uppercase tracking-[0.13em]",
                    "transition-colors hover:bg-white/30",
                  ].join(" ")}
                  activeProps={{
                    className: "bg-white/35",
                  }}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-2 lg:flex">
            <Link
              to="/favorites"
              aria-label="Saved stays"
              className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-white/30"
            >
              <Heart size={17} />
            </Link>

            <Link
              to="/booking"
              className={[
                "inline-flex h-10 items-center rounded-full px-5",
                "border border-white/50 bg-white/55 text-black",
                "text-[0.68rem] font-medium uppercase tracking-[0.15em]",
                "shadow-sm backdrop-blur-xl",
                "transition-colors hover:bg-white/80",
              ].join(" ")}
            >
              Plan your stay
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-white/30 lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu size={21} />
          </button>
        </div>
      </header>

      {/* Glassy mobile menu */}
      {open && (
        <div
          className={[
            "fixed inset-0 z-50 p-3 sm:p-5 lg:hidden",
            "bg-black/10 backdrop-blur-md",
          ].join(" ")}
        >
          <div
            className={[
              "mx-auto flex h-full max-w-lg flex-col overflow-hidden",
              "rounded-3xl border border-white/35 bg-white/20 text-black",
              "shadow-[0_30px_90px_-25px_rgba(0,0,0,0.5)]",
              "backdrop-blur-2xl backdrop-saturate-150",
            ].join(" ")}
          >
            {/* Mobile menu heading */}
            <div className="flex h-[4.5rem] items-center justify-between border-b border-white/30 px-5">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3"
              >
                <img
                  src={logo}
                  alt="Zabibu"
                  className="h-10 w-10 rounded-full object-cover ring-1 ring-white/60"
                />

                <div>
                  <span className="block font-display text-2xl leading-none">
                    Zabibu
                  </span>

                  <span className="mt-1 block text-[0.55rem] uppercase tracking-[0.24em] opacity-60">
                    Collection
                  </span>
                </div>
              </Link>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className={[
                  "grid h-10 w-10 place-items-center rounded-full",
                  "border border-white/35 bg-white/25",
                  "transition-all hover:rotate-90 hover:bg-white/45",
                ].join(" ")}
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile navigation links */}
            <nav
              aria-label="Mobile navigation"
              className="flex flex-1 flex-col justify-between overflow-y-auto px-5 py-7"
            >
              <ul className="space-y-0.5">
                {links.map((link, index) => (
                  <li
                    key={link.to}
                    className="border-b border-white/30"
                  >
                    <Link
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className={[
                        "group flex items-center justify-between rounded-xl px-2 py-3",
                        "font-display text-3xl transition-colors hover:bg-white/25",
                        "sm:text-4xl",
                      ].join(" ")}
                    >
                      <span>{link.label}</span>

                      <span className="font-sans text-[0.62rem] tracking-[0.18em] opacity-50">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </li>
                ))}

                <li className="border-b border-white/30">
                  <Link
                    to="/favorites"
                    onClick={() => setOpen(false)}
                    className={[
                      "flex items-center justify-between rounded-xl px-2 py-3",
                      "font-display text-3xl transition-colors hover:bg-white/25",
                      "sm:text-4xl",
                    ].join(" ")}
                  >
                    Saved stays
                    <Heart size={19} />
                  </Link>
                </li>

                <li className="border-b border-white/30">
                  <Link
                    to="/list-your-property"
                    onClick={() => setOpen(false)}
                    className={[
                      "flex items-center justify-between rounded-xl px-2 py-3",
                      "font-display text-3xl transition-colors hover:bg-white/25",
                      "sm:text-4xl",
                    ].join(" ")}
                  >
                    List your property
                    <span className="font-sans text-[0.62rem] tracking-[0.18em] opacity-50">
                      08
                    </span>
                  </Link>
                </li>
              </ul>

              {/* Mobile menu bottom */}
              <div className="pt-8">
                <Link
                  to="/booking"
                  onClick={() => setOpen(false)}
                  className={[
                    "flex h-12 w-full items-center justify-center rounded-full",
                    "border border-white/50 bg-white/55 text-black",
                    "text-[0.72rem] font-medium uppercase tracking-[0.16em]",
                    "shadow-sm backdrop-blur-xl",
                    "transition-colors hover:bg-white/80",
                  ].join(" ")}
                >
                  Plan your stay
                </Link>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-2 text-xs opacity-60">
                  <span>{siteConfig.contact.email}</span>
                  <span>{siteConfig.contact.phone}</span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}