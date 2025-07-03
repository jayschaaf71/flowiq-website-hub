import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { agentCategories } from "@/data/features";
import { CheckCircle, Calendar, FileText, MessageSquare, Phone, CreditCard } from "lucide-react";

interface AgentDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  agentId: string | null;
}

const demoContent = {
  "inventory-iq": {
    title: "Inventory iQ Demo",
    steps: [
      { icon: CheckCircle, text: "Automatically tracks medical supplies in real-time", highlight: "Current stock: 247 syringes, 89 bandages" },
      { icon: CheckCircle, text: "Predicts reorder points based on usage patterns", highlight: "Alert: Reorder gloves in 3 days" },
      { icon: CheckCircle, text: "Generates purchase orders automatically", highlight: "PO #12849 sent to supplier" }
    ]
  },
  "ops-iq": {
    title: "Ops iQ Demo",
    steps: [
      { icon: CheckCircle, text: "Monitors practice performance metrics", highlight: "Today: 94% on-time appointments" },
      { icon: CheckCircle, text: "Optimizes staff scheduling based on patient flow", highlight: "Suggested: Add 1 nurse 2-4 PM" },
      { icon: CheckCircle, text: "Identifies workflow bottlenecks", highlight: "Check-in taking 7 min avg (target: 5 min)" }
    ]
  },
  "scribe-iq": {
    title: "Scribe iQ Demo",
    steps: [
      { icon: FileText, text: "Listens to patient conversations in real-time", highlight: "Recording: 'Patient reports chest pain...'" },
      { icon: FileText, text: "Generates structured clinical notes", highlight: "SOAP note auto-generated" },
      { icon: FileText, text: "Integrates directly with your EHR system", highlight: "Note saved to Epic in 30 seconds" }
    ]
  },
  "appointment-iq": {
    title: "Appointment iQ Demo", 
    steps: [
      { icon: Calendar, text: "Patient calls requesting appointment", highlight: "AI: 'I can schedule you for Tuesday at 2 PM'" },
      { icon: Calendar, text: "Checks provider availability and preferences", highlight: "Dr. Smith: Available, prefers 30min slots" },
      { icon: Calendar, text: "Confirms and sends calendar invites", highlight: "Appointment confirmed, reminders set" }
    ]
  },
  "intake-iq": {
    title: "Intake iQ Demo",
    steps: [
      { icon: CheckCircle, text: "New patient completes online forms", highlight: "Forms: 95% complete, insurance verified" },
      { icon: CheckCircle, text: "Verifies insurance coverage automatically", highlight: "Aetna PPO: Active, $25 copay" },
      { icon: CheckCircle, text: "Flags any missing information", highlight: "Missing: Emergency contact phone" }
    ]
  },
  "remind-iq": {
    title: "Remind iQ Demo",
    steps: [
      { icon: MessageSquare, text: "Sends personalized appointment reminders", highlight: "Text: 'Hi John, your checkup is tomorrow at 2 PM'" },
      { icon: Phone, text: "Makes follow-up calls for missed appointments", highlight: "Calling: (555) 123-4567..." },
      { icon: MessageSquare, text: "Tracks engagement and responses", highlight: "Response rate: 89% (up 15%)" }
    ]
  },
  "education-iq": {
    title: "Education iQ Demo",
    steps: [
      { icon: CheckCircle, text: "Analyzes patient's condition and needs", highlight: "Diagnosis: Type 2 Diabetes, newly diagnosed" },
      { icon: CheckCircle, text: "Delivers personalized education content", highlight: "Sending: 'Managing Your Diabetes' video series" },
      { icon: CheckCircle, text: "Tracks patient engagement and progress", highlight: "Patient viewed 3/5 videos, quiz score: 85%" }
    ]
  },
  "marketing-iq": {
    title: "Marketing iQ Demo",
    steps: [
      { icon: MessageSquare, text: "Identifies patients due for preventive care", highlight: "127 patients due for mammograms" },
      { icon: MessageSquare, text: "Creates targeted outreach campaigns", highlight: "Campaign: 'Schedule Your Annual Mammogram'" },
      { icon: CheckCircle, text: "Tracks campaign performance and bookings", highlight: "34 appointments booked (27% response rate)" }
    ]
  },
  "referral-iq": {
    title: "Referral iQ Demo",
    steps: [
      { icon: CheckCircle, text: "Provider orders cardiology referral", highlight: "Referral: Dr. Johnson → Dr. Patel (Cardiology)" },
      { icon: CheckCircle, text: "Finds available specialists and schedules", highlight: "Available: Dr. Patel, next Tuesday 10 AM" },
      { icon: CheckCircle, text: "Tracks referral status and outcomes", highlight: "Patient seen, report received, care coordinated" }
    ]
  },
  "auth-iq": {
    title: "Auth iQ Demo",
    steps: [
      { icon: FileText, text: "Provider orders MRI for patient", highlight: "Order: Lumbar spine MRI for chronic pain" },
      { icon: FileText, text: "Automatically submits prior authorization", highlight: "Submitting to BlueCross BlueShield..." },
      { icon: CheckCircle, text: "Receives approval and schedules procedure", highlight: "Approved! MRI scheduled for Friday 3 PM" }
    ]
  },
  "claims-iq": {
    title: "Claims iQ Demo",
    steps: [
      { icon: FileText, text: "Processes visit and generates claims", highlight: "CPT: 99213, ICD-10: Z00.00, Amount: $275" },
      { icon: FileText, text: "Submits claims electronically", highlight: "Claim #CM789123 submitted to Aetna" },
      { icon: CheckCircle, text: "Tracks payments and manages denials", highlight: "Payment received: $250, processed in 5 days" }
    ]
  },
  "payments-iq": {
    title: "Payments iQ Demo",
    steps: [
      { icon: CreditCard, text: "Patient receives bill for services", highlight: "Balance: $125.50, due in 30 days" },
      { icon: CreditCard, text: "Offers multiple payment options", highlight: "Options: Credit card, payment plan, online portal" },
      { icon: CheckCircle, text: "Processes payments and updates records", highlight: "Payment received: $125.50, account balance: $0" }
    ]
  }
};

const AgentDemoModal = ({ isOpen, onClose, agentId }: AgentDemoModalProps) => {
  if (!agentId) return null;

  const agent = agentCategories
    .flatMap(cat => cat.agents)
    .find(a => a.title.toLowerCase().replace(' ', '-') === agentId);
  
  const demo = demoContent[agentId as keyof typeof demoContent];

  if (!agent || !demo) return null;

  const IconComponent = agent.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-xl">
            <div className={`p-2 rounded-lg bg-gray-50`}>
              <IconComponent className={`h-6 w-6 ${agent.color}`} />
            </div>
            {demo.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <p className="text-gray-600">{agent.description}</p>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">How it works:</h3>
            
            {demo.steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  <step.icon className="h-5 w-5 text-green-600 mt-0.5" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 mb-2">{step.text}</p>
                  <div className="text-sm font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded">
                    {step.highlight}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline" onClick={onClose}>
              Close Demo
            </Button>
            <Button variant="cta-primary">
              Learn More
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AgentDemoModal;