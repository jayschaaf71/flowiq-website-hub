import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Rocket, Zap, Star } from "lucide-react";

const EarlyAccessSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    companySize: "",
    useCase: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('early_access_signups')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            company_size: formData.companySize,
            use_case: formData.useCase
          }
        ]);

      if (error) throw error;

      toast({
        title: "You're On The List!",
        description: "Thank you for signing up for early access. We'll notify you when it's available.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        companySize: "",
        useCase: ""
      });
    } catch (error) {
      console.error('Error submitting early access signup:', error);
      toast({
        title: "Signup Failed",
        description: "There was an error signing you up. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-secondary rounded-full">
              <Rocket className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Get Early Access
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Be among the first to experience FlowIQ's AI-powered business operating system. Limited spots available.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Zap className="h-6 w-6 text-brand-green mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Priority Access</h3>
                <p className="text-muted-foreground">
                  Skip the waitlist and get immediate access to FlowIQ when we launch your industry vertical.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Star className="h-6 w-6 text-brand-teal mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Exclusive Benefits</h3>
                <p className="text-muted-foreground">
                  Get special pricing, personalized onboarding, and direct access to our product team.
                </p>
              </div>
            </div>
          </div>

          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle>Early Access Registration</CardTitle>
              <CardDescription>
                Join the exclusive group of early adopters shaping the future of business AI.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="early-name">Name *</Label>
                    <Input
                      id="early-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="early-email">Email *</Label>
                    <Input
                      id="early-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="early-company">Company</Label>
                  <Input
                    id="early-company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="early-company-size">Company Size</Label>
                  <Select value={formData.companySize} onValueChange={(value) => setFormData({ ...formData, companySize: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201-1000">201-1000 employees</SelectItem>
                      <SelectItem value="1000+">1000+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="early-use-case">Primary Use Case</Label>
                  <Textarea
                    id="early-use-case"
                    rows={3}
                    value={formData.useCase}
                    onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                    placeholder="How do you plan to use FlowIQ in your business?"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                  variant="gradient-secondary"
                >
                  {isSubmitting ? "Signing Up..." : "Get Early Access"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessSignup;