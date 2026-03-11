"use client"
import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const MostPopularProducts = () => {
    // 1. Explicitly type the Refs as HTMLDivElement | null
    const containerRef = useRef<HTMLDivElement | null>(null);
    const sliderRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        // 2. Cache refs to local variables and add a guard clause for TypeScript
        const container = containerRef.current;
        const slider = sliderRef.current;
        let mm = gsap.matchMedia();

        if (!container || !slider) return;

        // 1. Horizontal Scroll Animation

        mm.add("(min-width: 640px)", () => {
            gsap.to(slider, {
                // Safe to access scrollWidth because of the guard clause above
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
        })


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
                gsap.to(front, { x: x * 0.15, y: y * 0.15, duration: 0.5, ease: "power2.out" }); // Front sabse zyada move hoga
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
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="popular-product-card relative lg:w-[600px] w-[85vw] lg:h-[500px] h-[200px] shrink-0">
                            <Image
                                width={700}
                                height={500}
                                src="/images/most-popular-products/butter-scotch-bg.png"
                                alt="bg"
                                className="object-contain w-[90%]"
                            />
                            <Image
                                width={900}
                                height={500}
                                src="/images/most-popular-products/butter-scotch-mid.png"
                                alt="mid"
                                className="w-[80%] absolute -bottom-10 left-5 z-10"
                            />
                            <Image
                                width={900}
                                height={500}
                                src="/images/most-popular-products/butter-scotch.png"
                                alt="front"
                                className="w-full absolute top-0 -left-10 scale-110 z-20"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MostPopularProducts;