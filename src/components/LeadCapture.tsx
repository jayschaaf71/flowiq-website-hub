import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Download, CheckCircle, Building, TrendingUp } from "lucide-react";

const LeadCapture = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    currentChallenges: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      toast({
        title: "Thank you for your interest!",
        description: "We'll send you the ROI guide and schedule a personalized consultation.",
      });
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-green-200 bg-white/90 backdrop-blur-sm">
            <CardContent className="text-center py-12">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Thank You for Your Interest!
              </h3>
              <p className="text-gray-600 mb-6">
                We've sent the ROI guide to your email and our team will reach out within 24 hours to schedule your personalized consultation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <Download className="h-4 w-4 text-blue-600" />
                  <span>ROI Guide Sent</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Building className="h-4 w-4 text-green-600" />
                  <span>Custom Analysis</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-purple-600" />
                  <span>Implementation Plan</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-none shadow-xl bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-primary rounded-full">
                <Download className="h-6 w-6 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">
              Get Your Personalized ROI Analysis
            </CardTitle>
            <CardDescription className="text-lg">
              Download our comprehensive automation guide and schedule a custom consultation for your property portfolio.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                />
              </div>
              
              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="px-8 py-3 text-lg"
                >
                  {isSubmitting ? "Processing..." : "Get My ROI Analysis"}
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground text-center">
                By submitting this form, you agree to receive communication from SymAssist about your business automation needs.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LeadCapture;