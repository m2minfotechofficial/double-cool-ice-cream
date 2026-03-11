"use client"
import { CategoryCard } from "@/types"
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const categories: CategoryCard[] = [
    {
        id: 1,
        title: "novelties",
        image: "/images/category/novelties.png",
        bgColor: "#892D1C",
        link: "/category/novelties"
    },
    {
        id: 2,
        title: "sticks",
        image: "/images/category/sticks.png",
        bgColor: "#267709",
        link: "/category/sticks"
    },
    {
        id: 3,
        title: "cones",
        image: "/images/category/cones.png",
        bgColor: "#C2180E",
        link: "/category/cones"
    },
    {
        id: 4,
        title: "cups",
        image: "/images/category/cups.png",
        bgColor: "#092B6C",
        link: "/category/cups"
    }
];
const CategorySection = () => {
    useGSAP(() => {

        const categoryHead = SplitText.create("#category-head", { type: "words", mask: "words" })

        gsap.from(categoryHead.words, {
            opacity: 0,
            y: -100,
            ease: "power2.inOut",
            stagger: 0.05,
            scrollTrigger: {
                trigger: "#category-head",
                start: "top 70%",
                end: "50% 70%",
                toggleActions: "play none none reverse",
            }
        })
        gsap.from(".category-card", {
            opacity: 0,
            scale: 0,
            stagger: 1,
            duration: 1,
            scrollTrigger: {
                trigger: "#category-container",
                start: "top 70%",
                end: "50% 70%",
                scrub: 4,
            }
        })

    })
    return (
        <section className="md:px-20 px-6 md:py-30 py-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-bayon 2xl:text-7xl xl:text-7xl lg:text-5xl md:text-4xl text-2xl  text-[#561C12] inline-flex gap-2 flex-wrap leading-none" id="category-head"><span>Pick Your Favourite Ice Cream</span> <span className="relative inline-block after:content-[''] after:h-[2px] after:w-[100px] after:bg-[#561C12] after:absolute md:after:bottom-3 after:bottom-1  after:-right-[100px]">Category</span></h2>
                <p className="font-dm-sans 2xl:text-2xl xl:text-2xl lg:text-xl text-sm text-[#561C12] mt-3 font-light">
                    We’re talking rich, creamy, satisfyingly smooth with a chill in every bite.
                </p>
            </div>
            <div className="container mx-auto pt-20" id="category-container">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-5">
                    {
                        categories.map((category) => (
                            <div className="category-card" key={category.id}>
                                <Link
                                    href={category.link}
                                    className="mb-10 lg:mb-0 group flex flex-col items-center rounded-[40px] w-[70%] mx-auto overflow-visible hover:scale-[1.1] hover:rotate-3 transition-all duration-300"
                                    style={{ backgroundColor: category.bgColor }}
                                >
                                    <Image src={category.image} alt={category.title} width={700} height={400} className="group-hover:scale-[1.3] transition-all duration-300 w-auto h-auto scale-[1.4]" />
                                    <h3 className="md:text-4xl bg-black mt-3 font-light text-white uppercase px-8 py-[2px] font-bayon border-3 border-white -rotate-6 -mb-5 shadow -ms-10 tracking-tight text-center md:w-[200px] group-hover:scale-[1.1] group-hover:-rotate-6 transition-all duration-300">{category.title}</h3>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default CategorySection