import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Calendar, FileText, Bell } from 'lucide-react';

const PatientPortal = () => {
  return (
    <>
      <Helmet>
        <title>Patient Portal - FlowIQ</title>
        <meta 
          name="description" 
          content="Patient portal for FlowIQ-enabled healthcare practices. Access appointments, messages, and health records." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <div className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Patient Portal
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Access your health information and communicate with your healthcare provider.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Appointments</CardTitle>
                  <CardDescription>
                    Schedule and manage appointments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" disabled>
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Messages</CardTitle>
                  <CardDescription>
                    Secure communication with providers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" disabled>
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Health Records</CardTitle>
                  <CardDescription>
                    Access your medical records
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" disabled>
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Bell className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>
                    Stay updated on your care
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" disabled>
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle>Portal Under Development</CardTitle>
                  <CardDescription>
                    The patient portal is currently being built. Contact your healthcare provider for current access options.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button asChild size="lg">
                    <a href="/contact">Contact Support</a>
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Have questions? Our support team is here to help.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default PatientPortal;