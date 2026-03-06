"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const ZERO_ITEMS = ["crowds", "lines", "stress"];

export function ZeroSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="px-6 lg:px-16 py-28 bg-dark grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
    >
      <div
        className={cn(
          "transition-all duration-700 opacity-0 translate-y-11",
          isInView && "opacity-100 translate-y-0"
        )}
      >
        <h2 className="font-serif text-4xl font-bold text-card tracking-tight leading-snug">
          Who knew shopping
          <br />
          could be this easy?
        </h2>
        <p className="text-base text-card/45 mt-3.5 leading-relaxed">
          No more tab-switching. No more price hunting.
          <br />
          ShopLin AI does it all.
        </p>
      </div>

      <div
        className={cn(
          "transition-all duration-700 delay-200 opacity-0 translate-y-11",
          isInView && "opacity-100 translate-y-0"
        )}
      >
        {ZERO_ITEMS.map((item) => (
          <div
            key={item}
            className="flex items-baseline gap-4 border-b border-card/10 py-4 transition-all duration-200 hover:pl-3 group"
          >
            <span className="font-serif text-6xl font-black text-card/12 tracking-tighter leading-none transition-colors duration-300 group-hover:text-coral">
              Zero
            </span>
            <span className="font-serif text-6xl font-light italic text-card tracking-tighter leading-none">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
