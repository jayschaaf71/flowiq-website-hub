import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Play, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
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
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              FlowIQ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  isActive(item.path)
                    ? "text-blue-600 font-medium"
                    : "text-gray-600 hover:text-gray-900"
                } text-sm font-medium transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="outline"
              size="sm"
              className="border-teal-600 text-teal-700 bg-teal-50/50 hover:bg-teal-100 hover:border-teal-700 font-semibold"
              onClick={() => {
                // TODO: Replace with actual patient portal URL
                alert('Patient Portal - URL to be configured');
              }}
            >
              Patient Portal
            </Button>
            
            <Button 
              variant="outline"
              size="sm"
              className="border-cyan-600 text-cyan-700 bg-cyan-50/50 hover:bg-cyan-100 hover:border-cyan-700 font-semibold"
              onClick={() => {
                // TODO: Replace with actual provider portal URL
                alert('Provider Portal - URL to be configured');
              }}
            >
              Provider Portal
            </Button>
            
            <Button 
              variant="outline"
              size="sm"
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
              onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
            >
              AI Assessment
            </Button>
            
            <Button 
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
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
                    variant="outline"
                    size="lg"
                    className="h-12 border-teal-600 text-teal-700 hover:bg-teal-50 hover:border-teal-700 transition-all duration-200"
                    onClick={() => {
                      // TODO: Replace with actual patient portal URL
                      alert('Patient Portal - URL to be configured');
                      setIsOpen(false);
                    }}
                  >
                    Patient Portal
                  </Button>
                  
                  <Button 
                    variant="outline"
                    size="lg"
                    className="h-12 border-cyan-600 text-cyan-700 hover:bg-cyan-50 hover:border-cyan-700 transition-all duration-200"
                    onClick={() => {
                      // TODO: Replace with actual provider portal URL
                      alert('Provider Portal - URL to be configured');
                      setIsOpen(false);
                    }}
                  >
                    Provider Portal
                  </Button>
                </div>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="w-full h-12 border-blue-600 text-blue-700 hover:bg-blue-50 hover:border-blue-700 transition-all duration-200"
                  onClick={() => {
                    window.open('https://calendly.com/jason-flow-iq', '_blank');
                    setIsOpen(false);
                  }}
                >
                  <Brain className="mr-2 h-5 w-5" />
                  AI Assessment
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="w-full h-12 border-green-600 text-green-700 hover:bg-green-50 hover:border-green-700 transition-all duration-200"
                  onClick={() => {
                    window.open('https://remarkable-flan-7ac120.netlify.app', '_blank');
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