import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useMetaDescription } from "@/hooks/useMetaDescription";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useMetaDescription(
    "Page not found - The page you're looking for doesn't exist. Return to SymAssist's homepage to explore our AI business operations solutions.",
    "404 - Page Not Found | SymAssist"
  );

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-8">
            <div className="text-6xl font-bold text-blue-600 mb-4">404</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h1>
            <p className="text-gray-600 mb-8">
              Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.history.back()}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
            <Button 
              onClick={() => window.location.href = '/'}
              className="flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
