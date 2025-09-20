import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 pb-16 sm:pb-24 lg:pb-32 page-hero -mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Property Management Platform That{" "}
            <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Thinks Like AI, Acts Like Humans
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Revolutionary confidence-based AI automatically handles 85% of maintenance requests, while expert human agents seamlessly take over complex situations - delivering perfect service every time.
          </p>
          
          {/* Key Differentiators */}
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-8 text-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm">Seamless AI-to-Human Handoffs - Customers Never Notice</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm">85% Full Automation Rate with 15% Expert Human Intervention</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm">Built on Proven Voice & Scheduling Technology</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm">24/7 Offshore Human Backup for Complex Situations</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              variant="cta-primary"
              className="px-8 py-4 text-lg"
              onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
            >
              Start Free 30-Day Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-4 text-lg"
              asChild
            >
              <Link to="/roi-calculator">Calculate Your ROI</Link>
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