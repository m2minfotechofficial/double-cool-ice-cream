"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import BreadCrumbContainer from "@/components/layouts/BreadCrumbContainer";

// React Icons
import { FaArrowTrendUp, FaTruckFast, FaBullhorn, FaHeadset, FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation"; // Redirection ke liye import
import { addDistributorship } from "@/server/contactFormAction";

// Next.js client component mein plugin register karna best practice hai
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
    const containerRef = useRef(null);
    const rightSideRef = useRef(null);
    const bottomContactRef = useRef(null);
    
    // Router for redirection & state for button loading
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        let ctx = gsap.context(() => {
            // 1. Initial Page Load Animations (Left Side & Form)
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
            gsap.to("#highlight-dc", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: "#highlight-dc",
                    start: "top 80%",
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

    const onSubmit = async (data: any) => {
        setIsSubmitting(true);
        try {
            await addDistributorship(data);
            // Submit successful hone par Thank You page par redirect
            router.push('/contact/thanks');
        } catch (error) {
            console.error("Form submission failed", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

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
                    <div className="flex md:flex-row flex-col-reverse items-center gap-16">

                        {/* ================= LEFT SIDE: Trust & Info ================= */}
                        <div className="space-y-8 flex-1">
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
                                <div className="left-element flex items-start bg-white/10 p-5 rounded-2xl backdrop-blur-sm">
                                    <div className="shrink-0 bg-red-100 p-3 rounded-lg text-red-600 text-2xl">
                                        <FaArrowTrendUp />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium">High Margins</h3>
                                        <p className="mt-1 text-sm text-gray-200">Industry-leading ROI for partners.</p>
                                    </div>
                                </div>
                                <div className="left-element flex items-start bg-white/10 p-5 rounded-2xl backdrop-blur-sm">
                                    <div className="shrink-0 bg-green-100 p-3 rounded-lg text-green-600 text-2xl">
                                        <FaTruckFast />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium">Fast Delivery</h3>
                                        <p className="mt-1 text-sm text-gray-200">Uninterrupted supply chain.</p>
                                    </div>
                                </div>
                                <div className="left-element flex items-start bg-white/10 p-5 rounded-2xl backdrop-blur-sm">
                                    <div className="shrink-0 bg-blue-100 p-3 rounded-lg text-blue-600 text-2xl">
                                        <FaBullhorn />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium">Marketing Kit</h3>
                                        <p className="mt-1 text-sm text-gray-200">Banners, boards & promo material.</p>
                                    </div>
                                </div>
                                <div className="left-element flex items-start bg-white/10 p-5 rounded-2xl backdrop-blur-sm">
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
                            className="bg-white/95 flex-1 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-200 font-dm-sans relative z-10"
                        >
                            <h3 className="md:text-4xl text-2xl font-bold text-black mb-6 font-bayon text-center tracking-wide uppercase">Apply for Dealership</h3>

                            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Full Name *</label>
                                    <input 
                                        type="text" 
                                        className={`mt-1 block w-full rounded-md shadow-sm p-3 border outline-none transition-all bg-white ${errors.ownerName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-[#FC3327] focus:ring-[#FC3327]'}`} 
                                        placeholder="Enter owner name" 
                                        {...register("ownerName", { required: "Full name is required" })} 
                                    />
                                    {errors.ownerName && <p className="text-red-500 text-[10px] mt-1">{errors.ownerName.message as string}</p>}
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">WhatsApp Number *</label>
                                        <input 
                                            type="tel" 
                                            className={`mt-1 block w-full rounded-md shadow-sm p-3 border outline-none transition-all bg-white ${errors.whatsappNo ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-[#FC3327] focus:ring-[#FC3327]'}`} 
                                            placeholder="+91" 
                                            {...register("whatsappNo", { 
                                                required: "WhatsApp number is required",
                                                pattern: {
                                                    value: /^[0-9]{10}$/,
                                                    message: "Please enter a valid 10-digit number"
                                                }
                                            })} 
                                        />
                                        {errors.whatsappNo && <p className="text-red-500 text-[10px] mt-1">{errors.whatsappNo.message as string}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">City / District *</label>
                                        <input 
                                            type="text" 
                                            className={`mt-1 block w-full rounded-md shadow-sm p-3 border outline-none transition-all bg-white ${errors.city ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-[#FC3327] focus:ring-[#FC3327]'}`} 
                                            placeholder="Target area" 
                                            {...register("city", { required: "City/District is required" })} 
                                        />
                                        {errors.city && <p className="text-red-500 text-[10px] mt-1">{errors.city.message as string}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Business / Firm Name</label>
                                    <input 
                                        type="text" 
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FC3327] focus:ring-[#FC3327] p-3 border outline-none transition-all bg-white" 
                                        placeholder="Current shop name (if any)" 
                                        {...register("firmName")} 
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Investment Plan *</label>
                                        <select 
                                            className={`mt-1 block w-full rounded-md shadow-sm p-3 border bg-white outline-none ${errors.investment ? 'border-red-500' : 'border-gray-300 focus:border-[#FC3327]'}`} 
                                            {...register("investment", { required: "Please select an investment plan" })}
                                        >
                                            <option value="">Choose Budget</option>
                                            <option value="1L-5L">₹1 Lakh - ₹5 Lakh</option>
                                            <option value="5L-10L">₹5 Lakh - ₹10 Lakh</option>
                                            <option value="10L+">Above ₹10 Lakh</option>
                                        </select>
                                        {errors.investment && <p className="text-red-500 text-[10px] mt-1">{errors.investment.message as string}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Cold Storage? *</label>
                                        <select 
                                            className={`mt-1 block w-full rounded-md shadow-sm p-3 border bg-white outline-none ${errors.coldStorage ? 'border-red-500' : 'border-gray-300 focus:border-[#FC3327]'}`} 
                                            {...register("coldStorage", { required: "Please select cold storage status" })}
                                        >
                                            <option value="">Select an option</option>
                                            <option value="yes">Already Have</option>
                                            <option value="planning">Planning to buy</option>
                                            <option value="no">Need Help</option>
                                        </select>
                                        {errors.coldStorage && <p className="text-red-500 text-[10px] mt-1">{errors.coldStorage.message as string}</p>}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="mt-10 w-full font-bayon flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-2xl font-medium text-white bg-gradient-to-r from-[#961E17] to-[#FC3327] hover:scale-[1.02] transition-all transform tracking-widest uppercase disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Submitting..." : "Get a Callback"}
                                </button>
                                <p className="text-[10px] text-center text-gray-400 mt-2">Our telecaller will contact you within 24-48 hours.</p>
                            </form>
                        </div>

                    </div>

                    {/* ================= BOTTOM CONTACT INFO (Animated on Scroll) ================= */}
                    <div ref={bottomContactRef} className="mt-16 pt-10 border-t border-white/20 font-dm-sans text-center relative z-10">
                        <h3 className="bottom-info-item font-semibold mb-6 font-bayon 2xl:text-7xl xl:text-7xl lg:text-6xl md:text-5xl text-4xl text-white">Head Office contact</h3>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-lg">
                            <Link href="https://maps.app.goo.gl/3Y81NjCksnHPmUKA7" target="_blank" className="bottom-info-item flex text-sm items-center bg-black/30 px-6 py-3 rounded-full backdrop-blur-sm">
                                <FaLocationDot className="text-[#FC3327] mr-3" />
                                <p className="text-white">F838+JFR, Khasjangal Cantonment, West Bengal 721102</p>
                            </Link>
                            <Link href="tel:+917076782185" className="bottom-info-item flex text-sm items-center bg-black/30 px-6 py-3 rounded-full backdrop-blur-sm">
                                <FaPhone className="text-[#4CC91F] mr-3" />
                                <p className="text-white">+91-7076782185</p>
                            </Link>
                            <Link href="mailto:siromonifoodproductspvtltd@gmail.com" className="bottom-info-item flex text-sm items-center bg-black/30 px-6 py-3 rounded-full backdrop-blur-sm">
                                <MdEmail className="text-blue-400 mr-3" />
                                <p className="text-white">siromonifoodproductspvtltd@gmail.com</p>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            {/* ================= BOTTOM MAP SECTION ================= */}
            <div className="map-container w-full relative z-10 bg-gray-100">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.332845045696!2d87.31357187434945!3d22.454123137304094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d5b58c9f33c19%3A0x2d22b0141f67afe6!2sDouble%20cool%20ice%20cream!5e0!3m2!1sen!2sin!4v1774441644358!5m2!1sen!2sin"
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