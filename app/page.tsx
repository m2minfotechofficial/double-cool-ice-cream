import AboutUsSection from "@/components/sections/Homepage/AboutUsSection";
import CategorySection from "@/components/sections/Homepage/CategorySection";
import DistributorshipCTASection from "@/components/sections/Homepage/DistributorshipCTASection";
import HeroSection from "@/components/sections/Homepage/HeroSection";
import PromotionSection from "@/components/sections/Homepage/PromotionSection";
import WhyChooseUsSection from "@/components/sections/Homepage/WhyChooseUsSection";
import type { Metadata } from "next";

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
      <WhyChooseUsSection />
      <DistributorshipCTASection />
    </>
  );
}
