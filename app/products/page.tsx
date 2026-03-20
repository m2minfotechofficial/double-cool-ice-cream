"use client";

import { useEffect, useRef, useState } from "react";
import BreadCrumbContainer from "@/components/layouts/BreadCrumbContainer";
import { products } from "@/data/products";
import gsap from "gsap";
import { Product } from "@/types";
import Image from "next/image";

export default function Products() {
    const containerRef = useRef(null);
    const [activeCategory, setActiveCategory] = useState("all");

    const categories = ["all", "cup", "cone", "stick", "novelties"];

    const filteredProducts =
        activeCategory === "all"
            ? products
            : products.filter((p) => p.category === activeCategory);


    return (
        <>
            <BreadCrumbContainer breadcrumbLink="products" />

            <section className="py-12 px-6 max-w-7xl mx-auto" ref={containerRef}>
                {/* FILTER BUTTONS */}
                <div className="flex flex-wrap gap-2 justify-center mb-10 sticky top-30 z-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {setActiveCategory(cat); window.scrollTo({top: 0, behavior: "smooth"})}}
                            className={`md:px-5 px-3 md:py-2 py-1 md:text-xl text-[14px] rounded-full border font-bayon tracking-wider cursor-pointer transition ${activeCategory === cat
                                ? "bg-[#892D1C] text-white"
                                : "bg-white text-black"
                                }`}
                        >
                            {cat.toUpperCase()}
                        </button>
                    ))}
                </div>

                {/* PRODUCT GRID */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product: Product) => (
                        <div
                            key={product.id}
                            className="product-card relative group bg-white rounded-3xl font-dm-sans tracking-wider text-center transition"
                        >
                            <div className="p-5 rounded-t-3xl">
                                <Image
                                    src={`/images/products/${product.image}`}
                                    alt={product.name}
                                    height={500}
                                    width={500}
                                    className="w-full md:h-70 h-50 object-contain group-hover:scale-108 group-hover:drop-shadow-2xl transition-all duration-300"
                                />
                            </div>

                            <h3 className="absolute group-hover:rotate-0 group-hover:top-[90%] transition-all duration-300 -rotate-10 top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap uppercase bg-black text-white px-5 py-1 shadow border-2 border-white  md:text-lg inline-block text-sm font-bayon tracking-wider">
                                {product.name.replace(/-/g, " ")}
                            </h3>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}