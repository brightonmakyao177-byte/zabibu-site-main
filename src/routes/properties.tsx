import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, type ReactNode } from "react";
import {
  ArrowRight,
  BedDouble,
  Building2,
  LayoutGrid,
  Map as MapIcon,
  MapPin,
  RotateCcw,
  SlidersHorizontal,
  Sparkles,
  Waves,
} from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PropertyCard } from "@/components/site/PropertyCard";
import { SearchBar } from "@/components/site/SearchBar";
import { FilterDrawer } from "@/components/site/FilterDrawer";
import { EmptyState } from "@/components/site/EmptyState";
import { properties } from "@/lib/properties";

export const Route = createFileRoute("/properties")({
  component: PropertiesPage,

  head: () => ({
    meta: [
      {
        title: "All stays — Zabibu Collection",
      },
      {
        name: "description",
        content:
          "Browse curated villas, apartments, safari lodges and retreats across Tanzania with Zabibu Collection.",
      },
      {
        property: "og:title",
        content: "The Zabibu Collection",
      },
      {
        property: "og:description",
        content:
          "Distinctive stays across Zanzibar, Arusha, Dar es Salaam and Tanzania's safari landscapes.",
      },
    ],
  }),
});

const TYPES = [
  "Beach villa",
  "Townhouse",
  "Safari lodge",
  "Apartment",
  "Highland retreat",
  "Beach bungalows",
  "Penthouse",
];

const AMENITIES = [
  "Private pool",
  "Beach access",
  "Wi-Fi",
  "Air conditioning",
  "Chef",
  "Housekeeping",
];

const quickCollections = [
  {
    icon: Waves,
    label: "By the ocean",
    type: "Beach villa",
  },
  {
    icon: Sparkles,
    label: "Safari escapes",
    type: "Safari lodge",
  },
  {
    icon: Building2,
    label: "City stays",
    type: "Apartment",
  },
  {
    icon: BedDouble,
    label: "Larger homes",
    bedrooms: 4,
  },
];

type SortOption = "featured" | "price-asc" | "price-desc";
type ViewOption = "grid" | "map";

function PropertiesPage() {
  const [type, setType] = useState<string | null>(null);
  const [bedrooms, setBedrooms] = useState(0);
  const [price, setPrice] = useState(800);
  const [sort, setSort] = useState<SortOption>("featured");
  const [view, setView] = useState<ViewOption>("grid");
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [loading] = useState(false);

  const filtered = useMemo(() => {
    let result = properties.filter(
      (property) =>
        (!type || property.type === type) &&
        property.bedrooms >= bedrooms &&
        property.pricePerNight <= price,
    );

    if (sort === "price-asc") {
      result = [...result].sort(
        (a, b) => a.pricePerNight - b.pricePerNight,
      );
    }

    if (sort === "price-desc") {
      result = [...result].sort(
        (a, b) => b.pricePerNight - a.pricePerNight,
      );
    }

    return result;
  }, [type, bedrooms, price, sort]);

  const filtersActive =
    type !== null ||
    bedrooms !== 0 ||
    price !== 800 ||
    selectedAmenities.length > 0;

  function resetFilters() {
    setType(null);
    setBedrooms(0);
    setPrice(800);
    setSelectedAmenities([]);
    setSort("featured");
  }

  function toggleAmenity(amenity: string) {
    setSelectedAmenities((current) =>
      current.includes(amenity)
        ? current.filter((item) => item !== amenity)
        : [...current, amenity],
    );
  }

  function applyQuickCollection(item: {
    type?: string;
    bedrooms?: number;
  }) {
    setType(item.type ?? null);
    setBedrooms(item.bedrooms ?? 0);
    setView("grid");
  }

  const filterPanel = (
    <div className="space-y-9">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="eyebrow">Refine your stay</div>

          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Shape the collection around the way you want to travel.
          </p>
        </div>

        {filtersActive && (
          <button
            type="button"
            onClick={resetFilters}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/60 bg-white/30 text-charcoal transition hover:bg-charcoal hover:text-ivory"
            aria-label="Reset all filters"
          >
            <RotateCcw size={14} />
          </button>
        )}
      </div>

      <FilterGroup title="Property type">
        <div className="flex flex-wrap gap-2">
          <Chip active={type === null} onClick={() => setType(null)}>
            All stays
          </Chip>

          {TYPES.map((propertyType) => (
            <Chip
              key={propertyType}
              active={type === propertyType}
              onClick={() => setType(propertyType)}
            >
              {propertyType}
            </Chip>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Bedrooms">
        <div className="grid grid-cols-5 gap-2">
          {[0, 2, 3, 4, 5].map((amount) => (
            <Chip
              key={amount}
              active={bedrooms === amount}
              onClick={() => setBedrooms(amount)}
              full
            >
              {amount === 0 ? "Any" : `${amount}+`}
            </Chip>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title={`Up to $${price} per night`}>
        <div className="rounded-2xl border border-white/60 bg-white/25 p-4">
          <input
            type="range"
            min={100}
            max={800}
            step={20}
            value={price}
            onChange={(event) => setPrice(Number(event.target.value))}
            className="w-full accent-charcoal"
          />

          <div className="mt-3 flex justify-between text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
            <span>$100</span>
            <span>$800+</span>
          </div>
        </div>
      </FilterGroup>

      <FilterGroup title="Stay preferences">
        <div className="flex flex-wrap gap-2">
          {AMENITIES.map((amenity) => (
            <Chip
              key={amenity}
              active={selectedAmenities.includes(amenity)}
              onClick={() => toggleAmenity(amenity)}
            >
              {amenity}
            </Chip>
          ))}
        </div>

        <p className="mt-3 text-[0.7rem] leading-relaxed text-muted-foreground">
          Preferences will be shared with the Zabibu team when you enquire.
        </p>
      </FilterGroup>

      {filtersActive && (
        <button
          type="button"
          onClick={resetFilters}
          className="btn-outline w-full justify-center"
        >
          <RotateCcw size={14} />
          Reset all filters
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen overflow-hidden bg-transparent">
      <Nav transparent />

      <main>
        <CollectionHero />

        <section className="relative py-16 md:py-24">
          <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-terracotta/10 blur-3xl" />

          <div className="container-x relative z-10">
            <QuickCollections onSelect={applyQuickCollection} />

            <div className="mt-14 grid gap-12 lg:grid-cols-[290px_minmax(0,1fr)]">
              <aside className="hidden lg:block">
                <div className="glass-card sticky top-28 p-7">
                  {filterPanel}
                </div>
              </aside>

              <div className="min-w-0">
                <CollectionToolbar
                  count={filtered.length}
                  sort={sort}
                  setSort={setSort}
                  view={view}
                  setView={setView}
                  filterPanel={filterPanel}
                  filtersActive={filtersActive}
                  resetFilters={resetFilters}
                />

                {loading ? (
                  <LoadingProperties />
                ) : filtered.length === 0 ? (
                  <div className="mt-10">
                    <EmptyState
                      title="No stays match your filters."
                      description="Try increasing your budget, reducing the bedroom count or exploring another type of stay."
                      actionLabel="View all stays"
                      actionTo="/properties"
                    />

                    <div className="mt-6 text-center">
                      <button
                        type="button"
                        onClick={resetFilters}
                        className="link-underline"
                      >
                        Reset filters
                      </button>
                    </div>
                  </div>
                ) : view === "map" ? (
                  <MapView
                    count={filtered.length}
                    onReturn={() => setView("grid")}
                  />
                ) : (
                  <PropertyGrid propertiesToShow={filtered} />
                )}

                <div className="glass-card mt-20 overflow-hidden p-3">
                  <div className="relative overflow-hidden rounded-[1rem] bg-olive text-ivory">
                    <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full border border-white/10" />

                    <div className="grid items-center gap-8 p-8 md:grid-cols-[1fr_auto] md:p-10">
                      <div>
                        <span className="eyebrow !text-ivory/65">
                          Personal recommendations
                        </span>

                        <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight text-ivory md:text-4xl">
                          Not sure which home feels right?
                        </h2>

                        <p className="mt-4 max-w-xl text-sm leading-relaxed text-ivory/70">
                          Tell us where you are travelling, who is coming and
                          the kind of stay you have in mind. Our local team will
                          recommend the best options.
                        </p>
                      </div>

                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-ivory px-6 py-3 text-sm font-medium text-charcoal transition hover:bg-terracotta hover:text-ivory"
                      >
                        Speak with our team
                        <ArrowRight size={15} />
                      </Link>
                    </div>
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

function CollectionHero() {
  return (
    <section className="relative flex min-h-[78vh] items-end overflow-hidden pt-28">
      <img
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85"
        alt="Luxury property in the Zabibu Collection"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/20 to-charcoal/85" />

      <div className="container-x relative z-10 pb-14 text-ivory md:pb-20">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <span className="eyebrow !text-ivory/75">
              The Zabibu Collection
            </span>

            <h1 className="mt-5 max-w-5xl font-display text-6xl leading-[0.92] text-ivory md:text-8xl">
              Find your place
              <span className="block italic text-ivory/85">
                in Tanzania.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-ivory/75 md:text-lg">
              From private coastal villas to highland homes, city apartments
              and safari retreats—each property is selected for its character,
              location and care.
            </p>
          </div>

          <div className="glass-card hidden border-white/20 bg-white/10 p-6 text-ivory backdrop-blur-xl lg:block">
            <MapPin size={23} />

            <div className="mt-5 font-display text-3xl text-ivory">
              {properties.length}
            </div>

            <p className="mt-1 text-xs uppercase tracking-[0.17em] text-ivory/65">
              Curated Tanzanian stays
            </p>

            <p className="mt-5 text-sm leading-relaxed text-ivory/70">
              Every home is supported by one attentive local hosting team.
            </p>
          </div>
        </div>

        <div className="mt-10 max-w-5xl">
          <SearchBar variant="on-image" />
        </div>
      </div>
    </section>
  );
}

function QuickCollections({
  onSelect,
}: {
  onSelect: (item: { type?: string; bedrooms?: number }) => void;
}) {
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="eyebrow">Start with a feeling</span>

          <h2 className="mt-3 font-display text-3xl md:text-4xl">
            What kind of stay are you imagining?
          </h2>
        </div>

        <div className="hidden items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground md:flex">
          <SlidersHorizontal size={14} />
          Choose a collection
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quickCollections.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              type="button"
              onClick={() => onSelect(item)}
              className="glass-card glass-card-hover group flex items-center gap-4 p-5 text-left"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-terracotta/10 text-terracotta transition-transform duration-300 group-hover:-translate-y-1">
                <Icon size={20} />
              </span>

              <div>
                <div className="font-display text-xl text-charcoal">
                  {item.label}
                </div>

                <div className="mt-1 text-xs text-muted-foreground">
                  Explore collection
                </div>
              </div>

              <ArrowRight
                size={15}
                className="ml-auto text-terracotta transition-transform group-hover:translate-x-1"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

function CollectionToolbar({
  count,
  sort,
  setSort,
  view,
  setView,
  filterPanel,
  filtersActive,
  resetFilters,
}: {
  count: number;
  sort: SortOption;
  setSort: (value: SortOption) => void;
  view: ViewOption;
  setView: (value: ViewOption) => void;
  filterPanel: ReactNode;
  filtersActive: boolean;
  resetFilters: () => void;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-5 border-b border-border pb-6">
      <div>
        <div className="font-display text-2xl text-charcoal">
          {count} stay{count === 1 ? "" : "s"}
        </div>

        <div className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
          Across Tanzania
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {filtersActive && (
          <button
            type="button"
            onClick={resetFilters}
            className="hidden items-center gap-2 text-xs text-muted-foreground transition hover:text-charcoal sm:inline-flex"
          >
            <RotateCcw size={13} />
            Reset
          </button>
        )}

        <FilterDrawer>{filterPanel}</FilterDrawer>

        <label className="hidden items-center gap-2 text-xs uppercase tracking-[0.14em] sm:inline-flex">
          Sort

          <select
            value={sort}
            onChange={(event) =>
              setSort(event.target.value as SortOption)
            }
            className="glass-control min-h-10 px-3 py-1 pr-8 focus:outline-none"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price · low to high</option>
            <option value="price-desc">Price · high to low</option>
          </select>
        </label>

        <div className="glass-control flex overflow-hidden rounded-xl p-1">
          <button
            type="button"
            onClick={() => setView("grid")}
            aria-label="Grid view"
            aria-pressed={view === "grid"}
            className={`rounded-lg p-2.5 transition-colors ${
              view === "grid"
                ? "bg-charcoal text-ivory"
                : "text-charcoal hover:bg-white/55"
            }`}
          >
            <LayoutGrid size={15} />
          </button>

          <button
            type="button"
            onClick={() => setView("map")}
            aria-label="Map view"
            aria-pressed={view === "map"}
            className={`rounded-lg p-2.5 transition-colors ${
              view === "map"
                ? "bg-charcoal text-ivory"
                : "text-charcoal hover:bg-white/55"
            }`}
          >
            <MapIcon size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

function PropertyGrid({
  propertiesToShow,
}: {
  propertiesToShow: typeof properties;
}) {
  return (
    <div className="mt-10 grid gap-x-10 gap-y-16 sm:grid-cols-2">
      {propertiesToShow.map((property, index) => (
        <div
          key={property.slug}
          className={index % 4 === 1 ? "sm:translate-y-10" : ""}
        >
          <PropertyCard p={property} />
        </div>
      ))}
    </div>
  );
}

function MapView({
  count,
  onReturn,
}: {
  count: number;
  onReturn: () => void;
}) {
  return (
    <div className="glass-card mt-10 overflow-hidden p-3">
      <div className="relative min-h-[620px] overflow-hidden rounded-[1rem] bg-[#d9d6c7]">
        <div className="absolute inset-0 opacity-35">
          <div className="absolute left-[15%] top-[18%] h-px w-[72%] rotate-12 bg-charcoal/30" />
          <div className="absolute left-[8%] top-[48%] h-px w-[82%] -rotate-6 bg-charcoal/30" />
          <div className="absolute left-[30%] top-[10%] h-[78%] w-px rotate-6 bg-charcoal/30" />
          <div className="absolute left-[65%] top-[6%] h-[88%] w-px -rotate-12 bg-charcoal/30" />
        </div>

        <div className="absolute left-[18%] top-[28%]">
          <MapMarker label="Arusha" />
        </div>

        <div className="absolute left-[58%] top-[18%]">
          <MapMarker label="Serengeti" />
        </div>

        <div className="absolute bottom-[24%] right-[18%]">
          <MapMarker label="Zanzibar" />
        </div>

        <div className="absolute bottom-[12%] left-[38%]">
          <MapMarker label="Dar es Salaam" />
        </div>

        <div className="absolute inset-x-5 bottom-5">
          <div className="glass-card flex flex-wrap items-center justify-between gap-5 p-5">
            <div>
              <div className="eyebrow">Collection map</div>

              <p className="mt-2 text-sm text-muted-foreground">
                Showing {count} curated stay{count === 1 ? "" : "s"} across
                Tanzania.
              </p>
            </div>

            <button
              type="button"
              onClick={onReturn}
              className="btn-primary"
            >
              <LayoutGrid size={14} />
              Return to grid
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MapMarker({ label }: { label: string }) {
  return (
    <div className="group relative">
      <div className="grid h-12 w-12 place-items-center rounded-full border-4 border-white bg-terracotta text-ivory shadow-xl transition-transform group-hover:-translate-y-1">
        <MapPin size={18} />
      </div>

      <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-charcoal px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.14em] text-ivory">
        {label}
      </div>
    </div>
  );
}

function LoadingProperties() {
  return (
    <div className="mt-10 grid gap-x-10 gap-y-16 sm:grid-cols-2">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="aspect-[5/4] rounded-3xl bg-white/40" />
          <div className="mt-5 h-3 w-24 rounded-full bg-white/40" />
          <div className="mt-3 h-6 w-2/3 rounded-full bg-white/40" />
          <div className="mt-3 h-3 w-1/2 rounded-full bg-white/40" />
        </div>
      ))}
    </div>
  );
}

function FilterGroup({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-charcoal">
        {title}
      </div>

      {children}
    </div>
  );
}

function Chip({
  children,
  active = false,
  onClick,
  full = false,
}: {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
  full?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`min-h-9 rounded-full border px-3 py-1.5 text-xs transition-all ${
        full ? "w-full" : ""
      } ${
        active
          ? "border-charcoal bg-charcoal text-ivory shadow-sm"
          : "border-white/70 bg-white/35 text-charcoal hover:-translate-y-0.5 hover:border-white hover:bg-white/65"
      }`}
    >
      {children}
    </button>
  );
}