import { Brain, Globe, Zap, RefreshCw, BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ValuePropositionsSection = () => {
  const propositions = [
    {
      icon: Brain,
      title: "Confidence-Based Intelligence",
      description: "Unlike basic chatbots, our AI knows when it doesn't know. Smart routing ensures the right level of intelligence handles each situation."
    },
    {
      icon: Globe,
      title: "Global Human Expertise",
      description: "Expert virtual assistants in Mexico provide 24/7 coverage at 60% lower cost than US-based support, with rigorous quality standards."
    },
    {
      icon: Zap,
      title: "Proven Technology Foundation",
      description: "Built on our battle-tested VTS platform that already handles thousands of voice and scheduling interactions daily."
    },
    {
      icon: RefreshCw,
      title: "Invisible Handoffs",
      description: "Customers experience consistent, high-quality service whether AI or humans are handling their request - they never know the difference."
    },
    {
      icon: BarChart3,
      title: "Continuous Improvement",
      description: "Every human intervention teaches the AI, constantly improving automation rates while maintaining quality."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why SymAssist is Different
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The first AI-native property management platform with invisible human intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propositions.map((prop, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/30 transition-all duration-300">
                  <prop.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{prop.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {prop.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionsSection;