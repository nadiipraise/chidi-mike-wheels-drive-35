
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Car } from '@/pages/Inventory';
import { Eye, Calendar, Gauge, Fuel, Heart } from 'lucide-react';

interface CarCardProps {
  car: Car;
  index: number;
  onQuickView: () => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, index, onQuickView }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New':
        return 'bg-green-500 text-white';
      case 'Certified Pre-Owned':
        return 'bg-blue-500 text-white';
      case 'Special Offer':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div 
      className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
      style={{
        animation: `fade-in 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      {/* Image Container with Enhanced Effects */}
      <div className="relative overflow-hidden rounded-t-2xl">
        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className="w-full h-64 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 animate-pulse"></div>
        )}
        
        <img 
          src={car.image} 
          alt={`${car.year} ${car.make} ${car.model}`}
          className={`w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4 z-10">
          <div className={`${getStatusColor(car.status)} px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm`}>
            {car.status}
          </div>
        </div>

        {/* Like Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-4 right-4 z-10 p-2.5 bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-200"
        >
          <Heart 
            className={`w-5 h-5 transition-colors duration-200 ${
              isLiked ? 'fill-red-500 text-red-500' : 'text-white'
            }`} 
          />
        </button>

        {/* Price Badge - Enhanced */}
        <div className="absolute bottom-4 right-4 z-10">
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-white/50 shadow-xl">
            <div className="text-sm font-medium text-slate-600 dark:text-slate-400">Starting at</div>
            <div className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              ${car.price.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
          <Button 
            onClick={onQuickView}
            className="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 backdrop-blur-sm rounded-xl px-6 py-3 font-semibold shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105"
          >
            <Eye className="w-5 h-5 mr-2" />
            Quick View
          </Button>
        </div>
      </div>

      {/* Enhanced Content Section */}
      <div className="p-6 space-y-4">
        {/* Car Title */}
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">
            {car.year} {car.make}
          </h3>
          <p className="text-xl font-semibold text-slate-700 dark:text-slate-300">
            {car.model}
          </p>
        </div>
        
        {/* Key Specs Grid */}
        <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg">
              <Calendar className="w-4 h-4 text-slate-600 dark:text-slate-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">{car.year}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Year</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg">
              <Gauge className="w-4 h-4 text-slate-600 dark:text-slate-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">{car.mileage.toLocaleString()}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Miles</p>
            </div>
          </div>
        </div>

        {/* Engine Info */}
        <div className="flex items-center space-x-3 p-3 bg-slate-50/50 dark:bg-slate-700/30 rounded-xl">
          <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
            <Fuel className="w-4 h-4 text-red-600 dark:text-red-400" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-slate-900 dark:text-white">{car.engine}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{car.transmission}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 hover:bg-red-50 hover:border-red-200 hover:text-red-700 transition-all duration-200"
            onClick={onQuickView}
          >
            <Eye className="w-4 h-4 mr-2" />
            Details
          </Button>
          <Button 
            size="sm" 
            className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            Test Drive
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
