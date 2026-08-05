import { Link } from "@tanstack/react-router";
import { Bath, BedDouble, Check, MapPin, MessageCircle, ShieldCheck, Star, Users } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ImageGallery } from "@/components/site/ImageGallery";
import { InquiryCard } from "@/components/site/InquiryCard";
import { PropertyCard } from "@/components/site/PropertyCard";
import { AvailabilityCalendar } from "@/components/properties/AvailabilityCalendar";
import { properties, type Property } from "@/lib/properties";

export function PropertyPageTemplate({ property }: { property: Property }) {
  const related = properties.filter((item) => item.slug !== property.slug && item.region === property.region)
    .concat(properties.filter((item) => item.slug !== property.slug && item.region !== property.region)).slice(0, 3);

  return (
    <div className="min-h-screen bg-transparent">
      <Nav transparent />
      <main>
        <section className="pb-6 pt-28">
          <div className="container-x">
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Stays", to: "/properties" }, { label: property.name }]} />
            <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
              <div>
                <div className="eyebrow">{property.type}</div>
                <h1 className="mt-3 font-display text-5xl text-charcoal md:text-7xl">{property.name}</h1>
                <div className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground"><MapPin size={14} /> {property.location}</div>
              </div>
              <div className="flex items-center gap-2 text-sm text-charcoal"><Star size={15} className="fill-current" /> New to the collection</div>
            </div>
          </div>
        </section>

        <section className="pb-12"><div className="container-x"><ImageGallery images={property.gallery} alt={property.name} /></div></section>

        <section className="pb-24">
          <div className="container-x grid gap-14 lg:grid-cols-[minmax(0,1fr)_380px]">
            <div>
              <div className="flex flex-wrap gap-8 border-b border-border pb-8">
                <Stat icon={<Users size={16} />} label="Guests" value={property.guests} />
                <Stat icon={<BedDouble size={16} />} label="Bedrooms" value={property.bedrooms} />
                <Stat icon={<Bath size={16} />} label="Bathrooms" value={property.bathrooms} />
                <Stat label="Property" value={property.type} />
              </div>

              <Section title="About this stay">
                <p className="font-display text-xl leading-relaxed text-charcoal">{property.intro}</p>
                <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">{property.description.map((text) => <p key={text}>{text}</p>)}</div>
              </Section>

              <Section title="What makes it special">
                <ul className="grid gap-3 sm:grid-cols-2">{property.highlights.map((highlight) => <li key={highlight} className="flex items-start gap-3 text-sm text-charcoal"><Check size={17} className="mt-0.5 shrink-0 text-terracotta" />{highlight}</li>)}</ul>
              </Section>

              <Section title="Availability"><AvailabilityCalendar propertySlug={property.slug} /></Section>

              <Section title="Amenities">
                <div className="grid gap-8 md:grid-cols-3">{property.amenities.map((group) => <div key={group.category}><h3 className="text-[0.7rem] uppercase tracking-[0.2em] text-charcoal">{group.category}</h3><ul className="mt-3 space-y-2 text-sm text-muted-foreground">{group.items.map((item) => <li key={item} className="flex gap-2"><Check size={14} className="mt-0.5 shrink-0" />{item}</li>)}</ul></div>)}</div>
              </Section>

              <Section title="Location">
                <div className="glass-card flex aspect-[16/8] items-center justify-center text-center text-sm text-muted-foreground"><div><MapPin className="mx-auto mb-3 text-terracotta" /><strong className="block font-display text-xl text-charcoal">{property.location}</strong><span>Connect your map provider here</span></div></div>
              </Section>

              <Section title="Nearby">
                <ul className="divide-y divide-border border-y border-border">{property.nearby.map((place) => <li key={place.name} className="grid gap-2 py-4 md:grid-cols-[240px_1fr]"><span className="font-display text-xl text-charcoal">{place.name}</span><span className="text-sm text-muted-foreground">{place.note}</span></li>)}</ul>
              </Section>

              <Section title="Good to know">
                <div className="grid gap-8 md:grid-cols-3">
                  <Info title="House rules" items={property.houseRules} />
                  <Info title="Arrival" items={[property.checkIn, property.checkOut]} />
                  <Info title="Cancellation" items={[property.cancellation]} />
                </div>
              </Section>

              <div className="glass-card mt-14 flex items-start gap-4 p-6"><ShieldCheck className="shrink-0 text-terracotta" /><div><h2 className="font-display text-2xl text-charcoal">Book with confidence</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Secure inquiry, transparent pricing and local guest support before and throughout your stay.</p></div></div>
            </div>

            <aside className="hidden lg:block"><div className="sticky top-28"><InquiryCard property={property} /></div></aside>
          </div>
        </section>

        <section className="glass-section py-24"><div className="container-x"><div className="mb-12 flex flex-wrap items-end justify-between gap-6"><div><span className="eyebrow">Continue exploring</span><h2 className="mt-3 font-display text-4xl">Similar stays</h2></div><Link to="/properties" className="link-underline">All stays</Link></div><div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">{related.map((item) => <PropertyCard key={item.slug} p={item} variant="compact" />)}</div></div></section>
      </main>
      <Footer />
      <div className="glass-panel fixed inset-x-3 bottom-3 z-30 flex items-center justify-between gap-3 rounded-2xl px-4 py-3 lg:hidden"><div><div className="text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">From</div><div className="font-display text-xl leading-none">${property.pricePerNight}<span className="text-xs text-muted-foreground"> /night</span></div></div><Link to="/booking" className="btn-primary flex-1 text-center"><MessageCircle size={14} /> Check availability</Link></div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="mt-14"><h2 className="mb-6 font-display text-3xl md:text-4xl">{title}</h2>{children}</section>;
}

function Stat({ icon, label, value }: { icon?: React.ReactNode; label: string; value: string | number }) {
  return <div className="min-w-[100px]"><div className="inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">{icon}{label}</div><div className="mt-1.5 font-display text-2xl text-charcoal">{value}</div></div>;
}

function Info({ title, items }: { title: string; items: string[] }) {
  return <div><h3 className="text-[0.7rem] uppercase tracking-[0.2em] text-charcoal">{title}</h3><ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">{items.map((item) => <li key={item}>{item}</li>)}</ul></div>;
}
