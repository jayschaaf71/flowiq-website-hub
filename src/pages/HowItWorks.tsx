
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Target, Cog, Rocket, MessageSquare, Shield, Calendar, Star, FileText, CheckCircle, Users, Settings, BarChart, BarChart3, Clock, TrendingUp, Zap } from "lucide-react";
import { useMetaDescription } from "@/hooks/useMetaDescription";
import { StructuredData } from "@/components/StructuredData";

const HowItWorks = () => {
  useMetaDescription(
    "Learn how SymAssist transforms your property management in 30 days with AI automation and 24/7 human oversight. From tenant request to completion with 40% time savings.",
    "How SymAssist Works - Property Management Automation"
  );

  const confidenceSteps = [
    {
      icon: <MessageSquare className="h-12 w-12 text-blue-700" />,
      title: "1. Multi-Channel Intake",
      description: "Voice, SMS, web portal, and email requests powered by proven VTS communication platform",
      details: [
        "Instant NLP processing and intent recognition",
        "Multi-language support (English, Spanish)",
        "24/7 availability across all channels",
        "Seamless integration with existing systems"
      ],
      confidenceRange: "Initial Processing"
    },
    {
      icon: <Target className="h-12 w-12 text-teal-600" />,
      title: "2. AI Confidence Scoring (0-100%)",
      description: "Every decision gets evaluated with intelligent confidence thresholds",
      details: [
        "90%+: Full AI automation with passive monitoring",
        "70-89%: AI execution with active human oversight",
        "50-69%: Human review required before action",
        "<50%: Immediate human takeover"
      ],
      confidenceRange: "Decision Routing"
    },
    {
      icon: <Zap className="h-12 w-12 text-cyan-600" />,
      title: "3. Intelligent Routing",
      description: "Smart decision routing ensures the right level of intelligence handles each situation",
      details: [
        "High-confidence: AI handles end-to-end",
        "Medium-confidence: AI acts, humans monitor",
        "Low-confidence: Humans take control seamlessly",
        "Emergency situations: Instant human escalation"
      ],
      confidenceRange: "Action Execution"
    },
    {
      icon: <Users className="h-12 w-12 text-green-600" />,
      title: "4. Seamless Human Integration",
      description: "Expert VAs in Mexico provide 24/7 coverage with invisible handoffs",
      details: [
        "Complete context transfer in under 2 seconds",
        "Customers never know when handoff occurs",
        "Continuous AI learning from human decisions",
        "Rigorous quality assurance and training"
      ],
      confidenceRange: "Human Oversight"
    }
  ];

  const processSteps = [
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Real-Time Processing",
      description: "All AI agents work in real-time to provide immediate responses and actions."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-teal-600" />,
      title: "Continuous Learning",
      description: "AI improves over time by learning from your practice's specific patterns and preferences."
    },
    {
      icon: <Zap className="h-8 w-8 text-cyan-600" />,
      title: "Instant Integration",
      description: "Seamlessly connects with your existing EMR, scheduling, and billing systems."
    }
  ];

  const roiMetrics = [
    { metric: "75%", description: "Reduction in administrative tasks", icon: <Users className="h-6 w-6 text-blue-600" /> },
    { metric: "60%", description: "Decrease in no-show rates", icon: <Calendar className="h-6 w-6 text-teal-600" /> },
    { metric: "40%", description: "Faster claims processing", icon: <FileText className="h-6 w-6 text-cyan-600" /> },
    { metric: "3x", description: "Increase in online bookings", icon: <TrendingUp className="h-6 w-6 text-green-600" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      <StructuredData type="how-it-works" />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 pb-16 page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Our Invisible Intelligence Works
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Revolutionary confidence-based AI that knows when to hand off to humans - 
              delivering perfect service while customers never know the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="cta-primary"
                className="px-8 py-3 text-lg"
                onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
              >
              Schedule Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Confidence-Based Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The 4-Step Confidence Routing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of AI efficiency and human expertise, delivered seamlessly 
              through our revolutionary confidence-based routing system.
            </p>
          </div>
          
          <div className="space-y-16">
            {confidenceSteps.map((step, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl mr-6">
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-primary mb-2">{step.confidenceRange}</div>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <Card className="border-none shadow-xl bg-gradient-to-br from-gray-50 to-blue-50 p-8">
                    <div className="text-center">
                      <div className="text-6xl mb-4">
                        {index === 0 && '📱'}
                        {index === 1 && '🧠'}
                        {index === 2 && '⚡'}
                        {index === 3 && '👥'}
                      </div>
                      <div className="text-lg font-semibold text-primary mb-2">
                        Step {index + 1}
                      </div>
                      <div className="text-sm text-gray-600">
                        {step.confidenceRange}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Confidence Scoring Visualization */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold text-center mb-8">
              AI Confidence Scoring in Action
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <div className="text-3xl font-bold mb-2">90%+</div>
                <div className="text-sm opacity-90">Full AI Automation</div>
                <div className="text-xs mt-2 opacity-75">Passive monitoring only</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <div className="text-3xl font-bold mb-2">70-89%</div>
                <div className="text-sm opacity-90">AI + Human Oversight</div>
                <div className="text-xs mt-2 opacity-75">Active monitoring</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <div className="text-3xl font-bold mb-2">50-69%</div>
                <div className="text-sm opacity-90">Human Review Required</div>
                <div className="text-xs mt-2 opacity-75">Before action taken</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <div className="text-3xl font-bold mb-2">&lt;50%</div>
                <div className="text-sm opacity-90">Human Takeover</div>
                <div className="text-xs mt-2 opacity-75">Immediate handoff</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results from Our Confidence Routing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the measurable impact of AI-human integration on property management operations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {roiMetrics.map((item, index) => (
              <Card key={index} className="border-none shadow-lg text-center p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-50 to-teal-50 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {item.metric}
                </div>
                <div className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </div>
              </Card>
            ))}
          </div>
          
          {/* Real-World Example */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Real-World Example: Emergency Maintenance Request
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">📱</span>
                </div>
                <div className="font-semibold mb-2">11:30 PM</div>
                <div className="text-sm text-gray-600">Tenant reports broken heater via SMS</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">🧠</span>
                </div>
                <div className="font-semibold mb-2">11:30 PM</div>
                <div className="text-sm text-gray-600">AI scores 45% confidence - triggers human review</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">👥</span>
                </div>
                <div className="font-semibold mb-2">11:31 PM</div>
                <div className="text-sm text-gray-600">Expert VA takes over, identifies emergency</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">🔧</span>
                </div>
                <div className="font-semibold mb-2">11:35 PM</div>
                <div className="text-sm text-gray-600">Emergency HVAC tech dispatched, tenant updated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience Invisible Intelligence in Action
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            See how confidence-based routing can transform your property management operations. 
            Schedule a personalized demo today.
          </p>
          <Button 
            size="lg" 
            variant="cta-outline"
            className="px-8 py-3 text-lg"
            onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
          >
            Book Discovery Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
