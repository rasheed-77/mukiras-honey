import Link from "next/link";

import ProductsListingClient from "@/components/honey/products-listing-client";

export default function ProductsPage() {
  return (
    <main className="min-h-screen w-full bg-[#F6E7C8]">
      <div className="home-honey w-full">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 border-b border-[rgba(201,154,46,0.22)] pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-[#2a2318]">
                منتجاتنا
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#5c4a32]">
                تشكيلة مختارة من العسل اليمني الفاخر — للاستفسار عبر واتساب.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex w-fit items-center gap-2 text-sm text-[#5c4a32] underline-offset-4 hover:underline"
            >
              الرئيسية
            </Link>
          </div>

          <ProductsListingClient />
        </div>
      </div>
    </main>
  );
}
