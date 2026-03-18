"use client";

import { TransitionRouter } from "next-transition-router";
import React, { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

interface TransitionProps {
    children: React.ReactNode;
}

export default function TransitionProviders({ children }: TransitionProps): React.JSX.Element {
    return (
        <TransitionRouter
            auto
            leave={(next) => {
                console.log("entered");
                
                const tl = gsap.timeline({ onComplete: next });

                // 1. Shutter upar se niche layein
                tl.fromTo(".loader-item", 
                    { y: "-100%" }, 
                    { y: "0%", duration: 0.5, stagger: 0.05, ease: "power4.inOut" }
                )
                // 2. Logo reveal karein
                .to("#transition-logo", {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out"
                });
            }}
            enter={(next) => {
                const tl = gsap.timeline({ onComplete: next });

                // 1. Logo ko gayab karein
                tl.to("#transition-logo", {
                    opacity: 0,
                    y: -20,
                    duration: 0.4
                })
                // 2. Shutter ko upar bhej dein
                .to(".loader-item", {
                    y: "-100%",
                    duration: 0.6,
                    stagger: 0.05,
                    ease: "power4.inOut"
                });
            }}
        >
            {/* Loader UI - Jo transition ke waqt dikhega */}
            <div className="fixed inset-0 z-[9999] pointer-events-none">
                {/* Logo Container */}
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <Image 
                        src="/images/logo/loader-logo1.png" 
                        alt="Loading..." 
                        width={500} 
                        height={500} 
                        id="transition-logo" 
                        className="opacity-0 w-auto h-40 relative"
                        style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }}
                    />
                </div>

                {/* Shutter Items */}
                <div className="flex h-screen w-full absolute inset-0 z-10">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <div 
                            key={index} 
                            className="loader-item h-screen w-full bg-white -translate-y-full border-x border-gray-100/10" 
                        />
                    ))}
                </div>
            </div>

            {children}
        </TransitionRouter>
    );
}