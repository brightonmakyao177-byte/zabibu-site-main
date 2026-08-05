import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { UploadCloud } from "lucide-react";

export const Route = createFileRoute("/list-your-property")({
  component: ListYourProperty,
  head: () => ({
    meta: [
      { title: "List your property — Zabibu Collection" },
      { name: "description", content: "Apply to have your Tanzanian property considered for the Zabibu Collection." },
    ],
  }),
});

// TODO: wire application form to a real endpoint.
function ListYourProperty() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-transparent">
      <Nav transparent />
      <section className="relative min-h-[70vh] flex items-end pt-28">
        <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2000&q=80" alt="Villa interior" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="container-x relative z-10 pb-16 text-ivory">
          <span className="eyebrow !text-ivory/85">For owners</span>
          <h1 className="mt-4 font-display text-ivory text-6xl md:text-8xl max-w-4xl">List your property with Zabibu.</h1>
          <p className="mt-6 max-w-xl text-ivory/85 leading-relaxed">
            We take on a small number of Tanzanian properties each year. If yours might be a fit, tell us a little about it below.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="eyebrow">What we look for</span>
            <ul className="mt-6 space-y-4 text-sm">
              {[
                { t: "A sense of place", d: "Properties that feel considered and grounded in Tanzania." },
                { t: "A local team", d: "An in-house team we can work with year-round." },
                { t: "Quality upkeep", d: "A commitment to maintenance and long-term care." },
                { t: "Exclusivity", d: "Some marketing exclusivity so we can represent your home properly." },
              ].map((r) => (
                <li key={r.t} className="border-t border-border pt-4">
                  <div className="font-display text-xl text-charcoal">{r.t}</div>
                  <div className="mt-1 text-muted-foreground">{r.d}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-8 md:p-10">
            {sent ? (
              <div className="py-16 text-center">
                <div className="eyebrow">Placeholder confirmation</div>
                <h2 className="mt-3 font-display text-3xl">Application received.</h2>
                <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto">
                  This form is front-end only — no submission has been made. Our team will typically respond to real applications within two weeks.
                </p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-6 md:grid-cols-2">
                <Input label="Owner name" required />
                <Input label="Email" type="email" required />
                <Input label="Phone" />
                <Input label="Existing listing URL (optional)" />
                <div className="my-2 h-px bg-white/55 md:col-span-2" />
                <Input label="Property name" required />
                <Input label="Location" required />
                <Select label="Property type">
                  <option>Villa</option><option>Apartment</option><option>Lodge</option>
                  <option>Townhouse</option><option>Retreat</option>
                </Select>
                <div className="grid grid-cols-2 gap-6">
                  <Input label="Bedrooms" type="number" />
                  <Input label="Max guests" type="number" />
                </div>
                <label className="md:col-span-2">
                  <span className="field-label">Property description</span>
                  <textarea className="input-field min-h-[140px]" required />
                </label>
                <div className="glass-soft border-dashed p-8 text-center md:col-span-2">
                  <UploadCloud size={22} className="mx-auto text-muted-foreground" />
                  <div className="mt-3 text-sm">Upload photographs</div>
                  <div className="text-[0.7rem] text-muted-foreground">Placeholder — upload functionality to be added.</div>
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="btn-primary">Submit application</button>
                  <p className="mt-4 text-[0.7rem] text-muted-foreground">Front-end only. No data is stored or transmitted.</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Input({ label, type = "text", required }: { label: string; type?: string; required?: boolean }) {
  return (
    <label>
      <span className="field-label">{label}</span>
      <input type={type} required={required} className="input-field" />
    </label>
  );
}
function Select({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label>
      <span className="field-label">{label}</span>
      <select className="input-field">{children}</select>
    </label>
  );
}
