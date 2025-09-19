import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, Users, DollarSign } from "lucide-react";
import { useMetaDescription } from "@/hooks/useMetaDescription";
import { StructuredData } from "@/components/StructuredData";

const CaseStudies = () => {
  useMetaDescription(
    "Real results from property managers using SymAssist. See how Metro Apartments and Sunrise Properties achieved 78% time savings and 85% automation rates.",
    "SymAssist Case Studies - Real Property Management Results"
  );

  const caseStudies = [
    {
      company: "Metro Apartments",
      units: "150 units",
      type: "Residential",
      testimonial: "SymAssist handles 90% of our maintenance requests automatically, but when complex issues arise, their human team steps in seamlessly. Our tenants can't tell the difference.",
      author: "Sarah Chen",
      role: "Property Manager",
      results: [
        { icon: Clock, metric: "78%", label: "Reduction in maintenance coordination time" },
        { icon: Users, metric: "92%", label: "Tenant satisfaction improvement" },
        { icon: DollarSign, metric: "$2,400", label: "Monthly operational cost savings" },
        { icon: TrendingUp, metric: "15%", label: "Human intervention rate" }
      ]
    },
    {
      company: "Sunrise Properties", 
      units: "500 units",
      type: "Mixed-Use Portfolio",
      testimonial: "The confidence-based routing is genius. Simple requests get handled instantly by AI, while complex situations get expert human attention. It's the best of both worlds.",
      author: "Mike Rodriguez",
      role: "Portfolio Director",
      results: [
        { icon: TrendingUp, metric: "85%", label: "Full automation rate achieved in 3 months" },
        { icon: Clock, metric: "45%", label: "Faster emergency response times" },
        { icon: Users, metric: "99.8%", label: "Uptime during peak season" },
        { icon: DollarSign, metric: "6 weeks", label: "ROI achievement timeline" }
      ]
    },
    {
      company: "Urban Living Management",
      units: "300 units", 
      type: "Commercial",
      testimonial: "We've reduced our maintenance coordination costs by 40% while improving tenant satisfaction. The offshore human team is incredibly professional.",
      author: "Lisa Thompson",
      role: "Operations Manager",
      results: [
        { icon: DollarSign, metric: "40%", label: "Maintenance coordination cost reduction" },
        { icon: Users, metric: "94%", label: "Tenant satisfaction score" },
        { icon: Clock, metric: "<90s", label: "Average response time" },
        { icon: TrendingUp, metric: "88%", label: "AI automation rate" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <StructuredData type="case-studies" />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 pb-16" style={{paddingTop: '144px'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real Results from Real Property Managers
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              See how leading property management companies are transforming their operations 
              with SymAssist's AI-human integration platform.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-none shadow-lg overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-teal-50 pb-8">
                  <div className="flex flex-wrap items-center justify-between mb-4">
                    <div>
                      <CardTitle className="text-2xl text-gray-900 mb-2">{study.company}</CardTitle>
                      <div className="flex items-center space-x-4">
                        <Badge variant="secondary">{study.units}</Badge>
                        <Badge variant="outline">{study.type}</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                    "{study.testimonial}"
                  </blockquote>
                  
                  <div className="flex items-center mt-4">
                    <div>
                      <p className="font-semibold text-gray-900">{study.author}</p>
                      <p className="text-gray-600">{study.role}, {study.company}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-lg flex items-center justify-center">
                          <result.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">{result.metric}</div>
                        <div className="text-sm text-gray-600">{result.label}</div>
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
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Similar Results?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join these successful property managers and transform your operations with SymAssist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Start Free 30-Day Trial
            </Button>
            <Button 
              size="lg" 
              variant="cta-outline"
              onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
            >
              Schedule Live Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;