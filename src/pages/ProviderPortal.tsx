import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, BarChart3, Calendar } from 'lucide-react';

const ProviderPortal = () => {
  return (
    <>
      <Helmet>
        <title>Provider Portal - FlowIQ</title>
        <meta 
          name="description" 
          content="Healthcare provider portal for FlowIQ AI automation platform. Manage patients, workflows, and analytics." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <div className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Provider Portal
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Welcome to your FlowIQ dashboard. Manage your practice with AI-powered automation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Patient Management</CardTitle>
                  <CardDescription>
                    Manage patient records and communications
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
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Scheduling</CardTitle>
                  <CardDescription>
                    AI-powered appointment scheduling
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
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Analytics</CardTitle>
                  <CardDescription>
                    Practice performance insights
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
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Security</CardTitle>
                  <CardDescription>
                    HIPAA-compliant data protection
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
                    The provider portal is currently being built. Sign up for early access to be notified when it's ready.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button asChild size="lg">
                    <a href="/contact">Contact Sales</a>
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Get in touch with our team to learn more about the full provider portal experience.
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

export default ProviderPortal;