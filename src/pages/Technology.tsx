import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Users, Link, Shield } from "lucide-react";
import { useMetaDescription } from "@/hooks/useMetaDescription";
import { StructuredData } from "@/components/StructuredData";

const Technology = () => {
  useMetaDescription(
    "Discover SymAssist's advanced AI technology stack including confidence scoring, offshore human infrastructure, VTS platform integration, and enterprise security.",
    "SymAssist Technology - AI-Human Property Management Platform"
  );

  const techSections = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      items: [
        "Natural Language Processing with 95%+ accuracy",
        "Confidence scoring with real-time decision routing", 
        "Continuous learning from human feedback",
        "Multi-language support (English, Spanish)"
      ]
    },
    {
      icon: Users,
      title: "Human Infrastructure", 
      items: [
        "24/7 coverage with expert VAs in Mexico",
        "Tier 1, 2, and 3 escalation structure",
        "Average 2-second context handoff time",
        "Rigorous quality assurance and training"
      ]
    },
    {
      icon: Link,
      title: "Integration Capabilities",
      items: [
        "VTS Platform (voice, SMS, scheduling)",
        "Popular property management software",
        "Vendor management systems", 
        "Accounting and payment platforms"
      ]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      items: [
        "SOC 2 Type II certified",
        "GDPR and CCPA compliant",
        "End-to-end encryption",
        "Regular security audits"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <StructuredData type="technology" />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 pb-16" style={{paddingTop: '144px'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built for Scale, Designed for Reliability
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Advanced AI technology combined with human expertise infrastructure to deliver 
              enterprise-grade property management automation.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary">99.2% Uptime</Badge>
              <Badge variant="secondary">SOC 2 Certified</Badge>
              <Badge variant="secondary">24/7 Global Coverage</Badge>
              <Badge variant="secondary">Sub-2s Handoffs</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {techSections.map((section, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{section.title}</CardTitle>
                      <CardDescription>Enterprise-grade capabilities</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Technology;