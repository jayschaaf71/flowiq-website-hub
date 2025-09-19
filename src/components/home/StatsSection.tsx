import { Card, CardContent } from "@/components/ui/card";

const StatsSection = () => {
  const stats = [
    {
      value: "40%",
      label: "Time Savings",
      description: "Less admin work"
    },
    {
      value: "30%",
      label: "Faster Resolution",
      description: "Quicker responses"
    },
    {
      value: "24/7",
      label: "Human Oversight",
      description: "Always monitoring"
    },
    {
      value: "95%",
      label: "Satisfaction Rate",
      description: "Happy tenants"
    }
  ];

  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-200 font-semibold text-lg">{stat.label}</div>
              <div className="text-blue-300 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;