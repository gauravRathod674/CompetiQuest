// page.js
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import CategorySection from "../components/home/CategorySection";
import AboutUsSection from "@/components/home/AboutUsSection";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <CategorySection />
      {/* <AboutUsSection /> */}
    </div>
  );
}
