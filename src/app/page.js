import CTASection from "@/components/CTASection";
import FeaturesSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <HeroSection></HeroSection>
    <FeaturesSection></FeaturesSection>
    <PricingSection></PricingSection>
    <CTASection></CTASection>
   </div>
  );
}
