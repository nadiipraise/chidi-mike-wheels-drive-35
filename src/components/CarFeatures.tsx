
import React from 'react';

const CarFeatures: React.FC = () => {
  const features = [
    'Premium Leather Interior',
    'Navigation System',
    'Backup Camera',
    'Bluetooth Connectivity',
    'Heated Seats',
    'Sunroof',
    'Premium Sound System',
    'All-Wheel Drive'
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Key Features</h3>
      <div className="grid grid-cols-1 gap-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarFeatures;
