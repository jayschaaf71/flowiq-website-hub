import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 pb-16 sm:pb-24 lg:pb-32 page-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            The Property Management Assistant That 
            <span className="text-primary"> Never Sleeps</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Combine AI automation with 24/7 human oversight to handle maintenance, 
            communication, and coordination - so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              variant="cta-primary"
              className="px-8 py-4 text-lg"
              onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
            >
              Schedule Free Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-4 text-lg border-primary text-primary hover:bg-blue-50"
              onClick={() => window.open('https://remarkable-flan-7ac120.netlify.app', '_blank')}
            >
              Watch 2-Min Video
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <span className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              30-day free trial
            </span>
            <span className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              No setup fees
            </span>
            <span className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Cancel anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;