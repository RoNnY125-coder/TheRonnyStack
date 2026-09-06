import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StackSection } from "@/components/sections/StackSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { WorkSection } from "@/components/sections/WorkSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <StackSection />
      <WorkSection />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <VisionSection />
      <ContactSection />
    </main>
  );
}
