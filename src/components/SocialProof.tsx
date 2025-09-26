import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const SocialProof = () => {
  const customerLogos = [
    { name: "Metro Business Group", logo: "/lovable-uploads/jeremy-aspen.png" },
    { name: "Urban Solutions", logo: "/lovable-uploads/jeremy-aspen.png" },
    { name: "Sunrise Operations", logo: "/lovable-uploads/jeremy-aspen.png" },
    { name: "Elite Business Solutions", logo: "/lovable-uploads/jeremy-aspen.png" },
  ];

  const testimonials = [
    {
      quote: "SymAssist has transformed how we handle service requests. The AI handles 90% automatically, but when complex issues arise, the human team steps in seamlessly.",
      author: "Sarah Chen",
      role: "Operations Manager, Metro Business Group",
      rating: 5,
      units: "150 locations"
    },
    {
      quote: "The confidence-based routing is genius. Simple requests get instant AI handling, while complex situations get expert human attention. Best of both worlds.",
      author: "Mike Rodriguez", 
      role: "Operations Director, Sunrise Operations",
      rating: 5,
      units: "500 locations"
    },
    {
      quote: "We've reduced coordination costs by 40% while improving customer satisfaction. The offshore human team is incredibly professional and responsive.",
      author: "Lisa Thompson",
      role: "Owner/Manager, Urban Solutions",
      rating: 5,
      units: "75 locations"
    }
  ];

  const certifications = [
    { name: "SOC 2 Type II", badge: "Security" },
    { name: "GDPR Compliant", badge: "Privacy" },
    { name: "CCPA Compliant", badge: "Privacy" },
    { name: "99.2% Uptime SLA", badge: "Reliability" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Customer Logos */}
        <div className="text-center mb-12">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-8">
            Trusted by Leading Business Operations Companies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {customerLogos.map((customer, index) => (
              <div key={index} className="flex items-center justify-center h-12 grayscale hover:grayscale-0 transition-all">
                <img 
                  src={customer.logo} 
                  alt={customer.name}
                  className="h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            What Business Operators Are Saying
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Badge variant="secondary" className="ml-2">
                      {testimonial.units}
                    </Badge>
                  </div>
                  
                  <div className="relative mb-4">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gray-200" />
                    <p className="text-gray-700 italic pl-6">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications & Compliance */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Enterprise-Grade Security & Compliance
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Badge variant="outline" className="text-xs">
                  {cert.badge}
                </Badge>
                <span className="text-sm font-medium text-gray-700">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;