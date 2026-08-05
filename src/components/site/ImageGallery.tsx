import { useState } from "react";
import { Expand } from "lucide-react";

export function ImageGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState<number | null>(null);
  const main = images[0];
  const rest = images.slice(1, 5);

  return (
    <>
      <div className="glass-card relative grid gap-2 overflow-hidden p-3 md:aspect-[16/8] md:grid-cols-4 md:grid-rows-2">
        <button
          onClick={() => setActive(0)}
          className="group relative aspect-[4/3] overflow-hidden rounded-[1rem] bg-white/20 md:col-span-2 md:row-span-2 md:aspect-auto"
        >
          <img src={main} alt={alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
        </button>
        {rest.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i + 1)}
            className="group relative hidden overflow-hidden rounded-[0.8rem] bg-white/25 md:block"
          >
            <img src={src} alt={`${alt} ${i + 2}`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
          </button>
        ))}
        <button
          onClick={() => setActive(0)}
          className="glass-control absolute bottom-6 right-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.12em] md:relative md:bottom-auto md:right-auto md:col-span-2 md:col-start-3 md:row-start-2 md:hidden"
        >
          <Expand size={13} /> View all photos
        </button>
      </div>
      <div className="mt-3">
        <button onClick={() => setActive(0)} className="link-underline">
          <Expand size={13} /> View all {images.length} photos
        </button>
      </div>

      {active !== null && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-charcoal/95 p-6"
        >
          <img src={images[active]} alt={alt} className="max-h-full max-w-full rounded-xl object-contain" />
        </div>
      )}
    </>
  );
}
