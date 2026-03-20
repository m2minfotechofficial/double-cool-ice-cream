import BreadCrumbContainer from "@/components/layouts/BreadCrumbContainer";

export default function Gallery() {
    return (
        <>
            <BreadCrumbContainer breadcrumbLink="gallery" />
            <section className="h-screen w-full bg-[#faf8f5] flex justify-center items-center">
                <div className="font-bayon text-center bg-[#892D1C] p-5 text-white rounded-xl shadow-2xl md:text-4xl text-sm">This page is under development. Will be updated soon...</div>
            </section>
        </>
    )
}
