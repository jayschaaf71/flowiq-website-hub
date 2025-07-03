
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-36 pb-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Agreement to Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using FlowIQ's website and services, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Services Description</h2>
            <p className="text-gray-600 mb-6">
              FlowIQ provides AI-powered automation solutions for professional practices, including but not limited to 
              scheduling, insurance verification, appointment reminders, patient follow-up, claims processing, 
              and business intelligence services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">User Responsibilities</h2>
            <p className="text-gray-600 mb-6">
              You agree to use our services in compliance with all applicable laws and regulations. 
              You are responsible for maintaining the confidentiality of your account information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              The service and its original content, features, and functionality are and will remain the exclusive 
              property of FlowIQ and its licensors.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              In no event shall FlowIQ be liable for any indirect, incidental, special, consequential, 
              or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
              or other intangible losses.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about these Terms of Service, please contact us through our contact page.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
