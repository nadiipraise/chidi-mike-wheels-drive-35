
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2369&q=80" 
          alt="Luxury Car" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-3xl">
          {/* Main Heading */}
          <h1 className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-6 animate-fade-in">
            Drive Your
            <span className="block text-primary animate-glow">Dream</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-foreground/80 mb-8 max-w-2xl animate-slide-in-left animation-delay-300">
            Experience luxury, performance, and sophistication with our premium collection of vehicles.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-left animation-delay-500">
            <Button variant="default" size="xl" className="group">
              <span>Explore Inventory</span>
              <svg 
                className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            <Button variant="hero" size="xl">
              Book Test Drive
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 animate-fade-in animation-delay-700">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary font-heading">500+</div>
              <div className="text-sm text-foreground/60 uppercase tracking-wide">Premium Cars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary font-heading">15+</div>
              <div className="text-sm text-foreground/60 uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary font-heading">2000+</div>
              <div className="text-sm text-foreground/60 uppercase tracking-wide">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/30 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
