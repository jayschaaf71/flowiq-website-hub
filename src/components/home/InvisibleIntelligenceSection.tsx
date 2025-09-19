import { Brain, MessageSquare, Users, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const InvisibleIntelligenceSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Multi-Channel Intake",
      description: "Voice, SMS, web portal, and email requests",
      details: [
        "Powered by proven VTS communication platform",
        "Instant NLP processing and intent recognition"
      ]
    },
    {
      icon: Brain,
      title: "AI Confidence Scoring",
      description: "Every decision gets 0-100% confidence score",
      details: [
        "90%+: Full AI automation with passive monitoring",
        "70-89%: AI execution with active human oversight",
        "50-69%: Human review required before action",
        "<50%: Immediate human takeover"
      ]
    },
    {
      icon: Zap,
      title: "Intelligent Routing",
      description: "Smart decision routing based on complexity",
      details: [
        "High-confidence requests: AI handles end-to-end",
        "Medium-confidence: AI acts, humans monitor",
        "Low-confidence: Humans take control seamlessly",
        "Emergency situations: Instant human escalation"
      ]
    },
    {
      icon: Users,
      title: "Seamless Human Integration",
      description: "Expert VAs provide 24/7 coverage",
      details: [
        "Expert VAs in Mexico provide 24/7 coverage",
        "Complete context transfer in under 2 seconds",
        "Customers never know when handoff occurs",
        "Continuous AI learning from human decisions"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Our Invisible Intelligence Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the perfect blend of AI efficiency and human expertise, delivered seamlessly to your tenants and vendors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="w-8 h-8 mx-auto mb-4 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {step.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvisibleIntelligenceSection;