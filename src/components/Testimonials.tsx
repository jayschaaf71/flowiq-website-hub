
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Property Manager",
      practice: "Metro Property Group",
      content: "SymAssist handles 90% of our maintenance requests automatically, but when complex issues arise, their human team steps in seamlessly. Our tenants can't tell the difference.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Mike Rodriguez",
      title: "Portfolio Director", 
      practice: "Sunrise Properties",
      content: "The confidence-based routing is genius. Simple requests get handled instantly by AI, while complex situations get expert human attention. It's the best of both worlds.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Lisa Thompson",
      title: "Operations Manager",
      practice: "Urban Living Management",
      content: "We've reduced our maintenance coordination costs by 40% while improving tenant satisfaction. The offshore human team is incredibly professional.",
      rating: 5,
      avatar: "LT"
    }
  ];

  const stats = [
    { number: "200+", label: "Properties Automated" },
    { number: "95%", label: "Customer Satisfaction" },
    { number: "80%", label: "Avg. Response Time Reduction" },
    { number: "70%", label: "Admin Time Saved" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Property Managers Nationwide
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            See the measurable impact SymAssist's AI assistants have made for properties just like yours.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

{/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                {/* Rating Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial Content */}
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.title}, {testimonial.practice}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
