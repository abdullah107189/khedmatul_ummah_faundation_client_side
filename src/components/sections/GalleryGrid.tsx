import Image from "next/image";
import type { GalleryItem } from "@/types/site";

interface GalleryGridProps {
  items: GalleryItem[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article
          key={`${item.title}-${item.image}`}
          className="group overflow-hidden rounded-[1.75rem] border border-emerald-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="space-y-2 p-5">
            <p className="text-xs font-semibold tracking-[0.18em] text-emerald-600">{item.category}</p>
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
          </div>
        </article>
      ))}
    </div>
  );
}
