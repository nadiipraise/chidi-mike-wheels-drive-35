
import React from 'react';
import { Calendar, Gauge, Fuel, Cog } from 'lucide-react';

interface CarSpecificationsProps {
  year: number;
  mileage: number;
  engine: string;
  transmission: string;
}

const CarSpecifications: React.FC<CarSpecificationsProps> = ({ 
  year, 
  mileage, 
  engine, 
  transmission 
}) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Key Specifications</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-3">
          <Calendar className="w-5 h-5 text-primary" />
          <div>
            <p className="font-medium">Year</p>
            <p className="text-sm text-muted-foreground">{year}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Gauge className="w-5 h-5 text-primary" />
          <div>
            <p className="font-medium">Mileage</p>
            <p className="text-sm text-muted-foreground">{mileage.toLocaleString()} mi</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Fuel className="w-5 h-5 text-primary" />
          <div>
            <p className="font-medium">Engine</p>
            <p className="text-sm text-muted-foreground">{engine}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Cog className="w-5 h-5 text-primary" />
          <div>
            <p className="font-medium">Transmission</p>
            <p className="text-sm text-muted-foreground">{transmission}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSpecifications;
