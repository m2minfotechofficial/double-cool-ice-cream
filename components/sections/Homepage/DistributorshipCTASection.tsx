import Image from "next/image"
import Link from "next/link"

const DistributorshipCTASection = () => {
    return (
        <section className="bg-[url('/images/distributorship/distributorship.webp')] bg-cover bg-center bg-no-repeat py-30 px-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-bayon text-8xl text-[#892D1C] tracking-tight text-center">
                    <span className="span-1">
                        DISTRIBUTORSHIP
                    </span>
                    <span className="span-2 block text-center">
                        <span className="px-10 py-1 text-white text-shadow-lg bg-linear-to-r from-[#FC3327] via-[#4CC91F] to-[#961E17] inline-block -rotate-6 shadow-lg border-3">AVAILABLE</span>
                    </span>
                    <span className="span-3">IN YOUR AREA</span>
                </h2>
                <p className="font-dm-sans text-2xl text-black mt-3 w-1/2 mx-auto text-center font-light">
                    Join Double Cool’s growing distribution network.
                    Check availability in your area and start supply partnership.
                </p>
                <div className="text-center flex justify-center gap-5">
                    
                    <Link href="/shop" className="inline-flex items-center font-bold text-white text-2xl rounded-2xl hover:shadow-[5px_5px_0px_rgba(0,0,0)] hover:scale-105 transition-all duration-300 bg-[#892D1C] ps-2 pe-5 py-2.5 mt-20 font-baloo2">
                        <Image src="/images/distributorship/apply.png" alt="shop now" width={80} height={80} className="w-auto h-8 mx-2" />
                        <span>APPLY FOR DISTRIBUTORSHIP</span>
                    </Link>
                    <Link href="/shop" className="inline-flex items-center font-bold text-white text-2xl rounded-2xl hover:shadow-[5px_5px_0px_rgba(0,0,0)] hover:scale-105 transition-all duration-300 bg-[#4CC91F] ps-2 pe-5 py-2.5 mt-20 font-baloo2">
                        <Image src="/images/distributorship/wapp.png" alt="shop now" width={80} height={80} className="w-auto h-8 mx-2" />
                        <span>WHATSAPP SALES TEAM</span>
                    </Link>
                    <Link href="/shop" className="inline-flex items-center font-bold text-white text-2xl rounded-2xl hover:shadow-[5px_5px_0px_rgba(0,0,0)] hover:scale-105 transition-all duration-300 bg-[#5a5858] ps-2 pe-5 py-2.5 mt-20 font-baloo2">
                        <Image src="/images/distributorship/call.png" alt="shop now" width={80} height={80} className="w-auto h-8 mx-2" />
                        <span>CALL SALES TEAM</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default DistributorshipCTASection