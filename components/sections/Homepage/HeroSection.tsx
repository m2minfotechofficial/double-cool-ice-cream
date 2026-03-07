"use client"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

const HeroSection = () => {
    useGSAP(() => {

        let tl = gsap.timeline({ delay: 2 });
        let split = SplitText.create("#hero-title", { type: "words, chars", mask: "chars" });

        tl.to("#hero-content", {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.inOut"
        })
            .to("#hero-sub-title", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 1,
                ease: "circ.inOut",
            }, "-=0.5")
            .from(split.chars, {
                opacity: 0,
                y: 100,
                duration: 1,
                ease: "back.inOut",
                stagger: 0.1
            }, "-=1")
            .to("#hero-section", {
                scale: 0.8,
                rotate: 5,
                scrollTrigger: {
                    trigger: '#hero-section',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: false,
                    // markers: true
                }
            })
    })
    return (
        <section className="py-30 flex justify-center items-center bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center bg-fixed" id="hero-section">
            <div id="hero-content" className="max-w-7xl mx-auto text-center opacity-0">
                <h1 id="hero-title" className="font-bayon text-9xl text-[#892D1C] tracking-tight">PURE CREAMY</h1>
                <h2 id="hero-sub-title"
                    style={{
                        clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
                    }}
                    className="font-bayon text-9xl tracking-tight px-15 py-5 text-white text-shadow-lg bg-linear-to-r from-[#FC3327] via-[#4CC91F] to-[#961E17] inline-block -rotate-6 shadow-lg">MILK + DELICIOUS CREAM</h2>
                <p className="font-dm-sans text-2xl font-light w-1/2 mx-auto mt-10 text-black">
                    Made with healthy milk and rich cream for the ultimate taste experience. <strong>DOUBLE COOL</strong> is not just ice cream — it’s a mood.
                </p>
                <Link href="/shop" className="inline-flex items-center font-bold text-white text-2xl rounded-2xl hover:shadow-[5px_5px_0px_rgba(0,0,0)] hover:scale-105 transition-all duration-300 bg-[#892D1C] ps-2 pe-5 py-2.5 mt-10 font-baloo2">
                    <Image src="/images/hero/icon-icecream.png" alt="shop now" width={100} height={100} className="w-auto h-10 -rotate-36" />
                    <span>TASTE THE MAGIC</span>
                </Link>
            </div>
        </section>
    )
}

export default HeroSection