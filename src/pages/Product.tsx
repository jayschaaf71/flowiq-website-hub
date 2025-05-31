
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Cpu, Database, Cloud, Settings } from "lucide-react";

const Product = () => {
  const features = [
    {
      icon: <Cpu className="h-6 w-6 text-blue-700" />,
      title: "Intelligent Process Automation",
      description: "Automate complex workflows with AI that learns and adapts to your practice patterns."
    },
    {
      icon: <Database className="h-6 w-6 text-indigo-600" />,
      title: "Unified Data Management",
      description: "Centralize all your practice data in one secure, intelligent platform."
    },
    {
      icon: <Cloud className="h-6 w-6 text-blue-600" />,
      title: "Cloud-Native Architecture",
      description: "Access your AI operating system from anywhere with enterprise-grade reliability."
    },
    {
      icon: <Settings className="h-6 w-6 text-slate-600" />,
      title: "Customizable Workflows",
      description: "Tailor FlowIQ to match your unique practice requirements and preferences."
    }
  ];

  const benefits = [
    "Reduce administrative overhead by up to 70%",
    "Improve client satisfaction with faster response times",
    "Scale operations without proportional staff increases",
    "Ensure compliance with automated documentation",
    "Generate actionable insights from practice data",
    "Seamlessly integrate with existing tools"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              FlowIQ Product Suite
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover the comprehensive AI-powered platform designed specifically for professional practices. 
              Experience the future of practice management today.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-blue-800 hover:to-indigo-700 text-white px-8 py-3 text-lg"
              onClick={() => window.open('https://calendly.com', '_blank')}
            >
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful capabilities that work together to create your AI operating system.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gray-50 rounded-lg">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Measurable Results for Your Practice
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                FlowIQ delivers tangible improvements that you can see from day one. 
                Our AI-powered platform transforms how professional practices operate.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-blue-700" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pl-8">
              <Card className="border-none shadow-2xl">
                <CardHeader className="bg-gradient-to-br from-blue-700 to-indigo-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl text-center">Ready to Get Started?</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6 text-center">
                    See FlowIQ in action with a personalized demo tailored to your practice.
                  </p>
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-blue-800 hover:to-indigo-700 text-white py-3"
                    onClick={() => window.open('https://calendly.com', '_blank')}
                  >
                    Schedule Your Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;
