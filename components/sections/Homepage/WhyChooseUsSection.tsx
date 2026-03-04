import React from 'react'
import { WhyChooseUsCard } from '@/types'
import Image from 'next/image'

const whyChooseUsData: WhyChooseUsCard[] = [
    {
        id: 1,
        title: "ISO Certified Quality",
        icon: "/images/why-choose-us/iso-certified.png",
        description: "Quality-controlled production with trusted hygiene standards."
    },
    {
        id: 2,
        title: "Fast Moving Product Range",
        icon: "/images/why-choose-us/fast-moving.png",
        description: "Cones, Cups, Sticks & Novelties designed to sell fast."
    },
    {
        id: 3,
        title: "Reliable Supply Support",
        icon: "/images/why-choose-us/reliable-support.png",
        description: "Smooth production & dependable delivery for distributor success."
    },
    {
        id: 4,
        title: "Profitable Partnership",
        icon: "/images/why-choose-us/profitable.png",
        description: "Distributor-friendly business support for long-term growth."
    }
]

const WhyChooseUsSection = () => {
    return (
        <section className="bg-[#a51f16] py-30 px-20 text-white">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="mb-14 text-center lg:text-left">
                    <h2 className="font-bayon xl:text-7xl text-5xl text-[#ffffff] inline-flex gap-3 flex-wrap"><span>WHY DISTRIBUTORS CHOOSE DOUBLE</span> <span className="relative inline-block after:content-[''] after:h-[2px] after:w-[100px] after:bg-[#ffffff] after:absolute after:bottom-3 after:-right-[120px]">COOL</span></h2>

                    <p className="mt-3 text-white font-dm-sans text-2xl font-light">
                        Trusted quality, strong demand, and reliable supply — built for distribution.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {whyChooseUsData.map((item: WhyChooseUsCard) => (
                        <div
                            key={item.id}
                            className="
                relative
                bg-linear-to-b from-[#D9D9D9]  to-[#FFFFFF]
                text-[#222]
                rounded-2xl
                p-6
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                pb-20
              "
                        >
                            {/* dashed border effect */}
                            <div className="absolute inset-2 border border-dashed border-black rounded-xl pointer-events-none" />

                            {/* Icon */}
                            <div className="flex justify-end mb-4">
                                <Image
                                    src={item.icon}
                                    alt=""
                                    width={36}
                                    height={36}
                                    aria-hidden="true"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="font-bayon text-4xl leading-snug tracking-tight">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-3 text-xl text-black font-dm-sans leading-relaxed tracking-tight">
                                {item.description}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default WhyChooseUsSection