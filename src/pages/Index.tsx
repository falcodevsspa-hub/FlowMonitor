import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ValueProposition } from "@/components/landing/ValueProposition";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { SegmentsSection } from "@/components/landing/SegmentsSection";
import { ArchitectureSection } from "@/components/landing/ArchitectureSection";
import { WhyChooseSection } from "@/components/landing/WhyChooseSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { DashboardPreview } from "@/components/landing/DashboardPreview";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <section id="features">
          <ValueProposition />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="segments">
          <SegmentsSection />
        </section>
        <section id="architecture">
          <ArchitectureSection />
        </section>
        <section id="why-us">
          <WhyChooseSection />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
        <section id="dashboard">
          <DashboardPreview />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
