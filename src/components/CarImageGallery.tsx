
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarImageGalleryProps {
  gallery: string[];
  carName: string;
}

const CarImageGallery: React.FC<CarImageGalleryProps> = ({ gallery, carName }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <img 
          src={gallery[currentImageIndex]} 
          alt={carName}
          className="w-full h-80 object-cover rounded-lg"
        />
        
        {gallery.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={prevImage}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={nextImage}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {gallery.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-primary' : 'bg-background/60'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {gallery.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto">
          {gallery.map((image, index) => (
            <button
              key={index}
              className={`flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 transition-colors ${
                index === currentImageIndex ? 'border-primary' : 'border-border'
              }`}
              onClick={() => setCurrentImageIndex(index)}
            >
              <img 
                src={image} 
                alt={`View ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CarImageGallery;
