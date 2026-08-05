type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  image?: string;
  align?: "left" | "center";
  height?: "sm" | "md" | "lg";
};

export function PageHero({ eyebrow, title, intro, image, align = "left", height = "md" }: Props) {
  const h = height === "lg" ? "min-h-[80vh]" : height === "sm" ? "min-h-[46vh]" : "min-h-[60vh]";
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";

  if (image) {
    return (
      <section className={"relative flex " + h + " " + alignCls + " pt-24 pb-16 overflow-hidden"}>
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/35" />
        <div className={"container-x relative z-10 flex flex-col w-full " + alignCls}>
          {eyebrow && <span className="eyebrow !text-ivory/85">{eyebrow}</span>}
          <h1 className={"mt-4 font-display text-ivory text-5xl md:text-7xl max-w-4xl"}>{title}</h1>
          {intro && <p className="mt-6 text-ivory/85 max-w-xl leading-relaxed">{intro}</p>}
        </div>
      </section>
    );
  }

  return (
    <section className="glass-section pb-16 pt-32 md:pb-20 md:pt-40">
      <div className={"container-x flex flex-col " + alignCls}>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="mt-4 font-display text-5xl md:text-7xl text-charcoal max-w-4xl">{title}</h1>
        {intro && <p className="mt-6 text-muted-foreground max-w-2xl leading-relaxed">{intro}</p>}
      </div>
    </section>
  );
}
