import Link from "next/link";

import { ProductDetailsClient } from "./product-details-client";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <main className="min-h-screen w-full bg-[#F6E7C8]">
      <div className="home-honey w-full">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm text-[#5c4a32] underline-offset-4 hover:underline"
            >
              رجوع للمنتجات
            </Link>
          </div>
          <ProductDetailsClient id={id} />
        </div>
      </div>
    </main>
  );
}

