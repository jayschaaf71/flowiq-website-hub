import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight, Building2, Stethoscope, Heart, Brain } from "lucide-react";

const About = () => {
  const founder = {
    name: "Jason Schaaf",
    title: "Founder & CEO",
    background: "After more than two decades leading sales for cutting-edge tech companies, Jason Schaaf saw a pattern: professional practices were overwhelmed by clunky systems, missed revenue, and manual workflows. That insight led to FlowIQ — an AI-native operating system designed for modern practices like dental, ortho, chiro, med spa, and veterinary clinics. Jason's mission is to replace busywork with automation so practice owners can focus on care, not chaos.",
    expertise: "Sales Leadership, Technology, AI Strategy, Practice Operations",
    image: "/lovable-uploads/a070fea9-ce42-4b65-9f49-197e02aa4ef0.png"
  };

  const advisoryBoard = [
    {
      specialty: "Dental",
      members: [
        { 
          name: "Dr. Tom Gotsis, DDS", 
          practice: "Midwest Dental Sleep Medicine Institute", 
          location: "TBD",
          bio: "Dr. Tom Gotsis is a seasoned dental professional and retired U.S. Army Colonel with over 35 years of experience. A graduate of Loyola School of Dentistry, he began his career in the Army, completing a residency at Ft. Carson and serving overseas in Germany. After active duty, he built a successful private practice in St. Louis and continued to serve in the Army Reserve until 2008. Dr. Gotsis is a Fellow of the Academy of General Dentistry and an active member of the ADA, Missouri Dental Association, and Greater St. Louis Dental Society. Today, he focuses on helping patients treat Obstructive Sleep Apnea through personalized care and oral appliance therapy. He and his wife Laurie have three grown children and have called St. Louis home for over three decades.",
          image: "/lovable-uploads/a8c1c489-0de5-4e86-91a0-699d1348e3cb.png"
        }
      ],
      icon: <Stethoscope className="h-6 w-6 text-blue-600" />
    },
    {
      specialty: "Orthodontic", 
      members: [
        { 
          name: "Dr. Charlie Ries, DMD", 
          practice: "Ries Orthodontics", 
          location: "TBD",
          bio: "Dr. Charlie Ries is a skilled and compassionate orthodontist proudly serving the Ellisville and O'Fallon communities. A Ballwin native and graduate of St. Louis University High School, Dr. Ries earned a basketball scholarship to Northern Illinois University, where he studied Biology. He went on to complete his Doctor of Dental Medicine at Southern Illinois University and a General Practice Residency at St. John's Mercy Hospital before specializing in Orthodontics at the University of Nevada, Las Vegas. Known for his warm approach and personalized care, Dr. Ries is passionate about creating confident, lasting smiles while building genuine relationships with his patients. He's proud to practice in his hometown and raise his family — his wife Molly, three sons, and a daughter — in the same vibrant community. Dr. Ries is a member of the American Association of Orthodontists, American Dental Association, Missouri Dental Association, and the Greater St. Louis Dental Society.",
          image: "/lovable-uploads/b2b03705-b864-4956-afc3-36bb474c0eb8.png"
        }
      ],
      icon: <Heart className="h-6 w-6 text-red-600" />
    },
    {
      specialty: "Chiropractic",
      members: [
        { 
          name: "Dr. Lauren Hendrix, DC, MS", 
          practice: "West County Spine and Joint", 
          location: "TBD",
          bio: "Dr. Lauren specializes in women's health, prenatal care, and injury rehabilitation, with advanced certifications in Webster Technique, Graston Technique®, and female-specific training. She holds degrees in Exercise Science, Psychology, Chiropractic, and Sports Rehabilitation, and is an ultramarathon runner, equestrian, and lifelong coach.",
          image: "/lovable-uploads/718e6216-0407-4e28-b964-c455d30fdb03.png"
        },
        { 
          name: "Dr. Matt Davidson, DC", 
          practice: "West County Spine and Joint", 
          location: "TBD",
          bio: "Dr. Matt combines clinical excellence with personal experience as a competitive endurance athlete, having completed over 300 races, including Ironman triathlons and ultra-distance runs. He holds degrees from Thomas More College and Logan College of Chiropractic and is a passionate advocate for movement-based wellness at every stage of life.",
          image: "/lovable-uploads/d1c2cfaa-43c1-48a0-8361-53eca1c3b48b.png"
        }
      ],
      icon: <Brain className="h-6 w-6 text-purple-600" />,
      description: "Husband-and-wife team Dr. Lauren Hendrix and Dr. Matt Davidson bring a shared passion for lifelong health, athletic performance, and patient-centered care to their chiropractic practice. Together, they are active members of the St. Louis athletic community, frequently coaching, racing, and supporting youth sports. When not in the clinic or on the race course, they love cheering on their three kids and helping families live stronger, healthier lives."
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

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Founder
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Bringing decades of go to market leadership and technology expertise to transform professional practices.
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
                  {board.description && (
                    <CardDescription className="text-gray-600 text-sm leading-relaxed">
                      {board.description}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {board.members.map((member, memberIndex) => (
                      <div key={memberIndex} className="flex items-start space-x-3 p-4 bg-white rounded-lg">
                        {member.image ? (
                          <Avatar className="w-12 h-12 flex-shrink-0">
                            <AvatarImage src={member.image} alt={member.name} />
                            <AvatarFallback>
                              {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                        ) : (
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Building2 className="h-4 w-4 text-blue-600" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 text-sm">{member.name}</p>
                          <p className="text-gray-600 text-sm">{member.practice}</p>
                          <p className="text-gray-500 text-xs">{member.location}</p>
                          {member.bio && (
                            <p className="text-gray-600 text-xs mt-2 leading-relaxed">{member.bio}</p>
                          )}
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
