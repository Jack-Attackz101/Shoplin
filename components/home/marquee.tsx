import { MARQUEE_ITEMS } from "@/lib/products";

export function Marquee() {
  // Duplicate items for seamless loop
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="bg-dark py-4 overflow-hidden group">
      <div className="flex gap-12 animate-marquee w-max group-hover:[animation-play-state:paused]">
        {items.map((item, index) => (
          <span
            key={index}
            className="font-serif text-xl font-light italic text-card/45 whitespace-nowrap"
          >
            Shop <b className="text-coral font-bold not-italic">{item}</b>
          </span>
        ))}
      </div>
    </div>
  );
}
