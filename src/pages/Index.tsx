
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { ArrowRight, MessageSquare, Shield, Calendar, Star, BarChart3, FileText, Play, Brain, CreditCard, FileEdit, Database, Clock, TrendingUp, Users, CheckCircle } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
      title: "ScheduleIQ",
      description: "AI-powered scheduling assistant that handles website chats, phone calls, and appointment booking 24/7."
    },
    {
      icon: <Shield className="h-8 w-8 text-teal-600" />,
      title: "IntakeIQ",
      description: "Automated insurance verification agent that checks eligibility and estimates patient responsibility before appointments."
    },
    {
      icon: <Calendar className="h-8 w-8 text-cyan-600" />,
      title: "RemindersIQ",
      description: "Intelligent appointment reminders with no-show recovery to maximize your schedule efficiency."
    },
    {
      icon: <Star className="h-8 w-8 text-slate-600" />,
      title: "FollowUpIQ",
      description: "Automated review requests and referral generation to grow your practice reputation and patient base."
    },
    {
      icon: <FileEdit className="h-8 w-8 text-amber-600" />,
      title: "ScribeIQ",
      description: "AI medical scribing that automates clinical documentation and integrates seamlessly with EHR systems for efficient visit notes."
    },
    {
      icon: <Database className="h-8 w-8 text-rose-600" />,
      title: "EHRIQ",
      description: "Comprehensive EHR system management with automated patient data synchronization and clinical workflow optimization."
    },
    {
      icon: <FileText className="h-8 w-8 text-purple-600" />,
      title: "ClaimsIQ",
      description: "Intelligent claims processing agent that automates submission, tracking, and denial management for faster revenue cycle."
    },
    {
      icon: <CreditCard className="h-8 w-8 text-indigo-600" />,
      title: "BillingIQ",
      description: "Automated billing and payment processing with intelligent collection follow-up for optimized cash flow management."
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
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 pb-32 page-hero">
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
              Automate scheduling, insurance verification, appointment reminders, patient follow-up, medical scribing, EHR management, claims processing, billing, and business intelligence seamlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3 text-lg font-semibold"
                onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
              >
                <Brain className="mr-2 h-5 w-5" />
                Book AI Readiness Assessment
              </Button>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 text-lg"
                onClick={() => window.open('https://remarkable-flan-7ac120.netlify.app', '_blank')}
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
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              Nine AI Agents, One Powerful System
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each FlowIQ agent specializes in automating a critical aspect of your practice operations, 
              working together to deliver exceptional patient experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Practices, Real Results
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how FlowIQ transforms different practice types with measurable outcomes in weeks, not months.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Dental Practice Case */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Metro Dental Group</CardTitle>
                    <CardDescription>4-location dental practice, Seattle</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">The Challenge:</h4>
                  <p className="text-red-700 text-sm">Front desk overwhelmed with 200+ calls daily, 35% no-show rate, 3-hour daily insurance verification backlog</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">FlowIQ Solution:</h4>
                  <div className="space-y-2 text-sm text-green-700">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>ScheduleIQ handles 85% of appointment calls</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>IntakeIQ automates all insurance verification</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>RemindersIQ reduces no-shows by 60%</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">70%</div>
                    <div className="text-xs text-gray-600">Less admin work</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">$18K</div>
                    <div className="text-xs text-gray-600">Monthly savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">3 weeks</div>
                    <div className="text-xs text-gray-600">Implementation</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Medical Practice Case */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-teal-100 rounded-lg">
                    <FileEdit className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Riverside Family Medicine</CardTitle>
                    <CardDescription>12-provider internal medicine practice</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">The Challenge:</h4>
                  <p className="text-red-700 text-sm">Physicians spending 2+ hours daily on documentation, claims denial rate of 28%, staff burnout from manual tasks</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">FlowIQ Solution:</h4>
                  <div className="space-y-2 text-sm text-green-700">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>ScribeIQ automates clinical documentation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>ClaimsIQ reduces denials to 8%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>BillingIQ accelerates collections</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">90min</div>
                    <div className="text-xs text-gray-600">Daily time saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">40%</div>
                    <div className="text-xs text-gray-600">Faster claims</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">$47K</div>
                    <div className="text-xs text-gray-600">Monthly revenue gain</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Practice Type Examples */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Proven Results Across Practice Types
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Dental Practices</h4>
                <p className="text-sm text-gray-600 mb-3">Avg. 65% reduction in front desk workload</p>
                <div className="text-lg font-bold text-blue-600">85% satisfaction</div>
              </div>
              <div className="text-center p-4 bg-teal-50 rounded-lg">
                <Clock className="h-8 w-8 text-teal-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Medical Practices</h4>
                <p className="text-sm text-gray-600 mb-3">Avg. 75 minutes saved per physician daily</p>
                <div className="text-lg font-bold text-teal-600">92% satisfaction</div>
              </div>
              <div className="text-center p-4 bg-cyan-50 rounded-lg">
                <TrendingUp className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Specialty Clinics</h4>
                <p className="text-sm text-gray-600 mb-3">Avg. 45% faster revenue cycle</p>
                <div className="text-lg font-bold text-cyan-600">89% satisfaction</div>
              </div>
              <div className="text-center p-4 bg-emerald-50 rounded-lg">
                <BarChart3 className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Multi-Location</h4>
                <p className="text-sm text-gray-600 mb-3">Avg. 50% improvement in operational efficiency</p>
                <div className="text-lg font-bold text-emerald-600">95% satisfaction</div>
              </div>
            </div>
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
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold"
              onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
            >
              <Brain className="mr-2 h-5 w-5" />
              Book AI Readiness Assessment
            </Button>
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold"
              onClick={() => window.open('https://remarkable-flan-7ac120.netlify.app', '_blank')}
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
