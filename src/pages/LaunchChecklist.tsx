import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LaunchChecklist from "@/components/LaunchChecklist";
import { useMetaDescription } from "@/hooks/useMetaDescription";
import { StructuredData } from "@/components/StructuredData";

const LaunchChecklistPage = () => {
  useMetaDescription(
    "SymAssist Launch Checklist - Track your pre-launch progress across SEO, performance, legal compliance, and technical readiness.",
    "SymAssist Launch Checklist - Pre-Launch Progress Tracker"
  );

  return (
    <div className="min-h-screen bg-white">
      <StructuredData type="about" />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 pb-16 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Launch Readiness Checklist
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive pre-launch checklist ensuring your SymAssist website is optimized, 
              compliant, and ready for production deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="py-20 bg-gray-50">
        <LaunchChecklist />
      </section>

      <Footer />
    </div>
  );
};

export default LaunchChecklistPage;