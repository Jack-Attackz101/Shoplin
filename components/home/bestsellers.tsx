"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { PRODUCTS, BESTSELLER_IDS, getAmazonLink } from "@/lib/products";

export function Bestsellers() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const bestsellers = PRODUCTS.filter((p) => BESTSELLER_IDS.includes(p.id));

  return (
    <section ref={ref} className="px-6 lg:px-16 py-24 bg-yellow">
      <p
        className={cn(
          "text-xs font-bold tracking-[3px] text-coral uppercase mb-3 transition-all duration-700 opacity-0 translate-y-11",
          isInView && "opacity-100 translate-y-0"
        )}
      >
        Trending Now
      </p>
      <h2
        className={cn(
          "font-serif text-5xl font-bold text-dark tracking-tight mb-11 transition-all duration-700 delay-100 opacity-0 translate-y-11",
          isInView && "opacity-100 translate-y-0"
        )}
      >
        Shop bestsellers
      </h2>

      <div
        className={cn(
          "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 transition-all duration-700 delay-200 opacity-0 translate-y-11",
          isInView && "opacity-100 translate-y-0"
        )}
      >
        {bestsellers.map((product) => (
          <a
            key={product.id}
            href={getAmazonLink(product.q)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl block"
          >
            <div className="h-[155px] overflow-hidden">
              <Image
                src={product.img}
                alt={product.name}
                width={300}
                height={155}
                className="w-full h-full object-cover transition-transform duration-400 hover:scale-110"
              />
            </div>
            <div className="p-3">
              <div className="font-semibold text-xs text-dark mb-1 leading-tight">
                {product.name}
              </div>
              <div className="font-serif font-bold text-lg text-coral">
                ${product.price}
              </div>
              <div className="text-xs text-muted mt-0.5">Shop on Amazon</div>
            </div>
          </a>
        ))}
      </div>

      <Link
        href="/shop"
        className="inline-flex mt-8 bg-dark text-card px-9 py-4 rounded-full font-bold text-base transition-all duration-200 hover:bg-coral hover:scale-103"
      >
        Shop all
      </Link>
    </section>
  );
}
