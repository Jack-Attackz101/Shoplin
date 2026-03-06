"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export function Simplified() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="bg-orange px-6 lg:px-16 py-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-18 relative overflow-hidden"
    >
      {/* Watermark */}
      <div className="absolute -right-5 top-1/2 -translate-y-1/2 font-serif text-[240px] font-black text-card/6 tracking-tighter pointer-events-none leading-none">
        SHOP
      </div>

      {/* Image */}
      <div
        className={cn(
          "rounded-lg overflow-hidden h-[470px] shadow-2xl transition-all duration-700 opacity-0 translate-y-11",
          isInView && "opacity-100 translate-y-0"
        )}
      >
        <Image
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&q=85"
          alt="Shopping"
          width={700}
          height={470}
          className="w-full h-full object-cover transition-transform duration-600 hover:scale-104"
        />
      </div>

      {/* Content */}
      <div
        className={cn(
          "relative z-10 transition-all duration-700 delay-200 opacity-0 translate-y-11",
          isInView && "opacity-100 translate-y-0"
        )}
      >
        <p className="text-xs font-bold tracking-[3px] text-coral uppercase mb-3">
          Why ShopLin
        </p>
        <h2 className="font-serif text-5xl font-black text-card tracking-tight leading-tight mb-5">
          Shopping
          <br />
          simplified
        </h2>
        <p className="text-lg text-card/85 leading-relaxed mb-8">
          Tell the AI what you want and get instant curated results — no more
          endless tab switching or price hunting.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 bg-card text-orange px-7 py-3.5 rounded-full font-extrabold text-sm tracking-wide uppercase shadow-lg hover:scale-105 hover:-rotate-1 transition-all duration-200"
        >
          Try the AI search
        </Link>
      </div>
    </section>
  );
}
