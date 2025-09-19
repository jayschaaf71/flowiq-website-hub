
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Target, Cog, Rocket, MessageSquare, Shield, Calendar, Star, FileText, CheckCircle, Users, Settings, BarChart, BarChart3, Clock, TrendingUp, Zap } from "lucide-react";
import { useMetaDescription } from "@/hooks/useMetaDescription";
import { StructuredData } from "@/components/StructuredData";

const HowItWorks = () => {
  useMetaDescription(
    "Learn how SymAssist transforms your property management in 30 days with AI automation and 24/7 human oversight. From tenant request to completion with 40% time savings.",
    "How SymAssist Works - Property Management Automation"
  );

  const implementationSteps = [
    {
      icon: <Target className="h-12 w-12 text-blue-700" />,
      title: "1. Discovery & Assessment",
      description: "We analyze your current workflows and identify optimization opportunities tailored to your practice.",
      details: [
        "Comprehensive practice workflow audit",
        "Current system integration assessment", 
        "Staff interview and pain point analysis",
        "Custom implementation roadmap creation"
      ],
      timeline: "Week 1-2",
      deliverables: "Practice assessment report, integration plan, timeline"
    },
    {
      icon: <Cog className="h-12 w-12 text-teal-600" />,
      title: "2. Setup & Integration",
      description: "Our expert team seamlessly integrates FlowIQ with your existing systems and processes.",
      details: [
        "Zero-disruption deployment process",
        "EMR and practice management integration",
        "AI agent training and customization",
        "Staff training and onboarding sessions"
      ],
      timeline: "Week 3-4",
      deliverables: "Fully configured system, trained staff, documentation"
    },
    {
      icon: <Rocket className="h-12 w-12 text-cyan-600" />,
      title: "3. Launch & Optimization",
      description: "Watch your practice transform as FlowIQ continuously learns and optimizes your operations.",
      details: [
        "Gradual rollout with monitoring",
        "AI performance optimization",
        "Continuous learning and improvement",
        "Ongoing support and guidance"
      ],
      timeline: "Week 5+",
      deliverables: "Optimized workflows, performance reports, ongoing support"
    }
  ];

  const processSteps = [
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Real-Time Processing",
      description: "All AI agents work in real-time to provide immediate responses and actions."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-teal-600" />,
      title: "Continuous Learning",
      description: "AI improves over time by learning from your practice's specific patterns and preferences."
    },
    {
      icon: <Zap className="h-8 w-8 text-cyan-600" />,
      title: "Instant Integration",
      description: "Seamlessly connects with your existing EMR, scheduling, and billing systems."
    }
  ];

  const roiMetrics = [
    { metric: "75%", description: "Reduction in administrative tasks", icon: <Users className="h-6 w-6 text-blue-600" /> },
    { metric: "60%", description: "Decrease in no-show rates", icon: <Calendar className="h-6 w-6 text-teal-600" /> },
    { metric: "40%", description: "Faster claims processing", icon: <FileText className="h-6 w-6 text-cyan-600" /> },
    { metric: "3x", description: "Increase in online bookings", icon: <TrendingUp className="h-6 w-6 text-green-600" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      <StructuredData type="how-it-works" />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 pb-16 page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How SymAssist Works
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              From tenant request to completion, SymAssist handles the entire workflow 
              with AI efficiency and human reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="cta-primary"
                className="px-8 py-3 text-lg"
                onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
              >
              Schedule Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Process Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How SymAssist Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From tenant request to completion with AI efficiency and human reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {processSteps.map((step, index) => (
              <Card key={index} className="border-none shadow-lg text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-slate-50 rounded-full w-fit">
                    {step.icon}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* ROI Metrics */}
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Proven Results for Property Managers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {roiMetrics.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    {item.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {item.metric}
                  </div>
                  <div className="text-sm text-gray-600">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Four simple steps from tenant request to completion with 24/7 oversight.
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">📱</div>
                  <div className="text-primary font-bold text-lg mb-2">01</div>
                  <h3 className="text-xl font-semibold mb-3">Tenant Reports Issue</h3>
                  <p className="text-gray-600">Via voice, SMS, or web form - SymAssist captures every request</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">🤖</div>
                  <div className="text-primary font-bold text-lg mb-2">02</div>
                  <h3 className="text-xl font-semibold mb-3">AI Analyzes & Triages</h3>
                  <p className="text-gray-600">Intelligent classification determines urgency and required trade</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">🔧</div>
                  <div className="text-primary font-bold text-lg mb-2">03</div>
                  <h3 className="text-xl font-semibold mb-3">Smart Vendor Dispatch</h3>
                  <p className="text-gray-600">Best-match vendor selected based on availability, rating, and location</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">👥</div>
                  <div className="text-primary font-bold text-lg mb-2">04</div>
                  <h3 className="text-xl font-semibold mb-3">Human Oversight</h3>
                  <p className="text-gray-600">24/7 monitoring ensures quality and handles complex situations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of property managers who have already revolutionized their operations with SymAssist.
          </p>
          <Button 
            size="lg" 
            variant="cta-outline"
            className="px-8 py-3 text-lg"
            onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
          >
            Book Discovery Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
