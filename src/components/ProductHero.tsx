
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Brain } from "lucide-react";

const ProductHero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 pb-16" style={{paddingTop: '144px'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            FlowIQ Product Suite
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Nine powerful AI agents working together to automate your practice operations. 
            From scheduling to insurance verification to medical scribing to EHR management to business intelligence - FlowIQ handles it all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3 text-lg"
              onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
            >
              <Brain className="mr-2 h-5 w-5" />
              Book AI Readiness Assessment
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 text-lg"
              onClick={() => window.open('https://remarkable-flan-7ac120.netlify.app', '_blank')}
            >
              <Play className="mr-2 h-5 w-5" />
              Try Live Demo
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 text-lg"
              onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
            >
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
