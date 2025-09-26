import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, FileEdit, Users, Clock, TrendingUp, BarChart3, CheckCircle } from "lucide-react";

const UseCasesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Business Operators, Real Results
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how SymAssist transforms business operations companies with measurable outcomes in weeks, not months.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Business Operations Case 1 */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-xl">Metro Business Group</CardTitle>
                  <CardDescription>450-location network, Mixed service operations</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">The Challenge:</h4>
                <p className="text-red-700 text-sm">Managing 80+ service requests weekly, 3-hour average response time, customers complaining about communication delays</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">SymAssist Solution:</h4>
                <div className="space-y-2 text-sm text-green-700">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>AI triages 95% of service requests automatically</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Smart vendor dispatch reduces response time by 70%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>24/7 human oversight ensures quality control</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">60%</div>
                  <div className="text-xs text-gray-600">Less admin work</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">$12K</div>
                  <div className="text-xs text-gray-600">Monthly savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">2 weeks</div>
                  <div className="text-xs text-gray-600">Implementation</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Business Operations Case 2 */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-teal-100 rounded-lg">
                  <FileEdit className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <CardTitle className="text-xl">Riverside Operations</CardTitle>
                  <CardDescription>1,200-location business network</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">The Challenge:</h4>
                <p className="text-red-700 text-sm">Emergency calls interrupting operations, poor vendor coordination, 40% customer satisfaction score</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">SymAssist Solution:</h4>
                <div className="space-y-2 text-sm text-green-700">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Multi-channel intake captures all customer requests</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Automated vendor matching optimizes response</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Real-time updates keep customers informed</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">30min</div>
                  <div className="text-xs text-gray-600">Avg response time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">85%</div>
                  <div className="text-xs text-gray-600">Customer satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">$28K</div>
                  <div className="text-xs text-gray-600">Monthly cost reduction</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Business Type Examples */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Proven Results Across Business Types
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Multifamily</h4>
              <p className="text-sm text-gray-600 mb-3">Avg. 40% reduction in service coordination time</p>
              <div className="text-lg font-bold text-blue-600">95% satisfaction</div>
            </div>
            <div className="text-center p-4 bg-teal-50 rounded-lg">
              <Clock className="h-8 w-8 text-teal-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Commercial</h4>
              <p className="text-sm text-gray-600 mb-3">Avg. 30% faster issue resolution time</p>
              <div className="text-lg font-bold text-teal-600">92% satisfaction</div>
            </div>
            <div className="text-center p-4 bg-cyan-50 rounded-lg">
              <TrendingUp className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Mixed-Use</h4>
              <p className="text-sm text-gray-600 mb-3">Avg. 50% improvement in tenant satisfaction</p>
              <div className="text-lg font-bold text-cyan-600">89% satisfaction</div>
            </div>
            <div className="text-center p-4 bg-emerald-50 rounded-lg">
              <BarChart3 className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Portfolio</h4>
              <p className="text-sm text-gray-600 mb-3">Avg. 60% reduction in operational overhead</p>
              <div className="text-lg font-bold text-emerald-600">97% satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;