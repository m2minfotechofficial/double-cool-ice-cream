"use client"; // GSAP aur State ke liye zaroori hai
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo/logo-double-cool.png";
import addonImg from "../../public/images/footer/icecream.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const container = useRef<HTMLElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const maskRef = useRef<HTMLDivElement>(null);

    // GSAP Animation Logic
    useGSAP(() => {
        if (isOpen) {
            // Menu Open Animation
            gsap.to(menuRef.current, { x: 0, duration: 0.8, ease: "power4.out" });
            gsap.to(maskRef.current, { x: "0%", pointerEvents: "auto", duration: 1, ease: "power4.out" });
            gsap.from(".nav-links li", { x: 50, opacity: 0, stagger: 0.1, delay: 0.3 });
        } else {
            // Menu Close Animation
            gsap.to(menuRef.current, { x: "100%", duration: 0.6, ease: "power4.in" });
            gsap.to(maskRef.current, { x: "100%", pointerEvents: "none", duration: 1, ease: "power4.in" });
        }
    }, { scope: container, dependencies: [isOpen] });

    return (
        <header ref={container} className="font-dm-sans max-w-7xl mx-auto fixed top-0 left-0 right-0 z-40">
            <nav className="flex justify-between items-center p-4">
                {/* Logo */}
                <Link href="/" className="logo">
                    <Image src={logo} alt="logo" width={150} height={150} className="w-auto h-20 drop-shadow-xl" priority />
                </Link>

                {/* Background Mask (Overlay) */}
                <div
                    ref={maskRef}
                    onClick={() => setIsOpen(false)}
                    className="mask bg-[#0000007a] fixed inset-0 backdrop-blur-md pointer-events-none h-screen w-full"
                ></div>

                {/* Right Side Sliding Menu */}
                <div
                    ref={menuRef}
                    style={{ clipPath: "polygon(15% 0%, 100% 0, 100% 100%, 0% 100%)" }}
                    className="nav-menus bg-gray-300 fixed w-full md:w-1/2 h-screen right-0 top-0 p-10 flex translate-x-full z-50"
                >
                    <ul className="nav-links flex flex-col font-bayon items-start h-full justify-center p-5 text-4xl md:text-6xl gap-5 -skew-x-10 ms-10">
                        {["Home", "About", "Products", "Quality", "Gallery", "Contact"].map((item, index) => (
                            <li key={item}>
                                <Link
                                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                    className={`text-[#892D1C] skew-x-10 font-bold hover:scale-105 hover:text-[#FC3327] inline-block transition-all duration-300 ml-${20 - (index * 4)}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Image
                        src={addonImg}
                        width={400}
                        height={400}
                        alt="Ice Cream"
                        className="hidden md:block absolute bottom-10 right-10 w-64 h-auto rotate-12 opacity-80"
                    />

                    {/* Close Button */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="border text-black px-4 py-2 absolute right-10 top-10 rounded-full border-dashed cursor-pointer hover:bg-white hover:text-black transition-colors"
                    >
                        ✕ Close
                    </button>
                </div>

                {/* Hamburger Toggle Button */}
                <button
                    onClick={() => setIsOpen(true)}
                    type="button"
                    className="bg-[#892D1C] relative z-30 me-5 md:me-10 transition-all duration-300 hover:text-[#FC3327] hover:scale-110 py-4 px-4 inline-block rounded-xl border border-dashed border-white cursor-pointer active:scale-95"
                >
                    <span className="block w-6 h-[2px] bg-white mb-2"></span>
                    <span className="block w-4 h-[2px] bg-white"></span>
                </button>
            </nav>
        </header>
    );
};

export default Header;
