import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ConfidenceRoutingVisualization from "@/components/ConfidenceRoutingVisualization";
import { useMetaDescription } from "@/hooks/useMetaDescription";
import { StructuredData } from "@/components/StructuredData";
import { Clock, Brain, Users, CheckCircle, ArrowRight, Zap, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  useMetaDescription(
    "Discover how SymAssist's invisible intelligence works - AI confidence scoring, seamless human handoffs, and 24/7 offshore support for property management automation.",
    "How It Works - SymAssist Property Management AI Platform"
  );

  return (
    <div className="min-h-screen bg-white">
      <StructuredData type="how-it-works" />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 py-20" style={{paddingTop: '144px'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Our Invisible Intelligence Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Revolutionary confidence-based AI that knows when to hand off to humans seamlessly
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>85% Full Automation</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-500" />
              <span>&lt;2 Sec Handoff Time</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-500" />
              <span>24/7 Human Backup</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Four Steps to Seamless Automation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From request intake to expert resolution, our AI-human orchestration delivers consistent results
            </p>
          </div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Multi-Channel Intake</h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  Voice, SMS, web portal, and email requests powered by proven VTS platform technology
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Instant NLP processing and intent recognition</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Automatic data extraction and work order creation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Multi-language support (English, Spanish)</span>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2">
                <Card className="p-8 shadow-glow border-2 border-blue-100">
                  <CardContent className="p-0">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                        <Zap className="w-6 h-6 text-blue-600" />
                        <span className="font-semibold">Voice Request Received</span>
                      </div>
                      <ArrowRight className="w-6 h-6 text-gray-400 mx-auto" />
                      <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                        <Brain className="w-6 h-6 text-green-600" />
                        <span className="font-semibold">Intent Recognized & Processed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">AI Confidence Scoring (0-100%)</h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  Every decision evaluated for certainty with intelligent routing based on confidence levels
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">90%+</Badge>
                    <span>Full AI automation with passive monitoring</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">70-89%</Badge>
                    <span>AI execution with active human oversight</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                    <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">50-69%</Badge>
                    <span>Human review required before action</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                    <Badge variant="outline" className="bg-red-100 text-red-800 border-red-300">&lt;50%</Badge>
                    <span>Immediate human takeover</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <Card className="p-8 shadow-glow border-2 border-purple-100">
                  <CardContent className="p-0">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-6 relative">
                        <div className="w-32 h-32 rounded-full border-8 border-gray-200 relative">
                          <div className="w-24 h-24 rounded-full border-8 border-green-500 absolute top-2 left-2" style={{borderRightColor: 'transparent', transform: 'rotate(306deg)'}}>
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl font-bold text-green-600">85%</span>
                          </div>
                        </div>
                      </div>
                      <p className="font-semibold text-gray-700">Confidence Score: High</p>
                      <p className="text-sm text-gray-500">AI handles automatically</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Result: Invisible Intelligence
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Your tenants and vendors experience seamless service while you benefit from optimal efficiency
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-blue mb-2">85%</div>
              <p className="text-gray-600">Requests Fully Automated</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-cyan mb-2">&lt;2s</div>
              <p className="text-gray-600">AI-to-Human Handoff</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">40%</div>
              <p className="text-gray-600">Cost Reduction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">99.2%</div>
              <p className="text-gray-600">System Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Confidence Routing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Experience Confidence-Based Routing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our AI intelligently decides when to handle requests automatically 
              or hand off to human experts based on confidence levels.
            </p>
          </div>
          <ConfidenceRoutingVisualization />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;