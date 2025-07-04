import { CheckCircle, Circle, ExternalLink, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: "high" | "medium" | "low";
  category: "seo" | "legal" | "performance" | "ux" | "technical";
  action?: {
    text: string;
    url?: string;
    internal?: boolean;
  };
}

const LaunchChecklist = () => {
  const checklistItems: ChecklistItem[] = [
    // SEO & Performance - COMPLETED
    {
      id: "meta-descriptions",
      title: "Meta Descriptions",
      description: "Enhanced page-specific meta descriptions for better search rankings",
      completed: true,
      priority: "high",
      category: "seo"
    },
    {
      id: "structured-data",
      title: "Structured Data",
      description: "Added comprehensive schema markup for better search engine understanding",
      completed: true,
      priority: "high",
      category: "seo"
    },
    {
      id: "google-analytics",
      title: "Google Analytics",
      description: "Configured GA4 tracking with measurement ID G-JGN2Q02N1W",
      completed: true,
      priority: "high",
      category: "seo"
    },
    
    // User Experience - COMPLETED
    {
      id: "form-validation",
      title: "Form Validation",
      description: "All contact forms have proper error handling and loading states",
      completed: true,
      priority: "high",
      category: "ux"
    },
    {
      id: "loading-states",
      title: "Loading States",
      description: "Added loading indicators for form submissions",
      completed: true,
      priority: "medium",
      category: "ux"
    },
    {
      id: "404-page",
      title: "404 Error Page",
      description: "Enhanced 404 page with proper navigation and SEO",
      completed: true,
      priority: "medium",
      category: "ux"
    },
    
    // Legal & Compliance - COMPLETED
    {
      id: "privacy-policy",
      title: "Privacy Policy - GDPR/CCPA",
      description: "Comprehensive privacy policy with GDPR and CCPA compliance sections",
      completed: true,
      priority: "high",
      category: "legal"
    },
    {
      id: "terms-of-service",
      title: "Terms of Service",
      description: "Updated terms with comprehensive coverage including HIPAA compliance",
      completed: true,
      priority: "high",
      category: "legal"
    },
    
    // Performance - NEEDS ATTENTION
    {
      id: "image-optimization",
      title: "Image Optimization",
      description: "Compress images in /public/lovable-uploads/ for faster loading",
      completed: false,
      priority: "medium",
      category: "performance",
      action: {
        text: "Use TinyPNG or similar",
        url: "https://tinypng.com/",
        internal: false
      }
    },
    
    // Technical - NEEDS ATTENTION
    {
      id: "domain-setup",
      title: "Custom Domain Setup",
      description: "Configure custom domain in Lovable settings",
      completed: false,
      priority: "high",
      category: "technical",
      action: {
        text: "Configure in Project Settings",
        internal: true
      }
    },
    {
      id: "ssl-certificate",
      title: "SSL Certificate",
      description: "Ensure HTTPS is properly configured (automatic with Lovable)",
      completed: true,
      priority: "high",
      category: "technical"
    },
    {
      id: "uptime-monitoring",
      title: "Uptime Monitoring",
      description: "Set up external monitoring for website availability",
      completed: false,
      priority: "medium",
      category: "technical",
      action: {
        text: "Setup UptimeRobot",
        url: "https://uptimerobot.com/",
        internal: false
      }
    },
    {
      id: "backup-plan",
      title: "Backup & Rollback Plan",
      description: "Document rollback procedures using Lovable's version history",
      completed: false,
      priority: "medium",
      category: "technical",
      action: {
        text: "Review Version History",
        internal: true
      }
    }
  ];

  const completedItems = checklistItems.filter(item => item.completed).length;
  const totalItems = checklistItems.length;
  const completionPercentage = Math.round((completedItems / totalItems) * 100);

  const priorityColors = {
    high: "destructive",
    medium: "secondary", 
    low: "outline"
  } as const;

  const categoryColors = {
    seo: "bg-green-100 text-green-800",
    legal: "bg-blue-100 text-blue-800", 
    performance: "bg-yellow-100 text-yellow-800",
    ux: "bg-purple-100 text-purple-800",
    technical: "bg-red-100 text-red-800"
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">FlowIQ Launch Readiness</CardTitle>
              <CardDescription>
                Track your pre-launch progress across all critical areas
              </CardDescription>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-600">{completionPercentage}%</div>
              <div className="text-sm text-gray-500">{completedItems} of {totalItems} complete</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
            <div 
              className="bg-blue-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {checklistItems.map((item) => (
            <div
              key={item.id}
              className={`flex items-start space-x-4 p-4 rounded-lg border ${
                item.completed ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="flex-shrink-0 mt-1">
                {item.completed ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : (
                  <Circle className="w-5 h-5 text-gray-400" />
                )}
              </div>
              
              <div className="flex-grow">
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className={`font-semibold ${item.completed ? 'text-green-900' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                  <Badge variant={priorityColors[item.priority]}>
                    {item.priority}
                  </Badge>
                  <span className={`px-2 py-1 rounded-full text-xs ${categoryColors[item.category]}`}>
                    {item.category}
                  </span>
                </div>
                
                <p className={`text-sm ${item.completed ? 'text-green-700' : 'text-gray-600'}`}>
                  {item.description}
                </p>
                
                {item.action && !item.completed && (
                  <div className="mt-2">
                    {item.action.url ? (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(item.action!.url, '_blank')}
                        className="text-xs"
                      >
                        {item.action.text}
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </Button>
                    ) : (
                      <Badge variant="outline">{item.action.text}</Badge>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {/* Final Launch Reminder */}
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Ready to Launch?</h4>
                <p className="text-blue-700 text-sm mb-3">
                  Once you've completed the remaining items, your FlowIQ website will be ready for production launch.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-blue-600">
                    <strong>Next Steps:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-blue-700">
                    <li>Complete image optimization using TinyPNG</li>
                    <li>Set up custom domain in Lovable Project Settings</li>
                    <li>Configure uptime monitoring</li>
                    <li>Document your rollback plan</li>
                    <li>Announce your launch! 🚀</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LaunchChecklist;