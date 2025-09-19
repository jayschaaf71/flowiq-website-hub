
import { Shield, Users, Calendar, Award, Clock, TrendingUp } from "lucide-react";

const TrustSignals = () => {
  const trustSignals = [
    {
      icon: <Shield className="w-5 h-5 text-green-600" />,
      title: "SOC 2 Certified",
      description: "Enterprise-grade security and compliance"
    },
    {
      icon: <Users className="w-5 h-5 text-blue-600" />,
      title: "300+ Properties",
      description: "Trusted by property managers nationwide"
    },
    {
      icon: <Calendar className="w-5 h-5 text-purple-600" />,
      title: "48 Hour Setup",
      description: "Most properties are live within 2 days"
    },
    {
      icon: <Award className="w-5 h-5 text-orange-600" />,
      title: "99.2% Uptime",
      description: "Always-on maintenance coordination"
    },
    {
      icon: <Clock className="w-5 h-5 text-teal-600" />,
      title: "<2s Handoff",
      description: "Seamless AI-to-human transitions"
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-indigo-600" />,
      title: "85% Automation",
      description: "Industry-leading automation rate"
    }
  ];

  return (
    <section className="py-12 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
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
