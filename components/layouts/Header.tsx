import Image from "next/image"
import logo from "../../public/images/logo/logo-double-cool.png"
import Link from "next/link"

const Header = () => {
    return (
        <header className="font-dm-sans max-w-7xl mx-auto fixed top-0 left-0 right-0 z-50">
            <nav className="flex justify-between items-center">
                <Link href="/" className="logo">
                    <Image src={logo} alt="double cool ice cream logo" width={150} height={150} className="w-auto h-25 drop-shadow-xl" />
                </Link>
                <button type="button" className="bg-[#892D1C] me-10 transition-all duration-300 hover:scale-105 py-3 px-3 inline-block rounded-full border border-dashed border-white cursor-pointer active:scale-95">
                    <span className="block w-4 h-[2px] bg-white mb-2"></span>
                    <span className="block w-6 h-[2px] bg-white"></span>
                </button>
            </nav>
        </header>
    )
}

export default Header