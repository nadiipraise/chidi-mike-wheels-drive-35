
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Award, Users, Clock, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Years of Excellence', value: '15+' },
    { icon: Users, label: 'Happy Customers', value: '2000+' },
    { icon: Clock, label: 'Expert Team Members', value: '25+' },
    { icon: Shield, label: 'Premium Vehicles Sold', value: '5000+' }
  ];

  const teamMembers = [
    {
      name: 'Chidi Mike',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      description: 'With over 20 years in luxury automotive, Chidi founded the company with a vision to redefine premium car buying.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Sales Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c3c8?w=400&h=400&fit=crop&crop=face',
      description: 'Sarah leads our sales team with expertise in matching customers with their perfect luxury vehicle.'
    },
    {
      name: 'Michael Chen',
      role: 'Service Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      description: 'Michael ensures every vehicle meets our highest standards before reaching our customers.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            About
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              Chidi Mike Cars
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto">
            Pioneering luxury automotive excellence for over 15 years, delivering unmatched quality and service to discerning clients worldwide.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-primary/60 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Our Story</h2>
              <div className="space-y-6 text-foreground/80 text-lg">
                <p>
                  Founded in 2008 by automotive enthusiast Chidi Mike, our company began with a simple yet ambitious vision: to revolutionize the luxury car buying experience by combining exceptional vehicles with unparalleled customer service.
                </p>
                <p>
                  What started as a small showroom with a handful of premium vehicles has grown into one of the most respected luxury automotive dealerships in the region. Our success is built on three core principles: quality, integrity, and customer satisfaction.
                </p>
                <p>
                  Today, we proudly serve clients who appreciate the finer things in life, offering a curated selection of the world's most prestigious automotive brands alongside personalized service that exceeds expectations.
                </p>
              </div>
              <Button variant="default" size="lg" className="mt-8">
                View Our Inventory
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80" 
                alt="Luxury car showroom" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Our dedicated professionals bring decades of combined experience in luxury automotive sales and service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-background rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-4">{member.role}</p>
                  <p className="text-foreground/70">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
