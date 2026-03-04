import Image from "next/image"
import Link from "next/link"

const HeroSection = () => {
    return (
        <section className="py-30 flex justify-center items-center bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="font-bayon text-9xl text-[#892D1C] tracking-tight">PURE CREAMY</h1>
                <h2 className="font-bayon text-9xl tracking-tight px-15 py-5 text-white text-shadow-lg bg-linear-to-r from-[#FC3327] via-[#4CC91F] to-[#961E17] inline-block -rotate-6 shadow-lg">MILK + DELICIOUS CREAM</h2>
                <p className="font-dm-sans text-2xl font-light w-1/2 mx-auto mt-10 text-black">
                    Made with healthy milk and rich cream for the ultimate taste experience. <strong>DOUBLE COOL</strong> is not just ice cream — it’s a mood.
                </p>
                <Link href="/shop" className="inline-flex items-center font-bold text-white text-2xl rounded-2xl hover:shadow-[5px_5px_0px_rgba(0,0,0)] hover:scale-105 transition-all duration-300 bg-[#892D1C] ps-2 pe-5 py-2.5 mt-10 font-baloo2">
                    <Image src="/images/hero/icon-icecream.png" alt="shop now" width={100} height={100} className="w-auto h-10 -rotate-36" />
                    <span>TASTE THE MAGIC</span>
                </Link>
            </div>
        </section>
    )
}

export default HeroSection