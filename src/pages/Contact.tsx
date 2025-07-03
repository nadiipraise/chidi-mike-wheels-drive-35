
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Showroom',
      details: ['123 Luxury Drive', 'Beverly Hills, CA 90210'],
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['(555) 123-4567', 'Mon-Sat: 9AM-7PM'],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@chidimikecars.com', 'We respond within 24 hours'],
      action: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 9:00 AM - 7:00 PM', 'Sat: 9:00 AM - 6:00 PM', 'Sun: 12:00 PM - 5:00 PM'],
      action: 'Schedule Visit'
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
            Contact
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              Our Team
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto">
            Ready to find your dream car? Get in touch with our luxury automotive experts today.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-background rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-primary/60 rounded-full mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{info.title}</h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-foreground/70">{detail}</p>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="hover:bg-primary hover:text-white">
                  {info.action}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="h-12"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can we help?"
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your dream car or any questions you have..."
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map/Location */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Visit Our Showroom</h2>
              <div className="bg-gradient-card rounded-2xl p-8 shadow-xl">
                <div className="aspect-video bg-slate-200 dark:bg-slate-700 rounded-xl mb-6 flex items-center justify-center">
                  <p className="text-slate-500 dark:text-slate-400">Interactive Map Coming Soon</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="text-foreground/70">123 Luxury Drive<br />Beverly Hills, CA 90210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Showroom Hours</p>
                      <p className="text-foreground/70">
                        Monday - Friday: 9:00 AM - 7:00 PM<br />
                        Saturday: 9:00 AM - 6:00 PM<br />
                        Sunday: 12:00 PM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-6 hover:bg-primary hover:text-white">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
