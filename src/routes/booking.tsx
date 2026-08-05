import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { properties } from "@/lib/properties";
import { Check, ArrowRight, ArrowLeft, CalendarDays, Users, Sparkles, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/booking")({
  component: BookingFlow,
  head: () => ({ meta: [{ title: "Plan your stay — Zabibu Collection" }, { name: "description", content: "Send a booking request to the Zabibu Collection team." }] }),
});

const STEPS = ["Stay details", "Guest information", "Review request", "Request received"] as const;

function BookingFlow() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ property: properties[0].slug, checkIn: "", checkOut: "", guests: 2, firstName: "", lastName: "", email: "", phone: "", notes: "" });
  const property = properties.find((p) => p.slug === data.property)!;

  return (
    <div className="min-h-screen bg-transparent">
      <Nav />
      <PageHero eyebrow="Plan your stay" title="Your Tanzanian stay starts here." intro="Share your travel details and our local team will shape the next steps with you." />
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-terracotta/10 blur-3xl" />
        <div className="container-x relative z-10 max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div>
              <ol className="glass-panel mb-8 grid gap-3 rounded-[1.5rem] p-4 sm:grid-cols-4">
                {STEPS.map((label, i) => <li key={label} className={`rounded-2xl px-3 py-3 ${i === step ? "bg-white/60 shadow-sm" : ""}`}><div className="flex items-center gap-3"><span className={`grid h-9 w-9 place-items-center rounded-full border text-xs ${i < step ? "bg-charcoal text-ivory border-charcoal" : i === step ? "bg-terracotta text-ivory border-terracotta" : "border-white/70 bg-white/30"}`}>{i < step ? <Check size={13} /> : i + 1}</span><span className="text-xs">{label}</span></div></li>)}
              </ol>

              {step === 0 && <StepCard title="Choose your stay"><label><span className="field-label">Property</span><select value={data.property} onChange={(e) => setData({ ...data, property: e.target.value })} className="input-field">{properties.map((p) => <option key={p.slug} value={p.slug}>{p.name} — {p.location}</option>)}</select></label><div className="grid gap-6 md:grid-cols-3 mt-6"><Field label="Check-in"><input type="date" value={data.checkIn} onChange={(e) => setData({ ...data, checkIn: e.target.value })} className="input-field" /></Field><Field label="Check-out"><input type="date" value={data.checkOut} onChange={(e) => setData({ ...data, checkOut: e.target.value })} className="input-field" /></Field><Field label="Guests"><select value={data.guests} onChange={(e) => setData({ ...data, guests: Number(e.target.value) })} className="input-field">{Array.from({ length: property.guests }, (_, i) => i + 1).map((n) => <option key={n}>{n}</option>)}</select></Field></div></StepCard>}
              {step === 1 && <StepCard title="About you"><div className="grid gap-6 md:grid-cols-2"><Text label="First name" value={data.firstName} onChange={(v) => setData({ ...data, firstName: v })} /><Text label="Last name" value={data.lastName} onChange={(v) => setData({ ...data, lastName: v })} /><Text label="Email" value={data.email} type="email" onChange={(v) => setData({ ...data, email: v })} /><Text label="Phone" value={data.phone} onChange={(v) => setData({ ...data, phone: v })} /><label className="md:col-span-2"><span className="field-label">Anything else?</span><textarea value={data.notes} onChange={(e) => setData({ ...data, notes: e.target.value })} className="input-field min-h-[140px]" /></label></div></StepCard>}
              {step === 2 && <StepCard title="Review your request"><dl className="rounded-2xl border border-white/60 overflow-hidden"><ReviewRow label="Property" value={property.name} /><ReviewRow label="Dates" value={`${data.checkIn || "—"} → ${data.checkOut || "—"}`} /><ReviewRow label="Guests" value={String(data.guests)} /><ReviewRow label="Name" value={`${data.firstName} ${data.lastName}`} /><ReviewRow label="Contact" value={`${data.email} · ${data.phone}`} /></dl></StepCard>}
              {step === 3 && <div className="glass-card p-12 text-center"><div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-terracotta/10 text-terracotta"><Check size={26} /></div><h2 className="mt-6 font-display text-4xl">Request received.</h2><p className="mt-4 text-muted-foreground">Thanks, {data.firstName || "traveller"}.</p><Link to="/properties" className="btn-primary mt-8">Browse more stays</Link></div>}

              {step < 3 && <div className="mt-8 flex justify-between"><button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="link-underline disabled:opacity-30"><ArrowLeft size={14} /> Back</button><button onClick={() => setStep((s) => s + 1)} className="btn-primary">{step === 2 ? "Send request" : "Continue"} <ArrowRight size={14} /></button></div>}
            </div>

            <aside><div className="glass-card sticky top-28 overflow-hidden p-3"><img src={property.image} alt={property.name} className="aspect-[4/3] w-full rounded-[1rem] object-cover" /><div className="p-5"><div className="eyebrow">Selected stay</div><h3 className="mt-2 font-display text-3xl">{property.name}</h3><p className="mt-2 text-sm text-muted-foreground">{property.location}</p><div className="mt-6 space-y-4 border-t border-white/60 pt-5"><Summary icon={<CalendarDays size={16} />} value={data.checkIn && data.checkOut ? `${data.checkIn} – ${data.checkOut}` : "Choose your dates"} /><Summary icon={<Users size={16} />} value={`${data.guests} guests`} /><Summary icon={<Sparkles size={16} />} value="Personal local assistance" /><Summary icon={<ShieldCheck size={16} />} value="No payment collected yet" /></div></div></div></aside>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function StepCard({ title, children }: { title: string; children: React.ReactNode }) { return <div className="glass-card p-8 md:p-10"><h2 className="font-display text-3xl mb-8">{title}</h2>{children}</div>; }
function Field({ label, children }: { label: string; children: React.ReactNode }) { return <label><span className="field-label">{label}</span>{children}</label>; }
function Text({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) { return <label><span className="field-label">{label}</span><input type={type} value={value} onChange={(e) => onChange(e.target.value)} className="input-field" /></label>; }
function ReviewRow({ label, value }: { label: string; value: string }) { return <div className="grid sm:grid-cols-[140px_1fr] gap-2 border-b border-white/50 px-5 py-4 text-sm last:border-0"><dt className="text-muted-foreground uppercase tracking-[0.16em] text-[0.72rem]">{label}</dt><dd>{value}</dd></div>; }
function Summary({ icon, value }: { icon: React.ReactNode; value: string }) { return <div className="flex items-center gap-3 text-sm"><span className="text-terracotta">{icon}</span><span>{value}</span></div>; }
