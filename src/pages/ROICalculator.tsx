
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ROICalculator from "@/components/ROICalculator";

const ROICalculatorPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ROICalculator />
      <Footer />
    </div>
  );
};

export default ROICalculatorPage;
