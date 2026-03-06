"use client";

import { cn } from "@/lib/utils";
import { CATEGORIES, FEATURES } from "@/lib/products";
import { Search, Settings, X } from "lucide-react";
import { useState } from "react";

interface SearchFiltersProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  minPrice: number;
  setMinPrice: (p: number) => void;
  maxPrice: number;
  setMaxPrice: (p: number) => void;
  sortBy: string;
  setSortBy: (s: string) => void;
  minRating: number;
  setMinRating: (r: number) => void;
  onSaleOnly: boolean;
  setOnSaleOnly: (s: boolean) => void;
  selectedFeatures: string[];
  setSelectedFeatures: (f: string[]) => void;
  onSearch: () => void;
}

const PRICE_RANGES = [
  { label: "Under $25", min: 0, max: 25 },
  { label: "$25-$50", min: 25, max: 50 },
  { label: "$50-$100", min: 50, max: 100 },
  { label: "$100-$250", min: 100, max: 250 },
  { label: "$250+", min: 250, max: 9999 },
];

export function SearchFilters({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  sortBy,
  setSortBy,
  minRating,
  setMinRating,
  onSaleOnly,
  setOnSaleOnly,
  selectedFeatures,
  setSelectedFeatures,
  onSearch,
}: SearchFiltersProps) {
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [activePriceRange, setActivePriceRange] = useState<number | null>(null);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") onSearch();
  };

  const handlePriceChip = (index: number, min: number, max: number) => {
    if (activePriceRange === index) {
      setActivePriceRange(null);
      setMinPrice(0);
      setMaxPrice(9999);
    } else {
      setActivePriceRange(index);
      setMinPrice(min);
      setMaxPrice(max);
    }
  };

  const toggleFeature = (feature: string) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  return (
    <div className="max-w-[760px] mx-auto">
      {/* Search Bar */}
      <div className="mb-7 animate-up delay-300">
        <div className="flex items-center bg-card rounded-full px-6 py-2 shadow-lg border-2 border-transparent focus-within:border-coral focus-within:shadow-coral/20 transition-all duration-200 gap-2.5">
          <Search className="w-5 h-5 text-muted opacity-35" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search anything — shoes, candles, earbuds..."
            className="flex-1 border-none outline-none text-lg text-dark bg-transparent py-2 font-sans placeholder:text-muted"
          />
          <button
            onClick={onSearch}
            className="bg-coral text-card px-7 py-3 rounded-full font-bold text-base whitespace-nowrap transition-all duration-200 hover:bg-[#e04d33] hover:scale-103"
          >
            Search
          </button>
        </div>
      </div>

      {/* Category Chips */}
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setActiveCategory(cat.name)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-semibold border-2 border-dark/10 bg-card text-text transition-all duration-200 hover:bg-coral hover:text-card hover:border-coral hover:-translate-y-0.5 hover:shadow-md",
              activeCategory === cat.name &&
                "bg-coral text-card border-coral shadow-md"
            )}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Price/Sort Bar */}
      <div className="flex items-center gap-4 bg-card rounded-[20px] px-6 py-4 shadow-md mb-4">
        <label className="font-bold text-sm whitespace-nowrap">Price:</label>
        <div className="flex items-center gap-2 flex-1">
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            placeholder="Min $"
            className="flex-1 max-w-[108px] px-3 py-2 border-2 border-gray-200 rounded-xl text-sm outline-none transition-colors focus:border-coral"
          />
          <span className="text-muted">—</span>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            placeholder="Max $"
            className="flex-1 max-w-[108px] px-3 py-2 border-2 border-gray-200 rounded-xl text-sm outline-none transition-colors focus:border-coral"
          />
        </div>
        <label className="font-bold text-sm whitespace-nowrap">Sort:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-2 rounded-xl border-2 border-gray-200 text-sm outline-none transition-colors focus:border-coral bg-card text-dark"
        >
          <option value="rel">Most Relevant</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
          <option value="rat">Top Rated</option>
        </select>
      </div>

      {/* Price Range Chips */}
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {PRICE_RANGES.map((range, index) => (
          <button
            key={range.label}
            onClick={() => handlePriceChip(index, range.min, range.max)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-semibold border-2 border-dark/10 bg-card text-text transition-all duration-200 hover:bg-orange hover:text-card hover:border-orange hover:-translate-y-0.5 hover:shadow-md",
              activePriceRange === index &&
                "bg-orange text-card border-orange shadow-md"
            )}
          >
            {range.label}
          </button>
        ))}
      </div>

      {/* Advanced Search Toggle */}
      <div className="flex justify-end mb-1.5">
        <button
          onClick={() => setAdvancedOpen(!advancedOpen)}
          className="flex items-center gap-1.5 bg-transparent border-2 border-coral text-coral px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 hover:bg-coral hover:text-card"
        >
          {advancedOpen ? (
            <X className="w-4 h-4" />
          ) : (
            <Settings className="w-4 h-4" />
          )}
          {advancedOpen ? "Close Advanced" : "Advanced Search"}
        </button>
      </div>

      {/* Advanced Panel */}
      <div
        className={cn(
          "bg-card rounded-lg overflow-hidden transition-all duration-500 opacity-0 max-h-0",
          advancedOpen && "opacity-100 max-h-[520px] mb-6"
        )}
      >
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold tracking-wide uppercase text-muted mb-2">
                Brand
              </label>
              <input
                type="text"
                placeholder="e.g. Nike, Apple..."
                className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-xl text-sm outline-none transition-colors focus:border-coral"
              />
            </div>
            <div>
              <label className="block text-xs font-bold tracking-wide uppercase text-muted mb-2">
                Min Rating
              </label>
              <select
                value={minRating}
                onChange={(e) => setMinRating(Number(e.target.value))}
                className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-xl text-sm outline-none transition-colors focus:border-coral bg-card text-dark"
              >
                <option value={0}>Any rating</option>
                <option value={4}>4 stars & above</option>
                <option value={4.5}>4.5 stars & above</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold tracking-wide uppercase text-muted mb-2">
                Availability
              </label>
              <select
                value={onSaleOnly ? "sale" : "all"}
                onChange={(e) => setOnSaleOnly(e.target.value === "sale")}
                className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-xl text-sm outline-none transition-colors focus:border-coral bg-card text-dark"
              >
                <option value="all">All items</option>
                <option value="sale">On sale only</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold tracking-wide uppercase text-muted mb-2">
                Color
              </label>
              <input
                type="text"
                placeholder="e.g. Black, Beige..."
                className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-xl text-sm outline-none transition-colors focus:border-coral"
              />
            </div>
            <div>
              <label className="block text-xs font-bold tracking-wide uppercase text-muted mb-2">
                Material
              </label>
              <input
                type="text"
                placeholder="e.g. Cotton, Leather..."
                className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-xl text-sm outline-none transition-colors focus:border-coral"
              />
            </div>
            <div>
              <label className="block text-xs font-bold tracking-wide uppercase text-muted mb-2">
                Shipping
              </label>
              <select className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-xl text-sm outline-none transition-colors focus:border-coral bg-card text-dark">
                <option>Any shipping</option>
                <option>Free shipping</option>
                <option>Next-day</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-xs font-bold tracking-wide uppercase text-muted mb-2">
              Features
            </label>
            <div className="flex flex-wrap gap-2">
              {FEATURES.map((feature) => (
                <label
                  key={feature}
                  className={cn(
                    "flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg border-2 border-gray-200 transition-all duration-200 bg-card hover:border-coral hover:bg-[#fff5f3]",
                    selectedFeatures.includes(feature) &&
                      "border-coral bg-[#fff5f3]"
                  )}
                >
                  <input
                    type="checkbox"
                    checked={selectedFeatures.includes(feature)}
                    onChange={() => toggleFeature(feature)}
                    className="accent-coral"
                  />
                  {feature}
                </label>
              ))}
            </div>
          </div>

          <button
            onClick={onSearch}
            className="mt-4 bg-coral text-card px-8 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:bg-[#e04d33] hover:scale-102"
          >
            Apply & Search
          </button>
        </div>
      </div>
    </div>
  );
}
