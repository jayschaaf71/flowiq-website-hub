import { 
  Stethoscope, 
  MessageSquare, 
  CreditCard, 
  Settings, 
  TrendingUp 
} from "lucide-react";

export const agentCategories = [
  {
    id: "virtual-front-desk-assistants",
    title: "VIRTUAL FRONT DESK AI ASSISTANTS",
    agents: [
      {
        icon: Stethoscope,
        title: "Customer Support Assistant",
        description: "Intelligent triage and coordination of customer inquiries, service dispatch, and request management with 24/7 human oversight.",
        color: "text-blue-600"
      },
      {
        icon: MessageSquare,
        title: "Communication Assistant",
        description: "Multi-channel customer communication including service updates, appointment reminders, and automated messaging via voice, SMS, and email.",
        color: "text-green-600"
      },
      {
        icon: CreditCard,
        title: "Scheduling Assistant",
        description: "Appointment booking automation, scheduling optimization, payment processing, and customer billing management.",
        color: "text-purple-600"
      },
      {
        icon: Settings,
        title: "Operations Assistant",
        description: "Service coordination, team scheduling, workflow optimization, and business process automation.",
        color: "text-slate-600"
      },
      {
        icon: TrendingUp,
        title: "Analytics Assistant",
        description: "Customer interaction tracking, satisfaction analysis, service optimization, and business intelligence for growth.",
        color: "text-orange-600"
      }
    ]
  }
];

// Flattened array for compatibility with existing components
export const features = agentCategories.flatMap(category => category.agents);