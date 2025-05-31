
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, Award, Globe, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
      title: "Innovation",
      description: "We continuously push the boundaries of AI technology to deliver cutting-edge solutions."
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      title: "Partnership",
      description: "We build lasting relationships with our clients, working together towards shared success."
    },
    {
      icon: <Award className="h-8 w-8 text-cyan-600" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from product development to customer service."
    },
    {
      icon: <Globe className="h-8 w-8 text-slate-600" />,
      title: "Impact",
      description: "We're committed to making a positive difference in how professional practices operate worldwide."
    }
  ];

  const stats = [
    { number: "500+", label: "Practices Transformed" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "70%", label: "Average Efficiency Gain" },
    { number: "24/7", label: "Expert Support" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About FlowIQ
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're on a mission to revolutionize professional practices through intelligent automation 
              and AI-powered solutions that drive real results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At FlowIQ, we believe that professional practices should focus on what they do best—serving their clients. 
                That's why we've created an AI operating system that handles the complexities of practice management, 
                allowing professionals to concentrate on delivering exceptional value.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Founded by industry experts who understand the unique challenges facing professional practices today, 
                FlowIQ combines deep domain knowledge with cutting-edge AI technology to deliver solutions that actually work.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3"
                onClick={() => window.open('https://calendly.com', '_blank')}
              >
                Learn How We Can Help
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="lg:pl-8">
              <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and how we serve our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-white rounded-full w-fit shadow-md">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built by Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our team combines decades of experience in professional services with cutting-edge AI expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-blue-600" />
                </div>
                <CardTitle>Industry Veterans</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Former partners and executives from leading professional services firms.</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Lightbulb className="h-12 w-12 text-teal-600" />
                </div>
                <CardTitle>AI Innovators</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">PhD researchers and engineers from top technology companies and universities.</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-12 w-12 text-cyan-600" />
                </div>
                <CardTitle>Proven Track Record</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Successful exits, published research, and recognized industry leadership.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover how FlowIQ can transform your practice with a personalized demo.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
            onClick={() => window.open('https://calendly.com', '_blank')}
          >
            Schedule a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
