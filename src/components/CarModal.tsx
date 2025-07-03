
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Car } from '@/pages/Inventory';
import CarImageGallery from './CarImageGallery';
import CarPricing from './CarPricing';
import CarSpecifications from './CarSpecifications';
import CarFeatures from './CarFeatures';
import CarActionButtons from './CarActionButtons';

interface CarModalProps {
  car: Car;
  isOpen: boolean;
  onClose: () => void;
}

const CarModal: React.FC<CarModalProps> = ({ car, isOpen, onClose }) => {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'New':
        return 'default';
      case 'Certified Pre-Owned':
        return 'secondary';
      case 'Special Offer':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">
              {car.year} {car.make} {car.model}
            </DialogTitle>
            <Badge variant={getStatusVariant(car.status)} className="font-medium">
              {car.status}
            </Badge>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CarImageGallery 
            gallery={car.gallery} 
            carName={`${car.year} ${car.make} ${car.model}`} 
          />

          <div className="space-y-6">
            <CarPricing price={car.price} />
            
            <Separator />
            
            <CarSpecifications 
              year={car.year}
              mileage={car.mileage}
              engine={car.engine}
              transmission={car.transmission}
            />

            <Separator />

            <CarFeatures />

            <Separator />

            <CarActionButtons />

            <p className="text-xs text-muted-foreground">
              *Monthly payment estimate based on 72-month term at 4.9% APR with $5,000 down payment. 
              Actual terms may vary based on credit approval.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CarModal;
