
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ROICalculator from "@/components/ROICalculator";
import LeadCapture from "@/components/LeadCapture";
import NewsletterSignup from "@/components/NewsletterSignup";
import { useMetaDescription } from "@/hooks/useMetaDescription";
import { StructuredData } from "@/components/StructuredData";

const ROICalculatorPage = () => {
  useMetaDescription(
    "Calculate your ROI with SymAssist's AI automation. See how much time and money you can save with automated service coordination, customer communication, and business operations.",
    "SymAssist ROI Calculator - Calculate Your Business Operations Automation Savings"
  );

  return (
    <div className="min-h-screen bg-white">
      <StructuredData type="roi-calculator" />
      <Navigation />
      <ROICalculator />
      <LeadCapture />
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default ROICalculatorPage;
