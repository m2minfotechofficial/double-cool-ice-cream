import Link from "next/link";
import breadcrumbBg from "../../public/images/hero/hero-bg-3.png";
import { LuArrowLeftRight } from "react-icons/lu";

const BreadCrumbContainer = ({ breadcrumbLink }: { breadcrumbLink: string }) => {
    return (
        <div
            style={{ backgroundImage: `url(${breadcrumbBg.src || breadcrumbBg})`, backgroundPosition: "top" }}
            className="bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center md:px-20 px-6 md:py-30 py-10 text-white relative h-[300px]"
        >
            <h1 className="px-10 py-1 text-white text-shadow-lg bg-linear-to-r from-[#FC3327] via-[#4CC91F] to-[#961E17] inline-block -rotate-6 shadow-lg border-3 font-bayon 2xl:text-8xl xl:text-8xl lg:text-8xl md:text-6xl text-4xl">{breadcrumbLink}</h1>
            <h2 className="sub-bread px-10 py-1 text-white text-shadow-lg bg-black inline-block -rotate-6 shadow-lg font-bayon 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl text-sm">
                <div className="flex items-center gap-5">
                    <Link href="/" className="hover:scale-95 hover:text-blue-700 transition-all duration-300">Home</Link>
                    <span><LuArrowLeftRight /></span>
                    <Link href={`/${breadcrumbLink}`} className="hover:scale-95 hover:text-blue-700 transition-all duration-300">{breadcrumbLink}</Link>
                </div>
            </h2>
        </div>
    );
};

export default BreadCrumbContainer;