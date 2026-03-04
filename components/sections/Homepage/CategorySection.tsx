import { CategoryCard } from "@/types"
import Image from "next/image";
import Link from "next/link";

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
    return (
        <section className="px-20 py-30">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-bayon text-7xl text-[#561C12] inline-flex gap-2 flex-wrap"><span>Pick Your Favourite Ice Cream</span> <span className="relative inline-block after:content-[''] after:h-[2px] after:w-[100px] after:bg-[#561C12] after:absolute after:bottom-3 after:-right-[100px]">Category</span></h2>
                <p className="font-dm-sans text-2xl text-[#561C12] mt-3 font-light">
                    We’re talking rich, creamy, satisfyingly smooth with a chill in every bite.
                </p>
            </div>
            <div className="container mx-auto pt-20">
                <div className="grid grid-cols-4 gap-5">
                    {
                        categories.map((category) => (
                            <Link key={category.id}
                             href={category.link} 
                             className="group flex flex-col items-center rounded-[40px] w-[70%] mx-auto overflow-visible hover:scale-[1.1] hover:rotate-3 transition-all duration-300"
                             style={{backgroundColor: category.bgColor}}
                             >
                                <Image src={category.image} alt={category.title} width={700} height={400} className="group-hover:scale-[1.3] transition-all duration-300 w-auto h-auto scale-[1.4]" />
                                <h3 className="text-4xl bg-black mt-3 font-light text-white uppercase px-8 py-[2px] font-bayon border-3 border-white -rotate-6 -mb-5 shadow -ms-10 tracking-tight text-center w-[200px] group-hover:scale-[1.1] group-hover:-rotate-6 transition-all duration-300">{category.title}</h3>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default CategorySection