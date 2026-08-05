import { useState } from "react";

// TODO: wire to real inquiry endpoint. Front-end UI only.
export function NewsletterForm({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const border = variant === "dark" ? "border-ivory/30 text-ivory placeholder:text-ivory/50" : "border-border";
  const btn = variant === "dark"
    ? "bg-ivory text-charcoal hover:bg-terracotta hover:text-ivory"
    : "bg-charcoal text-ivory hover:bg-grape";

  if (sent) {
    return <p className={variant === "dark" ? "text-sm text-ivory/70" : "text-sm text-muted-foreground"}>
      Thank you — placeholder confirmation. Newsletter integration to be added.
    </p>;
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="flex items-stretch"
    >
      <label className="sr-only" htmlFor="newsletter-email">Email address</label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className={"flex-1 bg-transparent border px-3 py-2.5 text-sm outline-none focus:border-current " + border}
      />
      <button className={"px-4 text-[0.72rem] font-medium tracking-[0.16em] uppercase transition-colors " + btn}>
        Subscribe
      </button>
    </form>
  );
}
