
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ROICalculator from "@/components/ROICalculator";
import { useMetaDescription } from "@/hooks/useMetaDescription";

const ROICalculatorPage = () => {
  useMetaDescription(
    "Calculate your ROI with FlowIQ's AI automation. See how much time and money you can save with automated scheduling, insurance verification, claims processing, and patient communication.",
    "FlowIQ ROI Calculator - Calculate Your Practice Automation Savings"
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ROICalculator />
      <Footer />
    </div>
  );
};

export default ROICalculatorPage;
