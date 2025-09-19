import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter Plan",
      price: "$99",
      period: "per property/month",
      description: "Perfect for small property portfolios",
      badge: null,
      features: [
        "Up to 50 maintenance requests/month",
        "Basic AI triage and routing", 
        "Email and web portal intake",
        "Standard human backup (business hours)",
        "Basic reporting and analytics"
      ]
    },
    {
      name: "Professional Plan", 
      price: "$199",
      period: "per property/month",
      description: "Ideal for growing property management companies",
      badge: "Most Popular",
      features: [
        "Unlimited maintenance requests",
        "Full multi-channel intake (voice, SMS, email, web)",
        "24/7 human oversight and intervention", 
        "Advanced analytics and reporting",
        "VTS platform integration",
        "Confidence-based AI routing"
      ]
    },
    {
      name: "Enterprise Plan",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large portfolios",
      badge: "Best Value",
      features: [
        "Multi-property portfolio management",
        "Custom integrations and workflows",
        "Dedicated human VA team assignment",
        "White-label options available",
        "SLA guarantees and priority support",
        "Advanced AI customization"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transparent, Performance-Based Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your property portfolio size and automation needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`border-none shadow-lg hover:shadow-xl transition-all duration-300 ${
              plan.badge === "Most Popular" ? "ring-2 ring-primary transform scale-105" : ""
            }`}>
              <CardHeader className="text-center pb-4">
                {plan.badge && (
                  <Badge className="w-fit mx-auto mb-2" variant={plan.badge === "Most Popular" ? "default" : "secondary"}>
                    {plan.badge}
                  </Badge>
                )}
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full"
                  variant={plan.badge === "Most Popular" ? "default" : "outline"}
                  size="lg"
                >
                  {plan.name === "Enterprise Plan" ? "Contact Sales" : "Start Free Trial"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include 30-day free trial • No setup fees • Cancel anytime
          </p>
          <Button variant="link" className="text-primary">
            Need help choosing? Schedule a consultation →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;