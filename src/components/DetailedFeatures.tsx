import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Shield, Calendar, Star, FileText, BarChart3, CreditCard } from "lucide-react";

const DetailedFeatures = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Practice Automation
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From the moment a patient discovers your practice to comprehensive business insights, 
            FlowIQ ensures every touchpoint is optimized.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg">
            <CardHeader className="text-center">
              <MessageSquare className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Patient Communication</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Website chat automation</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Phone call handling</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span className="text-gray-700">FAQ responses</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Appointment scheduling</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg">
            <CardHeader className="text-center">
              <Shield className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Insurance & Verification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Automated eligibility checks</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Coverage summaries</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Patient cost estimates</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                <span className="text-gray-700">HIPAA-compliant storage</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg">
            <CardHeader className="text-center">
              <Calendar className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Appointment Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Smart appointment reminders</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2"></div>
                <span className="text-gray-700">No-show recovery</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Automated review requests</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Referral generation</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardHeader className="text-center">
              <FileText className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Claims Processing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Automated claims submission</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Status tracking</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Denial management</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Revenue optimization</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardHeader className="text-center">
              <Star className="h-12 w-12 text-slate-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Reputation Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-slate-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Post-visit review requests</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-slate-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Smart timing optimization</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-slate-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Platform integration</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-slate-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Reputation monitoring</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardHeader className="text-center">
              <CreditCard className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Billing & Payments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Automated billing generation</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Payment processing</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Collection follow-up</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Revenue cycle optimization</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardHeader className="text-center">
              <BarChart3 className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Business Intelligence</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Appointment trend analysis</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Revenue insights</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Patient satisfaction metrics</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <span className="text-gray-700">Operational efficiency reports</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DetailedFeatures;
