import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import TeamSection from "@/components/sections/TeamSection";
import CtaSection from "@/components/sections/CtaSection";
import ContactSection from "@/components/sections/ContactSection";
import CustomCursor from "@/components/animations/CustomCursor";

export default function Home() {
  return (
    <main className="w-full relative">
      <CustomCursor />
      
      <HeroSection />
      
      {/* 
        Wrapper with bg-background to ensure the 
        global 3D canvas is partially hidden/blended where necessary 
      */}
      <div className="relative z-10 bg-background/95 backdrop-blur-sm">
        <FeaturesSection />
      </div>
      
      <div className="relative z-10">
        <ProjectShowcase />
      </div>
      
      <div className="relative z-10 bg-background/95 backdrop-blur-sm shadow-2xl shadow-black/50">
        <TeamSection />
      </div>
      
      <div className="relative z-10 shadow-2xl">
        <CtaSection />
      </div>
      
      <div className="relative z-10 bg-background">
        <ContactSection />
      </div>
    </main>
  );
}
