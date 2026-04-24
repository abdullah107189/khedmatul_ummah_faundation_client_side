interface MapEmbedProps {
  query: string;
}

export default function MapEmbed({ query }: MapEmbedProps) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-emerald-100 bg-white shadow-sm">
      <iframe
        title="গুগল ম্যাপ"
        src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`}
        className="h-[320px] w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
