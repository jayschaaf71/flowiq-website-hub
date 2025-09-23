import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Play, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Solution", path: "/product" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Technology", path: "/technology" },
    { name: "ROI Calculator", path: "/roi-calculator" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-blue-600 shadow-xl"
      style={{ minHeight: '80px' }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20">
        <div className="flex justify-between items-center h-full">
          {/* Logo Section */}
          <Link to="/" className="flex-shrink-0">
            <div className="text-3xl font-bold text-blue-600">
              SymAssist
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  isActive(item.path)
                    ? "text-blue-600 font-bold"
                    : "text-gray-700 hover:text-blue-600"
                } text-lg font-medium transition-colors duration-200 whitespace-nowrap`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
              onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
            >
              Book Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-700 p-2 text-3xl"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t-4 border-blue-600 z-50">
            <div className="max-w-7xl mx-auto px-4 py-6">
              {/* Navigation Links */}
              <div className="space-y-4 mb-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`${
                      isActive(item.path)
                        ? "text-blue-700 bg-blue-50 border-l-4 border-blue-600"
                        : "text-gray-700 hover:text-blue-700 hover:bg-gray-50"
                    } block px-4 py-4 text-xl font-medium rounded-r-lg transition-all duration-200`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              {/* Action Button */}
              <div className="pt-4 border-t border-gray-100">
                <Button 
                  size="lg"
                  className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white text-lg"
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