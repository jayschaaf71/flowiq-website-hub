
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useMetaDescription } from "@/hooks/useMetaDescription";

const Terms = () => {
  useMetaDescription(
    "FlowIQ Terms of Service - Review our service agreement, user responsibilities, and terms for using our AI-powered practice automation solutions.",
    "FlowIQ Terms of Service - Service Agreement"
  );

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
              and provision of this agreement. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Services Description</h2>
            <p className="text-gray-600 mb-6">
              FlowIQ provides AI-powered automation solutions for professional practices, including but not limited to 
              scheduling, insurance verification, appointment reminders, patient follow-up, claims processing, 
              and business intelligence services. Our services are designed to improve operational efficiency and patient experience.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">User Account and Registration</h2>
            <p className="text-gray-600 mb-6">
              To access certain features of our services, you may be required to create an account. You are responsible for:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Providing accurate and complete registration information</li>
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">User Responsibilities and Acceptable Use</h2>
            <p className="text-gray-600 mb-4">
              You agree to use our services in compliance with all applicable laws and regulations. You will not:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Use our services for any illegal or unauthorized purpose</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Introduce viruses, malware, or other harmful code</li>
              <li>Interfere with or disrupt the operation of our services</li>
              <li>Share your account credentials with third parties</li>
              <li>Use our services to spam, harass, or harm others</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Protection and HIPAA Compliance</h2>
            <p className="text-gray-600 mb-6">
              FlowIQ is committed to protecting sensitive data and maintaining HIPAA compliance for healthcare-related services. 
              We implement appropriate safeguards to protect personal health information (PHI) and maintain business associate 
              agreements where required. Users are responsible for ensuring their use of our services complies with applicable 
              healthcare privacy regulations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Service Availability and Modifications</h2>
            <p className="text-gray-600 mb-6">
              We strive to maintain high service availability but cannot guarantee uninterrupted access. We reserve the right to 
              modify, suspend, or discontinue any aspect of our services at any time with reasonable notice. We will provide 
              advance notification of significant changes that may affect your use of our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Payment Terms and Billing</h2>
            <p className="text-gray-600 mb-6">
              If you subscribe to paid services, you agree to pay all applicable fees as described in your service agreement. 
              Payments are due according to the billing schedule specified. We reserve the right to suspend services for 
              non-payment after reasonable notice. Refunds are provided according to our refund policy as communicated 
              during the sales process.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Intellectual Property Rights</h2>
            <p className="text-gray-600 mb-6">
              The service and its original content, features, and functionality are and will remain the exclusive 
              property of FlowIQ and its licensors. Our services are protected by copyright, trademark, and other 
              intellectual property laws. You may not reproduce, distribute, modify, or create derivative works 
              without our express written permission.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              To the maximum extent permitted by law, FlowIQ shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages, including without limitation, loss of profits, data, 
              use, goodwill, or other intangible losses, resulting from your use of our services. Our total 
              liability shall not exceed the amount paid by you for our services in the 12 months preceding the claim.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Indemnification</h2>
            <p className="text-gray-600 mb-6">
              You agree to defend, indemnify, and hold harmless FlowIQ and its officers, directors, employees, 
              and agents from any claims, damages, losses, or expenses arising from your use of our services, 
              violation of these terms, or infringement of any third-party rights.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Termination</h2>
            <p className="text-gray-600 mb-6">
              Either party may terminate this agreement at any time with reasonable notice. Upon termination, 
              your right to use our services will cease immediately. We will provide reasonable assistance in 
              data export during a transition period as specified in your service agreement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Governing Law and Dispute Resolution</h2>
            <p className="text-gray-600 mb-6">
              These terms shall be governed by and construed in accordance with the laws of the jurisdiction 
              where FlowIQ is incorporated. Any disputes arising from these terms or your use of our services 
              shall be resolved through binding arbitration or in the appropriate courts of such jurisdiction.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to Terms</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify these terms at any time. We will provide notice of material changes 
              by posting updated terms on our website and notifying active users. Your continued use of our 
              services after such changes constitutes acceptance of the new terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@flowiq.com</p>
              <p className="text-gray-700 mb-2"><strong>Website:</strong> Contact form at flowiq.com/contact</p>
              <p className="text-gray-700"><strong>Address:</strong> Available upon request for legal proceedings</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
