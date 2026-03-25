"use client"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/SplitText"
import Image from "next/image"

const Loader = () => {
    useGSAP(() => {

        const tl = gsap.timeline();

        tl.to("#logo", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            opacity: 1,
            duration: 1,
            onComplete: () => {
                gsap.to(".logo-container", {
                    delay: 0.2,
                    y: "-100%",
                    duration: 1,
                    ease: "power4.inOut",
                    onComplete: () => {
                        const logoContainer = document.querySelector(".logo-container");
                        if (logoContainer) {
                            logoContainer.remove();
                        }
                    }
                })
            }
        })
            .to(".loader-item", {
                delay: 0.2,
                duration: 0.5,
                y: "-100%",
                stagger: 0.08,
                ease: "power4.inOut",
                onComplete: () => {
                    const loader = document.querySelector(".loader");
                    if (loader) {
                        loader.remove();
                    }
                }
            })
    })
    return (
        <div className='loader h-screen w-full fixed top-0 left-0 z-50'>
            <div className="h-screen flex items-center justify-center logo-container absolute inset-0 z-20">
                <Image src="/images/logo/loader-logo1.png" style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }} alt="shop now" width={500} height={500} id="logo" className="opacity-0 w-auto md:h-40 h-20 relative z-10 top-5" />
                {/* <Image src="/images/logo/loader-icon-bg1.png" alt="shop now" width={500} height={500} id="logo-bg" className="opacity-0 scale-0 absolute z-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-90" /> */}
            </div>
            <div className="flex h-screen w-full absolute inset-0 z-10 loader-shutter">
                {
                    Array.from({ length: 10 }).map((_, index) => (
                        <div key={index} className="loader-item h-screen w-full bg-white"></div>
                    ))
                }
            </div>
        </div>
    )
}

export default Loader