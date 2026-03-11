"use client"
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const AboutUsSection = () => {
    useGSAP(() => {
        const aboutHead = SplitText.create("#about-head", { type: "words", mask: "words" })
        const aboutContent = SplitText.create("#about-content", { type: "words", mask: "words" })

        gsap.from(aboutHead.words, {
            opacity: 0,
            y: -100,
            ease: "back.inOut",
            stagger: 0.1, // Changed from 1 to 0.1 for a smoother, faster word sequence
            scrollTrigger: {
                trigger: "#about-head",
                start: "top 90%",
                toggleActions: "play none none reverse",
            }
        })

        gsap.from("#about-logo", {
            opacity: 0,
            rotate: 360,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: "#about-logo",
                start: "top 70%",
                end: "top 70%",
                scrub: 2 // Reduced scrub slightly for better mobile performance
            }
        })

        gsap.from(aboutContent.words, {
            opacity: 0,
            y: -100,
            ease: "power2.inOut",
            stagger: 0.02,
            scrollTrigger: {
                trigger: "#about-content",
                start: "top 90%",
                toggleActions: "play none none reverse",
            }
        })

        gsap.to(".highlight-text", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "back.inOut",
            stagger: 0.5,
            scrollTrigger: {
                trigger: "#exp-tag",
                start: "top 85%", // Adjusted for mobile visibility
                toggleActions: "play none none reverse",
            }
        })

        gsap.from("#fssai-logo", {
            opacity: 0,
            y: -100,
            ease: "back.inOut",
            stagger: 1,
            scrollTrigger: {
                trigger: "#fssai-logo",
                start: "top 70%",
                end: "top 70%",
                scrub: 2
            }
        })
    })

    return (
        // Added overflow-x-hidden to prevent horizontal scrolling on mobile
        <section className="bg-[#efefef] py-12 px-6 md:py-16 md:px-12 lg:py-20 lg:px-20 overflow-x-hidden">
            <div className="max-w-7xl grid lg:grid-cols-2 gap-10 lg:gap-5 items-center mx-auto">

                {/* LEFT SIDE — LOGO */}
                <div className="text-center order-2 lg:order-1">
                    <div className="about-logo relative mb-8 lg:mb-10">
                        <Image src="/images/about/about.png"
                            id="about-logo"
                            alt="Double Cool Logo"
                            width={500}
                            height={500}
                            className="w-[60%] sm:w-[50%] lg:w-[70%] h-auto mx-auto"
                            priority />
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <Image
                            id="fssai-logo"
                            src="/images/about/fssai-logo.png"
                            alt="fssai logo"
                            width={100}
                            height={100}
                            className="w-20 md:w-auto h-auto inline-block"
                            priority
                        />
                        <p className="text-black font-bayon text-2xl lg:text-3xl font-light">
                            Lic. No. 123456789
                        </p>
                    </div>
                </div>

                {/* RIGHT SIDE — CONTENT CARD */}
                <div className="relative order-1 lg:order-2">

                    {/* Heading */}
                    <div className="flex items-center lg:items-end justify-center lg:justify-start gap-4 mb-6">
                        <h2 className="font-bayon text-5xl sm:text-6xl lg:text-7xl text-[#561C12]" id="about-head">
                            ABOUT US
                        </h2>
                        <span className="w-[60px] lg:w-[100px] h-[2px] bg-[#561C12] mb-2 lg:mb-3 hidden sm:block" />
                    </div>

                    {/* Card */}
                    <div className="relative bg-white shadow-xl p-6 md:p-8 lg:p-10 rounded-lg lg:rounded-none" id="about-card">
                        <p className="text-gray-700 leading-relaxed text-base lg:text-lg font-dm-sans text-center lg:text-left" id="about-content">
                            Double Cool is a trusted ice cream brand known for its wide
                            variety of frozen treats made with healthy milk and delicious
                            cream. We are an ISO 9001:2015 certified company committed to
                            maintaining quality standards in every product we make.
                            Our range includes multiple categories such as Novelties,
                            Sticks, Cones, and Cups, with many flavour options designed
                            to suit different customer preferences and market demand.
                            With a focus on consistent taste, attractive product
                            variety, and reliable brand support, Double Cool aims to
                            build long-term partnerships and grow a strong distribution
                            network across markets.
                        </p>

                        <div className="text-center lg:text-end mt-6 lg:mt-0">
                            {/* ISO Badge */}
                            <Image
                                src="/images/about/iso-logo.png"
                                alt="ISO Certification"
                                width={120}
                                height={120}
                                className="w-20 lg:w-[120px] h-auto inline-block"
                            />
                        </div>

                        {/* EXPERIENCE TAG */}
                        <div className="absolute -bottom-12 left-4 lg:-bottom-15 lg:left-10 rotate-[-8deg] scale-[0.65] sm:scale-75 lg:scale-100 origin-bottom-left" id="exp-tag">
                            <div style={{
                                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
                            }} className="bg-black highlight-text border-2 border-white text-white font-bayon px-4 py-2 lg:px-6 lg:py-2 text-3xl lg:text-4xl shadow-xl">
                                10+ YEARS
                            </div>
                            <div style={{
                                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
                            }} className="bg-black highlight-text border-2 border-white text-white font-bayon px-4 py-2 lg:px-6 lg:py-2 text-3xl lg:text-4xl mt-1 shadow-xl relative left-6 lg:left-10 z-10 -top-2 lg:-top-3">
                                EXPERIENCE
                            </div>
                        </div>
                    </div>

                    <div className="text-center lg:text-left mt-16 md:mt-20">
                        {/* Button */}
                        <Link href="/shop" className="inline-flex items-center justify-center font-bold text-white text-lg xl:text-2xl lg:text-2xl rounded-2xl hover:shadow-[5px_5px_0px_rgba(0,0,0)] hover:scale-105 transition-all duration-300 bg-[#892D1C] ps-2 pe-4 lg:pe-5 py-2 lg:py-2.5 font-baloo2">
                            <Image src="/images/about/info-icon.png" alt="shop now" width={80} height={80} className="w-auto h-5 lg:h-6 mx-2" />
                            <span>KNOW MORE</span>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;