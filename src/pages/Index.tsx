
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { ArrowRight, MessageSquare, Shield, Calendar, Star, BarChart3, FileText, Play } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
      title: "ReceptionIQ",
      description: "AI-powered scheduling assistant that handles website chats, phone calls, and appointment booking 24/7."
    },
    {
      icon: <Shield className="h-8 w-8 text-teal-600" />,
      title: "VerifyIQ",
      description: "Automated insurance verification agent that checks eligibility and estimates patient responsibility before appointments."
    },
    {
      icon: <Calendar className="h-8 w-8 text-cyan-600" />,
      title: "AppointmentIQ",
      description: "Intelligent appointment reminders with no-show recovery to maximize your schedule efficiency."
    },
    {
      icon: <Star className="h-8 w-8 text-slate-600" />,
      title: "FollowIQ",
      description: "Automated review requests and referral generation to grow your practice reputation and patient base."
    },
    {
      icon: <FileText className="h-8 w-8 text-purple-600" />,
      title: "ClaimsIQ",
      description: "Intelligent claims processing agent that automates submission, tracking, and denial management for faster revenue cycle."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-emerald-600" />,
      title: "InsightIQ",
      description: "AI-powered business intelligence dashboard that analyzes trends and provides data-driven insights for your practice."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              The AI Operating System for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Professional Practices
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your practice with FlowIQ's specialized AI agents. 
              Automate scheduling, insurance verification, appointment reminders, patient follow-up, claims processing, and business intelligence seamlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 text-lg"
                onClick={() => window.open('https://flowiqhealth.com', '_blank')}
              >
                <Play className="mr-2 h-5 w-5" />
                Try Live Demo
              </Button>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 text-lg"
                onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
              >
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg"
                asChild
              >
                <Link to="/how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Six AI Agents, One Powerful System
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each FlowIQ agent specializes in automating a critical aspect of your practice operations, 
              working together to deliver exceptional patient experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-slate-50 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have already revolutionized their operations with FlowIQ's AI agents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold"
              onClick={() => window.open('https://flowiqhealth.com', '_blank')}
            >
              <Play className="mr-2 h-5 w-5" />
              Try Live Demo
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
            >
              Schedule Your Demo Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
