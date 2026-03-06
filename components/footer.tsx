import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-dark text-card px-6 md:px-16 py-13 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="font-serif text-2xl font-black tracking-tight">
        Shop<span className="text-coral">Lin</span>
      </div>

      <div className="flex gap-6">
        <Link
          href="/"
          className="text-card/40 text-sm hover:text-card transition-colors"
        >
          Home
        </Link>
        <Link
          href="/shop"
          className="text-card/40 text-sm hover:text-card transition-colors"
        >
          Shopping
        </Link>
        <Link
          href="#"
          className="text-card/40 text-sm hover:text-card transition-colors"
        >
          About
        </Link>
        <Link
          href="#"
          className="text-card/40 text-sm hover:text-card transition-colors"
        >
          Contact
        </Link>
      </div>

      <p className="text-card/30 text-sm">
        2025 ShopLin. Shop at your own pace.
      </p>
    </footer>
  );
}
