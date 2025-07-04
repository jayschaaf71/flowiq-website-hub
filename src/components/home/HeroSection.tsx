import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 pb-16 sm:pb-24 lg:pb-32 page-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            The AI Operating System for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Professional Practices
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
            Transform your practice with FlowIQ's specialized AI agents. 
            Automate scheduling, insurance verification, appointment reminders, patient follow-up, medical scribing, EHR management, claims processing, billing, and business intelligence seamlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-4 sm:mb-6 px-2">
            <Button 
              size="lg" 
              variant="cta-secondary"
              className="px-6 sm:px-8 py-3 text-base sm:text-lg min-h-[48px]"
              onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
            >
              <Brain className="mr-2 h-5 w-5" />
              Book AI Assessment
            </Button>
            <Button 
              size="lg" 
              variant="cta-accent"
              className="px-6 sm:px-8 py-3 text-base sm:text-lg min-h-[48px]"
              onClick={() => window.open('https://remarkable-flan-7ac120.netlify.app', '_blank')}
            >
              <Play className="mr-2 h-5 w-5" />
              Try Live Demo
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
            <Button 
              size="lg" 
              variant="cta-primary"
              className="px-6 sm:px-8 py-3 text-base sm:text-lg min-h-[48px]"
              onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
            >
              Schedule Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 text-base sm:text-lg min-h-[48px]"
              asChild
            >
              <Link to="/how-it-works">Learn How It Works</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;