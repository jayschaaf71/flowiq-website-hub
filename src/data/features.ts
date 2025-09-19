import { 
  Stethoscope, 
  MessageSquare, 
  CreditCard, 
  Settings, 
  TrendingUp 
} from "lucide-react";

export const agentCategories = [
  {
    id: "property-management-assistants",
    title: "PROPERTY MANAGEMENT ASSISTANTS",
    agents: [
      {
        icon: Stethoscope,
        title: "Maintenance Assistant",
        description: "Intelligent triage and coordination of maintenance requests, vendor dispatch, and work order management with 24/7 human oversight.",
        color: "text-blue-600"
      },
      {
        icon: MessageSquare,
        title: "Communication Assistant",
        description: "Multi-channel tenant communication including maintenance updates, lease reminders, and automated messaging via voice, SMS, and email.",
        color: "text-green-600"
      },
      {
        icon: CreditCard,
        title: "Financial Assistant",
        description: "Rent collection automation, late fee processing, expense tracking, and financial reporting for property portfolios.",
        color: "text-purple-600"
      },
      {
        icon: Settings,
        title: "Operations Assistant",
        description: "Vendor management, inspection scheduling, lease renewals, and operational workflow optimization across properties.",
        color: "text-slate-600"
      },
      {
        icon: TrendingUp,
        title: "Analytics Assistant",
        description: "Property performance tracking, market analysis, occupancy optimization, and business intelligence for portfolio growth.",
        color: "text-orange-600"
      }
    ]
  }
];

// Flattened array for compatibility with existing components
export const features = agentCategories.flatMap(category => category.agents);