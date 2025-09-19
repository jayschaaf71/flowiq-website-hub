
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { agentCategories } from "@/data/features";
import { useState } from "react";
import AgentDemoModal from "./AgentDemoModal";

const AgentCards = () => {
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
            Five AI Assistants, Complete Practice Management
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each SymAssist assistant consolidates multiple specialized functions to deliver 
            comprehensive property management and operational excellence.
          </p>
        </div>
        
        <div className="space-y-12">
          {agentCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-xl font-semibold text-gray-500 mb-6 tracking-wider">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 justify-items-center max-w-6xl mx-auto">
                {category.agents.map((agent, agentIndex) => {
                  const IconComponent = agent.icon;
                  return (
                    <Card 
                      key={agentIndex} 
                      className="border-none shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 min-h-[140px] touch-manipulation"
                      onClick={() => handleAgentClick(agent.title)}
                    >
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-gray-50 rounded-lg">
                            <IconComponent className={`h-6 w-6 ${agent.color}`} />
                          </div>
                          <CardTitle className="text-lg">{agent.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600 text-base">
                          {agent.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
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

export default AgentCards;
