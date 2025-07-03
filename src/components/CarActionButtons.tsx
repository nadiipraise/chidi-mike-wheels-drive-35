
import React from 'react';
import { Button } from '@/components/ui/button';

const CarActionButtons: React.FC = () => {
  return (
    <div className="space-y-3">
      <Button size="lg" className="w-full">
        Schedule Test Drive
      </Button>
      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" size="lg">
          Get Financing
        </Button>
        <Button variant="outline" size="lg">
          Contact Dealer
        </Button>
      </div>
    </div>
  );
};

export default CarActionButtons;
