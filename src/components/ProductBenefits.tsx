
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Play } from "lucide-react";

const ProductBenefits = () => {
  const benefits = [
    "Reduce front desk workload by up to 70% with automated scheduling",
    "Eliminate insurance verification delays with pre-appointment automation",
    "Decrease no-show rates by 50% with intelligent reminder systems",
    "Increase online reviews by 300% with automated follow-up campaigns",
    "Accelerate claims processing with automated submission and tracking",
    "Ensure HIPAA compliance with SOC 2 certified security practices",
    "Integrate seamlessly with existing practice management systems"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Measurable Results for Your Practice
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              FlowIQ delivers tangible improvements that you can see from day one. 
              Our specialized AI agents work around the clock to optimize every aspect of your practice operations.
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
              <CardHeader className="bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl text-center">Ready to Get Started?</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <CardDescription className="text-gray-600 mb-6 text-center">
                  See FlowIQ's AI agents in action with a personalized demo tailored to your practice.
                </CardDescription>
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3"
                    onClick={() => window.open('https://remarkable-flan-7ac120.netlify.app', '_blank')}
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Try Live Demo
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full border-blue-600 text-blue-700 hover:bg-blue-50 py-3"
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
