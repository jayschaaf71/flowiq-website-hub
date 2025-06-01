
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Target, Cog, Rocket, MessageSquare, Shield, Calendar, Star, FileText, CheckCircle, Users, Settings, BarChart } from "lucide-react";

const HowItWorks = () => {
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
      ]
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
      ]
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
      ]
    }
  ];

  const aiAgentWorkflows = [
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
      title: "ReceptionIQ",
      description: "24/7 Patient Communication Hub",
      workflow: [
        "Patient visits website or calls practice",
        "AI analyzes inquiry type and intent",
        "Provides instant, personalized responses",
        "Schedules appointments based on availability",
        "Sends confirmation and preparation instructions"
      ]
    },
    {
      icon: <Shield className="h-8 w-8 text-teal-600" />,
      title: "VerifyIQ",
      description: "Automated Insurance Verification",
      workflow: [
        "Automatically triggered 48-72 hours before appointment",
        "Connects to insurance provider databases",
        "Verifies coverage and benefits in real-time",
        "Calculates patient responsibility estimates",
        "Sends summary to staff and patient"
      ]
    },
    {
      icon: <Calendar className="h-8 w-8 text-cyan-600" />,
      title: "AppointmentIQ",
      description: "Smart Appointment Management",
      workflow: [
        "Sends personalized reminders at optimal times",
        "Monitors patient engagement and responses",
        "Identifies potential no-shows early",
        "Automatically reschedules when needed",
        "Optimizes schedule to reduce gaps"
      ]
    },
    {
      icon: <Star className="h-8 w-8 text-slate-600" />,
      title: "FollowIQ",
      description: "Automated Review & Referral Generation",
      workflow: [
        "Triggers post-visit follow-up sequence",
        "Sends personalized review requests",
        "Directs satisfied patients to review platforms",
        "Generates referral opportunities",
        "Tracks reputation metrics and trends"
      ]
    },
    {
      icon: <FileText className="h-8 w-8 text-purple-600" />,
      title: "ClaimsIQ",
      description: "Intelligent Claims Processing",
      workflow: [
        "Automatically prepares claims from visit data",
        "Validates coding and billing accuracy",
        "Submits to appropriate insurance payers",
        "Tracks claim status and follows up",
        "Manages denials and resubmissions"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Reduced Staff Workload",
      description: "Automate up to 70% of routine administrative tasks"
    },
    {
      icon: <Settings className="h-6 w-6 text-teal-600" />,
      title: "Seamless Integration",
      description: "Works with your existing EMR and practice management systems"
    },
    {
      icon: <BarChart className="h-6 w-6 text-cyan-600" />,
      title: "Measurable Results",
      description: "See improvements in efficiency and patient satisfaction immediately"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-600" />,
      title: "HIPAA Compliant",
      description: "SOC 2 certified with enterprise-grade security"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How FlowIQ Transforms Your Practice
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              From implementation to optimization, discover how our AI agents work together 
              to create a seamless, efficient practice experience.
            </p>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to transform your practice operations with minimal disruption.
            </p>
          </div>
          
          <div className="space-y-16">
            {implementationSteps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                <div className="flex-1">
                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="text-center lg:text-left">
                      <div className="mx-auto lg:mx-0 mb-4 p-4 bg-slate-50 rounded-full w-fit">
                        {step.icon}
                      </div>
                      <CardTitle className="text-2xl md:text-3xl">{step.title}</CardTitle>
                      <CardDescription className="text-lg text-gray-600">
                        {step.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-700 to-teal-600 rounded-full"></div>
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg p-8 h-64 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent mb-4">
                        {index + 1}
                      </div>
                      <p className="text-gray-600">Step {index + 1}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agent Workflows */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Each AI Agent Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See the step-by-step process of how our AI agents handle different aspects of your practice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiAgentWorkflows.map((agent, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-gray-50 rounded-lg">
                      {agent.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{agent.title}</CardTitle>
                      <CardDescription className="text-sm">{agent.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {agent.workflow.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-xs font-medium text-blue-700">{stepIndex + 1}</span>
                        </div>
                        <span className="text-gray-700 text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why FlowIQ Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built specifically for healthcare practices with security, compliance, and results in mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-lg text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-slate-50 rounded-full w-fit">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Implementation Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From initial consultation to full optimization, here's what you can expect.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-blue-700 mb-2">Week 1-2</CardTitle>
                <CardDescription className="text-lg">Discovery & Setup</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Initial assessment, planning, and foundation setup for your FlowIQ implementation.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-teal-600 mb-2">Week 3-4</CardTitle>
                <CardDescription className="text-lg">Integration & Training</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">System integration, AI training, and comprehensive team onboarding sessions.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-cyan-600 mb-2">Week 5+</CardTitle>
                <CardDescription className="text-lg">Optimization & Growth</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Continuous optimization, performance monitoring, and ongoing support.</p>
              </CardContent>
            </Card>
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
            Let's discuss how FlowIQ can revolutionize your practice operations with our proven process.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
            onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
          >
            Book Your Discovery Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
