import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 pb-32 page-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            The AI Operating System for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Professional Practices
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your practice with FlowIQ's specialized AI agents. 
            Automate scheduling, insurance verification, appointment reminders, patient follow-up, medical scribing, EHR management, claims processing, billing, and business intelligence seamlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button 
              size="lg" 
              variant="cta-secondary"
              className="px-8 py-3 text-lg"
              onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
            >
              <Brain className="mr-2 h-5 w-5" />
              Book AI Assessment
            </Button>
            <Button 
              size="lg" 
              variant="cta-accent"
              className="px-8 py-3 text-lg"
              onClick={() => window.open('https://remarkable-flan-7ac120.netlify.app', '_blank')}
            >
              <Play className="mr-2 h-5 w-5" />
              Try Live Demo
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="cta-primary"
              className="px-8 py-3 text-lg"
              onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
            >
              Schedule Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg"
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