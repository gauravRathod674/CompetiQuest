// page.js
import Navbar from "../components/Navbar";
import HeroSection from "../components/home/HeroSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}