"use client"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';

// Plugin Register karein
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollSmoother, useGSAP);
}

const SmoothWrapper = ({ children }: { children: React.ReactNode }) => {
    const mainRef = useRef(null);

    useGSAP(() => {
        // ScrollSmoother initialization
        ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.5,               // Smoothing ki intensity
            effects: true,              // data-speed aur data-lag attributes enable karne ke liye
            smoothTouch: false,         // Mobile par JS smooth scroll disable karke native scroll use karna performance ke liye best hai
        });
    }, { scope: mainRef });

    return (
        <div ref={mainRef} id="smooth-wrapper">
            <div id="smooth-content">
                {children}
            </div>
        </div>
    );
};

export default SmoothWrapper;