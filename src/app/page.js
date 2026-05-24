import FeaturesSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <HeroSection></HeroSection>
    {/* <StatsSection></StatsSection> */}
    <FeaturesSection></FeaturesSection>
   </div>
  );
}
