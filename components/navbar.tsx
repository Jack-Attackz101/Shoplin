"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isShop = pathname === "/shop";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-5 md:px-13 py-4 flex items-center justify-between bg-warm/92 backdrop-blur-xl border-b border-coral/10 animate-slide-down">
      <Link
        href="/"
        className="font-serif text-2xl font-black text-dark tracking-tight"
      >
        Shop<span className="text-coral">Lin</span>
      </Link>

      <div className="flex gap-1.5">
        <Link
          href="/"
          className={cn(
            "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 opacity-60 hover:opacity-100 hover:bg-coral/8",
            isHome && "opacity-100 bg-coral text-card"
          )}
        >
          Home
        </Link>
        <Link
          href="/shop"
          className={cn(
            "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 opacity-60 hover:opacity-100 hover:bg-coral/8",
            isShop && "opacity-100 bg-coral text-card"
          )}
        >
          Shopping AI
        </Link>
      </div>

      <Link
        href="/shop"
        className="hidden md:block bg-dark text-card px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:bg-coral hover:scale-103"
      >
        Start Shopping
      </Link>
    </nav>
  );
}
