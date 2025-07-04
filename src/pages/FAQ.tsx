
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, HelpCircle, MessageSquare, Shield, Settings, DollarSign, Clock, Users } from "lucide-react";
import { useMetaDescription } from "@/hooks/useMetaDescription";
import { StructuredData } from "@/components/StructuredData";

const FAQ = () => {
  useMetaDescription(
    "Get answers to frequently asked questions about FlowIQ's AI agents, implementation, security, HIPAA compliance, pricing, and support. 99.9% uptime, 24/7 support, 60-90 days to ROI.",
    "FlowIQ FAQ - Everything You Need to Know About AI Practice Automation"
  );

  const faqCategories = [
    {
      icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
      title: "Getting Started",
      faqs: [
        {
          question: "How long does it take to implement FlowIQ?",
          answer: "Most practices are fully operational with FlowIQ within 2-4 weeks. Our implementation process includes discovery (1-2 weeks), setup and integration (1-2 weeks), and launch optimization (ongoing). We work around your schedule to minimize disruption."
        },
        {
          question: "Do I need technical expertise to use FlowIQ?",
          answer: "No technical expertise required. FlowIQ is designed to be intuitive for healthcare professionals. Our team handles all technical setup, and we provide comprehensive training for your staff. The AI agents work automatically in the background."
        },
        {
          question: "Will FlowIQ work with my existing systems?",
          answer: "Yes, FlowIQ integrates with most popular EMR systems, practice management software, and billing platforms. During our discovery phase, we'll assess your current systems and ensure seamless integration."
        },
        {
          question: "What if my practice is very small or very large?",
          answer: "FlowIQ scales to fit practices of all sizes - from solo practitioners to large multi-location practices. Our AI agents adapt to your specific volume and complexity requirements."
        }
      ]
    },
    {
      icon: <Shield className="h-6 w-6 text-teal-600" />,
      title: "Security & Compliance",
      faqs: [
        {
          question: "Is FlowIQ HIPAA compliant?",
          answer: "Yes, FlowIQ is fully HIPAA compliant and SOC 2 Type II certified. We use enterprise-grade encryption, secure data centers, and maintain strict access controls. All AI processing is done in secure, compliant environments."
        },
        {
          question: "Where is my data stored?",
          answer: "Your data is stored in secure, HIPAA-compliant data centers within the United States. We use advanced encryption both in transit and at rest, and maintain regular security audits and compliance certifications."
        },
        {
          question: "Who has access to my patient information?",
          answer: "Only authorized personnel at your practice have access to patient information. FlowIQ staff cannot access PHI without explicit permission and signed BAAs. All access is logged and monitored for compliance."
        },
        {
          question: "How do you handle data backups and disaster recovery?",
          answer: "We maintain automated daily backups with geographic redundancy. Our disaster recovery plan ensures 99.9% uptime with rapid failover capabilities to protect your practice operations."
        }
      ]
    },
    {
      icon: <Settings className="h-6 w-6 text-cyan-600" />,
      title: "Features & Functionality",
      faqs: [
        {
          question: "Can the AI agents be customized for my specialty?",
          answer: "Absolutely. Each AI agent is trained and customized for your specific practice type, terminology, and workflows. Whether you're in dental, medical, veterinary, or legal practice, the AI adapts to your specialty's unique requirements."
        },
        {
          question: "What languages does FlowIQ support?",
          answer: "FlowIQ currently supports English and Spanish, with additional languages planned based on customer demand. The AI can seamlessly switch between languages during patient interactions."
        },
        {
          question: "How accurate is the insurance verification?",
          answer: "Our VerifyIQ agent achieves 95%+ accuracy in insurance verification by connecting directly to payer databases and real-time eligibility systems. This significantly reduces claim denials and improves revenue cycle efficiency."
        },
        {
          question: "Can I control what the AI agents do and don't do?",
          answer: "Yes, you have complete control over AI agent behavior through our admin dashboard. You can set boundaries, approve automated actions, and customize responses to match your practice's tone and policies."
        }
      ]
    },
    {
      icon: <DollarSign className="h-6 w-6 text-green-600" />,
      title: "Pricing & ROI",
      faqs: [
        {
          question: "How much does FlowIQ cost?",
          answer: "FlowIQ pricing is based on your practice size and selected modules. Most practices see ROI within 60-90 days through reduced staff time, fewer no-shows, and faster claims processing. Contact us for a custom quote."
        },
        {
          question: "Is there a contract or can I cancel anytime?",
          answer: "We offer flexible contracts including month-to-month options after an initial implementation period. We're confident in our value proposition and don't believe in locking customers into long-term contracts they don't want."
        },
        {
          question: "What's included in the implementation cost?",
          answer: "Implementation includes system setup, integration, AI training, staff training, and ongoing support during launch. There are no hidden fees - everything needed to get you operational is included in the quoted price."
        },
        {
          question: "How quickly will I see ROI?",
          answer: "Most practices see immediate time savings and efficiency gains. Measurable ROI typically occurs within 60-90 days through reduced administrative costs, improved collections, and increased patient capacity."
        }
      ]
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "Support & Training",
      faqs: [
        {
          question: "What kind of support do you provide?",
          answer: "We provide comprehensive support including 24/7 technical support, dedicated customer success managers, regular check-ins, and continuous optimization. Our team is always available to help you maximize your FlowIQ investment."
        },
        {
          question: "How do you train my staff?",
          answer: "We provide both virtual and on-site training options tailored to your team's needs. Training includes hands-on sessions, documentation, video tutorials, and ongoing support to ensure your staff is comfortable and confident."
        },
        {
          question: "What happens if something goes wrong?",
          answer: "Our 24/7 monitoring ensures issues are detected and resolved quickly. We maintain 99.9% uptime SLA and have rapid response protocols. Most issues are resolved within minutes, and we always have backup systems ready."
        },
        {
          question: "Do you provide ongoing optimization?",
          answer: "Yes, continuous optimization is core to our service. Our AI agents continuously learn and improve, and our team regularly reviews performance metrics to identify additional efficiency opportunities."
        }
      ]
    }
  ];

  const quickStats = [
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
    { number: "95%+", label: "Accuracy Rate" },
    { number: "60-90", label: "Days to ROI" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <StructuredData type="faq" />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 pb-16" style={{paddingTop: '144px'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <HelpCircle className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Everything you need to know about FlowIQ, our AI agents, implementation process, 
              and how we can transform your practice operations.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {quickStats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="border-none shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gray-50 rounded-lg">
                      {category.icon}
                    </div>
                    <CardTitle className="text-2xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                        <AccordionTrigger className="text-left hover:text-blue-600">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team is here to help. Schedule a personalized demo and get all your questions answered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 text-lg"
                onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
              >
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg"
                onClick={() => window.location.href = 'mailto:support@flowiq.com'}
              >
                Email Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
