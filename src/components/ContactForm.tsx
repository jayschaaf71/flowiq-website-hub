
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
        description: "Please try again or contact us directly at jason@flow-iq.ai",
        variant: "destructive"
      });
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
                        <Input type="email" placeholder="john@yourpractice.com" {...field} />
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
                      <FormLabel>Practice Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select practice type" />
                          </SelectTrigger>
                        </FormControl>
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
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="practiceSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Practice Size</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select practice size" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="solo">Solo practitioner</SelectItem>
                          <SelectItem value="small">2-5 providers</SelectItem>
                          <SelectItem value="medium">6-15 providers</SelectItem>
                          <SelectItem value="large">16+ providers</SelectItem>
                          <SelectItem value="enterprise">Multi-location enterprise</SelectItem>
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
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white py-3"
              >
                {form.formState.isSubmitting ? "Sending..." : "Send Message & Get Personalized Response"}
                {!form.formState.isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
              </Button>
              
              <p className="text-sm text-gray-500 text-center">
                We'll respond within 4 hours with personalized information based on your practice details.
              </p>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
