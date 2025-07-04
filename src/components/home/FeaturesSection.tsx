import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { features } from "@/data/features";
import { useState } from "react";
import AgentDemoModal from "../AgentDemoModal";

const FeaturesSection = () => {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);

  const handleAgentClick = (agentTitle: string) => {
    const agentId = agentTitle.toLowerCase().replace(' ', '-');
    setSelectedAgent(agentId);
  };
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Twelve AI Agents, One Powerful System
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each FlowIQ agent specializes in automating a critical aspect of your practice operations, 
            working together to deliver exceptional patient experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 min-h-[200px] touch-manipulation"
                onClick={() => handleAgentClick(feature.title)}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-slate-50 rounded-full w-fit">
                    <IconComponent className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      
      <AgentDemoModal 
        isOpen={!!selectedAgent}
        onClose={() => setSelectedAgent(null)}
        agentId={selectedAgent}
      />
    </section>
  );
};

export default FeaturesSection;