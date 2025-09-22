import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Calendar, Mail, ArrowRight } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const AssessmentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [assessment, setAssessment] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateAssessmentStatus = async () => {
      if (!sessionId) {
        setLoading(false);
        return;
      }

      try {
        // Use secure function to update payment status
        const { data, error } = await supabase.rpc('confirm_assessment_payment', {
          session_id: sessionId
        });

        if (error) {
          console.error('Error updating assessment:', error);
        } else if (data && data.length > 0) {
          setAssessment(data[0]);
        } else {
          console.error('No assessment found for session ID');
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    updateAssessmentStatus();
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Confirming your assessment purchase...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Assessment Purchase Confirmed - SymAssist</title>
        <meta name="description" content="Your AI assessment purchase has been confirmed. Check your email for next steps." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4">
                Assessment Purchase Confirmed!
              </h1>
              <p className="text-lg text-muted-foreground">
                Thank you for purchasing your AI readiness assessment. 
                We're excited to help transform your practice.
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>What Happens Next</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold">Check Your Email</h3>
                    <p className="text-muted-foreground text-sm">
                      You'll receive a confirmation email with assessment details and instructions within the next few minutes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold">Assessment Preparation</h3>
                    <p className="text-muted-foreground text-sm">
                      Our team will prepare your custom assessment based on the information you provided.
                    </p>
                  </div>
                </div>

                {assessment?.assessment_package === 'comprehensive' && (
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold">Schedule Your Consultation</h3>
                      <p className="text-muted-foreground text-sm">
                        You'll receive a calendar link to schedule your 60-minute strategy consultation with our AI specialists.
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    {assessment?.assessment_package === 'comprehensive' ? '4' : '3'}
                  </div>
                  <div>
                    <h3 className="font-semibold">Receive Your Report</h3>
                    <p className="text-muted-foreground text-sm">
                      Get your detailed assessment report with custom recommendations and implementation roadmap.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {assessment && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Assessment Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold">Package:</span>
                      <p className="text-muted-foreground capitalize">
                        {assessment.assessment_package} Assessment
                      </p>
                    </div>
                    <div>
                      <span className="font-semibold">Amount:</span>
                      <p className="text-muted-foreground">
                        ${(assessment.amount / 100).toFixed(2)}
                      </p>
                    </div>
                    <div>
                      <span className="font-semibold">Practice:</span>
                      <p className="text-muted-foreground">{assessment.company}</p>
                    </div>
                    <div>
                      <span className="font-semibold">Email:</span>
                      <p className="text-muted-foreground">{assessment.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                Questions about your assessment? Contact us at{' '}
                <a href="mailto:support@flow-iq.ai" className="text-primary hover:underline">
                  support@flow-iq.ai
                </a>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline">
                  <Link to="/">
                    Return to Home
                  </Link>
                </Button>
                <Button asChild>
                  <Link to="/contact">
                    Contact Support
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssessmentSuccess;