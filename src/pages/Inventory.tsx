import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CarCard from '@/components/CarCard';
import CarModal from '@/components/CarModal';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowUpDown, Search, Filter, SlidersHorizontal } from 'lucide-react';

// Enhanced mock car data with more luxury vehicles
const carData = [
  {
    id: 1,
    make: 'BMW',
    model: 'X5 M',
    year: 2023,
    price: 89900,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    mileage: 12500,
    engine: '4.4L Twin-Turbo V8',
    transmission: '8-Speed Automatic',
    status: 'New',
    gallery: ['https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'],
  },
  {
    id: 2,
    make: 'Mercedes-Benz',
    model: 'AMG GT 63 S',
    year: 2023,
    price: 165000,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    mileage: 8200,
    engine: '4.0L Biturbo V8',
    transmission: '9-Speed Automatic',
    status: 'Certified Pre-Owned',
    gallery: ['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'],
  },
  {
    id: 3,
    make: 'Audi',
    model: 'RS6 Avant',
    year: 2022,
    price: 115000,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    mileage: 18500,
    engine: '4.0L Twin-Turbo V8',
    transmission: '8-Speed Tiptronic',
    status: 'Special Offer',
    gallery: ['https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'],
  },
  {
    id: 4,
    make: 'Tesla',
    model: 'Model S Plaid',
    year: 2023,
    price: 129990,
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2369&q=80',
    mileage: 5000,
    engine: 'Tri Motor Electric',
    transmission: 'Single-Speed',
    status: 'New',
    gallery: ['https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2369&q=80', 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'],
  },
  {
    id: 5,
    make: 'Porsche',
    model: '911 Turbo S',
    year: 2023,
    price: 207000,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    mileage: 3500,
    engine: '3.8L Twin-Turbo Flat-6',
    transmission: '8-Speed PDK',
    status: 'New',
    gallery: ['https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'],
  },
  {
    id: 6,
    make: 'Lamborghini',
    model: 'Huracán EVO',
    year: 2022,
    price: 248295,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    mileage: 7200,
    engine: '5.2L V10',
    transmission: '7-Speed Dual-Clutch',
    status: 'Certified Pre-Owned',
    gallery: ['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'],
  },
  {
    id: 7,
    make: 'Ferrari',
    model: 'F8 Tributo',
    year: 2023,
    price: 280000,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    mileage: 2100,
    engine: '3.9L Twin-Turbo V8',
    transmission: '7-Speed Dual-Clutch',
    status: 'New',
    gallery: ['https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2369&q=80'],
  },
  {
    id: 8,
    make: 'McLaren',
    model: '720S',
    year: 2022,
    price: 315000,
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2369&q=80',
    mileage: 4800,
    engine: '4.0L Twin-Turbo V8',
    transmission: '7-Speed Dual-Clutch',
    status: 'Special Offer',
    gallery: ['https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2369&q=80', 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'],
  }
];

export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  image: string;
  mileage: number;
  engine: string;
  transmission: string;
  status: string;
  gallery: string[];
}

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMake, setSelectedMake] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);

  const makes = Array.from(new Set(carData.map(car => car.make))).sort();
  const years = Array.from(new Set(carData.map(car => car.year))).sort((a, b) => b - a);

  const filteredCars = useMemo(() => {
    let filtered = carData.filter(car => {
      const matchesSearch = `${car.make} ${car.model} ${car.year}`.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesMake = selectedMake === 'all' || car.make === selectedMake;
      const matchesYear = selectedYear === 'all' || car.year.toString() === selectedYear;
      
      let matchesPrice = true;
      if (priceRange !== 'all') {
        switch (priceRange) {
          case 'under-100k':
            matchesPrice = car.price < 100000;
            break;
          case '100k-200k':
            matchesPrice = car.price >= 100000 && car.price < 200000;
            break;
          case '200k-300k':
            matchesPrice = car.price >= 200000 && car.price < 300000;
            break;
          case 'over-300k':
            matchesPrice = car.price >= 300000;
            break;
        }
      }

      return matchesSearch && matchesMake && matchesYear && matchesPrice;
    });

    // Sort cars
    if (sortBy !== 'featured') {
      switch (sortBy) {
        case 'price-low':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'year-new':
          filtered.sort((a, b) => b.year - a.year);
          break;
        case 'year-old':
          filtered.sort((a, b) => a.year - b.year);
          break;
        case 'mileage-low':
          filtered.sort((a, b) => a.mileage - b.mileage);
          break;
        case 'alphabetical':
          filtered.sort((a, b) => `${a.make} ${a.model}`.localeCompare(`${b.make} ${b.model}`));
          break;
      }
    }

    return filtered;
  }, [searchTerm, selectedMake, selectedYear, priceRange, sortBy]);

  const openModal = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedMake('all');
    setSelectedYear('all');
    setPriceRange('all');
    setSortBy('featured');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navbar />
      
      {/* Enhanced Hero Header */}
      <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 pt-8 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYwNSIgZmlsbC1ydWxlPSJub256ZXJvIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-3">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-white font-medium text-lg">Live Inventory</span>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-none">
              PREMIUM
              <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                INVENTORY
              </span>
            </h1>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl lg:text-2xl text-slate-200 mb-8 leading-relaxed">
                Discover our exclusive collection of luxury vehicles, meticulously curated for the discerning driver
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-white/90">
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 border border-white/10">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="font-semibold text-sm md:text-base">{carData.length}</span>
                  <span className="text-sm md:text-base">Premium Vehicles</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 border border-white/10">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="font-semibold text-sm md:text-base">8</span>
                  <span className="text-sm md:text-base">Luxury Brands</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 border border-white/10">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="font-semibold text-sm md:text-base">24/7</span>
                  <span className="text-sm md:text-base">Expert Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content with no gap */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Enhanced Filters Section */}
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-8 mb-12 shadow-2xl shadow-slate-900/5">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-red-500 to-red-600 rounded-xl">
                <SlidersHorizontal className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Filter & Sort</h2>
                <p className="text-slate-600 dark:text-slate-400">Find your perfect luxury vehicle</p>
              </div>
            </div>
            
            <Button
              variant="outline"
              onClick={() => setIsFilterExpanded(!isFilterExpanded)}
              className="lg:hidden"
            >
              <Filter className="w-4 h-4 mr-2" />
              {isFilterExpanded ? 'Hide' : 'Show'} Filters
            </Button>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 transition-all duration-300 ${
            isFilterExpanded || window.innerWidth >= 1024 ? 'opacity-100 max-h-none' : 'lg:opacity-100 lg:max-h-none max-h-0 opacity-0 overflow-hidden'
          }`}>
            {/* Enhanced Search */}
            <div className="relative lg:col-span-2">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                placeholder="Search by make, model, or year..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 bg-white/80 border-slate-200 focus:border-red-500 focus:ring-red-500/20 rounded-xl"
              />
            </div>

            {/* Make Filter */}
            <Select value={selectedMake} onValueChange={setSelectedMake}>
              <SelectTrigger className="h-12 bg-white/80 border-slate-200 focus:border-red-500 rounded-xl">
                <SelectValue placeholder="All Makes" />
              </SelectTrigger>
              <SelectContent className="bg-white/95 backdrop-blur-xl border-slate-200">
                <SelectItem value="all" className="hover:bg-red-50">All Makes</SelectItem>
                {makes.map(make => (
                  <SelectItem key={make} value={make} className="hover:bg-red-50">{make}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Year Filter */}
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="h-12 bg-white/80 border-slate-200 focus:border-red-500 rounded-xl">
                <SelectValue placeholder="All Years" />
              </SelectTrigger>
              <SelectContent className="bg-white/95 backdrop-blur-xl border-slate-200">
                <SelectItem value="all" className="hover:bg-red-50">All Years</SelectItem>
                {years.map(year => (
                  <SelectItem key={year} value={year.toString()} className="hover:bg-red-50">{year}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Enhanced Price Range Filter */}
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="h-12 bg-white/80 border-slate-200 focus:border-red-500 rounded-xl">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent className="bg-white/95 backdrop-blur-xl border-slate-200">
                <SelectItem value="all" className="hover:bg-red-50">All Prices</SelectItem>
                <SelectItem value="under-100k" className="hover:bg-red-50">Under $100K</SelectItem>
                <SelectItem value="100k-200k" className="hover:bg-red-50">$100K - $200K</SelectItem>
                <SelectItem value="200k-300k" className="hover:bg-red-50">$200K - $300K</SelectItem>
                <SelectItem value="over-300k" className="hover:bg-red-50">Over $300K</SelectItem>
              </SelectContent>
            </Select>

            {/* Enhanced Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="h-12 bg-white/80 border-slate-200 focus:border-red-500 rounded-xl">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent className="bg-white/95 backdrop-blur-xl border-slate-200">
                <SelectItem value="featured" className="hover:bg-red-50">Featured</SelectItem>
                <SelectItem value="price-low" className="hover:bg-red-50">Price: Low to High</SelectItem>
                <SelectItem value="price-high" className="hover:bg-red-50">Price: High to Low</SelectItem>
                <SelectItem value="year-new" className="hover:bg-red-50">Year: Newest First</SelectItem>
                <SelectItem value="year-old" className="hover:bg-red-50">Year: Oldest First</SelectItem>
                <SelectItem value="mileage-low" className="hover:bg-red-50">Mileage: Lowest First</SelectItem>
                <SelectItem value="alphabetical" className="hover:bg-red-50">Alphabetical</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Clear Filters Button */}
          {(searchTerm || selectedMake !== 'all' || selectedYear !== 'all' || priceRange !== 'all' || sortBy !== 'featured') && (
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
              <Button 
                variant="outline" 
                onClick={clearAllFilters}
                className="flex items-center gap-2 hover:bg-red-50 hover:border-red-200 hover:text-red-700 transition-all duration-200"
              >
                <ArrowUpDown className="w-4 h-4" />
                Clear All Filters
              </Button>
            </div>
          )}
        </div>

        {/* Enhanced Results Summary */}
        <div className="flex items-center justify-between mb-8">
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl px-6 py-3 border border-slate-200/50 dark:border-slate-700/50">
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              Showing <span className="font-bold text-red-600">{filteredCars.length}</span> of{' '}
              <span className="font-bold">{carData.length}</span> premium vehicles
            </p>
          </div>
          
          {filteredCars.length > 0 && (
            <div className="text-sm text-slate-500 dark:text-slate-400">
              Starting from <span className="font-bold text-green-600">
                ${Math.min(...filteredCars.map(car => car.price)).toLocaleString()}
              </span>
            </div>
          )}
        </div>

        {/* Enhanced Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredCars.map((car, index) => (
            <CarCard 
              key={car.id} 
              car={car} 
              index={index} 
              onQuickView={() => openModal(car)}
            />
          ))}
        </div>

        {/* Enhanced No Results */}
        {filteredCars.length === 0 && (
          <div className="text-center py-20">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <Search className="w-12 h-12 text-slate-400" />
              </div>
              <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-red-500/10 to-red-600/10 animate-pulse"></div>
            </div>
            
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">No vehicles found</h3>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
              We couldn't find any vehicles matching your criteria. Try adjusting your filters to discover more options.
            </p>
            
            <div className="space-y-4">
              <Button 
                onClick={clearAllFilters}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105"
              >
                Clear All Filters
              </Button>
              
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {makes.slice(0, 5).map(make => (
                  <Button
                    key={make}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      clearAllFilters();
                      setSelectedMake(make);
                    }}
                    className="hover:bg-red-50 hover:border-red-200 hover:text-red-700"
                  >
                    View {make}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Modal */}
      {selectedCar && (
        <CarModal 
          car={selectedCar} 
          isOpen={isModalOpen} 
          onClose={closeModal} 
        />
      )}
      
      <Footer />
    </div>
  );
};

export default Inventory;
