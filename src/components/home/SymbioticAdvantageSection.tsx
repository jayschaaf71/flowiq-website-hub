import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Users, AlertTriangle, CheckCircle } from "lucide-react";

const SymbioticAdvantageSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The SymAssist Advantage: Symbiotic Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            While other virtual assistants rely on AI alone - leaving customers frustrated when AI fails - 
            SymAssist combines AI efficiency with human expertise. Our confidence-based routing ensures AI handles what it does best, 
            while expert humans seamlessly step in for complex situations. Customers get perfect service every time, never knowing when the handoff occurs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center text-red-800">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Why Pure AI Isn't Enough
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-700 mb-4">
                AI-only virtual assistants fail when faced with complex, nuanced, or emotional customer situations. 
                SymAssist's symbiotic approach means you never lose a customer to AI limitations.
              </p>
              <p className="text-red-700">
                When AI confidence drops below optimal levels, expert human agents take control instantly - 
                maintaining the conversation flow and ensuring superior outcomes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="flex items-center text-green-800">
                <CheckCircle className="mr-2 h-5 w-5" />
                The SymAssist Solution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-700 mb-4">
                Our ONLY virtual assistant platform seamlessly combines AI efficiency with human expertise 
                for perfect customer outcomes that pure AI solutions cannot deliver.
              </p>
              <p className="text-green-700">
                Invisible intelligence means customers never know about handoffs - they just experience 
                perfect service every single time.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Efficiency</h3>
            <p className="text-gray-600">
              Handles 85% of customer interactions instantly with lightning-fast responses
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Users className="h-12 w-12 text-teal-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Human Expertise</h3>
            <p className="text-gray-600">
              24/7 offshore experts seamlessly handle complex, emotional, or nuanced situations
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Perfect Outcomes</h3>
            <p className="text-gray-600">
              Never lose customers to AI limitations - invisible handoffs ensure success
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="cta-primary"
            className="px-8 py-4 text-lg"
            onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
          >
            Experience Symbiotic Intelligence
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SymbioticAdvantageSection;