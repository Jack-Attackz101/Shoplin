import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/home/hero";
import { Marquee } from "@/components/home/marquee";
import { Simplified } from "@/components/home/simplified";
import { Categories } from "@/components/home/categories";
import { ZeroSection } from "@/components/home/zero-section";
import { Bestsellers } from "@/components/home/bestsellers";
import { Newsletter } from "@/components/home/newsletter";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Simplified />
      <Categories />
      <ZeroSection />
      <Bestsellers />
      <Newsletter />
      <Footer />
    </main>
  );
}
