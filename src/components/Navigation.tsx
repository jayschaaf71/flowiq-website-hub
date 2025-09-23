import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img 
              src="/symassist-logo.png" 
              alt="SymAssist" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  isActive(item.path)
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                } px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => window.open('https://calendly.com/jason-flow-iq', '_blank')}
            >
              Book Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-b border-gray-200">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`${
                    isActive(item.path)
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  } block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
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