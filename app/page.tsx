import NavBar from "@/components/NavBar";
import AboutSection from "@/components/aboutSec/AboutSection";
import HeroSec from "@/components/heroSections/HeroSec";

export default function Home() {
  return (
    <>
    <div className="widthContainer">
      <NavBar/>
      <HeroSec/>
      <AboutSection/>
    </div>
    </>
  );
}
