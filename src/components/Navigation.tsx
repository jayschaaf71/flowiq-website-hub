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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex-shrink-0 mr-8">
            <div className="flex flex-col max-w-[200px]">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent whitespace-nowrap">
                FlowIQ
              </span>
              <span className="text-xs text-gray-500 font-medium tracking-wide hidden sm:block">
                The AI Business Operating System
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  isActive(item.path)
                    ? "text-blue-700 border-b-2 border-blue-700"
                    : "text-gray-700 hover:text-blue-700"
                } px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
            
            <Button 
              variant="outline"
              size="sm"
              className="border-orange-600 text-orange-700 hover:bg-orange-50"
              onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
            >
              <Brain className="mr-1 h-4 w-4" />
              AI Assessment
            </Button>
            
            <Button 
              variant="outline"
              size="sm"
              className="border-green-600 text-green-700 hover:bg-green-50"
              onClick={() => window.open('https://remarkable-flan-7ac120.netlify.app', '_blank')}
            >
              <Play className="mr-1 h-4 w-4" />
              Demo
            </Button>
            
            <Button 
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white"
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
                <Button 
                  variant="outline"
                  size="lg"
                  className="w-full h-12 border-orange-600 text-orange-700 hover:bg-orange-50 hover:border-orange-700 transition-all duration-200"
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