import { Home } from "lucide-react";
import Link from "next/link";

import { ProductsLuxuryAtmosphere } from "@/components/honey/products-luxury-atmosphere";
import ProductsListingClient from "@/components/honey/products-listing-client";
import { cn } from "@/lib/utils";

export default function ProductsPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[linear-gradient(180deg,#0B0906_0%,#120D07_40%,#16110B_100%)] text-[#f5ecd8] transition-colors duration-500">
      <ProductsLuxuryAtmosphere />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 lg:px-8">
        <header className="mx-auto mb-12 max-w-3xl border-b border-[rgba(217,164,65,0.22)] pb-10 text-center sm:mb-14">
          <h1 className="bg-linear-to-br from-[#ECC66B] via-[#D9A441] to-[#b8892a] bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-4xl">
            منتجاتنا
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-[#E8DCC4] md:text-base">
            تشكيلة مختارة من العسل اليمني الفاخر — للاستفسار عبر واتساب.
          </p>
          <div className="mt-8 flex justify-center px-3 sm:px-4">
            <Link
              href="/"
              className={cn(
                "inline-flex min-h-[48px] w-full max-w-xs items-center justify-center gap-2 rounded-2xl border border-[rgba(212,175,55,0.35)] bg-[#0B0906] px-6 py-3.5 text-base font-semibold text-[#F6E7C1]",
                "shadow-[0_8px_28px_rgba(0,0,0,0.42),0_0_28px_rgba(212,175,55,0.14)]",
                "transition-[transform,box-shadow,background-color,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                "hover:-translate-y-0.5 hover:bg-[#15110C] hover:shadow-[0_14px_40px_rgba(0,0,0,0.48),0_0_44px_rgba(212,175,55,0.22)]",
                "active:translate-y-0 active:scale-[0.98]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(212,175,55,0.45)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0906]",
                "sm:min-h-[44px] sm:w-auto sm:px-8 sm:py-3",
              )}
            >
              <Home className="size-4 shrink-0 opacity-90" aria-hidden />
              الرئيسية
            </Link>
          </div>
        </header>

        <ProductsListingClient />
      </div>
    </main>
  );
}
