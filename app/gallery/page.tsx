"use client"
import BreadCrumbContainer from "@/components/layouts/BreadCrumbContainer";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
export default function Gallery() {
    useGSAP(() => {
        Fancybox.bind("[data-fancybox]", {
            // Your custom options
        });
    }, [])
    return (
        <>
            <BreadCrumbContainer breadcrumbLink="gallery" />
            <section className="md:py-30 py-10 px-5 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
                    {
                        Array.from({ length: 34 }, (_, i) => i + 1).map((item) => (
                            <div key={item} className="border border-dashed border-gray-200 shadow p-1 rounded-2xl">
                                <Link href={`/images/gallery/${item}.jpeg`} data-fancybox="gallery" aria-label={`gallery-${item}`}>
                                    <Image src={`/images/gallery/${item}.jpeg`} alt={`gallery-${item}`} width={500} height={500} className="w-full md:h-[200px] h-[150px] object-cover rounded-2xl" />
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}
