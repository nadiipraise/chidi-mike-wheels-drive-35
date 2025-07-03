import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Car {
  id: number;
  name: string;
  price: string;
  year: number;
  mileage: string;
  image: string;
  features: string[];
}

const featuredCars: Car[] = [
  {
    id: 1,
    name: "BMW M5 Competition",
    price: "$89,999",
    year: 2023,
    mileage: "5,200 miles",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: ["Twin Turbo V8", "AWD", "Premium Sound", "Leather Interior"]
  },
  {
    id: 2,
    name: "Mercedes-Benz GLE 450",
    price: "$75,499",
    year: 2023,
    mileage: "8,100 miles",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: ["AMG Line", "4MATIC", "Panoramic Roof", "Advanced Safety"]
  },
  {
    id: 3,
    name: "Audi RS7 Sportback",
    price: "$125,900",
    year: 2024,
    mileage: "1,950 miles",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: ["V8 Biturbo", "Quattro AWD", "Sport Differential", "Carbon Package"]
  }
];

const FeaturedCars = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
            Featured <span className="text-primary">Collection</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Handpicked premium vehicles that define luxury and performance
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car, index) => (
            <div 
              key={car.id} 
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className="bg-gradient-card border-metallic hover:border-primary transition-all duration-500 hover:shadow-luxury hover:-translate-y-2 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {car.year}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                      {car.name}
                    </h3>
                    <p className="text-foreground/60 text-sm">{car.mileage}</p>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {car.features.slice(0, 2).map((feature, idx) => (
                        <span 
                          key={idx}
                          className="bg-metallic text-foreground px-2 py-1 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary font-heading">
                      {car.price}
                    </div>
                    <Button variant="luxury" size="sm" className="group">
                      View Details
                      <svg 
                        className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="xl">
            View All Inventory
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
