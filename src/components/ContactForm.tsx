
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  practiceType: z.string().optional(),
  practiceSize: z.string().optional(),
  currentChallenge: z.string().optional(),
  timeline: z.string().optional(),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  message: z.string().optional()
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
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
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      // Simulate form submission with qualification logic
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const isQualifiedLead = data.practiceType && data.practiceSize && data.currentChallenge;
      
      toast({
        title: "Message sent successfully!",
        description: isQualifiedLead 
          ? "Thanks for the details! We'll get back to you within 4 hours with a personalized response."
          : "We'll get back to you within 4 hours.",
      });

      // Reset form
      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly at jason@symassist.com",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Tell Us About Your Property Portfolio
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
              <p className="text-gray-600">See SymAssist in action with examples from your property type</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Custom ROI Analysis</h4>
              <p className="text-gray-600">Get estimated savings based on your portfolio size</p>
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
            Help us understand your property management needs so we can provide the most relevant information.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@yourproperty.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="inquiryType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What can we help you with? *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="demo">Schedule a personalized demo</SelectItem>
                        <SelectItem value="pricing">Get pricing information</SelectItem>
                        <SelectItem value="integration">Discuss integration with existing systems</SelectItem>
                        <SelectItem value="support">Technical support question</SelectItem>
                        <SelectItem value="partnership">Partnership opportunity</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="practiceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Property Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select property type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="residential">Residential Apartments</SelectItem>
                          <SelectItem value="condos">Condominiums</SelectItem>
                          <SelectItem value="single-family">Single-Family Homes</SelectItem>
                          <SelectItem value="commercial">Commercial Properties</SelectItem>
                          <SelectItem value="mixed-use">Mixed-Use Properties</SelectItem>
                          <SelectItem value="student-housing">Student Housing</SelectItem>
                          <SelectItem value="senior-living">Senior Living</SelectItem>
                          <SelectItem value="other">Other Property Types</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="practiceSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Portfolio Size</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select portfolio size" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="small">1-25 units</SelectItem>
                          <SelectItem value="medium">26-100 units</SelectItem>
                          <SelectItem value="large">101-500 units</SelectItem>
                          <SelectItem value="enterprise">500+ units</SelectItem>
                          <SelectItem value="multi-location">Multi-location portfolio</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="currentChallenge"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What's your biggest operational challenge?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your main challenge" />
                        </SelectTrigger>
                      </FormControl>
                        <SelectContent>
                          <SelectItem value="maintenance-coordination">Maintenance request coordination</SelectItem>
                          <SelectItem value="vendor-management">Vendor scheduling and management</SelectItem>
                          <SelectItem value="tenant-communication">Tenant communication and follow-up</SelectItem>
                          <SelectItem value="emergency-response">Emergency maintenance response times</SelectItem>
                          <SelectItem value="vacancy-turnovers">Property turnovers and vacancy management</SelectItem>
                          <SelectItem value="rent-collection">Rent collection and financial management</SelectItem>
                          <SelectItem value="staff-time">Staff spending too much time on repetitive tasks</SelectItem>
                          <SelectItem value="after-hours">Handling tenant requests after hours</SelectItem>
                          <SelectItem value="other">Other operational challenges</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="timeline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>When are you looking to implement a solution?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="immediately">Immediately</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                        <SelectItem value="3-months">Within 3 months</SelectItem>
                        <SelectItem value="6-months">Within 6 months</SelectItem>
                        <SelectItem value="exploring">Just exploring options</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Details</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us more about your specific needs, questions, or what you'd like to see in a demo..."
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                disabled={form.formState.isSubmitting}
                variant="cta-primary"
                className="w-full py-3"
              >
                {form.formState.isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                    Sending...
                  </div>
                ) : (
                  <>
                    Send Message & Get Personalized Response
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
              
              <p className="text-sm text-gray-500 text-center">
                We'll respond within 4 hours with personalized information based on your property management details.
              </p>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
