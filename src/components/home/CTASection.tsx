import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Play } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Practice?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of professionals who have already revolutionized their operations with FlowIQ's AI agents.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="cta-outline"
            className="px-8 py-3 text-lg"
            onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
          >
            <Brain className="mr-2 h-5 w-5" />
            Book AI Assessment
          </Button>
          <Button 
            size="lg" 
            variant="cta-outline"
            className="px-8 py-3 text-lg"
            onClick={() => window.open('https://app.flow-iq.ai', '_blank')}
          >
            <Play className="mr-2 h-5 w-5" />
            Try Live Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;