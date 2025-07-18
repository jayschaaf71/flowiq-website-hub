import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Users, Brain, Target } from "lucide-react";

const AdvisoryBoardSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    experienceLevel: "",
    motivation: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('advisory_board_signups')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            role: formData.role,
            experience_level: formData.experienceLevel,
            motivation: formData.motivation
          }
        ]);

      if (error) throw error;

      // Send notification email
      try {
        await supabase.functions.invoke('notify-advisory-board-signup', {
          body: {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            role: formData.role,
            experience_level: formData.experienceLevel,
            motivation: formData.motivation,
          },
        });
      } catch (emailError) {
        console.error('Error sending notification email:', emailError);
        // Don't block the user flow if email fails
      }

      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest in joining our advisory board. We'll be in touch soon.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        role: "",
        experienceLevel: "",
        motivation: ""
      });
    } catch (error) {
      console.error('Error submitting advisory board application:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-primary rounded-full">
              <Users className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Join Our Customer Advisory Board
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Help shape the future of AI-powered business solutions. Share your expertise and get early access to new features.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Brain className="h-6 w-6 text-brand-blue mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Share Your Expertise</h3>
                <p className="text-muted-foreground">
                  Provide insights on industry challenges and help us prioritize features that matter most to professionals like you.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Target className="h-6 w-6 text-brand-teal mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Early Access</h3>
                <p className="text-muted-foreground">
                  Get first access to new features, beta releases, and exclusive content before anyone else.
                </p>
              </div>
            </div>
          </div>

          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle>Advisory Board Application</CardTitle>
              <CardDescription>
                Tell us about yourself and why you'd like to join our advisory board.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="advisory-name">Name *</Label>
                    <Input
                      id="advisory-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="advisory-email">Email *</Label>
                    <Input
                      id="advisory-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="advisory-company">Company</Label>
                    <Input
                      id="advisory-company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="advisory-role">Role</Label>
                    <Input
                      id="advisory-role"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="advisory-experience">Experience Level</Label>
                  <Select value={formData.experienceLevel} onValueChange={(value) => setFormData({ ...formData, experienceLevel: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="junior">Junior (1-3 years)</SelectItem>
                      <SelectItem value="mid">Mid-level (4-7 years)</SelectItem>
                      <SelectItem value="senior">Senior (8-15 years)</SelectItem>
                      <SelectItem value="executive">Executive (15+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="advisory-motivation">Why do you want to join our advisory board?</Label>
                  <Textarea
                    id="advisory-motivation"
                    rows={3}
                    value={formData.motivation}
                    onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                    placeholder="Tell us about your interest and what you hope to contribute..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                  variant="gradient-primary"
                >
                  {isSubmitting ? "Submitting..." : "Apply to Join Advisory Board"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryBoardSignup;