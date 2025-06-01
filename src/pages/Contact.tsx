
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Phone, Mail, MapPin, Clock, CheckCircle, Shield, Users, Calendar } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
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

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Phone",
      description: "Speak with our team",
      details: "(314) 420-5637"
    },
    {
      icon: <Mail className="h-6 w-6 text-teal-600" />,
      title: "Email",
      description: "Send us a message",
      details: "jason@flow-iq.ai"
    },
    {
      icon: <MapPin className="h-6 w-6 text-cyan-600" />,
      title: "Office",
      description: "Visit our headquarters",
      details: "Chesterfield, Missouri"
    },
    {
      icon: <Clock className="h-6 w-6 text-slate-600" />,
      title: "Response Time",
      description: "We respond quickly",
      details: "Within 4 hours"
    }
  ];

  const trustSignals = [
    {
      icon: <Shield className="w-5 h-5 text-green-600" />,
      title: "HIPAA Compliant",
      description: "Enterprise-grade security for healthcare data"
    },
    {
      icon: <Users className="w-5 h-5 text-blue-600" />,
      title: "500+ Practices",
      description: "Trusted by healthcare professionals nationwide"
    },
    {
      icon: <Calendar className="w-5 h-5 text-purple-600" />,
      title: "Quick Setup",
      description: "Most practices are live within 48 hours"
    }
  ];

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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch with FlowIQ
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ready to transform your practice operations? We're here to answer your questions 
              and show you exactly how FlowIQ can solve your specific challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 text-lg"
                onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
              >
                Book Instant Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustSignals.map((signal, index) => (
              <div key={index} className="flex items-center space-x-4 justify-center md:justify-start">
                <div className="p-2 bg-gray-50 rounded-lg">
                  {signal.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{signal.title}</h4>
                  <p className="text-sm text-gray-600">{signal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Ways to Reach Us</h2>
            <p className="text-gray-600">Prefer a different communication method? We're here to help.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                    {info.icon}
                  </div>
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                  <CardDescription>{info.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-medium">{info.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to See FlowIQ in Action?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book a live demo and see exactly how FlowIQ can transform your practice operations.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
            onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
          >
            Schedule Live Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
