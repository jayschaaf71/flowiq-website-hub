import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock, DollarSign, TrendingUp, Zap, Brain } from "lucide-react";

const StatusQuoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reality Check Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-red-100 rounded-full mb-4">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stop Accepting "That's Just Healthcare"
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While you're manually managing your practice, your competitors are leveraging AI to work 
            smarter, faster, and more profitably. The cost of staying manual just went up.
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
              <div className="text-3xl font-bold text-red-600 mb-2">$247</div>
              <p className="text-sm text-gray-600 mb-4">Average daily revenue loss from manual processes</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• 4 hours staff overtime</li>
                <li>• 6 missed appointment slots</li>
                <li>• 12 insurance verification delays</li>
                <li>• 8 patients waiting on hold</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-white shadow-lg">
            <CardHeader className="text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <CardTitle className="text-xl text-blue-800">Time Hemorrhage</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">43 hrs</div>
              <p className="text-sm text-gray-600 mb-4">Weekly hours wasted on tasks AI should handle</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Phone scheduling: 15 hrs</li>
                <li>• Insurance verification: 12 hrs</li>
                <li>• Appointment reminders: 8 hrs</li>
                <li>• Follow-up calls: 8 hrs</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-teal-200 bg-white shadow-lg">
            <CardHeader className="text-center">
              <TrendingUp className="h-12 w-12 text-teal-600 mx-auto mb-3" />
              <CardTitle className="text-xl text-teal-800">Opportunity Cost</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">35%</div>
              <p className="text-sm text-gray-600 mb-4">Patient capacity increase with automation</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• 50% fewer no-shows</li>
                <li>• 70% faster check-in</li>
                <li>• 60% more efficient scheduling</li>
                <li>• 80% reduced wait times</li>
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
                Your Practice Today
              </h4>
              <ul className="space-y-3 text-sm text-red-700">
                <li className="flex items-start">
                  <span className="font-medium mr-2">8:00 AM:</span>
                  <span>Staff already overwhelmed with yesterday's backlog</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">10:30 AM:</span>
                  <span>Phone ringing while trying to verify insurance manually</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">2:00 PM:</span>
                  <span>Two no-shows, scrambling to fill slots</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">5:30 PM:</span>
                  <span>Staff staying late to catch up on reminders</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">7:00 PM:</span>
                  <span>You're still thinking about tomorrow's chaos</span>
                </li>
              </ul>
            </div>

            {/* AI-Powered Future */}
            <div className="bg-green-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                <Zap className="h-5 w-5 mr-2" />
                Your Practice with FlowIQ
              </h4>
              <ul className="space-y-3 text-sm text-green-700">
                <li className="flex items-start">
                  <span className="font-medium mr-2">8:00 AM:</span>
                  <span>AI handled 90% of scheduling overnight</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">10:30 AM:</span>
                  <span>All insurance pre-verified, staff focused on patient care</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">2:00 PM:</span>
                  <span>Zero no-shows thanks to AI reminders, fully booked</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">5:30 PM:</span>
                  <span>Staff leaving on time, no backlog</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">7:00 PM:</span>
                  <span>You're planning practice growth, not fighting fires</span>
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
            Wrong. FlowIQ is designed for practices that can't afford downtime or disruption.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3 weeks</div>
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
            Calculate Your Hidden Losses - Free Assessment
          </Button>
          <p className="text-xs text-gray-500 mt-2">See exactly how much manual processes are costing you</p>
        </div>
      </div>
    </section>
  );
};

export default StatusQuoSection;