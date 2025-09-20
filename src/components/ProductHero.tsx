
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Brain } from "lucide-react";

const ProductHero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 pb-16 page-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            SymAssist Product Suite
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Five powerful AI assistants working together to automate your property operations. 
            From maintenance coordination to tenant communication to vendor dispatch to financial management - SymAssist handles it all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="cta-primary"
              className="px-8 py-3 text-lg"
              onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
            >
              Start Free 30-Day Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="cta-secondary"
              className="px-8 py-3 text-lg"
              onClick={() => window.open('https://remarkable-flan-7ac120.netlify.app', '_blank')}
            >
              <Play className="mr-2 h-5 w-5" />
              Try Live Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
