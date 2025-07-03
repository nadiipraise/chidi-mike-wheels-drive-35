
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Inventory', path: '/inventory' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-metallic shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 md:space-x-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold text-lg md:text-xl">CM</span>
              </div>
              <div className="font-heading font-bold text-lg md:text-xl text-foreground">
                Chidi Mike Cars
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative font-medium transition-colors duration-300 hover:text-primary ${
                    location.pathname === link.path ? 'text-primary' : 'text-foreground'
                  } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <Button variant="default" size="lg">
                Schedule Test Drive
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 relative z-[60]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[55] md:hidden">
          <div className="absolute inset-0 bg-background/98 backdrop-blur-lg">
            <div className="flex flex-col items-center justify-center h-full space-y-8 px-4 pt-20">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-2xl font-medium transition-colors duration-300 hover:text-primary ${
                    location.pathname === link.path ? 'text-primary' : 'text-foreground'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                variant="default" 
                size="xl" 
                className="mt-8"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Schedule Test Drive
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Spacer to prevent content overlap */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;
