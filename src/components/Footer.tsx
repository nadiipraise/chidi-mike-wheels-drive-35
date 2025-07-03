import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-card border-t border-metallic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold text-xl">CM</span>
              </div>
              <div className="font-heading font-bold text-xl text-foreground">
                Chidi Mike Cars
              </div>
            </div>
            <p className="text-foreground/70 mb-6 max-w-md">
              Your trusted partner in luxury automotive excellence. We've been serving discerning customers with premium vehicles and exceptional service for over 15 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-metallic rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <span className="text-foreground text-sm font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-metallic rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <span className="text-foreground text-sm font-bold">X</span>
              </a>
              <a href="#" className="w-10 h-10 bg-metallic rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <span className="text-foreground text-sm font-bold">in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-foreground/70 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/inventory" className="text-foreground/70 hover:text-primary transition-colors">Inventory</Link></li>
              <li><Link to="/about" className="text-foreground/70 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <div className="space-y-2 text-foreground/70">
              <p>123 Luxury Drive</p>
              <p>Beverly Hills, CA 90210</p>
              <p className="hover:text-primary transition-colors cursor-pointer">
                (555) 123-4567
              </p>
              <p className="hover:text-primary transition-colors cursor-pointer">
                info@chidimikecars.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-metallic mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            © {currentYear} Chidi Mike Cars. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;