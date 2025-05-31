
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Target, Cog, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Target className="h-12 w-12 text-blue-700" />,
      title: "1. Assessment & Planning",
      description: "We analyze your current workflows and identify optimization opportunities tailored to your practice.",
      details: [
        "Comprehensive practice audit",
        "Workflow mapping and analysis", 
        "Custom implementation roadmap",
        "Success metrics definition"
      ]
    },
    {
      icon: <Cog className="h-12 w-12 text-teal-600" />,
      title: "2. Implementation & Integration",
      description: "Our expert team seamlessly integrates FlowIQ with your existing systems and processes.",
      details: [
        "Zero-disruption deployment",
        "Data migration and validation",
        "System integration setup",
        "Staff training and onboarding"
      ]
    },
    {
      icon: <Rocket className="h-12 w-12 text-cyan-600" />,
      title: "3. Optimization & Growth",
      description: "Watch your practice transform as FlowIQ continuously learns and optimizes your operations.",
      details: [
        "AI-powered process optimization",
        "Continuous performance monitoring",
        "Regular system enhancements",
        "Ongoing support and guidance"
      ]
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
              How FlowIQ Works
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Our proven three-step process ensures your practice transformation is smooth, 
              effective, and delivers immediate value.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
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
                <p className="text-gray-600">System integration, data migration, and comprehensive team training sessions.</p>
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
            Let's discuss how FlowIQ can revolutionize your practice operations.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
            onClick={() => window.open('https://calendly.com', '_blank')}
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
