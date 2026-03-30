"use client";

import { Suspense } from "react"; // 1. Suspense import karein
import { useRouter, useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import Image from "next/image";
import BreadCrumbContainer from "@/components/layouts/BreadCrumbContainer";
import Link from "next/link";

// Main logic wala component
function ProductContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const activeCategory = searchParams.get("cat") || "all";
    const categories = ["all", "cup", "cone", "stick", "novelties"];

    const handleCategoryChange = (cat: string) => {
        if (cat === "all") {
            router.push("/products", { scroll: false });
        } else {
            router.push(`?cat=${cat}`, { scroll: false });
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const filteredProducts = activeCategory === "all"
        ? products
        : products.filter((p) => p.category === activeCategory);

    return (
        <>
            <BreadCrumbContainer breadcrumbLink="products" />
            <section className="py-12 px-6 max-w-7xl mx-auto">
                {/* FILTER BUTTONS */}
                <div className="flex flex-wrap gap-2 justify-center mb-10 sticky top-25 z-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat)}
                            className={`md:px-5 px-3 md:py-2 py-1 md:text-xl text-[14px] rounded-full border font-bayon tracking-wider cursor-pointer transition ${activeCategory === cat ? "bg-[#892D1C] text-white" : "bg-white text-black"
                                }`}
                        >
                            {cat.toUpperCase()}
                        </button>
                    ))}
                </div>

                {/* PRODUCT GRID */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="product-card relative group bg-white rounded-3xl text-center">
                            <div className="p-5">
                                <Image
                                    src={`/images/products/${product.image}`}
                                    alt={product.name}
                                    height={500}
                                    width={500}
                                    className="w-full md:h-70 h-50 object-contain group-hover:scale-108 transition-all duration-300"
                                />
                            </div>
                            <h3 className="absolute group-hover:top-[90%] transition-all duration-300 top-[80%] left-1/2 -translate-x-1/2 bg-black text-white md:px-5 px-2 py-1 md:text-sm text-xs font-bayon uppercase">
                                {product.name.replace(/-/g, " ")}
                            </h3>
                        </div>
                    ))}
                </div>
            </section>
            {/* --- CTA --- */}
            <section className="py-20 lg:py-32 bg-[#892D1C] text-white text-center relative overflow-hidden">
                <div className="relative z-10 px-4">
                    <h2 className="font-bayon text-5xl lg:text-8xl mb-6">
                        GROW WITH DOUBLE COOL
                    </h2>
                    <p className="font-dm-sans text-xl lg:text-2xl max-w-2xl mx-auto opacity-90 mb-10">
                        Join our expanding family and grow your business with a brand people love.
                    </p>
                    <Link href="/contact" className="font-bayon tracking-wide text-lg lg:text-xl inline-block px-8 py-4 lg:px-10 lg:py-5 bg-white text-[#892D1C] rounded-full hover:scale-105 transition-transform shadow-xl">
                        BECOME A DISTRIBUTOR
                    </Link>
                </div>
            </section>
        </>
    );
}

// 2. Default export mein Suspense boundary lagayein
export default function ProductList() {
    return (
        <Suspense fallback={<div className="text-center py-20 font-bayon">Loading Products...</div>}>
            <ProductContent />
        </Suspense>
    );
}