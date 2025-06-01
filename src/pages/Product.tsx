
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductHero from "@/components/ProductHero";
import AgentCards from "@/components/AgentCards";
import DetailedFeatures from "@/components/DetailedFeatures";
import ProductBenefits from "@/components/ProductBenefits";

const Product = () => {
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
