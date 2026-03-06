import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ShopContent } from "@/components/shop/shop-content";

export const metadata = {
  title: "Shop | ShopLin — Find anything, instantly",
  description:
    "Tell ShopLin AI exactly what you want — it finds the best products for you.",
};

export default function ShopPage() {
  return (
    <main>
      <Navbar />
      <ShopContent />
      <Footer />
    </main>
  );
}
