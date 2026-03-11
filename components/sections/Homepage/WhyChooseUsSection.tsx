"use client"
import { WhyChooseUsCard } from '@/types'
import Image from 'next/image'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const whyChooseUsData: WhyChooseUsCard[] = [
    {
        id: 1,
        title: "ISO Certified Quality",
        icon: "/images/why-choose-us/iso-certified.png",
        description: "Quality-controlled production with trusted hygiene standards."
    },
    {
        id: 2,
        title: "Fast Moving Product Range",
        icon: "/images/why-choose-us/fast-moving.png",
        description: "Cones, Cups, Sticks & Novelties designed to sell fast."
    },
    {
        id: 3,
        title: "Reliable Supply Support",
        icon: "/images/why-choose-us/reliable-support.png",
        description: "Smooth production & dependable delivery for distributor success."
    },
    {
        id: 4,
        title: "Profitable Partnership",
        icon: "/images/why-choose-us/profitable.png",
        description: "Distributor-friendly business support for long-term growth."
    }
]

const WhyChooseUsSection = () => {
    useGSAP(() => {
        // 1. Animate Header Text
        const whyChooseUsHead = new SplitText("#why-choose-us-head", { type: "words" });

        gsap.from(whyChooseUsHead.words, {
            opacity: 0,
            y: 20,
            stagger: 0.5,
            duration: 1,
            scrollTrigger: {
                trigger: "#why-choose-us-head",
                start: "top 90%",
                toggleActions: "play none none reverse",
            }
        });

        gsap.from(".why-choose-us-card", {
            opacity: 0,
            y: -100,
            stagger: 0.5,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: "#why-choose-us-cards",
                start: "top 70%",
                end: "50% 70%",
                // markers: true,
                scrub: 4,
            }
        })


    });

    return (
        <section className="bg-[#a51f16] md:px-20 px-6 md:py-30 py-10 text-white">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="mb-14 text-center lg:text-left">
                    <h2 id="why-choose-us-head" className="font-bayon 2xl:text-7xl xl:text-7xl lg:text-5xl md:text-4xl text-2xl text-[#ffffff] inline-flex gap-3 flex-wrap md:leading-normal leading-7"><span>WHY DISTRIBUTORS CHOOSE DOUBLE</span> <span className="relative inline-block after:content-[''] after:h-[2px] after:w-[100px] after:bg-[#ffffff] after:absolute md:after:bottom-3 after:bottom-2 md:after:-right-[120px] after:-right-[105px]">COOL</span></h2>

                    <p id="why-choose-us-content" className="mt-3 text-white font-dm-sans 2xl:text-2xl xl:text-2xl lg:text-xl text-sm font-light">
                        Trusted quality, strong demand, and reliable supply — built for distribution.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8" id="why-choose-us-cards">

                    {whyChooseUsData.map((item: WhyChooseUsCard) => (
                        <div className='why-choose-us-card' key={item.id}>
                            <div className="relative bg-linear-to-b from-[#D9D9D9]  to-[#FFFFFF] text-[#222] rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl pb-20">
                                {/* dashed border effect */}
                                <div className="absolute inset-2 border border-dashed border-black rounded-xl pointer-events-none" />

                                {/* Icon */}
                                <div className="flex justify-end mb-4">
                                    <Image
                                        src={item.icon}
                                        alt=""
                                        width={36}
                                        height={36}
                                        aria-hidden="true"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="font-bayon md:text-4xl text-lg leading-snug tracking-tight">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-3 md:text-xl text-sm text-black font-dm-sans leading-relaxed tracking-tight">
                                    {item.description}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default WhyChooseUsSection