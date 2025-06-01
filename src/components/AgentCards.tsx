
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Shield, Calendar, Star, FileText, BarChart3 } from "lucide-react";

const AgentCards = () => {
  const features = [
    {
      icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
      title: "ReceptionIQ - AI Scheduling Assistant",
      description: "Automated response to website chats, direct messages, and phone calls with intelligent appointment booking based on provider availability."
    },
    {
      icon: <Shield className="h-6 w-6 text-teal-600" />,
      title: "VerifyIQ - Insurance Verification Agent",
      description: "Automated insurance eligibility verification before appointments with coverage details extraction and patient responsibility estimation."
    },
    {
      icon: <Calendar className="h-6 w-6 text-cyan-600" />,
      title: "AppointmentIQ - Smart Reminders & Recovery",
      description: "Automated appointment reminders via SMS, email, and voice with smart timing and no-show recovery automation."
    },
    {
      icon: <Star className="h-6 w-6 text-slate-600" />,
      title: "FollowIQ - Review Request Automation",
      description: "Automated post-visit review requests with smart timing and direct links to major review platforms for reputation management."
    },
    {
      icon: <FileText className="h-6 w-6 text-purple-600" />,
      title: "ClaimsIQ - Automated Claims Processing",
      description: "Streamlined insurance claims submission and follow-up with automated status tracking and denial management."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-emerald-600" />,
      title: "InsightIQ - Business Intelligence Dashboard",
      description: "AI-powered analytics and reporting that analyzes trends across appointments, revenue, patient satisfaction, and operational efficiency for data-driven decisions."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Six AI Agents, Infinite Possibilities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each FlowIQ agent specializes in a critical aspect of practice management, 
            working together to create a seamless patient experience and operational excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-50 rounded-lg">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentCards;
