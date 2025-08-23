import { 
  Stethoscope, 
  MessageSquare, 
  CreditCard, 
  Settings, 
  TrendingUp 
} from "lucide-react";

export const agentCategories = [
  {
    id: "ai-assistants",
    title: "AI ASSISTANTS",
    agents: [
      {
        icon: Stethoscope,
        title: "Clinical Assistant",
        description: "Comprehensive clinical support including medical scribing, appointment scheduling, patient intake, and clinical documentation automation.",
        color: "text-blue-600"
      },
      {
        icon: MessageSquare,
        title: "Communication Assistant",
        description: "Intelligent patient communication including appointment reminders, follow-ups, patient education, and automated messaging systems.",
        color: "text-green-600"
      },
      {
        icon: CreditCard,
        title: "Revenue Assistant",
        description: "Complete revenue cycle management including claims processing, payment collection, prior authorization, and billing optimization.",
        color: "text-purple-600"
      },
      {
        icon: Settings,
        title: "Operations Assistant",
        description: "Streamlined operational intelligence including inventory management, workflow optimization, and practice efficiency monitoring.",
        color: "text-slate-600"
      },
      {
        icon: TrendingUp,
        title: "Growth Assistant",
        description: "Strategic practice growth including marketing automation, referral management, patient acquisition, and business intelligence analytics.",
        color: "text-orange-600"
      }
    ]
  }
];

// Flattened array for compatibility with existing components
export const features = agentCategories.flatMap(category => category.agents);