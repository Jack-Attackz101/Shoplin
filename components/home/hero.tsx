"use client";

import Link from "next/link";

export function Hero() {
  const scrollToCategories = () => {
    const el = document.getElementById("categories");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-coral grid grid-cols-1 lg:grid-cols-2 items-center px-6 lg:px-16 pt-28 pb-20 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-24 -right-20 w-[520px] h-[520px] bg-card/8 rounded-full animate-blob" />
      <div className="absolute -bottom-24 left-36 w-[360px] h-[360px] bg-yellow/12 rounded-full animate-blob-reverse" />

      {/* Left content */}
      <div className="relative z-10">
        <p className="text-xs font-bold tracking-[3px] text-card/70 uppercase mb-4 animate-up delay-200">
          It{"'"}s all here
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-[82px] font-black leading-none text-card tracking-tight mb-6 animate-up delay-300">
          Shop at your
          <br />
          <em className="font-light">own pace</em>
        </h1>
        <p className="text-lg text-card/80 max-w-[380px] leading-relaxed mb-10 animate-up delay-400">
          Find exactly what you{"'"}re looking for — AI-powered search that
          actually understands you.
        </p>
        <div className="flex gap-3 animate-up delay-500">
          <Link
            href="/shop"
            className="bg-card text-coral px-9 py-4 rounded-full font-bold text-base shadow-lg hover:-translate-y-1 hover:scale-102 hover:shadow-xl transition-all duration-200"
          >
            Shop now
          </Link>
          <button
            onClick={scrollToCategories}
            className="text-card border-2 border-card/40 px-7 py-4 rounded-full font-semibold text-base bg-transparent hover:bg-card/15 hover:border-card transition-all duration-200"
          >
            Browse categories
          </button>
        </div>
      </div>

      {/* Right content */}
      <div className="hidden lg:flex items-center justify-center relative z-10 animate-up delay-600">
        <div className="text-[155px] drop-shadow-2xl animate-blob-fast">
          <span role="img" aria-label="Shopping bag">
            {"🛍️"}
          </span>
        </div>
        <div className="absolute bottom-10 -right-2 bg-card rounded-[20px] px-5 py-3.5 shadow-lg animate-up delay-900">
          <p className="text-[10px] text-muted font-bold tracking-[1.5px] uppercase">
            New arrivals
          </p>
          <h4 className="font-serif text-lg font-bold text-dark">
            Updated daily
          </h4>
        </div>
      </div>
    </section>
  );
}
