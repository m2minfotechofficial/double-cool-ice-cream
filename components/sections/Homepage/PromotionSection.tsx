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
            stagger: 0.5,
            ease: "power1.in",
            scrollTrigger: {
                trigger: "#text-1",
                start: "top 70%",
                end: "50% 70%",
                scrub: 0.5,
                // markers: true
            }
        })
        gsap.to("#logo", {
            width: "auto",
            scale: 1,
            ease: "power1.in",
            scrollTrigger: {
                trigger: "#logo",
                start: "top 70%",
                end: "50% 70%",
                scrub: 0.5,
                // markers: true
            }
        })
        gsap.to(secondText.words, {
            color: "#ffffff",
            stagger: 0.5,
            ease: "power1.in",
            scrollTrigger: {
                trigger: "#text-2",
                start: "20% 70%",
                end: "bottom 70%",
                scrub: 0.5,
                // markers: true
            }
        })
        gsap.to(".highlight-text", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power1.in",
            scrollTrigger: {
                trigger: ".highlight-text",
                start: "20% 70%",
                end: "bottom 70%",
                scrub: 0.5,
                // markers: true
            }
        })
        gsap.to(thirdText.words, {
            color: "#ffffff",
            stagger: 0.5,
            ease: "power1.in",
            scrollTrigger: {
                trigger: "#text-2",
                start: "bottom 60%",
                end: "bottom 50%",
                scrub: 0.5,
                // markers: true
            }
        })
    })
    return (
        <section className="bg-[#961E17] py-30 px-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-bayon text-8xl  tracking-tight text-center">
                    <span className="span-1 text-[#ffffff34]" id="text-1">
                        BUILD YOUR DISTRIBUTION BUSINESS WITH
                    </span>

                    <span className="inline-flex items-end">
                        <Image src="/images/logo/logo-double-cool.png" id="logo" alt="promotion bg" width={120} height={120} className="w-6 scale-0 h-auto inline-block" />
                        <span className="-mb-4 text-[#ffffff34]" id="text-2">DOUBLE COOL</span>
                    </span>
                    <span className="span-2 block text-center">
                        <span style={{
                            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
                        }} className="highlight-text px-10 py-1 text-white text-shadow-lg bg-linear-to-r from-[#FC3327] via-[#4CC91F] to-[#961E17] inline-block -rotate-6 shadow-lg border-3">profit</span>
                    </span>
                    <span className="span-3 text-[#ffffff34]" id="text-3">IN EVERY ORDER</span>
                </h2>
                <p className="font-dm-sans text-2xl text-white mt-3 w-1/2 mx-auto text-center font-light">
                    High-demand categories. Strong retailer pull. Reliable supply.
                    Partner with <strong className="font-bold">Double Cool</strong> & grow your frozen sales.
                </p>
            </div>
        </section>
    )
}

export default PromotionSection