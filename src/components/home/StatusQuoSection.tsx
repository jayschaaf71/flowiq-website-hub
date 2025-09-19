import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock, DollarSign, TrendingUp, Zap, Brain } from "lucide-react";

const StatusQuoSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-red-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* AI Transformation Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
            <Brain className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Property Management is Overwhelming
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Property managers spend countless hours on maintenance coordination, tenant communication, 
            and vendor management - time that could be better spent growing their business.
          </p>
        </div>

        {/* Financial Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="border-red-200 bg-white shadow-lg">
            <CardHeader className="text-center">
              <DollarSign className="h-12 w-12 text-red-600 mx-auto mb-3" />
              <CardTitle className="text-xl text-red-800">Hidden Daily Losses</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">60%</div>
              <p className="text-sm text-gray-600 mb-4">of time spent on maintenance coordination</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• 3 hours vendor coordination</li>
                <li>• 2 hours tenant communications</li>
                <li>• 2 hours maintenance tracking</li>
                <li>• 1 hour emergency calls</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-white shadow-lg">
            <CardHeader className="text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <CardTitle className="text-xl text-blue-800">Time Hemorrhage</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">30%</div>
              <p className="text-sm text-gray-600 mb-4">average response delay to tenant requests</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Tenant request processing: 8 hrs</li>
                <li>• Vendor coordination: 12 hrs</li>
                <li>• Follow-up calls: 6 hrs</li>
                <li>• Documentation: 4 hrs</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-teal-200 bg-white shadow-lg">
            <CardHeader className="text-center">
              <TrendingUp className="h-12 w-12 text-teal-600 mx-auto mb-3" />
              <CardTitle className="text-xl text-teal-800">Opportunity Cost</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">40%</div>
              <p className="text-sm text-gray-600 mb-4">higher costs due to poor vendor coordination</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• 30% faster issue resolution</li>
                <li>• 40% reduction in emergency calls</li>
                <li>• 50% improved tenant satisfaction</li>
                <li>• 60% better vendor utilization</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Reality vs Future */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            What If You Could Flip The Switch Tomorrow?
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Current Reality */}
            <div className="bg-red-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Your Property Management Today
              </h4>
              <ul className="space-y-3 text-sm text-red-700">
                <li className="flex items-start">
                  <span className="font-medium mr-2">8:00 AM:</span>
                  <span>Already behind with overnight maintenance requests</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">10:30 AM:</span>
                  <span>Playing phone tag with vendors while tenants wait</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">2:00 PM:</span>
                  <span>Emergency call interrupts scheduled inspections</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">5:30 PM:</span>
                  <span>Still coordinating repairs, no time for strategic planning</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">7:00 PM:</span>
                  <span>Worried about unresolved tenant issues</span>
                </li>
              </ul>
            </div>

            {/* AI-Powered Future */}
            <div className="bg-green-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                <Zap className="h-5 w-5 mr-2" />
                Your Property Management with SymAssist
              </h4>
              <ul className="space-y-3 text-sm text-green-700">
                <li className="flex items-start">
                  <span className="font-medium mr-2">8:00 AM:</span>
                  <span>AI triaged overnight requests, vendors already dispatched</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">10:30 AM:</span>
                  <span>Vendors coordinated automatically, tenants updated via SMS</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">2:00 PM:</span>
                  <span>Emergency handled seamlessly, no disruption to schedule</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">5:30 PM:</span>
                  <span>All maintenance coordinated, time for portfolio growth</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">7:00 PM:</span>
                  <span>Confident everything is handled with 24/7 oversight</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Implementation Reality */}
        <div className="text-center bg-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            "But Implementation Must Be Complicated, Right?"
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Wrong. SymAssist is designed for property managers who can't afford downtime or disruption.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2 weeks</div>
              <div className="text-sm text-gray-600">From chaos to complete automation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">Zero</div>
              <div className="text-sm text-gray-600">Downtime during implementation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support throughout transition</div>
            </div>
          </div>

          <Button 
            size="lg" 
            variant="cta-primary"
            className="px-8 py-4 text-lg"
            onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
          >
            <Brain className="mr-2 h-5 w-5" />
            Calculate Your Property Management Savings - Free Assessment
          </Button>
          <p className="text-xs text-gray-500 mt-2">See exactly how much manual coordination is costing you</p>
        </div>
      </div>
    </section>
  );
};

export default StatusQuoSection;