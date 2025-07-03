import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, FileEdit, Users, Clock, TrendingUp, BarChart3, CheckCircle } from "lucide-react";

const UseCasesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Practices, Real Results
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how FlowIQ transforms different practice types with measurable outcomes in weeks, not months.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Dental Practice Case */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-xl">Metro Dental Group</CardTitle>
                  <CardDescription>4-location dental practice, Seattle</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">The Challenge:</h4>
                <p className="text-red-700 text-sm">Front desk overwhelmed with 200+ calls daily, 35% no-show rate, 3-hour daily insurance verification backlog</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">FlowIQ Solution:</h4>
                <div className="space-y-2 text-sm text-green-700">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>ScheduleIQ handles 85% of appointment calls</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>IntakeIQ automates all insurance verification</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>RemindersIQ reduces no-shows by 60%</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">70%</div>
                  <div className="text-xs text-gray-600">Less admin work</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">$18K</div>
                  <div className="text-xs text-gray-600">Monthly savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">3 weeks</div>
                  <div className="text-xs text-gray-600">Implementation</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Medical Practice Case */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-teal-100 rounded-lg">
                  <FileEdit className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <CardTitle className="text-xl">Riverside Family Medicine</CardTitle>
                  <CardDescription>12-provider internal medicine practice</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">The Challenge:</h4>
                <p className="text-red-700 text-sm">Physicians spending 2+ hours daily on documentation, claims denial rate of 28%, staff burnout from manual tasks</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">FlowIQ Solution:</h4>
                <div className="space-y-2 text-sm text-green-700">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>ScribeIQ automates clinical documentation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>ClaimsIQ reduces denials to 8%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>BillingIQ accelerates collections</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">90min</div>
                  <div className="text-xs text-gray-600">Daily time saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">40%</div>
                  <div className="text-xs text-gray-600">Faster claims</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">$47K</div>
                  <div className="text-xs text-gray-600">Monthly revenue gain</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Practice Type Examples */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Proven Results Across Practice Types
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Dental Practices</h4>
              <p className="text-sm text-gray-600 mb-3">Avg. 65% reduction in front desk workload</p>
              <div className="text-lg font-bold text-blue-600">85% satisfaction</div>
            </div>
            <div className="text-center p-4 bg-teal-50 rounded-lg">
              <Clock className="h-8 w-8 text-teal-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Medical Practices</h4>
              <p className="text-sm text-gray-600 mb-3">Avg. 75 minutes saved per physician daily</p>
              <div className="text-lg font-bold text-teal-600">92% satisfaction</div>
            </div>
            <div className="text-center p-4 bg-cyan-50 rounded-lg">
              <TrendingUp className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Specialty Clinics</h4>
              <p className="text-sm text-gray-600 mb-3">Avg. 45% faster revenue cycle</p>
              <div className="text-lg font-bold text-cyan-600">89% satisfaction</div>
            </div>
            <div className="text-center p-4 bg-emerald-50 rounded-lg">
              <BarChart3 className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Multi-Location</h4>
              <p className="text-sm text-gray-600 mb-3">Avg. 50% improvement in operational efficiency</p>
              <div className="text-lg font-bold text-emerald-600">95% satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;