import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Play, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Product", path: "/product" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "ROI Calculator", path: "/roi-calculator" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="/symassist-logo.png" 
              alt="SymAssist" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  isActive(item.path)
                    ? "text-blue-600 font-medium"
                    : "text-gray-600 hover:text-gray-900"
                } text-sm font-medium transition-colors duration-200 whitespace-nowrap`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <Button 
              asChild
              variant="outline"
              size="sm"
              className="border-primary text-primary bg-primary/5 hover:bg-primary/10 hover:border-primary/80 font-semibold text-xs px-3"
            >
              <Link to="/ai-assessment">AI Assessment</Link>
            </Button>
            
            <Button 
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm text-xs px-4"
              onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
            >
              Book Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-700 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 z-50 animate-in slide-in-from-top-2 duration-200">
            <div className="max-w-7xl mx-auto px-4 py-6">
              {/* Navigation Links */}
              <div className="space-y-1 mb-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`${
                      isActive(item.path)
                        ? "text-blue-700 bg-gradient-to-r from-blue-50 to-teal-50 border-l-4 border-blue-600"
                        : "text-gray-700 hover:text-blue-700 hover:bg-gray-50"
                    } block px-4 py-3 text-lg font-medium rounded-r-lg transition-all duration-200`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-gray-100">
                {/* Portal Buttons */}
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <Button 
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-12 border-teal-600 text-teal-700 hover:bg-teal-50 hover:border-teal-700 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to="/patient-portal">Patient Portal</Link>
                  </Button>
                  
                  <Button 
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-12 border-cyan-600 text-cyan-700 hover:bg-cyan-50 hover:border-cyan-700 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to="/provider-portal">Provider Portal</Link>
                  </Button>
                </div>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full h-12 border-primary text-primary hover:bg-primary/10 hover:border-primary/80 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <Link to="/ai-assessment">
                    <Brain className="mr-2 h-5 w-5" />
                    AI Assessment
                  </Link>
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="w-full h-12 border-green-600 text-green-700 hover:bg-green-50 hover:border-green-700 transition-all duration-200"
                  onClick={() => {
                    window.open('https://app.flow-iq.ai', '_blank');
                    setIsOpen(false);
                  }}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Try Demo
                </Button>
                
                <Button 
                  size="lg"
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                  onClick={() => {
                    window.open('https://calendly.com/jason-flow-iq', '_blank');
                    setIsOpen(false);
                  }}
                >
                  Book Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;