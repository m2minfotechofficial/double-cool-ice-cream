"use client"

import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const DistributorshipCTASection = () => {
    useGSAP(() => {
        const distributorshipHead = SplitText.create("#distributorship-head", { type: "words", mask: "words" });
        const distributorshipHead2 = SplitText.create("#distributorship-head2", { type: "words", mask: "words" });

        gsap.from(distributorshipHead.words, {
            opacity: 0,
            y: -100,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: "#distributorship-head",
                start: "top 70%",
                end: "50% 70%",
                toggleActions: "play none none reverse",
            }
        })
        gsap.from("#distributor-content", {
            opacity: 0,
            y: -100,
            ease: "power2.inOut",
            stagger: 0.05,
            scrollTrigger: {
                trigger: "#distributor-content",
                start: "top 70%",
                end: "50% 70%",
                toggleActions: "play none none reverse",
            }
        })
        // Buttons Animation
        gsap.from(".distributor-button", {
            scale: 0,
            stagger: 0.2,
            ease: "back.inOut",
            scrollTrigger: {
                trigger: "#distributor-buttons",
                start: "top 80%",
                toggleActions: "play none none reverse",
            }
        });
        gsap.from(distributorshipHead2.words, {
            opacity: 0,
            y: -100,
            ease: "power2.inOut",
            stagger: 0.3,
            scrollTrigger: {
                trigger: "#distributorship-head2",
                start: "top 70%",
                end: "50% 70%",
                toggleActions: "play none none reverse",
            }
        })
        gsap.to("#highlight", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power2.inOut",
            stagger: 0.05,
            scrollTrigger: {
                trigger: "#highlight",
                start: "top 65%",
                end: "50% 65%",
                toggleActions: "play none none reverse",
            }
        })
    })
    return (
        <section className="py-30 px-20 relative">
            <div className="absolute inset-0 w-full h-full -z-10">
                <Image
                    src="/images/distributorship/distributorship.webp"
                    alt="Distributorship Background"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="max-w-7xl mx-auto relative z-10">
                <h2 id="distributorship-head" className="font-bayon text-8xl text-[#892D1C] tracking-tight text-center">
                    <span className="span-1">
                        DISTRIBUTORSHIP
                    </span>
                    <span className="span-2 block text-center relative z-10">
                        <span id="highlight" style={{
                            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
                        }} className="px-10 py-1 text-white text-shadow-lg bg-linear-to-r from-[#FC3327] via-[#4CC91F] to-[#961E17] inline-block -rotate-6 shadow-lg border-3">AVAILABLE</span>
                    </span>
                    <span className="span-3" id="distributorship-head2">IN YOUR AREA</span>
                </h2>
                <p id="distributor-content" className="font-dm-sans text-2xl text-black mt-3 w-1/2 mx-auto text-center font-light">
                    Join Double Cool’s growing distribution network.
                    Check availability in your area and start supply partnership.
                </p>
                <div className="text-center flex justify-center gap-5" id="distributor-buttons">
                    <div className="distributor-button">
                        <Link href="/shop" className="inline-flex items-center font-bold text-white text-2xl rounded-2xl hover:shadow-[5px_5px_0px_rgba(0,0,0)] hover:scale-105 transition-all duration-300 bg-[#892D1C] ps-2 pe-5 py-2.5 mt-20 font-baloo2">
                            <Image src="/images/distributorship/apply.png" alt="shop now" width={80} height={80} className="w-auto h-8 mx-2" />
                            <span>APPLY FOR DISTRIBUTORSHIP</span>
                        </Link>
                    </div>
                    <div className="distributor-button">
                        <Link href="/shop" className=" inline-flex items-center font-bold text-white text-2xl rounded-2xl hover:shadow-[5px_5px_0px_rgba(0,0,0)] hover:scale-105 transition-all duration-300 bg-[#4CC91F] ps-2 pe-5 py-2.5 mt-20 font-baloo2">
                            <Image src="/images/distributorship/wapp.png" alt="shop now" width={80} height={80} className="w-auto h-8 mx-2" />
                            <span>WHATSAPP SALES TEAM</span>
                        </Link>
                    </div>
                    <div className="distributor-button">
                        <Link href="/shop" className=" inline-flex items-center font-bold text-white text-2xl rounded-2xl hover:shadow-[5px_5px_0px_rgba(0,0,0)] hover:scale-105 transition-all duration-300 bg-[#5a5858] ps-2 pe-5 py-2.5 mt-20 font-baloo2">
                            <Image src="/images/distributorship/call.png" alt="shop now" width={80} height={80} className="w-auto h-8 mx-2" />
                            <span>CALL SALES TEAM</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DistributorshipCTASection