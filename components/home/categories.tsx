"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const CATEGORY_DATA = [
  {
    name: "Fashion",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
  },
  {
    name: "Health & Wellness",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
  },
  {
    name: "Home & Lifestyle",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
  },
  {
    name: "Food & Drink",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80",
  },
  {
    name: "Kids",
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80",
  },
  {
    name: "Zero Waste",
    image:
      "https://images.unsplash.com/photo-1542601906897-c048b1e18538?w=600&q=80",
  },
];

export function Categories() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="categories"
      className="px-6 lg:px-16 py-24 bg-cream"
    >
      <p
        className={cn(
          "text-xs font-bold tracking-[3px] text-coral uppercase mb-3 transition-all duration-700 opacity-0 translate-y-11",
          isInView && "opacity-100 translate-y-0"
        )}
      >
        Browse by Category
      </p>
      <h2
        className={cn(
          "font-serif text-5xl font-bold text-dark tracking-tight mb-11 transition-all duration-700 delay-100 opacity-0 translate-y-11",
          isInView && "opacity-100 translate-y-0"
        )}
      >
        Your favorite
        <br />
        categories
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {CATEGORY_DATA.map((category, index) => (
          <Link
            key={category.name}
            href={`/shop?category=${encodeURIComponent(category.name)}`}
            className={cn(
              "rounded-lg overflow-hidden relative h-[215px] group transition-all duration-500 hover:scale-103 hover:shadow-xl opacity-0 translate-y-11",
              isInView && "opacity-100 translate-y-0"
            )}
            style={{ transitionDelay: `${(index + 2) * 100}ms` }}
          >
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-coral/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-card font-bold text-sm tracking-wide uppercase">
                Shop {category.name}
              </span>
            </div>
            {/* Label */}
            <div className="absolute bottom-3 left-3 bg-card rounded-full px-4 py-1 font-bold text-sm text-dark shadow-md">
              {category.name}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
