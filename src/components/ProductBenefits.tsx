
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Play, Brain } from "lucide-react";

const ProductBenefits = () => {
  const benefits = [
    "Reduce service response time by up to 80% with intelligent triage",
    "Automate customer communication across all channels (voice, SMS, email)",
    "Streamline vendor dispatch and work order management",
    "Optimize payment processing with automated workflows",
    "Increase customer satisfaction with 24/7 AI-powered support",
    "Maintain comprehensive business records with automated documentation",
    "Scale operations across multiple locations seamlessly"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Measurable Results for Your Business
            </h2>
            <p className="text-lg text-gray-600 mb-8">
            SymAssist delivers tangible improvements that you can see from day one. 
            Our specialized AI assistants work around the clock to optimize every aspect of your business operations.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-blue-700" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:pl-8">
            <Card className="border-none shadow-2xl">
              <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
                <CardTitle className="text-2xl text-center">Ready to Get Started?</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <CardDescription className="text-gray-600 mb-6 text-center">
                  Get a personalized AI assessment to see how SymAssist can transform your business operations.
                </CardDescription>
                <div className="space-y-3">
                  <Button 
                    variant="brand-blue"
                    className="w-full py-3"
                    onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
                  >
                    <Brain className="mr-2 h-5 w-5" />
                    Book Demo Call
                  </Button>
                  <Button 
                    variant="brand-cyan"
                    className="w-full py-3"
                    onClick={() => window.open('https://remarkable-flan-7ac120.netlify.app', '_blank')}
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Try Live Demo
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full py-3"
                    onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
                  >
                    Schedule Your Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBenefits;
