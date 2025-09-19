
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductHero from "@/components/ProductHero";
import AgentCards from "@/components/AgentCards";
import DetailedFeatures from "@/components/DetailedFeatures";
import ProductBenefits from "@/components/ProductBenefits";
import PricingSection from "@/components/PricingSection";
import { useMetaDescription } from "@/hooks/useMetaDescription";
import { StructuredData } from "@/components/StructuredData";

const Product = () => {
  useMetaDescription(
    "Discover SymAssist's 5 specialized AI assistants that automate maintenance coordination, tenant communication, vendor management, and property operations with 24/7 human oversight.",
    "SymAssist Product - 5 AI Assistants for Property Management"
  );

  return (
    <div className="min-h-screen bg-white">
      <StructuredData type="product" />
      <Navigation />
      <ProductHero />
      <AgentCards />
      <DetailedFeatures />
      <ProductBenefits />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Product;
