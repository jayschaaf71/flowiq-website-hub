
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import HeroSection from "@/components/home/HeroSection";
import StatusQuoSection from "@/components/home/StatusQuoSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import UseCasesSection from "@/components/home/UseCasesSection";
import CTASection from "@/components/home/CTASection";
import AdvisoryBoardSignup from "@/components/AdvisoryBoardSignup";
import EarlyAccessSignup from "@/components/EarlyAccessSignup";

const Index = () => {

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <StatusQuoSection />
      <FeaturesSection />
      <UseCasesSection />
      <Testimonials />
      <EarlyAccessSignup />
      <AdvisoryBoardSignup />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
