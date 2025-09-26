
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutCTA = () => {
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Join Our Success Story?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Discover how SymAssist can transform your business operations with a personalized demo.
        </p>
        <Button 
          size="lg" 
          variant="cta-outline"
          className="px-8 py-3 text-lg"
          onClick={() => window.open('https://calendly.com', '_blank')}
        >
          Schedule a Demo
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default AboutCTA;
