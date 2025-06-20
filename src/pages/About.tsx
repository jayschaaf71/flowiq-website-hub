
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, Award, Globe, Lightbulb, Building2, Stethoscope, Briefcase, Heart, Eye, Brain } from "lucide-react";

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

  const founder = {
    name: "Jason Schaaf",
    title: "Founder & CEO",
    background: "After more than two decades leading sales for cutting-edge tech companies, Jason Schaaf saw a pattern: professional practices were overwhelmed by clunky systems, missed revenue, and manual workflows. That insight led to FlowIQ — an AI-native operating system designed for modern practices like dental, ortho, chiro, med spa, and veterinary clinics. Jason's mission is to replace busywork with automation so practice owners can focus on care, not chaos.",
    expertise: "Sales Leadership, Healthcare Technology, AI Strategy, Practice Operations",
    image: "/lovable-uploads/a070fea9-ce42-4b65-9f49-197e02aa4ef0.png"
  };

  const advisoryBoard = [
    {
      specialty: "Dental",
      members: [
        { name: "Tom Gotsis", practice: "Gotsis Dental Practice", location: "TBD" }
      ],
      icon: <Stethoscope className="h-6 w-6 text-blue-600" />
    },
    {
      specialty: "Orthodontic", 
      members: [
        { name: "Charlie Ries", practice: "Ries Orthodontics", location: "TBD" }
      ],
      icon: <Heart className="h-6 w-6 text-red-600" />
    },
    {
      specialty: "Chiropractic",
      members: [
        { name: "Lauren Hendrix", practice: "Hendrix Chiropractic", location: "TBD" },
        { name: "Matt Davidson", practice: "Davidson Chiropractic", location: "TBD" }
      ],
      icon: <Brain className="h-6 w-6 text-purple-600" />
    },
    {
      specialty: "Primary Care",
      members: [
        { name: "Dr. Emily Rodriguez", practice: "Rodriguez Family Medicine", location: "Austin, TX" },
        { name: "Dr. James Wilson", practice: "Westside Primary Care", location: "Los Angeles, CA" },
        { name: "Dr. Maria Santos", practice: "Santos Medical Group", location: "Miami, FL" }
      ],
      icon: <Stethoscope className="h-6 w-6 text-blue-600" />
    },
    {
      specialty: "Specialty Care",
      members: [
        { name: "Dr. Robert Kim", practice: "Advanced Cardiology Associates", location: "Chicago, IL" },
        { name: "Dr. Lisa Chen", practice: "Metropolitan Dermatology", location: "New York, NY" },
        { name: "Dr. David Thompson", practice: "Orthopedic Excellence Center", location: "Denver, CO" }
      ],
      icon: <Heart className="h-6 w-6 text-red-600" />
    },
    {
      specialty: "Mental Health",
      members: [
        { name: "Dr. Amanda Foster", practice: "Mindful Psychiatry Group", location: "Seattle, WA" },
        { name: "Dr. Carlos Mendez", practice: "Wellness Psychology Center", location: "Phoenix, AZ" },
        { name: "Dr. Jennifer Lee", practice: "Integrated Mental Health", location: "Boston, MA" }
      ],
      icon: <Brain className="h-6 w-6 text-purple-600" />
    },
    {
      specialty: "Vision Care",
      members: [
        { name: "Dr. Mark Anderson", practice: "Clear Vision Optometry", location: "San Francisco, CA" },
        { name: "Dr. Rachel Green", practice: "Precision Eye Care", location: "Nashville, TN" },
        { name: "Dr. Thomas Wang", practice: "Modern Ophthalmology", location: "Atlanta, GA" }
      ],
      icon: <Eye className="h-6 w-6 text-green-600" />
    },
    {
      specialty: "Practice Management",
      members: [
        { name: "Sarah Johnson", title: "Former CEO, Regional Medical Group", location: "Dallas, TX" },
        { name: "Michael Brown", title: "Healthcare Operations Consultant", location: "Portland, OR" },
        { name: "Lisa Davis", title: "Former Practice Administrator", location: "Tampa, FL" }
      ],
      icon: <Briefcase className="h-6 w-6 text-amber-600" />
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

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Founder
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Bringing decades of sales leadership and healthcare technology expertise to transform professional practices.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardHeader className="text-center pb-6">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl">{founder.name}</CardTitle>
                <CardDescription className="text-blue-600 font-semibold text-lg">
                  {founder.title}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed text-center max-w-3xl mx-auto">
                  {founder.background}
                </p>
                <div className="pt-4 border-t border-gray-100 text-center">
                  <p className="text-sm text-gray-500 font-medium mb-2">EXPERTISE</p>
                  <p className="text-gray-700">{founder.expertise}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Advisory Board Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Customer Advisory Board
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Leading practitioners across specialties who guide our product development and ensure 
              real-world applicability of our AI solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {advisoryBoard.map((board, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      {board.icon}
                    </div>
                    <CardTitle className="text-xl">{board.specialty}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {board.members.map((member, memberIndex) => (
                      <div key={memberIndex} className="flex items-start space-x-3 p-3 bg-white rounded-lg">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Building2 className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 text-sm">{member.name}</p>
                          <p className="text-gray-600 text-sm">{member.practice || member.title}</p>
                          <p className="text-gray-500 text-xs">{member.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
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
