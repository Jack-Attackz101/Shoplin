"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription
    alert(`Thanks for subscribing with: ${email}`);
    setEmail("");
  };

  return (
    <section className="px-6 lg:px-16 py-28 text-center bg-coral relative overflow-hidden">
      {/* Background circle */}
      <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[860px] h-[860px] bg-card/6 rounded-full" />

      <h2 className="font-serif text-5xl md:text-6xl font-black text-card tracking-tight leading-tight mb-3.5 relative">
        Sign up for the
        <br />
        <em className="font-light">latest deals</em> & drops!
      </h2>
      <p className="text-lg text-card/80 mb-10 relative">
        Get 10% off your first purchase when you subscribe.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex gap-3 justify-center max-w-[450px] mx-auto relative"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-6 py-4 rounded-full text-base outline-none font-sans"
        />
        <button
          type="submit"
          className="bg-dark text-card px-7 py-4 rounded-full font-bold text-sm whitespace-nowrap transition-all duration-200 hover:bg-[#2e2010] hover:scale-103"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
