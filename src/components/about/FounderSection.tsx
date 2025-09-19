
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FounderSection = () => {
  const founders = [
    {
      name: "Jason Schaaf",
      title: "Founder & CEO",
      background: "After more than two decades leading sales for cutting-edge tech companies, Jason Schaaf saw a pattern: property managers were overwhelmed by clunky systems, missed opportunities, and manual workflows. That insight led to SymAssist — an AI-native platform designed for modern property management including residential, commercial, and mixed-use properties. Jason's mission is to replace busywork with automation so property managers can focus on growth, not chaos.",
      expertise: "Leadership, Emerging AI technology and property management operations",
      image: "/lovable-uploads/a070fea9-ce42-4b65-9f49-197e02aa4ef0.png"
    },
    {
      name: "Jeremy Aspen",
      title: "Co-Founder, President & COO",
      background: "Jeremy brings deep technical expertise and a passion for building scalable AI systems that solve real-world problems. With extensive experience in software architecture and machine learning, Jeremy leads SymAssist's technical vision, ensuring our AI-native platform delivers intelligent automation that property managers can trust and rely on.",
      expertise: "Software Architecture, AI/ML Systems, and Technical Leadership",
      image: "/lovable-uploads/a8c1c489-0de5-4e86-91a0-699d1348e3cb.png" // Using existing placeholder
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Founders
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bringing decades of leadership and technology expertise to transform property management.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardHeader className="text-center pb-6">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                    <img 
                      src={founder.image} 
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{founder.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">
                    {founder.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed text-center">
                    {founder.background}
                  </p>
                  <div className="pt-4 border-t border-gray-100 text-center">
                    <p className="text-sm text-gray-500 font-medium mb-2">EXPERTISE</p>
                    <p className="text-gray-700 text-sm">{founder.expertise}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
