import { Link } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { NewsletterForm } from "@/components/site/NewsletterForm";
import logo from "@/assets/zabibu-logo.jpg";

export function Footer() {
  return (
    <footer className="glass-panel mx-3 mb-3 mt-32 overflow-hidden rounded-[1.75rem] !border-white/15 !bg-olive/95 text-ivory sm:mx-5 sm:mb-5">
      <div className="container-x py-20 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link to="/" className="inline-flex items-center gap-3">
            <img src={logo} alt="Zabibu" className="h-12 w-12 rounded-full object-cover" />
            <span className="font-display text-3xl">Zabibu Collection</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-ivory/70 max-w-sm">
            Seven considered stays across Tanzania, held together by local knowledge and personal guest support.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={siteConfig.socials.instagram} aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-ivory/30 transition-colors hover:bg-ivory hover:text-charcoal">
              <Instagram size={16} />
            </a>
            <a href={siteConfig.socials.facebook} aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-ivory/30 transition-colors hover:bg-ivory hover:text-charcoal">
              <Facebook size={16} />
            
            </a>
          </div>
        </div>

        <FooterCol title="Explore" links={[
          { to: siteConfig.routes.stays, label: "All stays" },
          { to: siteConfig.routes.destinations, label: "Destinations" },
          { to: siteConfig.routes.experiences, label: "Experiences" },
          { to: siteConfig.routes.journal, label: "Journal" },
        ]} />

        <FooterCol title="Company" links={[
          { to: siteConfig.routes.about, label: "About" },
          { to: siteConfig.routes.contact, label: "Contact" },
          { to: siteConfig.routes.listProperty, label: "List your property" },
          { to: siteConfig.routes.faq, label: "FAQ" },
        ]} />

        <FooterCol title="Guest support" links={[
          { to: siteConfig.routes.guestGuidelines, label: "Guest guidelines" },
          { to: siteConfig.routes.bookingTerms, label: "Booking terms" },
          { to: siteConfig.routes.cancellation, label: "Cancellation policy" },
          { to: siteConfig.routes.privacy, label: "Privacy policy" },
        ]} />

        <div className="lg:col-span-3">
          <FooterHeading>Get in touch</FooterHeading>
          <ul className="mt-4 space-y-2 text-sm text-ivory/70">
            <li>{siteConfig.contact.email}</li>
            <li>{siteConfig.contact.phone}</li>
            <li className="text-xs pt-2">{siteConfig.contact.officeAddress}</li>
          </ul>
          <div className="mt-6">
            <FooterHeading>Journal newsletter</FooterHeading>
            <div className="mt-4"><NewsletterForm variant="dark" /></div>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/15">
        <div className="container-x flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-8 text-xs text-ivory/50">
          <div>© {new Date().getFullYear()} Zabibu Collection. All rights reserved.</div>
          <div>Made with care in Tanzania.</div>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <div className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-ivory/80">{children}</div>;
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div className="lg:col-span-2">
      <FooterHeading>{title}</FooterHeading>
      <ul className="mt-4 space-y-2 text-sm text-ivory/70">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="hover:text-ivory transition-colors">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
