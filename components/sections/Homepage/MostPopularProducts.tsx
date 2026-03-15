"use client"
import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { PopularProduct } from "@/types";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const productsData: PopularProduct[] = [
    {
        id: 1,
        title: "Two In One",
        bgImg: "/images/most-popular-products/2-in-1-bg.jpeg",
        midImg: "/images/most-popular-products/2-in-1-swirl.png",
        frontImg: "/images/most-popular-products/2-in-1.png",
    },
    {
        id: 2,
        title: "Butter Scotch",
        bgImg: "/images/most-popular-products/butter-scotch-bg.jpeg",
        midImg: "/images/most-popular-products/butter-scotch-swirl.png",
        frontImg: "/images/most-popular-products/butter-scotch.png",
    },
    {
        id: 3,
        title: "Chocolate",
        bgImg: "/images/most-popular-products/chocolate-1-bg.jpeg",
        midImg: "/images/most-popular-products/chocolate-1-swirl.png",
        frontImg: "/images/most-popular-products/chocolate-1.png",
    },
    {
        id: 4,
        title: "Vanilla",
        bgImg: "/images/most-popular-products/vanilla-bg.jpeg",
        midImg: "/images/most-popular-products/vanilla-swirl.png",
        frontImg: "/images/most-popular-products/vanilla.png",
    },
    {
        id: 5,
        title: "Chocolate",
        bgImg: "/images/most-popular-products/chocolate-2-bg.jpeg",
        midImg: "/images/most-popular-products/chocolate-2-swirl.png",
        frontImg: "/images/most-popular-products/chocolate-2.png",
    },
    {
        id: 6,
        title: "Rabri",
        bgImg: "/images/most-popular-products/rabri-bg.jpeg",
        midImg: "/images/most-popular-products/rabri-swirl.png",
        frontImg: "/images/most-popular-products/rabri.png",
    },
    {
        id: 7,
        title: "Platinum Kulfi",
        bgImg: "/images/most-popular-products/koolfi-bg.jpeg",
        midImg: "/images/most-popular-products/koolfi-swirl.png",
        frontImg: "/images/most-popular-products/koolfi.png",
    },
    {
        id: 8,
        title: "Mango Swirl",
        bgImg: "/images/most-popular-products/mango-bg.jpeg",
        midImg: "/images/most-popular-products/mango-swirl2.png",
        frontImg: "/images/most-popular-products/mango.png",
    },
];

const MostPopularProducts = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const sliderRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        const container = containerRef.current;
        const slider = sliderRef.current;
        let mm = gsap.matchMedia();

        if (!container || !slider) return;

        // 1. Horizontal Scroll Animation
        mm.add("(min-width: 640px)", () => {
            gsap.to(slider, {
                x: () => -(slider.scrollWidth - window.innerWidth + 200),
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    pin: true,
                    scrub: 1,
                    start: "top top",
                    end: () => "+=" + slider.scrollWidth,
                    invalidateOnRefresh: true,
                }
            });
        });


        // 2. Text Animations
        const popularProductsHead1 = SplitText.create("#text-one", { type: "words" });
        const popularProductsHead2 = SplitText.create("#text-two", { type: "words" });

        gsap.from([popularProductsHead1.words, popularProductsHead2.words], {
            opacity: 0,
            y: 50,
            stagger: 0.1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#popular-products-head",
                start: "top 80%",
                toggleActions: "play none none reverse",
            }
        });

        // 3. Highlight Animation
        gsap.to("#highlight", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: "#highlight",
                start: "top 80%",
                toggleActions: "play none none reverse",
            }
        });


        const cards = gsap.utils.toArray<HTMLElement>(".popular-product-card");

        const cleanupEvents = cards.map((card) => {
            const bg = card.querySelector('img[alt="bg"]');
            const mid = card.querySelector('img[alt="mid"]');
            const front = card.querySelector('img[alt="front"]');

            const handleMouseMove = (e: MouseEvent) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                gsap.to(bg, { x: x * 0.02, y: y * 0.02, duration: 0.5, ease: "power2.out" });
                gsap.to(mid, { x: x * 0.06, y: y * 0.06, duration: 0.5, ease: "power2.out" });
                gsap.to(front, { x: x * 0.15, y: y * 0.15, duration: 0.5, ease: "power2.out" }); 
            };

            const handleMouseLeave = () => {
                gsap.to([bg, mid, front], { x: 0, y: 0, duration: 0.7, ease: "power3.out" });
            };

            card.addEventListener("mousemove", handleMouseMove);
            card.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                card.removeEventListener("mousemove", handleMouseMove);
                card.removeEventListener("mouseleave", handleMouseLeave);
            };
        });

        return () => {
            mm.revert()
            cleanupEvents.forEach(cleanup => cleanup());
        };

    }, { scope: containerRef }); // Context scoping


    return (
        <section ref={containerRef} className="overflow-hidden bg-white ">
            <div
                ref={sliderRef}
                className="sm:flex items-center min-h-dvh w-fit px-[10%] gap-20 lg:py-0 py-10"
            >
                {/* Heading */}
                <h2 id="popular-products-head" className="font-bayon shrink-0 2xl:text-8xl xl:text-8xl md:text-5xl text-4xl text-[#892D1C] tracking-tight text-center">
                    <span className="span-1 block" id="text-one">
                        DISCOVER OUR
                    </span>
                    <span className="span-2 block text-center relative z-10">
                        <span id="highlight" style={{
                            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
                        }} className="px-10 py-1 text-white text-shadow-lg bg-linear-to-r from-[#FC3327] via-[#4CC91F] to-[#961E17] inline-block -rotate-6 shadow-xl border-3">
                            MOST POPULAR
                        </span>
                    </span>
                    <span className="span-3 block" id="text-two">PRODUCTS</span>
                </h2>

                {/* Product Cards Wrapper */}
                <div className="flex sm:flex-row flex-col items-center lg:gap-40 gap-20 lg:py-32 py-10">
                    {/* 3. Map over the new data array */}
                    {productsData.map((product) => (
                        <div key={product.id} className="popular-product-card relative group lg:w-[600px] w-[85vw] lg:h-[500px] h-[200px] shrink-0">
                            <Image
                                width={700}
                                height={500}
                                src={product.bgImg}
                                alt="bg"
                                className="object-contain w-[90%] rounded-[80px] -rotate-10 shadow-2xl mt-15"
                            />
                            <Image
                                width={900}
                                height={500}
                                src={product.midImg}
                                alt="mid"
                                className="w-[80%] absolute -bottom-10 left-5 z-10"
                            />
                            <Image
                                width={900}
                                height={500}
                                src={product.frontImg}
                                alt="front"
                                className="w-full absolute top-0 -left-10 scale-110 z-20"
                            />

                            <h3 className="absolute bottom-[18%] right-0 z-20 md:text-2xl bg-black mt-3 font-light text-white uppercase px-8 py-[2px] font-bayon border-3 border-white -rotate-25 -mb-5 shadow -ms-10 tracking-tight text-center md:w-[200px] group-hover:scale-[1.1] transition-all duration-300">
                                {product.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MostPopularProducts;