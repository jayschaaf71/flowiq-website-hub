
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    practiceType: "",
    practiceSize: "",
    currentChallenge: "",
    timeline: "",
    inquiryType: "demo",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission with qualification logic
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const isQualifiedLead = formData.practiceType && formData.practiceSize && formData.currentChallenge;
      
      toast({
        title: "Message sent successfully!",
        description: isQualifiedLead 
          ? "Thanks for the details! We'll get back to you within 4 hours with a personalized response."
          : "We'll get back to you within 4 hours.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        practiceType: "",
        practiceSize: "",
        currentChallenge: "",
        timeline: "",
        inquiryType: "demo",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly at jason@flow-iq.ai",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Tell Us About Your Practice
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          The more we know about your specific situation, the better we can tailor 
          our solution to your needs. Fill out the form and we'll provide you with 
          a personalized response within 4 hours.
        </p>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Personalized Demo</h4>
              <p className="text-gray-600">See FlowIQ in action with examples from your practice type</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Custom ROI Analysis</h4>
              <p className="text-gray-600">Get estimated savings based on your practice size</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Implementation Plan</h4>
              <p className="text-gray-600">Detailed timeline and next steps for your specific needs</p>
            </div>
          </div>
        </div>
      </div>
      
      <Card className="border-none shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl">Contact Form</CardTitle>
          <CardDescription>
            Help us understand your practice so we can provide the most relevant information.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input 
                  id="firstName" 
                  placeholder="John" 
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input 
                  id="lastName" 
                  placeholder="Doe" 
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required 
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@yourpractice.com" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="+1 (555) 123-4567" 
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="inquiryType">What can we help you with? *</Label>
              <Select value={formData.inquiryType} onValueChange={(value) => handleSelectChange('inquiryType', value)} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select inquiry type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="demo">Schedule a personalized demo</SelectItem>
                  <SelectItem value="pricing">Get pricing information</SelectItem>
                  <SelectItem value="integration">Discuss integration with existing systems</SelectItem>
                  <SelectItem value="support">Technical support question</SelectItem>
                  <SelectItem value="partnership">Partnership opportunity</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="practiceType">Practice Type</Label>
                <Select value={formData.practiceType} onValueChange={(value) => handleSelectChange('practiceType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select practice type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dental">Dental Practice</SelectItem>
                    <SelectItem value="medical">Medical Practice</SelectItem>
                    <SelectItem value="therapy">Physical/Occupational Therapy</SelectItem>
                    <SelectItem value="mental-health">Mental Health</SelectItem>
                    <SelectItem value="veterinary">Veterinary</SelectItem>
                    <SelectItem value="chiropractic">Chiropractic</SelectItem>
                    <SelectItem value="dermatology">Dermatology</SelectItem>
                    <SelectItem value="other">Other Healthcare</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="practiceSize">Practice Size</Label>
                <Select value={formData.practiceSize} onValueChange={(value) => handleSelectChange('practiceSize', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select practice size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="solo">Solo practitioner</SelectItem>
                    <SelectItem value="small">2-5 providers</SelectItem>
                    <SelectItem value="medium">6-15 providers</SelectItem>
                    <SelectItem value="large">16+ providers</SelectItem>
                    <SelectItem value="enterprise">Multi-location enterprise</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="currentChallenge">What's your biggest operational challenge?</Label>
              <Select value={formData.currentChallenge} onValueChange={(value) => handleSelectChange('currentChallenge', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your main challenge" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="scheduling">Appointment scheduling and management</SelectItem>
                  <SelectItem value="no-shows">High no-show rates</SelectItem>
                  <SelectItem value="insurance">Insurance verification delays</SelectItem>
                  <SelectItem value="phone-calls">Too many phone calls disrupting workflow</SelectItem>
                  <SelectItem value="follow-up">Patient follow-up and retention</SelectItem>
                  <SelectItem value="reviews">Getting more positive reviews</SelectItem>
                  <SelectItem value="staff-time">Staff spending too much time on admin tasks</SelectItem>
                  <SelectItem value="after-hours">Handling inquiries after hours</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="timeline">When are you looking to implement a solution?</Label>
              <Select value={formData.timeline} onValueChange={(value) => handleSelectChange('timeline', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediately">Immediately</SelectItem>
                  <SelectItem value="1-month">Within 1 month</SelectItem>
                  <SelectItem value="3-months">Within 3 months</SelectItem>
                  <SelectItem value="6-months">Within 6 months</SelectItem>
                  <SelectItem value="exploring">Just exploring options</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="message">Additional Details</Label>
              <Textarea 
                id="message" 
                placeholder="Tell us more about your specific needs, questions, or what you'd like to see in a demo..."
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white py-3"
            >
              {isSubmitting ? "Sending..." : "Send Message & Get Personalized Response"}
              {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
            </Button>
            
            <p className="text-sm text-gray-500 text-center">
              We'll respond within 4 hours with personalized information based on your practice details.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
