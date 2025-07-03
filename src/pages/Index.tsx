
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import UseCasesSection from "@/components/home/UseCasesSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <UseCasesSection />
      <Testimonials />
      <CTASection />

      <Footer />
    </div>
  );
};

export default Index;
