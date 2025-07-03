
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FounderSection = () => {
  const founder = {
    name: "Jason Schaaf",
    title: "Founder & CEO",
    background: "After more than two decades leading sales for cutting-edge tech companies, Jason Schaaf saw a pattern: professional practices were overwhelmed by clunky systems, missed revenue, and manual workflows. That insight led to FlowIQ — an AI-native operating system designed for modern practices like dental, ortho, chiro, med spa, and veterinary clinics. Jason's mission is to replace busywork with automation so practice owners can focus on care, not chaos.",
    expertise: "Leadership, Emerging AI technology and practice operations",
    image: "/lovable-uploads/a070fea9-ce42-4b65-9f49-197e02aa4ef0.png"
  };

  return (
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
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
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
  );
};

export default FounderSection;
