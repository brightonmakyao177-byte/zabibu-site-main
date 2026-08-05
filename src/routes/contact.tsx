import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { siteConfig } from "@/lib/site-config";
import { Instagram, Facebook, Mail, Phone, MessageCircle, MapPin, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Zabibu Collection" },
      { name: "description", content: "Speak with our team about a property, itinerary or question." },
    ],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-transparent">
      <Nav />
      <PageHero eyebrow="Get in touch" title="We'd love to hear from you." intro="Send us a note — we typically reply within one working day." />
      <section className="py-20 md:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="eyebrow">How to reach us</span>
            <ul className="mt-6 space-y-5 text-sm">
              <ContactRow icon={<Mail size={16} />} label="Email" value={siteConfig.contact.email} />
              <ContactRow icon={<Phone size={16} />} label="Phone" value={siteConfig.contact.phone} />
              <ContactRow icon={<MessageCircle size={16} />} label="WhatsApp" value={siteConfig.contact.whatsapp} />
              <ContactRow icon={<MapPin size={16} />} label="Office" value={siteConfig.contact.officeAddress} />
            </ul>

            <div className="mt-10">
              <div className="eyebrow">Follow along</div>
              <div className="mt-4 flex gap-3">
                <a href={siteConfig.socials.instagram} aria-label="Instagram" className="glass-icon grid h-10 w-10 place-items-center rounded-full hover:bg-charcoal hover:text-ivory"><Instagram size={16} /></a>
                <a href={siteConfig.socials.facebook} aria-label="Facebook" className="glass-icon grid h-10 w-10 place-items-center rounded-full hover:bg-charcoal hover:text-ivory"><Facebook size={16} /></a>
              </div>
            </div>

            <div className="glass-card mt-10 overflow-hidden p-3">
              <iframe
                title="Njiro BP map"
                src="https://www.google.com/maps?q=Njiro%20BP%2C%20Arusha%2C%20Tanzania&output=embed"
                className="aspect-[4/3] w-full rounded-[1rem] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="flex items-center justify-between gap-4 px-3 pb-2 pt-4">
                <div>
                  <div className="font-display text-xl text-charcoal">Njiro BP, Arusha</div>
                  <p className="mt-1 text-xs text-muted-foreground">Open the map for directions.</p>
                </div>
                <a href="https://www.google.com/maps/search/?api=1&query=Njiro+BP+Arusha+Tanzania" target="_blank" rel="noreferrer" className="glass-icon grid h-10 w-10 place-items-center rounded-full" aria-label="Open map"><ExternalLink size={16} /></a>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 md:p-10">
            {sent ? (
              <div className="py-12 text-center">
                <div className="eyebrow">Message received</div>
                <h2 className="mt-3 font-display text-3xl">Thank you.</h2>
                <p className="mt-3 text-sm text-muted-foreground">Connect this form to your endpoint before launch.</p>
                <button onClick={() => setSent(false)} className="link-underline mt-6">Send another</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-6 md:grid-cols-2">
                <TextField label="First name" name="firstName" required />
                <TextField label="Last name" name="lastName" required />
                <TextField label="Email" name="email" type="email" required />
                <TextField label="Phone (optional)" name="phone" />
                <TextField label="Which property?" name="property" placeholder="Any in particular?" className="md:col-span-2" />
                <label className="md:col-span-2"><span className="field-label">Message</span><textarea className="input-field min-h-[140px]" required /></label>
                <div className="md:col-span-2"><button type="submit" className="btn-primary">Send message</button></div>
              </form>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function ContactRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return <li className="flex items-start gap-4"><span className="glass-icon grid h-9 w-9 place-items-center rounded-full">{icon}</span><div><div className="text-[0.68rem] tracking-[0.2em] uppercase text-muted-foreground">{label}</div><div className="mt-0.5 text-charcoal">{value}</div></div></li>;
}

function TextField({ label, name, type = "text", required, placeholder, className }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string; className?: string }) {
  return <label className={className}><span className="field-label">{label}</span><input name={name} type={type} required={required} placeholder={placeholder} className="input-field" /></label>;
}
