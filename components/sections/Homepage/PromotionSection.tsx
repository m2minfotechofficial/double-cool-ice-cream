"use client"
import Image from "next/image"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const PromotionSection = () => {
    useGSAP(() => {
        const firstText = SplitText.create("#text-1", { type: "words" });
        const secondText = SplitText.create("#text-2", { type: "words" });
        const thirdText = SplitText.create("#text-3", { type: "words" });

        gsap.to(firstText.words, {
            color: "#ffffff",
            stagger: 0.3,
            // ease: "power1.in",
            scrollTrigger: {
                trigger: "#text-1",
                start: "top 70%",
                end: "bottom 70%",
                scrub: 1,
            }
        })
        gsap.to("#logo", {
            width: "auto",
            scale: 1,
            ease: "power1.in",
            scrollTrigger: {
                trigger: "#text-1",
                start: "bottom 70%",
                end: "bottom 70%",
                scrub: 1,
            }
        })
        gsap.to(secondText.words, {
            color: "#ffffff",
            stagger: 0.5,
            // ease: "power1.in",
            scrollTrigger: {
                trigger: "#text-2",
                start: "top 50%",
                end: "bottom 50%",
                scrub: 1,
            }
        })
        gsap.to(".highlight-text", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power1.in",
            scrollTrigger: {
                trigger: ".highlight-text",
                start: "20% 70%",
                end: "bottom 70%",
                toggleActions: "play none none reverse",
            }
        })
        gsap.to(thirdText.words, {
            color: "#ffffff",
            stagger: 0.4,
            ease: "power1.in",
            scrollTrigger: {
                trigger: "#text-2",
                start: "bottom 60%",
                end: "bottom 50%",
                scrub: 1,
            }
        })
    })
    return (
        <section className="bg-[#961E17] md:px-20 px-10 md:py-30 py-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-bayon 2xl:text-8xl xl:text-8xl lg:text-7xl md:text-5xl text-4xl  tracking-tight text-center">
                    <span className="span-1 text-[#ffffff34]" id="text-1">
                        BUILD YOUR DISTRIBUTION BUSINESS WITH
                    </span>

                    <span className="inline-flex items-end">
                        <Image src="/images/logo/logo-double-cool.png" id="logo" alt="promotion bg" width={120} height={120} className="w-6 scale-0 lg:h-auto h-10 inline-block" />
                        <span className="lg:-mb-4 text-[#ffffff34]" id="text-2">DOUBLE COOL</span>
                    </span>
                    <span className="span-2 block text-center">
                        <span style={{
                            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
                        }} className="highlight-text px-10 py-1 text-white text-shadow-lg bg-linear-to-r from-[#FC3327] via-[#4CC91F] to-[#961E17] inline-block -rotate-6 shadow-lg border-3">profit</span>
                    </span>
                    <span className="span-3 text-[#ffffff34]" id="text-3">IN EVERY ORDER</span>
                </h2>
                <p className="font-dm-sans 2xl:text-2xl xl:text-2xl lg:text-xl text-sm text-white mt-3 md:w-1/2 mx-auto text-center font-light">
                    High-demand categories. Strong retailer pull. Reliable supply.
                    Partner with <strong className="font-bold">Double Cool</strong> & grow your frozen sales.
                </p>
            </div>
        </section>
    )
}

export default PromotionSection