"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // ScrollTrigger import karna zaroori hai
import BreadCrumbContainer from "@/components/layouts/BreadCrumbContainer";

// React Icons
import { FaArrowTrendUp, FaTruckFast, FaBullhorn, FaHeadset, FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

// Next.js client component mein plugin register karna best practice hai
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
    const containerRef = useRef(null);
    const rightSideRef = useRef(null);
    const bottomContactRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {

            // 1. Initial Page Load Animations (Left Side & Form)
            // Heading aur benefits stagger effect ke saath aayenge
            gsap.from(".left-element", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            });

            // "Double Cool" badge par ek subtle scale/bounce effect
            gsap.from(".span-2", {
                scale: 0.6,
                opacity: 0,
                duration: 0.8,
                delay: 0.3,
                ease: "back.out(1.5)"
            });

            // Right side form animation
            gsap.from(rightSideRef.current, {
                x: 60,
                opacity: 0,
                duration: 0.8,
                delay: 0.4,
                ease: "power3.out"
            });

            // 2. Scroll Animations (Jab user scroll down karega)
            
            // Highlight color fill animation
            gsap.to("#highlight-dc", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: "#highlight-dc",
                    start: "top 80%", // Jab element screen ke 80% hisse mein aaye
                    toggleActions: "play none none reverse",
                }
            });

            // Bottom Contact Info Animation
            gsap.from(".bottom-info-item", {
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: bottomContactRef.current,
                    start: "top 85%",
                }
            });

            // Map Animation
            gsap.from(".map-container", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: ".map-container",
                    start: "top 90%",
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <BreadCrumbContainer breadcrumbLink="contact" />

            {/* Main Wrapper */}
            <div
                className="py-16 lg:py-24 relative"
                ref={containerRef}
                style={{
                    backgroundImage: "url('/images/contact/contact-bg.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    {/* Split Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* ================= LEFT SIDE: Trust & Info ================= */}
                        <div className="space-y-8">
                            <div className="left-element">
                                <h2 id="distributorship-head" className="font-bayon 2xl:text-8xl xl:text-8xl md:text-5xl text-4xl text-white tracking-tight text-center lg:text-left">
                                    <span className="span-1 block">
                                        Partner with
                                    </span>
                                    <span className="span-2 block text-center lg:text-left relative z-10 mt-2">
                                        <span id="highlight-dc"
                                            style={{
                                                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
                                            }}
                                            className="px-8 py-2 text-white text-shadow-lg bg-gradient-to-r from-[#FC3327] via-[#4CC91F] to-[#961E17] inline-block -rotate-6 shadow-lg border-3">
                                            Double Cool
                                        </span>
                                    </span>
                                </h2>
                                <p className="mt-8 text-white font-dm-sans 2xl:text-2xl xl:text-2xl lg:text-xl text-sm mx-auto lg:mx-0 text-center lg:text-left font-light">
                                    Join our fast-growing distribution network. We provide premium ice cream, high margins, and complete support to help you grow your business.
                                </p>
                            </div>

                            {/* Benefits Grid using React Icons */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 font-dm-sans text-white">
                                <div className="left-element flex items-start">
                                    <div className="shrink-0 bg-red-100 p-3 rounded-lg text-red-600 text-2xl">
                                        <FaArrowTrendUp />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium">High Margins</h3>
                                        <p className="mt-1 text-sm text-gray-200">Industry-leading ROI for partners.</p>
                                    </div>
                                </div>
                                <div className="left-element flex items-start">
                                    <div className="shrink-0 bg-green-100 p-3 rounded-lg text-green-600 text-2xl">
                                        <FaTruckFast />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium">Fast Delivery</h3>
                                        <p className="mt-1 text-sm text-gray-200">Uninterrupted supply chain.</p>
                                    </div>
                                </div>
                                <div className="left-element flex items-start">
                                    <div className="shrink-0 bg-blue-100 p-3 rounded-lg text-blue-600 text-2xl">
                                        <FaBullhorn />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium">Marketing Kit</h3>
                                        <p className="mt-1 text-sm text-gray-200">Banners, boards & promo material.</p>
                                    </div>
                                </div>
                                <div className="left-element flex items-start">
                                    <div className="shrink-0 bg-orange-100 p-3 rounded-lg text-orange-600 text-2xl">
                                        <FaHeadset />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium">24/7 Support</h3>
                                        <p className="mt-1 text-sm text-gray-200">Direct line to our sales managers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ================= RIGHT SIDE: The Form ================= */}
                        <div
                            ref={rightSideRef}
                            className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-200 font-dm-sans relative z-10"
                        >
                            <h3 className="md:text-4xl text-2xl font-bold text-black mb-6 font-bayon text-center tracking-wide">Distributor Inquiry</h3>

                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name *</label>
                                    <input type="text" id="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FC3327] focus:ring-[#FC3327] p-3 border outline-none transition-all bg-white" placeholder="Enter your name" />
                                </div>

                                <div>
                                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">WhatsApp / Mobile Number *</label>
                                    <input type="tel" id="mobile" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FC3327] focus:ring-[#FC3327] p-3 border outline-none transition-all bg-white" placeholder="+91 00000 00000" />
                                </div>

                                <div>
                                    <label htmlFor="business" className="block text-sm font-medium text-gray-700">Current Business / Shop Name</label>
                                    <input type="text" id="business" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FC3327] focus:ring-[#FC3327] p-3 border outline-none transition-all bg-white" placeholder="e.g. Sharma Traders (Optional)" />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City / District *</label>
                                        <input type="text" id="city" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FC3327] focus:ring-[#FC3327] p-3 border outline-none transition-all bg-white" placeholder="Your target area" />
                                    </div>
                                    <div>
                                        <label htmlFor="investment" className="block text-sm font-medium text-gray-700">Investment Capacity</label>
                                        <select id="investment" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FC3327] focus:ring-[#FC3327] p-3 border bg-white outline-none transition-all">
                                            <option value="">Select an option</option>
                                            <option value="1L-3L">₹1 Lakh - ₹3 Lakh</option>
                                            <option value="3L-5L">₹3 Lakh - ₹5 Lakh</option>
                                            <option value="5L+">Above ₹5 Lakh</option>
                                        </select>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full font-bayon flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-lg text-xl font-medium text-white bg-[#961E17] hover:bg-[#e52e23] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FC3327] transition-all transform hover:-translate-y-1 tracking-wider"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>

                    </div>

                    {/* ================= BOTTOM CONTACT INFO (Animated on Scroll) ================= */}
                    <div ref={bottomContactRef} className="mt-16 pt-10 border-t border-white/20 font-dm-sans text-center relative z-10">
                        <h3 className="bottom-info-item font-semibold mb-6 font-bayon 2xl:text-7xl xl:text-7xl lg:text-6xl md:text-5xl text-4xl text-white">Factory Head Office</h3>
                        
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-lg">
                            <div className="bottom-info-item flex items-center bg-black/30 px-6 py-3 rounded-full backdrop-blur-sm">
                                <FaLocationDot className="text-[#FC3327] mr-3 text-2xl" />
                                <p className="text-white">Double Cool Ice Cream Factory</p>
                            </div>
                            <div className="bottom-info-item flex items-center bg-black/30 px-6 py-3 rounded-full backdrop-blur-sm">
                                <FaPhone className="text-[#4CC91F] mr-3 text-xl" />
                                <p className="text-white">+91-XXXXXXXXXX</p>
                            </div>
                            <div className="bottom-info-item flex items-center bg-black/30 px-6 py-3 rounded-full backdrop-blur-sm">
                                <MdEmail className="text-blue-400 mr-3 text-2xl" />
                                <p className="text-white">partner@doublecool.com</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* ================= BOTTOM MAP SECTION ================= */}
            <div className="map-container w-full relative z-10 bg-gray-100">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113426.65476654271!2d88.243542!3d22.562627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a3d3c8c83b%3A0x861c8ed3238de5fb!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Factory Location Map"
                ></iframe>
            </div>
        </>
    )
}