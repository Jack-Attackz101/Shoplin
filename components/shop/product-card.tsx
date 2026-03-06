"use client";

import Image from "next/image";
import { Product, getAmazonLink, getStarRating } from "@/lib/products";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index?: number;
  isExplore?: boolean;
  exploreQuery?: string;
}

export function ProductCard({
  product,
  index = 0,
  isExplore = false,
  exploreQuery = "",
}: ProductCardProps) {
  if (isExplore) {
    return (
      <div
        className={cn(
          "bg-gradient-to-br from-cream to-[#fff0e4] border-2 border-dashed border-orange rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-card-in"
        )}
        style={{ animationDelay: `${index * 0.05}s` }}
      >
        <div className="h-[215px] overflow-hidden bg-warm relative">
          <Image
            src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=500&q=80"
            alt="More on Amazon"
            fill
            className="object-cover transition-transform duration-500 hover:scale-107"
          />
          <div className="absolute top-3 left-3 bg-orange text-card text-[10px] font-bold tracking-wide px-3 py-1 rounded-full uppercase">
            Amazon
          </div>
        </div>
        <div className="p-4">
          <div className="text-[10px] font-bold tracking-[2px] uppercase text-orange mb-1">
            Explore More
          </div>
          <div className="font-serif text-base font-bold text-dark mb-1 leading-tight">
            Explore all &quot;{exploreQuery}&quot; results
          </div>
          <div className="text-xs text-muted leading-relaxed mb-3">
            Thousands more &quot;{exploreQuery}&quot; results on Amazon, tagged
            with your ShopLin affiliate link.
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted">Thousands of results</span>
            <a
              href={getAmazonLink(exploreQuery)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange text-card px-4 py-2 rounded-full font-bold text-xs transition-all duration-200 hover:scale-106"
            >
              View on Amazon
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "bg-card rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-card-in"
      )}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="h-[215px] overflow-hidden bg-warm relative">
        <Image
          src={product.img}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-107"
        />
        {product.badge && (
          <div className="absolute top-3 left-3 bg-coral text-card text-[10px] font-bold tracking-wide px-3 py-1 rounded-full uppercase">
            {product.badge}
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="text-[10px] font-bold tracking-[2px] uppercase text-coral mb-1">
          {product.cat}
        </div>
        <div className="font-serif text-base font-bold text-dark mb-1 leading-tight">
          {product.name}
        </div>
        <div className="text-orange text-xs mb-2">
          {getStarRating(product.rat)}{" "}
          <span className="text-muted text-xs">
            ({product.rev.toLocaleString()})
          </span>
        </div>
        <div className="text-xs text-muted leading-relaxed mb-3">
          {product.desc}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="font-serif text-xl font-bold text-dark">
              ${product.price}
            </span>
            {product.old && (
              <span className="text-xs text-muted line-through ml-1">
                ${product.old}
              </span>
            )}
          </div>
          <a
            href={getAmazonLink(product.q)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-coral text-card px-4 py-2 rounded-full font-bold text-xs transition-all duration-200 hover:bg-[#e04d33] hover:scale-106"
          >
            Buy
          </a>
        </div>
      </div>
    </div>
  );
}
