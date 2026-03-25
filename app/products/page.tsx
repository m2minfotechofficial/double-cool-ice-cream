"use client";

import { Suspense } from "react"; // 1. Suspense import karein
import { useRouter, useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import Image from "next/image";
import BreadCrumbContainer from "@/components/layouts/BreadCrumbContainer";

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
                            className={`md:px-5 px-3 md:py-2 py-1 md:text-xl text-[14px] rounded-full border font-bayon tracking-wider cursor-pointer transition ${
                                activeCategory === cat ? "bg-[#892D1C] text-white" : "bg-white text-black"
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
                            <h3 className="absolute group-hover:top-[90%] transition-all duration-300 top-[80%] left-1/2 -translate-x-1/2 bg-black text-white px-5 py-1 text-sm font-bayon uppercase">
                                {product.name.replace(/-/g, " ")}
                            </h3>
                        </div>
                    ))}
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