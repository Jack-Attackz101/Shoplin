"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SearchFilters } from "./search-filters";
import { ProductCard } from "./product-card";
import { PRODUCTS, Product } from "@/lib/products";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

function ShopContentInner() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(
    categoryParam || "All"
  );
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(9999);
  const [sortBy, setSortBy] = useState("rel");
  const [minRating, setMinRating] = useState(0);
  const [onSaleOnly, setOnSaleOnly] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const [results, setResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [resultTitle, setResultTitle] = useState("Featured Products");

  // Show featured products on initial load
  useEffect(() => {
    setResults(PRODUCTS.slice(0, 12));
    setHasSearched(true);
    
    // If category param exists, trigger search
    if (categoryParam) {
      setActiveCategory(categoryParam);
      setTimeout(() => doSearch(), 100);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const doSearch = useCallback(() => {
    setIsSearching(true);

    const messages = [
      "ShopLin AI is searching...",
      "Analyzing your preferences...",
      "Finding the best matches...",
      "Almost there...",
    ];
    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      messageIndex = (messageIndex + 1) % messages.length;
    }, 600);

    setTimeout(() => {
      clearInterval(messageInterval);
      setIsSearching(false);

      const qLower = searchQuery.toLowerCase();

      let filtered = PRODUCTS.filter((p) => {
        const matchCategory =
          activeCategory === "All" || p.cat === activeCategory;
        const matchQuery =
          !qLower ||
          p.name.toLowerCase().includes(qLower) ||
          p.cat.toLowerCase().includes(qLower) ||
          p.desc.toLowerCase().includes(qLower);
        const matchPrice = p.price >= minPrice && p.price <= maxPrice;
        const matchRating = p.rat >= minRating;
        const matchSale = !onSaleOnly || p.badge === "Sale";
        const matchFeatures = selectedFeatures.every((f) => p.tags.includes(f));

        return (
          matchCategory &&
          matchQuery &&
          matchPrice &&
          matchRating &&
          matchSale &&
          matchFeatures
        );
      });

      // Sort
      if (sortBy === "asc") {
        filtered.sort((a, b) => a.price - b.price);
      } else if (sortBy === "desc") {
        filtered.sort((a, b) => b.price - a.price);
      } else if (sortBy === "rat") {
        filtered.sort((a, b) => b.rat - a.rat);
      }

      setResults(filtered);
      setHasSearched(true);

      // Set title
      if (searchQuery) {
        setResultTitle(`Results for "${searchQuery}"`);
      } else if (activeCategory !== "All") {
        setResultTitle(activeCategory);
      } else {
        setResultTitle("All Products");
      }
    }, 1800);
  }, [
    searchQuery,
    activeCategory,
    minPrice,
    maxPrice,
    sortBy,
    minRating,
    onSaleOnly,
    selectedFeatures,
  ]);

  const exploreQuery =
    searchQuery || (activeCategory !== "All" ? activeCategory : "top products");

  return (
    <div className="pt-24 pb-20 px-6 lg:px-16 min-h-screen bg-warm">
      {/* Header */}
      <div className="text-center mb-13">
        <p className="text-xs font-bold tracking-[3px] text-coral uppercase mb-3 animate-up">
          Powered by ShopLin AI
        </p>
        <h1 className="font-serif text-4xl md:text-6xl font-black text-dark tracking-tight leading-tight mb-3.5 animate-up delay-100">
          Find anything,
          <br />
          <span className="text-coral">instantly</span>
        </h1>
        <p className="text-base text-muted animate-up delay-200">
          Tell ShopLin AI exactly what you want — it finds the best products for
          you.
        </p>
      </div>

      {/* Search & Filters */}
      <SearchFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        sortBy={sortBy}
        setSortBy={setSortBy}
        minRating={minRating}
        setMinRating={setMinRating}
        onSaleOnly={onSaleOnly}
        setOnSaleOnly={setOnSaleOnly}
        selectedFeatures={selectedFeatures}
        setSelectedFeatures={setSelectedFeatures}
        onSearch={doSearch}
      />

      {/* AI Loading State */}
      {isSearching && (
        <div className="flex items-center gap-3 px-6 py-3 bg-card rounded-full max-w-[760px] mx-auto mt-4 shadow-md">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-coral animate-thinking-dot" />
            <div
              className="w-2 h-2 rounded-full bg-coral animate-thinking-dot"
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className="w-2 h-2 rounded-full bg-coral animate-thinking-dot"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
          <span className="text-sm text-muted">ShopLin AI is searching...</span>
        </div>
      )}

      {/* Results */}
      {hasSearched && !isSearching && (
        <div className="mt-11">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-3xl font-bold tracking-tight">
              {resultTitle}
            </h2>
            <span className="text-sm text-muted bg-card px-4 py-1.5 rounded-full">
              {results.length} product{results.length !== 1 ? "s" : ""}
            </span>
          </div>

          {results.length === 0 ? (
            <div className="text-center py-17">
              <Search className="w-17 h-17 mx-auto text-muted/30 mb-4" />
              <h3 className="font-serif text-3xl tracking-tight mb-2">
                No products found
              </h3>
              <p className="text-muted">
                Try different keywords or adjust your filters
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {results.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
              {/* Explore More Card */}
              <ProductCard
                product={PRODUCTS[0]}
                index={results.length}
                isExplore
                exploreQuery={exploreQuery}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function ShopContent() {
  return (
    <Suspense fallback={
      <div className="pt-24 pb-20 px-6 lg:px-16 min-h-screen bg-warm flex items-center justify-center">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-coral animate-thinking-dot" />
          <div className="w-2 h-2 rounded-full bg-coral animate-thinking-dot" style={{ animationDelay: "0.2s" }} />
          <div className="w-2 h-2 rounded-full bg-coral animate-thinking-dot" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>
    }>
      <ShopContentInner />
    </Suspense>
  );
}
