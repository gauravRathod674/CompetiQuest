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

/*
*IMP Instructions For Using GitHub*

=> Sab apni feature-wise branch banao (e.g. frontend/homepage-ui, backend/api-integration). Kabhi direct main pe kaam mat karo.
=> Kisi ka branch overwrite na karo, galti se bhi force push mat karo.
=> Pull karne se pehle apne changes save & commit kar lo.
=> Conflicts aane par bina soche samjhe resolve na karo, pehle team ko inform karo.
*/