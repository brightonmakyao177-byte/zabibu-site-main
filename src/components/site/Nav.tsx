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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      {/* =========================
          DESKTOP / MOBILE HEADER
      ========================== */}
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
        <div className="pointer-events-auto mx-auto flex max-w-[1380px] items-center justify-between">

          {/* LOGO PILL */}
          <Link
            to="/"
            aria-label="Zabibu Collection home"
            className={[
              "group flex h-[58px] items-center gap-3 rounded-full",
              "border border-white/35 px-2.5 pr-5",
              "backdrop-blur-2xl backdrop-saturate-150",
              "transition-all duration-500",
              scrolled
                ? "bg-white/80 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.3)]"
                : "bg-white/35 shadow-[0_12px_40px_-18px_rgba(0,0,0,0.35)]",
            ].join(" ")}
          >
            <img
              src={logo}
              alt="Zabibu"
              className={[
                "h-10 w-10 shrink-0 rounded-full object-cover",
                "ring-1 ring-black/5",
                "transition-transform duration-500",
                "group-hover:scale-105",
              ].join(" ")}
            />

            <div className="flex items-baseline gap-2">
              <span className="font-display text-xl leading-none tracking-tight text-black">
                Zabibu
              </span>

              <span className="hidden text-[0.52rem] uppercase tracking-[0.25em] text-black/50 sm:block">
                Collection
              </span>
            </div>
          </Link>

          {/* =========================
              CENTER PILL NAVIGATION
          ========================== */}
          <div
            className={[
              "absolute left-1/2 hidden -translate-x-1/2 lg:block",
              "rounded-full border border-white/35",
              "backdrop-blur-2xl backdrop-saturate-150",
              "transition-all duration-500",
              scrolled
                ? "bg-white/80 shadow-[0_14px_45px_-18px_rgba(0,0,0,0.35)]"
                : "bg-white/35 shadow-[0_14px_45px_-20px_rgba(0,0,0,0.3)]",
            ].join(" ")}
          >
            <nav
              aria-label="Primary navigation"
              className="flex h-[58px] items-center gap-0.5 p-1.5"
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
                        "inline-flex h-[46px] items-center gap-1.5",
                        "rounded-full px-4",
                        "text-[0.65rem] font-medium uppercase",
                        "tracking-[0.12em] text-black/75",
                        "transition-all duration-300",
                        "hover:bg-black hover:text-white",
                      ].join(" ")}
                    >
                      {link.label}

                      <ChevronDown
                        size={12}
                        strokeWidth={1.8}
                        className={[
                          "transition-transform duration-300",
                          destOpen ? "rotate-180" : "",
                        ].join(" ")}
                      />
                    </Link>

                    {/* DESTINATIONS DROPDOWN */}
                    <div
                      className={[
                        "absolute left-1/2 top-full",
                        "w-[380px] -translate-x-1/2 pt-4",
                        "transition-all duration-300",
                        destOpen
                          ? "visible translate-y-0 opacity-100"
                          : "invisible -translate-y-2 opacity-0",
                      ].join(" ")}
                    >
                      <div
                        className={[
                          "overflow-hidden rounded-[28px]",
                          "border border-white/50",
                          "bg-white/85 p-3",
                          "shadow-[0_30px_80px_-25px_rgba(0,0,0,0.35)]",
                          "backdrop-blur-3xl backdrop-saturate-150",
                        ].join(" ")}
                      >
                        <div className="px-4 pb-3 pt-2">
                          <p className="text-[0.58rem] font-medium uppercase tracking-[0.24em] text-black/40">
                            Explore Tanzania
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-1">
                          {destinations.map((destination) => (
                            <Link
                              key={destination.slug}
                              to="/destinations/$slug"
                              params={{
                                slug: destination.slug,
                              }}
                              className={[
                                "rounded-2xl px-4 py-3",
                                "text-sm text-black/75",
                                "transition-all duration-200",
                                "hover:bg-black hover:text-white",
                              ].join(" ")}
                            >
                              {destination.name}
                            </Link>
                          ))}
                        </div>

                        <div className="mt-2 border-t border-black/5 p-2">
                          <Link
                            to="/destinations"
                            className={[
                              "flex items-center justify-center",
                              "rounded-2xl py-3",
                              "text-[0.62rem] font-medium uppercase",
                              "tracking-[0.16em]",
                              "transition-colors",
                              "hover:bg-black/5",
                            ].join(" ")}
                          >
                            View all destinations
                          </Link>
                        </div>
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
                      "flex h-[46px] items-center rounded-full px-4",
                      "text-[0.65rem] font-medium uppercase",
                      "tracking-[0.12em] text-black/75",
                      "transition-all duration-300",
                      "hover:bg-black hover:text-white",
                    ].join(" ")}
                    activeProps={{
                      className: "!bg-black !text-white",
                    }}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>
          </div>

          {/* =========================
              RIGHT ACTION PILL
          ========================== */}
          <div
            className={[
              "hidden h-[58px] items-center gap-1 rounded-full",
              "border border-white/35 p-1.5 pl-2",
              "backdrop-blur-2xl backdrop-saturate-150",
              "transition-all duration-500 lg:flex",
              scrolled
                ? "bg-white/80 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.3)]"
                : "bg-white/35 shadow-[0_12px_40px_-18px_rgba(0,0,0,0.35)]",
            ].join(" ")}
          >
            <Link
              to="/favorites"
              aria-label="Saved stays"
              className={[
                "grid h-[44px] w-[44px] place-items-center",
                "rounded-full text-black",
                "transition-all duration-300",
                "hover:bg-black hover:text-white",
              ].join(" ")}
            >
              <Heart size={17} strokeWidth={1.7} />
            </Link>

            <Link
              to="/booking"
              className={[
                "flex h-[44px] items-center rounded-full",
                "bg-black px-5 text-white",
                "text-[0.63rem] font-medium uppercase",
                "tracking-[0.15em]",
                "transition-all duration-300",
                "hover:scale-[1.02] hover:bg-black/80",
              ].join(" ")}
            >
              Plan your stay
            </Link>
          </div>

          {/* MOBILE PILL */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className={[
              "grid h-[52px] w-[52px] place-items-center rounded-full",
              "border border-white/35",
              "text-black backdrop-blur-2xl",
              "transition-all duration-300",
              "hover:bg-white/80 lg:hidden",
              scrolled
                ? "bg-white/80 shadow-lg"
                : "bg-white/35",
            ].join(" ")}
          >
            <Menu size={20} strokeWidth={1.8} />
          </button>
        </div>
      </header>

      {/* =========================
          MOBILE MENU
      ========================== */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-black/25 p-3 backdrop-blur-md lg:hidden">
          <div
            className={[
              "mx-auto flex h-full max-w-lg flex-col",
              "overflow-hidden rounded-[32px]",
              "border border-white/50 bg-white/90",
              "shadow-[0_30px_100px_-20px_rgba(0,0,0,0.45)]",
              "backdrop-blur-3xl",
            ].join(" ")}
          >
            {/* MOBILE HEADER */}
            <div className="flex items-center justify-between px-5 py-5">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3"
              >
                <img
                  src={logo}
                  alt="Zabibu"
                  className="h-11 w-11 rounded-full object-cover"
                />

                <div>
                  <span className="block font-display text-2xl leading-none">
                    Zabibu
                  </span>

                  <span className="mt-1 block text-[0.52rem] uppercase tracking-[0.25em] text-black/45">
                    Collection
                  </span>
                </div>
              </Link>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className={[
                  "grid h-11 w-11 place-items-center rounded-full",
                  "bg-black text-white",
                  "transition-transform duration-300",
                  "hover:rotate-90",
                ].join(" ")}
              >
                <X size={18} />
              </button>
            </div>

            {/* MOBILE LINKS */}
            <nav className="flex flex-1 flex-col overflow-y-auto px-4 pb-5">
              <div className="rounded-[28px] bg-black/[0.035] p-2">
                {links.map((link, index) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={[
                      "group flex items-center justify-between",
                      "rounded-[20px] px-4 py-3.5",
                      "transition-all duration-300",
                      "hover:bg-black hover:text-white",
                    ].join(" ")}
                  >
                    <span className="font-display text-[1.65rem]">
                      {link.label}
                    </span>

                    <span className="text-[0.58rem] tracking-[0.18em] opacity-40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>
                ))}

                <Link
                  to="/favorites"
                  onClick={() => setOpen(false)}
                  className={[
                    "flex items-center justify-between",
                    "rounded-[20px] px-4 py-3.5",
                    "transition-all duration-300",
                    "hover:bg-black hover:text-white",
                  ].join(" ")}
                >
                  <span className="font-display text-[1.65rem]">
                    Saved stays
                  </span>

                  <Heart size={18} />
                </Link>

                <Link
                  to="/list-your-property"
                  onClick={() => setOpen(false)}
                  className={[
                    "flex items-center justify-between",
                    "rounded-[20px] px-4 py-3.5",
                    "transition-all duration-300",
                    "hover:bg-black hover:text-white",
                  ].join(" ")}
                >
                  <span className="font-display text-[1.65rem]">
                    List your property
                  </span>

                  <span className="text-[0.58rem] tracking-[0.18em] opacity-40">
                    08
                  </span>
                </Link>
              </div>

              {/* MOBILE BOTTOM */}
              <div className="mt-auto pt-5">
                <Link
                  to="/booking"
                  onClick={() => setOpen(false)}
                  className={[
                    "flex h-14 w-full items-center justify-center",
                    "rounded-full bg-black text-white",
                    "text-[0.68rem] font-medium uppercase",
                    "tracking-[0.17em]",
                    "transition-transform duration-300",
                    "hover:scale-[0.98]",
                  ].join(" ")}
                >
                  Plan your stay
                </Link>

                <div className="mt-5 flex flex-col gap-1 px-2 text-xs text-black/45">
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