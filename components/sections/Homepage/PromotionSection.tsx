import Image from "next/image"

const PromotionSection = () => {
    return (
        <section className="bg-[#961E17] py-30 px-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-bayon text-8xl text-white tracking-tight text-center">
                    <span className="span-1">
                        BUILD YOUR DISTRIBUTION BUSINESS WITH
                    </span>

                    <span className="inline-flex items-end">
                        <Image src="/images/logo/logo-double-cool.png" alt="promotion bg" width={120} height={120} className="w-auto h-auto inline-block drop-shadow-[0_15px_35px_rgba(0,0,0,0.5)]" />
                        <span className="-mb-4">DOUBLE COOL</span>
                    </span>
                    <span className="span-2 block text-center">
                        <span className="px-10 py-1 text-white text-shadow-lg bg-linear-to-r from-[#FC3327] via-[#4CC91F] to-[#961E17] inline-block -rotate-6 shadow-lg border-3">profit</span>
                    </span>
                    <span className="span-3">IN EVERY ORDER</span>
                </h2>
                <p className="font-dm-sans text-2xl text-white mt-3 w-1/2 mx-auto text-center font-light">
                    High-demand categories. Strong retailer pull. Reliable supply.
                    Partner with <strong className="font-bold">Double Cool</strong> & grow your frozen sales.
                </p>
            </div>
        </section>
    )
}

export default PromotionSection