"use client"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Footer = () => {
    useGSAP(() => {
        gsap.to(".slogan", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power2.inOut",
            stagger: 0.5,
            scrollTrigger: {
                trigger: "#footer-section",
                start: "top 50%",
                end: "top 50%",
                // markers: true,
                toggleActions: "play none none reverse",
            }
        })

        gsap.from("#icecream", {
            scale: 0,
            y: 100,
            ease: "back.inOut",
            scrollTrigger: {
                trigger: "#footer-section",
                start: "top 50%",
                end: "top 50%",
                // markers: true,
                toggleActions: "play none none reverse",
            }
        })

        gsap.from(".sub-section", {
            opacity: 0,
            y: 100,
            stagger: 0.5,
            scrollTrigger: {
                trigger: "#footer-section",
                start: "top 50%",
                end: "top 50%",
                // markers: true,
                toggleActions: "play none none reverse",
            }
        })
    })
    return (
        <footer className="bg-black px-20 py-20 p-6 relative" id="footer-section">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 items-center">
                    <div className="left sub-section">
                        <Image
                            id="foot-logo"
                            src="/images/footer/foot-logo.png"
                            width={500}
                            height={500}
                            alt="Double Cool Logo"
                            className="w-[65%] h-auto drop-shadow-xl mx-auto"
                        />
                        <h2 className="text-white text-center font-bayon text-xl my-3">SIROMONI FOOD PRODUCTS PVT. LTD.</h2>
                        <div className="contact-actions flex justify-center ps-15">
                            <ul>
                                <li>
                                    <Link href="tel:+911234567890" className="flex items-center gap-2">
                                        <Image src="/images/footer/Call.png" alt="call icon" width={50} height={50} className="w-auto h-10" />
                                        <span className="text-white text-center font-dm-sans text-lg font-light">+91 1234567890</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="mailto:[EMAIL_ADDRESS]" className="flex items-center gap-2">
                                        <Image src="/images/footer/Mailbox.png" alt="mail icon" width={50} height={50} className="w-auto h-11" />
                                        <span className="text-white text-center font-dm-sans text-lg font-light">demo@email.com</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="flex items-center gap-2 w-[300px]">
                                        <Image src="/images/footer/Location.png" alt="location icon" width={50} height={50} className="w-auto h-11" />
                                        <span className="text-white font-dm-sans text-lg font-light">123 Main St, Kolkata, West Bengal</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="middle col-span-2">
                        <div id="slogans" className="py-5 md:absolute relative -top-5 left-1/2 -translate-x-1/2 z-10 font-extrabold">
                            <p style={{
                                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
                            }} className="slogan inline-flex gap-2 text-end px-10 text-white text-shadow-lg bg-linear-to-r from-[#FC3327] via-[#4CC91F] to-[#961E17] -rotate-6 shadow-xl md:translate-x-[20%] font-anek-bangla xl:text-5xl lg:text-4xl md:text-3xl text-2xl py-4">
                                <span className="font-carter-one">#DOUBLECOOL</span> খাও
                            </p>
                            <p style={{
                                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
                            }} className="relative slogan px-10 text-white text-shadow-lg -translate-y-[30%] bg-linear-to-r from-[#FC3327] via-[#4CC91F] to-[#961E17] inline-block -rotate-6 md:translate-x-[50%] translate-x-[20%] top-5 shadow-xl font-anek-bangla xl:text-5xl lg:text-4xl md:text-3xl text-2xl py-4">
                                গরম ভুলে যাও
                            </p>
                        </div>
                        <Image
                            id="icecream"
                            src="/images/footer/icecream.png"
                            width={500}
                            height={500}
                            alt="Double Cool Ice Cream"
                            className="md:w-2/3 w-full h-auto drop-shadow-xl mx-auto z-20 relative rotate-30 mt-3"
                        />
                    </div>
                    <div className="right sub-section">
                        <div className="social-links">
                            <ul className="flex items-center gap-3">
                                <li>
                                    <Link href="#">
                                        <Image src="/images/footer/Facebook.png" alt="facebook icon" width={50} height={50} className="w-9 object-contain h-9 border border-white rounded-full p-0.5" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image src="/images/footer/Instagram.png" alt="instagram icon" width={50} height={50} className="w-9 object-contain h-9 border border-white rounded-full p-0.5" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image src="/images/footer/YouTube.png" alt="youtube icon" width={50} height={50} className="w-9 object-contain h-9 border border-white rounded-full p-0.5" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image src="/images/footer/LinkedIn.png" alt="linkedin icon" width={50} height={50} className="w-9 object-contain h-9 border border-white rounded-full p-0.5" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="quick-links font-bayon text-white text-xl mt-10">
                            <ul className="list-disc">
                                <li>HOME</li>
                                <li>ABOUT US</li>
                                <li>PRODUCTS</li>
                                <li>QUALITY</li>
                                <li>GALLERY</li>
                                <li>DISTRIBUTOR</li>
                                <li>CONTACT US</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer