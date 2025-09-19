const ProcessFlowSection = () => {
  const steps = [
    {
      number: "01",
      title: "Tenant Reports Issue",
      description: "Via voice, SMS, or web form - SymAssist captures every request",
      icon: "📱"
    },
    {
      number: "02", 
      title: "AI Analyzes & Triages",
      description: "Intelligent classification determines urgency and required trade",
      icon: "🤖"
    },
    {
      number: "03",
      title: "Smart Vendor Dispatch",
      description: "Best-match vendor selected based on availability, rating, and location",
      icon: "🔧"
    },
    {
      number: "04",
      title: "Human Oversight",
      description: "24/7 monitoring ensures quality and handles complex situations",
      icon: "👥"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How SymAssist Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From tenant request to completion, SymAssist handles the entire workflow 
            with AI efficiency and human reliability.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl mb-4">{step.icon}</div>
              <div className="text-primary font-bold text-lg mb-2">{step.number}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlowSection;