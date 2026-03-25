"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger)

const HeroSection = () => {

    const heroSection = useRef(null)
    const heroTitle = useRef(null)

    useGSAP(() => {

        const tl = gsap.timeline({ delay: 1 })

        const split = new SplitText(heroTitle.current, {
            type: "words, chars"
        })

        tl.to("#hero-content", {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.inOut"
        })
            .to("#hero-sub-title", {
                clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
                duration: 1,
                ease: "circ.inOut",
            }, "-=0.5")
            .from(split.chars, {
                opacity: 0,
                y: 100,
                duration: 1,
                ease: "back.inOut",
                stagger: 0.05
            }, "-=1")

        gsap.to(heroSection.current, {
            scale: 0.8,
            rotate: 5,
            scrollTrigger: {
                trigger: heroSection.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        })

        return () => {
            split.revert()
        }

    }, { scope: heroSection })


    return (
        <section
            ref={heroSection}
            className="py-30 flex justify-center items-center relative min-h-screen"
        >

            <div className="absolute inset-0 w-full h-full -z-10">
                {/* <Image
                    src="/images/hero/hero-bg-3.png"
                    alt="Hero Background"
                    fill
                    priority
                    className="object-cover"
                /> */}
                <video src="/videos/hero-bg.mp4" autoPlay playsInline muted className="object-cover w-full h-full" />
            </div>

            <div
                id="hero-content"
                className="max-w-7xl mx-auto text-center opacity-0 relative z-10"
            >

                <h1
                    ref={heroTitle}
                    className="font-bayon 2xl:text-9xl xl:text-9xl lg:text-8xl md:text-6xl text-4xl text-[#892D1C] tracking-tight"
                >
                    PURE CREAMY
                </h1>

                <h2
                    id="hero-sub-title"
                    style={{
                        clipPath: "polygon(50% 0,50% 0,50% 100%,50% 100%)"
                    }}
                    className="font-bayon mx-10 2xl:text-9xl xl:text-9xl lg:text-8xl md:text-6xl text-4xl tracking-tight lg:px-15 px-6 py-5 text-white text-shadow-lg bg-linear-to-r from-[#FC3327] via-[#4CC91F] to-[#961E17] inline-block -rotate-6 shadow-lg"
                >
                    MILK & DELICIOUS CREAM
                </h2>

                <p className="font-dm-sans 2xl:text-2xl xl:text-2xl lg:text-xl text-sm font-light md:w-1/2 w-2/3 mx-auto mt-10 text-black">
                    Made with fresh milk and rich cream for the ultimate taste experience.
                    <strong> DOUBLE COOL</strong> is not just ice cream — it’s a mood.
                </p>

                <Link
                    href="/shop"
                    className="inline-flex items-center font-bold text-white 2xl:text-2xl xl:text-2xl md:text-lg text-sm rounded-2xl hover:shadow-[5px_5px_0px_rgba(0,0,0)] hover:scale-105 transition-all duration-300 bg-[#892D1C] ps-2 pe-5 py-2.5 mt-10 font-baloo2"
                >

                    <Image
                        priority
                        src="/images/hero/icon-icecream.png"
                        alt="shop now"
                        width={100}
                        height={100}
                        className="w-auto md:h-10 h-6 -rotate-36"
                    />

                    <span>TASTE THE MAGIC</span>

                </Link>

            </div>
        </section>
    )
}

export default HeroSection