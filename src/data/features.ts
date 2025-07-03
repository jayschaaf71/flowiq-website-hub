import { 
  Package, 
  Settings, 
  FileEdit, 
  Calendar, 
  Shield, 
  Bell, 
  GraduationCap, 
  Megaphone, 
  UserCheck, 
  CheckCircle, 
  FileText, 
  CreditCard 
} from "lucide-react";

export const agentCategories = [
  {
    id: "operations",
    title: "OPERATIONS",
    agents: [
      {
        icon: Package,
        title: "Inventory iQ",
        description: "AI-powered inventory management that tracks supplies, automates reordering, and optimizes stock levels for seamless operations.",
        color: "text-blue-600"
      },
      {
        icon: Settings,
        title: "Ops iQ",
        description: "Comprehensive operational intelligence that streamlines workflows, monitors performance, and optimizes practice efficiency.",
        color: "text-slate-600"
      }
    ]
  },
  {
    id: "clinical-care",
    title: "CLINICAL CARE",
    agents: [
      {
        icon: FileEdit,
        title: "Scribe iQ",
        description: "AI medical scribing that automates clinical documentation and integrates seamlessly with EHR systems for efficient visit notes.",
        color: "text-amber-600"
      },
      {
        icon: Calendar,
        title: "Appointment iQ",
        description: "Intelligent appointment scheduling that handles booking, rescheduling, and optimization based on provider availability and patient preferences.",
        color: "text-cyan-600"
      }
    ]
  },
  {
    id: "patient-journey",
    title: "PATIENT JOURNEY",
    agents: [
      {
        icon: Shield,
        title: "Intake iQ",
        description: "Automated patient intake and insurance verification that streamlines onboarding and ensures accurate coverage information.",
        color: "text-teal-600"
      },
      {
        icon: Bell,
        title: "Remind iQ",
        description: "Smart appointment reminders and follow-up system that reduces no-shows and maintains patient engagement.",
        color: "text-orange-600"
      },
      {
        icon: GraduationCap,
        title: "Education iQ",
        description: "Personalized patient education delivery that provides relevant health information and improves treatment compliance.",
        color: "text-purple-600"
      },
      {
        icon: Megaphone,
        title: "Marketing iQ",
        description: "Intelligent marketing automation that engages patients, promotes services, and grows your practice reach.",
        color: "text-pink-600"
      },
      {
        icon: UserCheck,
        title: "Referral iQ",
        description: "Automated referral management that streamlines provider connections and tracks patient care coordination.",
        color: "text-green-600"
      }
    ]
  },
  {
    id: "revenue-cycle",
    title: "REVENUE CYCLE",
    agents: [
      {
        icon: CheckCircle,
        title: "Auth iQ",
        description: "Automated prior authorization processing that expedites approvals and reduces administrative burden.",
        color: "text-indigo-600"
      },
      {
        icon: FileText,
        title: "Claims iQ",
        description: "Intelligent claims processing that automates submission, tracking, and denial management for faster revenue cycle.",
        color: "text-violet-600"
      },
      {
        icon: CreditCard,
        title: "Payments iQ",
        description: "Streamlined payment processing and collection system that optimizes cash flow and reduces outstanding balances.",
        color: "text-emerald-600"
      }
    ]
  }
];

// Flattened array for compatibility with existing components
export const features = agentCategories.flatMap(category => category.agents);