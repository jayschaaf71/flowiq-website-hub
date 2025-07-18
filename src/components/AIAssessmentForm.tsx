import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { Brain, CheckCircle, Clock, MessageSquare } from 'lucide-react';
import { LoadingSpinner } from './LoadingSpinner';
import { supabase } from '@/integrations/supabase/client';

interface FormData {
  email: string;
  name: string;
  company: string;
  phone: string;
  practice_type: string;
  practice_size: string;
  current_challenges: string;
  assessment_package: 'basic' | 'comprehensive';
}

const AIAssessmentForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    name: '',
    company: '',
    phone: '',
    practice_type: '',
    practice_size: '',
    current_challenges: '',
    assessment_package: 'basic'
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const packages = {
    basic: {
      name: 'AI Assessment - Basic',
      price: 297,
      features: [
        'Complete AI readiness evaluation',
        'Custom recommendation report',
        'Priority technology assessment',
        'ROI projection analysis',
        'Implementation timeline'
      ]
    },
    comprehensive: {
      name: 'AI Assessment - Comprehensive',
      price: 497,
      features: [
        'Everything in Basic package',
        '60-minute strategy consultation',
        'Detailed implementation roadmap',
        'Technology vendor recommendations',
        'Staff training recommendations',
        '30-day follow-up support'
      ]
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.name || !formData.company) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('create-assessment-checkout', {
        body: formData
      });

      if (error) throw error;

      // Open Stripe checkout in a new tab
      window.open(data.url, '_blank');
      
      toast({
        title: "Redirecting to Payment",
        description: "Please complete your payment in the new tab to schedule your AI assessment."
      });
    } catch (error) {
      console.error('Error creating checkout session:', error);
      toast({
        title: "Payment Error",
        description: "Unable to process payment. Please try again or contact support.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <Brain className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-4">
          AI Readiness Assessment
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Get a comprehensive evaluation of your practice's AI readiness with personalized recommendations 
          and a clear implementation roadmap.
        </p>
      </div>

      {/* Package Selection */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Choose Your Assessment Package</h2>
        <RadioGroup 
          value={formData.assessment_package} 
          onValueChange={(value) => handleInputChange('assessment_package', value)}
          className="grid md:grid-cols-2 gap-4"
        >
          {Object.entries(packages).map(([key, pkg]) => (
            <Label key={key} htmlFor={key} className="cursor-pointer">
              <Card className={`relative transition-all ${formData.assessment_package === key ? 'ring-2 ring-primary' : 'hover:shadow-md'}`}>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value={key} id={key} />
                    <div>
                      <CardTitle className="text-lg">{pkg.name}</CardTitle>
                      <CardDescription className="text-2xl font-bold text-primary">
                        ${pkg.price}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Label>
          ))}
        </RadioGroup>
      </div>

      {/* Assessment Form */}
      <Card>
        <CardHeader>
          <CardTitle>Assessment Information</CardTitle>
          <CardDescription>
            Please provide your information to customize your AI assessment.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Dr. John Smith"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="doctor@practice.com"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company">Practice/Company Name *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  placeholder="Smith Family Dentistry"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="practice-type">Practice Type</Label>
                <Select onValueChange={(value) => handleInputChange('practice_type', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select practice type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dental">Dental Practice</SelectItem>
                    <SelectItem value="medical">Medical Practice</SelectItem>
                    <SelectItem value="veterinary">Veterinary Practice</SelectItem>
                    <SelectItem value="specialty">Specialty Practice</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="practice-size">Practice Size</Label>
                <Select onValueChange={(value) => handleInputChange('practice_size', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select practice size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="solo">Solo Practice (1 provider)</SelectItem>
                    <SelectItem value="small">Small (2-5 providers)</SelectItem>
                    <SelectItem value="medium">Medium (6-15 providers)</SelectItem>
                    <SelectItem value="large">Large (16+ providers)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="challenges">Current Challenges</Label>
              <Textarea
                id="challenges"
                value={formData.current_challenges}
                onChange={(e) => handleInputChange('current_challenges', e.target.value)}
                placeholder="What are your biggest operational challenges? What processes would you like to improve with AI?"
                rows={4}
              />
            </div>

            <div className="flex items-center space-x-2 p-4 bg-muted/50 rounded-lg">
              <Clock className="h-5 w-5 text-primary" />
              <div className="text-sm">
                <strong>Next Steps:</strong> After payment, you'll receive an email with assessment details 
                and a link to schedule your consultation (for Comprehensive package).
              </div>
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full" 
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <LoadingSpinner />
                  Processing...
                </>
              ) : (
                <>
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Purchase Assessment - ${packages[formData.assessment_package].price}
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIAssessmentForm;