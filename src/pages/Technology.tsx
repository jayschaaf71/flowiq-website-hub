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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technology Stack Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on proven VTS platform integration with advanced AI-human orchestration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {techSections.map((section, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
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

          {/* VTS Platform Integration Details */}
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              VTS Platform Integration
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Voice Communication</h4>
                <p className="text-sm text-gray-600">
                  Natural language processing with 95%+ accuracy handling thousands of daily interactions
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-teal-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">SMS & Messaging</h4>
                <p className="text-sm text-gray-600">
                  Multi-channel communication hub with automated responses and intelligent routing
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Link className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Scheduling Integration</h4>
                <p className="text-sm text-gray-600">
                  Intelligent appointment coordination with vendor management and tenant communication
                </p>
              </div>
            </div>
          </div>

          {/* Architecture Diagram */}
          <div className="bg-white border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              System Architecture & Data Flow
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg flex-1">
                <h4 className="font-semibold text-blue-900 mb-2">Input Layer</h4>
                <p className="text-sm text-blue-700">Voice, SMS, Web, Email</p>
              </div>
              <div className="text-2xl text-gray-400">→</div>
              <div className="text-center p-4 bg-green-50 rounded-lg flex-1">
                <h4 className="font-semibold text-green-900 mb-2">AI Processing</h4>
                <p className="text-sm text-green-700">NLP + Confidence Scoring</p>
              </div>
              <div className="text-2xl text-gray-400">→</div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg flex-1">
                <h4 className="font-semibold text-yellow-900 mb-2">Intelligent Routing</h4>
                <p className="text-sm text-yellow-700">AI vs Human Decision</p>
              </div>
              <div className="text-2xl text-gray-400">→</div>
              <div className="text-center p-4 bg-purple-50 rounded-lg flex-1">
                <h4 className="font-semibold text-purple-900 mb-2">Execution</h4>
                <p className="text-sm text-purple-700">Automated or Human Action</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Technology;