
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
import SymbioticAdvantageSection from "@/components/home/SymbioticAdvantageSection";
import AdvisoryBoardSignup from "@/components/AdvisoryBoardSignup";
import EarlyAccessSignup from "@/components/EarlyAccessSignup";
import PricingSection from "@/components/PricingSection";
import TrustSignals from "@/components/TrustSignals";
import SocialProof from "@/components/SocialProof";
import NewsletterSignup from "@/components/NewsletterSignup";
import { useMetaDescription } from "@/hooks/useMetaDescription";
import { StructuredData } from "@/components/StructuredData";

const Index = () => {
  useMetaDescription(
    "Transform your customer service with SymAssist's AI-powered virtual front desk assistant. Automate customer interactions, appointment scheduling, and service coordination with 24/7 human oversight.",
    "SymAssist - Virtual Front Desk Assistant with Symbiotic Intelligence"
  );

  return (
    <div className="min-h-screen bg-white">
      <StructuredData type="homepage" />
      <Navigation />
      <HeroSection />
      <TrustSignals />
      <StatsSection />
      <SymbioticAdvantageSection />
      <InvisibleIntelligenceSection />
      <StatusQuoSection />
      <ValuePropositionsSection />
      <FeaturesSection />
      <UseCasesSection />
      <SocialProof />
      <Testimonials />
      <PricingSection />
      <NewsletterSignup />
      <EarlyAccessSignup />
      <AdvisoryBoardSignup />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
