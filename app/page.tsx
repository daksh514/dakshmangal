import NavBar from "@/components/NavBar";
import AboutSection from "@/components/aboutSec/AboutSection";
import HeroSec from "@/components/heroSections/HeroSec";
import ProjectsSection from "@/components/projectsSec/ProjectsSection";

export default function Home() {
  return (
    <>
    <div className="widthContainer">
      <NavBar/>
      <HeroSec/>
      <AboutSection/>
      <ProjectsSection/>
    </div>
    </>
  );
}
