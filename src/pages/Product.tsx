
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, MessageSquare, Shield, Calendar, Star } from "lucide-react";

const Product = () => {
  const features = [
    {
      icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
      title: "ReceptionIQ - AI Scheduling Assistant",
      description: "Automated response to website chats, direct messages, and phone calls with intelligent appointment booking based on provider availability."
    },
    {
      icon: <Shield className="h-6 w-6 text-teal-600" />,
      title: "VerifyIQ - Insurance Verification Agent",
      description: "Automated insurance eligibility verification before appointments with coverage details extraction and patient responsibility estimation."
    },
    {
      icon: <Calendar className="h-6 w-6 text-cyan-600" />,
      title: "Smart Appointment Reminders",
      description: "Automated appointment reminders via SMS, email, and voice with smart timing and no-show recovery automation."
    },
    {
      icon: <Star className="h-6 w-6 text-slate-600" />,
      title: "FollowIQ - Review Request Automation",
      description: "Automated post-visit review requests with smart timing and direct links to major review platforms for reputation management."
    }
  ];

  const benefits = [
    "Reduce front desk workload by up to 70% with automated scheduling",
    "Eliminate insurance verification delays with pre-appointment automation",
    "Decrease no-show rates by 50% with intelligent reminder systems",
    "Increase online reviews by 300% with automated follow-up campaigns",
    "Ensure HIPAA compliance with SOC 2 certified security practices",
    "Integrate seamlessly with existing practice management systems"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              FlowIQ Product Suite
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Four powerful AI agents working together to automate your practice operations. 
              From scheduling to insurance verification to patient follow-up - FlowIQ handles it all.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 text-lg"
              onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
            >
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Core AI Agents Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Four AI Agents, Infinite Possibilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each FlowIQ agent specializes in a critical aspect of practice management, 
              working together to create a seamless patient experience.
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

      {/* Detailed Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Practice Automation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From the moment a patient discovers your practice to their post-visit follow-up, 
              FlowIQ ensures every touchpoint is optimized.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader className="text-center">
                <MessageSquare className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Patient Communication</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Website chat automation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Phone call handling</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">FAQ responses</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Appointment scheduling</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Insurance & Verification</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Automated eligibility checks</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Coverage summaries</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Patient cost estimates</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">HIPAA-compliant storage</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardHeader className="text-center">
                <Star className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Patient Retention</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Smart appointment reminders</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">No-show recovery</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Automated review requests</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Referral generation</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Measurable Results for Your Practice
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                FlowIQ delivers tangible improvements that you can see from day one. 
                Our specialized AI agents work around the clock to optimize every aspect of your practice operations.
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
                <CardHeader className="bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl text-center">Ready to Get Started?</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6 text-center">
                    See FlowIQ's AI agents in action with a personalized demo tailored to your practice.
                  </p>
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white py-3"
                    onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
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
