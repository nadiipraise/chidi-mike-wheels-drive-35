
import React from 'react';

interface CarPricingProps {
  price: number;
}

const CarPricing: React.FC<CarPricingProps> = ({ price }) => {
  return (
    <div className="text-center lg:text-left">
      <div className="text-3xl font-bold text-primary mb-2">
        ${price.toLocaleString()}
      </div>
      <p className="text-muted-foreground">
        Financing available from $899/month*
      </p>
    </div>
  );
};

export default CarPricing;
