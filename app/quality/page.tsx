"use client"

import BreadCrumbContainer from "@/components/layouts/BreadCrumbContainer"
import Image from "next/image"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger, SplitText } from "gsap/all"
import Link from "next/link"

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

export default function Quality() {

    useGSAP(() => {

        const firstText = SplitText.create("#text-q1", { type: "words", mask: "words" });
        const secondText = SplitText.create("#text-q2", { type: "words" });
        const thirdText = SplitText.create("#text-q3", { type: "words" });

        gsap.from(firstText.words, {
            y: 100,
            stagger: 0.3,
            delay: 1,
            duration: 1
        })
        gsap.from(firstText.words, {
            y: 100,
            stagger: 0.3,
            duration: 1,
            scrollTrigger: {
                trigger: "#text-q1",
                start: "top 80%",
            }
        })

        gsap.to("#highlight-text-q", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power1.in",
            delay: 1,
            duration: 1
        })
        gsap.to("#highlight-text-q2", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power1.in",
            duration: 1,
            scrollTrigger: {
                trigger: "#highlight-text-q2",
                start: "top 80%",
            }
        })

        gsap.from(".fade-up", {
            opacity: 0,
            y: 80,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".fade-up",
                start: "top 80%",
            }
        })

        gsap.from(".process-step", {
            opacity: 0,
            y: 100,
            stagger: 0.2,
            duration: 1,
            ease: "back.out",
            scrollTrigger: {
                trigger: "#process-section",
                start: "top 70%",
            }
        })

    })

    return (
        <>
            <BreadCrumbContainer breadcrumbLink="quality" />

            {/* HERO */}
            <section className="text-center py-10">
                <h1 className="font-bayon 2xl:text-8xl xl:text-8xl lg:text-7xl md:text-5xl text-4xl  tracking-tight text-center">
                    <span id="text-q1" className="span-1 text-[#892D1C] block">
                        QUALITY YOU CAN
                    </span>

                    <span id="highlight-text-q" style={{
                        clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
                    }} className="highlight-text-q px-10 py-1 relative -top-3 text-white text-shadow-lg bg-linear-to-r from-[#FC3327] via-[#4CC91F] to-[#961E17] inline-block -rotate-6 shadow-lg border-3">TRUST</span>
                </h1>
                <p className="mt-6 2xl:text-2xl xl:text-2xl lg:text-xl text-sm max-w-2xl mx-auto fade-up font-dm-sans">
                    Crafted with fresh milk, rich cream and strict hygiene standards —
                    every scoop delivers pure happiness.
                </p>

                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-center py-10">

                    <div className="fade-up">
                        <Image src="/images/quality/milk.png" alt="milk" width={300} height={300} className="mx-auto rounded-3xl shadow w-[70%] bg-[#FEFEFE] p-10" />
                        <h3 className="font-bayon text-3xl mt-4 text-[#892D1C]">FRESH MILK</h3>
                        <p className="mt-2 font-dm-sans md:text-xl text-sm">Sourced daily to ensure purity and taste.</p>
                    </div>

                    <div className="fade-up">
                        <Image src="/images/quality/creamy.png" alt="cream" width={300} height={300} className="mx-auto rounded-3xl shadow w-[70%] bg-[#FEFEFE] p-10" />
                        <h3 className="font-bayon text-3xl mt-4 text-[#892D1C]">RICH CREAM</h3>
                        <p className="mt-2 font-dm-sans md:text-xl text-sm">Gives every bite a smooth and creamy texture.</p>
                    </div>

                    <div className="fade-up">
                        <Image src="/images/quality/flavour.png" alt="flavour" width={300} height={300} className="mx-auto rounded-3xl shadow w-[70%] bg-[#FEFEFE] p-10" />
                        <h3 className="font-bayon text-3xl mt-4 text-[#892D1C]">NATURAL FLAVOURS</h3>
                        <p className="mt-2 font-dm-sans md:text-xl text-sm">Delicious flavours loved by everyone.</p>
                    </div>

                </div>
            </section>

            {/* PROCESS */}
            <section id="process-section" className="bg-[#fff7f5] py-10">
                <h2 className="font-bayon 2xl:text-7xl xl:text-7xl lg:text-5xl md:text-4xl text-2xl text-center text-[#892D1C] mb-10">
                    OUR PROCESS
                </h2>

                <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-6 text-center font-dm-sans">

                    {["Milk Collection", "Pasteurization", "Mixing", "Freezing", "Packaging"].map((step, i) => (
                        <div key={i} className="process-step p-5 bg-white shadow-lg rounded-xl">
                            <Image src={`/images/quality/process-${i + 1}.png`} alt="process" width={300} height={300} className="mx-auto w-[70%] bg-[#FEFEFE] p-2" />
                            <p className="mt-2">{step}</p>
                        </div>
                    ))}

                </div>
            </section>

            {/* HYGIENE */}
            <section className="py-20 bg-[#f0fff4] text-center">
                <h2 className="font-bayon 2xl:text-7xl xl:text-7xl lg:text-5xl md:text-4xl text-2xl text-[#892D1C] fade-up">
                    HYGIENE & SAFETY
                </h2>
                <p className="font-dm-sans md:text-xl text-sm">
                    We follow strict hygiene protocols in our manufacturing process to ensure safe and fresh ice creams every time.
                </p>
            </section>

            {/* PACKAGING */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                    <div className="fade-up">
                        <h2 className="font-bayon 2xl:text-8xl xl:text-8xl lg:text-7xl md:text-5xl text-4xl  tracking-tight text-center">
                            <span id="text-q2" className="span-1 text-[#892D1C] block">
                                SAFE
                            </span>

                            <span id="highlight-text-q2" style={{
                                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
                            }} className="highlight-text-q px-10 py-1 relative -top-3 text-white text-shadow-lg bg-linear-to-r from-[#FC3327] via-[#4CC91F] to-[#961E17] inline-block -rotate-6 shadow-lg border-3">PACKAGING</span>
                        </h2>

                        <p className="font-dm-sans md:text-xl text-sm">
                            Our packaging ensures freshness, prevents leakage and maintains the perfect temperature till it reaches you.
                        </p>
                    </div>

                    <div className="fade-up">
                        <Image src="/images/quality/package-safe.png" alt="packaging" width={500} height={400} className="rounded-xl" />
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[#892D1C] text-white text-center">
                <h2 className="font-bayon 2xl:text-7xl xl:text-7xl lg:text-5xl md:text-4xl text-2xl">
                    TRUSTED QUALITY. GROW WITH US.
                </h2>
                <p className="mt-4 font-dm-sans md:text-xl text-sm">
                    Join Double Cool and become a part of our growing distribution network.
                </p>

                <Link href="/contact" className="inline-block md:text-2xl text-lg  font-bayon mt-8 px-8 py-4 bg-white text-[#892D1C] font-bold rounded-xl">
                    APPLY FOR DISTRIBUTORSHIP
                </Link>
            </section>

        </>
    )
}