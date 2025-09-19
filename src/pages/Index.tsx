
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import StatusQuoSection from "@/components/home/StatusQuoSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import UseCasesSection from "@/components/home/UseCasesSection";
import CTASection from "@/components/home/CTASection";
import InvisibleIntelligenceSection from "@/components/home/InvisibleIntelligenceSection";
import ValuePropositionsSection from "@/components/home/ValuePropositionsSection";
import AdvisoryBoardSignup from "@/components/AdvisoryBoardSignup";
import EarlyAccessSignup from "@/components/EarlyAccessSignup";
import { useMetaDescription } from "@/hooks/useMetaDescription";
import { StructuredData } from "@/components/StructuredData";

const Index = () => {
  useMetaDescription(
    "Transform your property management with SymAssist's AI-powered platform. Automate maintenance coordination, tenant communication, vendor dispatch, and operations with 24/7 human oversight.",
    "SymAssist - AI-Powered Property Management Assistant"
  );

  return (
    <div className="min-h-screen bg-white">
      <StructuredData type="homepage" />
      <Navigation />
      <HeroSection />
      <StatsSection />
      <InvisibleIntelligenceSection />
      <StatusQuoSection />
      <ValuePropositionsSection />
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
