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
            ease: "back.inOut",
            stagger: 1,
            scrollTrigger: {
                trigger: "#category-head",
                start: "top 90%",
                end: "top 90%",
                // markers: true,
                scrub: 1
            }
        })
        gsap.from(".category-card", {
            opacity: 0,
            scale: 0,
            stagger: 0.5,
            duration: 1,
            scrollTrigger: {
                trigger: "#category-container",
                start: "top 50%",
                end: "top 50%",
                // markers: true,
                scrub: 5
            }
        })

    })
    return (
        <section className="px-20 py-30">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-bayon text-7xl text-[#561C12] inline-flex gap-2 flex-wrap" id="category-head"><span>Pick Your Favourite Ice Cream</span> <span className="relative inline-block after:content-[''] after:h-[2px] after:w-[100px] after:bg-[#561C12] after:absolute after:bottom-3 after:-right-[100px]">Category</span></h2>
                <p className="font-dm-sans text-2xl text-[#561C12] mt-3 font-light">
                    We’re talking rich, creamy, satisfyingly smooth with a chill in every bite.
                </p>
            </div>
            <div className="container mx-auto pt-20" id="category-container">
                <div className="grid grid-cols-4 gap-5">
                    {
                        categories.map((category) => (
                            <div className="category-card" key={category.id}>
                                <Link
                                    href={category.link}
                                    className=" group flex flex-col items-center rounded-[40px] w-[70%] mx-auto overflow-visible hover:scale-[1.1] hover:rotate-3 transition-all duration-300"
                                    style={{ backgroundColor: category.bgColor }}
                                >
                                    <Image src={category.image} alt={category.title} width={700} height={400} className="group-hover:scale-[1.3] transition-all duration-300 w-auto h-auto scale-[1.4]" />
                                    <h3 className="text-4xl bg-black mt-3 font-light text-white uppercase px-8 py-[2px] font-bayon border-3 border-white -rotate-6 -mb-5 shadow -ms-10 tracking-tight text-center w-[200px] group-hover:scale-[1.1] group-hover:-rotate-6 transition-all duration-300">{category.title}</h3>
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