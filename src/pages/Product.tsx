
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductHero from "@/components/ProductHero";
import AgentCards from "@/components/AgentCards";
import DetailedFeatures from "@/components/DetailedFeatures";
import ProductBenefits from "@/components/ProductBenefits";
import { useMetaDescription } from "@/hooks/useMetaDescription";

const Product = () => {
  useMetaDescription(
    "Discover FlowIQ's 12 specialized AI agents that automate scheduling, insurance verification, claims processing, patient communication, and revenue cycle management for professional practices.",
    "FlowIQ Product - 12 AI Agents for Practice Automation"
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ProductHero />
      <AgentCards />
      <DetailedFeatures />
      <ProductBenefits />
      <Footer />
    </div>
  );
};

export default Product;
