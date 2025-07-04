
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Target, Cog, Rocket, MessageSquare, Shield, Calendar, Star, FileText, CheckCircle, Users, Settings, BarChart, BarChart3, Clock, TrendingUp, Zap } from "lucide-react";
import { useMetaDescription } from "@/hooks/useMetaDescription";

const HowItWorks = () => {
  useMetaDescription(
    "Learn how FlowIQ transforms your practice in 30 days with our proven 3-step implementation process. Discover our integration approach, timeline, and 75% reduction in administrative tasks.",
    "How FlowIQ Works - Practice Transformation in 30 Days"
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
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 pb-16 page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How FlowIQ Transforms Your Practice
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              From implementation to optimization, discover how our AI agents work together 
              to create a seamless, efficient practice experience in just 30 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="cta-primary"
                className="px-8 py-3 text-lg"
                onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
              >
                Start Your Transformation
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
              The FlowIQ Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built specifically for professional practices with cutting-edge AI technology.
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
              Proven Results Within 30 Days
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
              Our Proven Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to transform your practice operations with minimal disruption.
            </p>
          </div>
          
          <div className="space-y-12">
            {implementationSteps.map((step, index) => (
              <div key={index} className="max-w-4xl mx-auto">
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-4 bg-slate-50 rounded-full w-fit">
                      {step.icon}
                    </div>
                    <CardTitle className="text-2xl md:text-3xl">{step.title}</CardTitle>
                    <CardDescription className="text-lg text-gray-600">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Timeline</p>
                          <p className="text-sm text-gray-600">{step.timeline}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">Deliverables</p>
                          <p className="text-sm text-gray-600">{step.deliverables}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
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
            Join hundreds of practices that have already revolutionized their operations with FlowIQ.
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
