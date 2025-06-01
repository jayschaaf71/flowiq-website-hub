
import { Shield, Users, Calendar } from "lucide-react";

const TrustSignals = () => {
  const trustSignals = [
    {
      icon: <Shield className="w-5 h-5 text-green-600" />,
      title: "HIPAA Compliant",
      description: "Enterprise-grade security for healthcare data"
    },
    {
      icon: <Users className="w-5 h-5 text-blue-600" />,
      title: "500+ Practices",
      description: "Trusted by healthcare professionals nationwide"
    },
    {
      icon: <Calendar className="w-5 h-5 text-purple-600" />,
      title: "Quick Setup",
      description: "Most practices are live within 48 hours"
    }
  ];

  return (
    <section className="py-12 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustSignals.map((signal, index) => (
            <div key={index} className="flex items-center space-x-4 justify-center md:justify-start">
              <div className="p-2 bg-gray-50 rounded-lg">
                {signal.icon}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{signal.title}</h4>
                <p className="text-sm text-gray-600">{signal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
