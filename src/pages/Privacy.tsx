
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useMetaDescription } from "@/hooks/useMetaDescription";

const Privacy = () => {
  useMetaDescription(
    "FlowIQ Privacy Policy - Learn how we collect, use, and protect your information. We're committed to maintaining your privacy and securing your data with enterprise-grade security measures.",
    "FlowIQ Privacy Policy - Data Protection & Security"
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-36 pb-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-6">
              We collect information you provide directly to us, such as when you fill out our contact forms, 
              request a demo, or communicate with us. This may include your name, email address, phone number, 
              company information, and any other information you choose to provide.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Information We Collect:</h3>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Contact information (name, email, phone number)</li>
              <li>Professional information (company, role, practice type)</li>
              <li>Communication preferences and inquiry details</li>
              <li>Usage data and analytics information</li>
              <li>Device and browser information</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-6">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Provide, maintain, and improve our services</li>
              <li>Process and respond to your inquiries</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate with you about products, services, and events</li>
              <li>Personalize your experience and provide relevant content</li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Legal Basis for Processing (GDPR)</h2>
            <p className="text-gray-600 mb-4">
              If you are located in the European Economic Area (EEA), our legal basis for collecting and using your personal information depends on the specific context:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li><strong>Consent:</strong> When you provide explicit consent for specific processing activities</li>
              <li><strong>Contract Performance:</strong> When processing is necessary to perform our services</li>
              <li><strong>Legitimate Interests:</strong> When we have legitimate business interests that don't override your privacy rights</li>
              <li><strong>Legal Compliance:</strong> When required by applicable laws and regulations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Privacy Rights</h2>
            <p className="text-gray-600 mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">GDPR Rights (EEA Residents):</h3>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li><strong>Access:</strong> Right to know what personal data we hold about you</li>
              <li><strong>Rectification:</strong> Right to correct inaccurate or incomplete data</li>
              <li><strong>Erasure:</strong> Right to request deletion of your personal data</li>
              <li><strong>Portability:</strong> Right to receive your data in a structured format</li>
              <li><strong>Restriction:</strong> Right to limit how we process your data</li>
              <li><strong>Objection:</strong> Right to object to certain types of processing</li>
              <li><strong>Withdraw Consent:</strong> Right to withdraw consent at any time</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">CCPA Rights (California Residents):</h3>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li><strong>Know:</strong> Right to know what personal information we collect and how it's used</li>
              <li><strong>Delete:</strong> Right to request deletion of personal information</li>
              <li><strong>Opt-Out:</strong> Right to opt-out of the sale of personal information (we don't sell personal data)</li>
              <li><strong>Non-Discrimination:</strong> Right to equal service and pricing regardless of privacy choices</li>
            </ul>

            <p className="text-gray-600 mb-6">
              To exercise any of these rights, please contact us using the information provided below. We will respond to valid requests within the timeframes required by applicable law.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information Sharing and Disclosure</h2>
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li><strong>Service Providers:</strong> Trusted third-party vendors who assist us in providing our services</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Protection:</strong> To protect our rights, property, or safety, or that of our users</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Retention</h2>
            <p className="text-gray-600 mb-6">
              We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, 
              comply with legal obligations, resolve disputes, and enforce our agreements. When we no longer need your 
              personal information, we will securely delete or anonymize it.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">International Data Transfers</h2>
            <p className="text-gray-600 mb-6">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate 
              safeguards are in place to protect your personal information in accordance with applicable privacy laws, 
              including the use of standard contractual clauses and other approved transfer mechanisms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-600 mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Remember your preferences and settings</li>
              <li>Analyze website performance and usage patterns</li>
              <li>Provide personalized content and experiences</li>
              <li>Enable essential website functionality</li>
            </ul>
            <p className="text-gray-600 mb-6">
              You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate technical and organizational security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, 
              access controls, secure data centers, and regular security assessments. However, no method of transmission 
              over the internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Children's Privacy</h2>
            <p className="text-gray-600 mb-6">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal 
              information from children under 18. If we become aware that we have collected such information, we will 
              delete it promptly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. 
              We will notify you of material changes by posting the updated policy on our website and updating the 
              "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, want to exercise your privacy rights, or need assistance with privacy-related matters, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@flowiq.com</p>
              <p className="text-gray-700 mb-2"><strong>Website:</strong> Contact form at flowiq.com/contact</p>
              <p className="text-gray-700"><strong>Response Time:</strong> We will respond to privacy requests within 30 days (or as required by applicable law)</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
