import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/Homepage/HeroSection";
import type { Metadata } from "next";

const CategorySection = dynamic(() => import("@/components/sections/Homepage/CategorySection"));
const PromotionSection = dynamic(() => import("@/components/sections/Homepage/PromotionSection"));
const AboutUsSection = dynamic(() => import("@/components/sections/Homepage/AboutUsSection"));
const WhyChooseUsSection = dynamic(() => import("@/components/sections/Homepage/WhyChooseUsSection"));
const DistributorshipCTASection = dynamic(() => import("@/components/sections/Homepage/DistributorshipCTASection"));
const MostPopularProducts = dynamic(() => import("@/components/sections/Homepage/MostPopularProducts"));

export const metadata: Metadata = {
  title: "Double Cool | Pure Creamy Ice Cream & Frozen Treats in West Bengal",
  description: "Taste the magic with Double Cool! We offer a premium range of ice creams made with healthy milk and delicious cream. From Cones to Novelties, experience the ultimate chill in every bite.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <PromotionSection />
      <AboutUsSection />
      <MostPopularProducts />
      <WhyChooseUsSection />
      <DistributorshipCTASection />
    </>
  );
}
