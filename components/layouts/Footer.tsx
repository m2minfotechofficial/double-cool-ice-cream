import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="bg-black px-20 py-20 p-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 items-center">
                    <div className="left">
                        <Image
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
                        <div className="slogan py-5 absolute top-10 left-1/2 -translate-x-1/2 z-10">
                            <p className="span-2 block text-center">
                                <span className="px-10 py-1 text-white text-shadow-lg bg-linear-to-r from-[#FC3327] via-[#4CC91F] to-[#961E17] inline-block -rotate-6 -translate-x-[20%] shadow-xl font-bold font-hind-siliguri text-5xl py-4"><span className="font-carter-one">#DOUBLE COOL</span> খাও</span>
                            </p>
                            <p className="span-2 block text-center">
                                <span className="px-10 py-1 text-white text-shadow-lg -translate-y-[30%] bg-linear-to-r from-[#FC3327] via-[#4CC91F] to-[#961E17] inline-block -rotate-6 translate-x-[30%] shadow-xl font-bold font-hind-siliguri text-5xl py-4">গরম ভুলে যাও</span>
                            </p>
                        </div>
                        <Image
                            src="/images/footer/icecream.png"
                            width={500}
                            height={500}
                            alt="Double Cool Ice Cream"
                            className="w-2/3 h-auto drop-shadow-xl mx-auto z-20 relative rotate-30 mt-3"
                        />
                    </div>
                    <div className="right">
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
                                        <Image src="/images/footer/Youtube.png" alt="youtube icon" width={50} height={50} className="w-9 object-contain h-9 border border-white rounded-full p-0.5" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image src="/images/footer/Linkedin.png" alt="linkedin icon" width={50} height={50} className="w-9 object-contain h-9 border border-white rounded-full p-0.5" />
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