"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { IoIceCreamSharp } from "react-icons/io5";

export default function ThankYou() {
  const containerRef = useRef(null);
  const iconRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Icon Animation (Bounce in)
      tl.from(iconRef.current, {
        scale: 0,
        rotation: -45,
        duration: 1,
        ease: "back.out(1.7)",
      })
      // 2. Text Stagger (Fade and slide up)
      .from(".thanks-text", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      }, "-=0.5")
      // 3. Floating Animation for the Ice Cream Icon
      .to(".floating-icecream", {
        y: -15,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-20 relative overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-3xl w-full text-center z-10">
        {/* Success Icon */}
        <div ref={iconRef} className="flex justify-center mb-8">
          <div className="relative">
             <FaCheckCircle className="text-green-500 text-8xl md:text-9xl shadow-xl rounded-full" />
             <IoIceCreamSharp className="floating-icecream absolute -top-4 -right-4 text-red-500 text-4xl md:text-5xl" />
          </div>
        </div>

        {/* Message Content */}
        <div ref={textRef} className="space-y-6">
          <h1 className="thanks-text font-bayon text-5xl md:text-7xl text-black tracking-tight leading-none">
             Welcome to the <br /> 
             <span className="text-transparent bg-clip-text bg-linear-to-r from-[#961E17] to-[#FC3327]">
               Double Cool
             </span> Family!
          </h1>
          
          <p className="thanks-text font-dm-sans text-gray-600 text-lg md:text-xl max-w-xl mx-auto font-light">
            Thank you! We have received your distributorship inquiry. Our dedicated Sales Manager will get in touch with you within 24-48 hours.
          </p>

          <div className="thanks-text font-bayon tracking-wide pt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            {/* Primary Action */}
            <Link 
              href="/" 
              className="group flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all shadow-lg"
            >
              Back to Home <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>

            {/* Secondary Action - WhatsApp */}
            <Link 
              href="https://wa.me/917076782185?text=Hi%20Double%20Cool,%20I%20just%20submitted%20the%20distributor%20form.%20Please%20share%20the%20catalogue."
              target="_blank"
              className="flex items-center gap-3 border-2 border-green-500 text-green-600 px-8 py-4 rounded-full font-bold hover:bg-green-50 transition-all"
            >
              <FaWhatsapp className="text-xl" /> Urgent Inquiry?
            </Link>
          </div>

          {/* <div className="thanks-text pt-12">
            <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-4">Follow our journey</p>
            <div className="flex justify-center gap-6 text-gray-400">
               <Link href="https://www.youtube.com/@StorycrazeBangla" className="hover:text-red-600 transition-colors">YouTube</Link>
               <Link href="#" className="hover:text-blue-600 transition-colors">Facebook</Link>
               <Link href="#" className="hover:text-pink-600 transition-colors">Instagram</Link>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}