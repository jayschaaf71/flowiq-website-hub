
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      title: "Dentist",
      practice: "Smile Family Dental",
      content: "FlowIQ's ReceptionIQ has been a game-changer. We've reduced no-shows by 60% and our staff can focus on patient care instead of phone calls. The insurance verification happens automatically before every appointment.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      title: "Practice Manager",
      practice: "Metro Orthopedics",
      content: "The claims processing automation has cut our billing cycle time in half. We're getting paid faster and spending 70% less time on administrative tasks. ROI was immediate.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Dr. Jennifer Walsh",
      title: "Veterinarian",
      practice: "Paws & Claws Animal Hospital",
      content: "Patient follow-up has never been easier. Our review scores increased by 40% and we're seeing more referrals than ever. The AI handles everything seamlessly.",
      rating: 5,
      avatar: "JW"
    },
    {
      name: "David Kim",
      title: "Attorney",
      practice: "Kim & Associates Law Firm",
      content: "FlowIQ transformed our client intake process. We capture 3x more leads from our website and the scheduling automation works 24/7. Our conversion rate has doubled.",
      rating: 5,
      avatar: "DK"
    }
  ];

  const stats = [
    { number: "500+", label: "Practices Automated" },
    { number: "95%", label: "Customer Satisfaction" },
    { number: "60%", label: "Avg. No-Show Reduction" },
    { number: "70%", label: "Admin Time Saved" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Professional Practices Nationwide
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            See the measurable impact FlowIQ's AI agents have made for practices just like yours.
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
