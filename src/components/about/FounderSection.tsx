
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FounderSection = () => {
  const founders = [
    {
      name: "Jason Schaaf",
      title: "Co-Founder & CEO",
      background: "After more than two decades leading sales for cutting-edge tech companies, Jason Schaaf saw a pattern: business operators were overwhelmed by clunky systems, missed opportunities, and manual workflows. That insight led to SymAssist — an AI-native platform designed for modern business operations across multiple industries. Jason's mission is to replace busywork with automation so business leaders can focus on growth, not chaos.",
      expertise: "SAAS go-to-market leadership and emerging AI technology",
      image: "/lovable-uploads/a070fea9-ce42-4b65-9f49-197e02aa4ef0.png"
    },
    {
      name: "Jeremy Aspen",
      title: "Co-Founder, President & COO",
      background: "Jeremy is an expert in business operations and was previously co-founder of Anequim, which specializes in remote virtual assistant solutions. With deep operational experience and technical expertise, Jeremy brings invaluable insights into the challenges business operators face daily, helping shape SymAssist's AI-native platform to deliver solutions that truly address real-world operational needs.",
      expertise: "Business Operations, Virtual Assistant Solutions, and Strategic Process Optimization",
      image: "/lovable-uploads/jeremy-aspen.png"
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
            Bringing decades of leadership and technology expertise to transform business operations.
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
