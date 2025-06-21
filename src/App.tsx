import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import ServiceCategoryCard from './components/ServiceCategoryCard';
import ServiceProviderCard from './components/ServiceProviderCard';
import BookingModal from './components/BookingModal';
import { serviceCategories } from './data/services';
import { serviceProviders } from './data/serviceProviders';
import { ServiceCategory, ServiceProvider, BookingRequest } from './types';
import { ChevronLeft, Users, Shield, Clock, Star } from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);
  const [selectedProvider, setSelectedProvider] = useState<ServiceProvider | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const filteredProviders = useMemo(() => {
    return serviceProviders.filter(provider => {
      const matchesSearch = searchQuery === '' || 
        provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        provider.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        provider.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
        
      const matchesLocation = locationFilter === '' || 
        provider.location.toLowerCase().includes(locationFilter.toLowerCase());
        
      const matchesCategory = !selectedCategory || provider.category === selectedCategory.id;
      
      return matchesSearch && matchesLocation && matchesCategory;
    });
  }, [searchQuery, locationFilter, selectedCategory]);

  const handleCategoryClick = (category: ServiceCategory) => {
    setSelectedCategory(category);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  const handleBookNow = (provider: ServiceProvider) => {
    setSelectedProvider(provider);
    setIsBookingModalOpen(true);
  };

  const handleBookingSubmit = (booking: BookingRequest) => {
    console.log('Booking submitted:', booking);
    // Here you would typically send the booking to your backend
    alert('Booking request sent successfully! The provider will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearchChange={setSearchQuery} onLocationChange={setLocationFilter} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!selectedCategory ? (
          // Home Page - Service Categories
          <>
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Find Trusted Local <span className="text-blue-600">Artisans</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Connect with verified professionals for all your home and business needs. 
                From plumbing to cleaning, we've got you covered.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-2">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">1,200+</div>
                  <div className="text-sm text-gray-600">Verified Providers</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-2">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Background Checked</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mx-auto mb-2">
                    <Star className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">4.8</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-2">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{'<'} 1hr</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
              </div>
            </div>

            {/* Service Categories */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Popular Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {serviceCategories.map((category) => (
                  <ServiceCategoryCard
                    key={category.id}
                    category={category}
                    onClick={handleCategoryClick}
                  />
                ))}
              </div>
            </div>

            {/* How it Works */}
            <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                How Taska Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose a Service</h3>
                  <p className="text-gray-600">Browse our categories and find the perfect artisan for your needs.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Book & Connect</h3>
                  <p className="text-gray-600">Send your request and connect directly with verified professionals.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-yellow-600">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Get It Done</h3>
                  <p className="text-gray-600">Relax while your chosen artisan completes the job professionally.</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          // Service Providers Page
          <>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleBackToCategories}
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span>Back to Services</span>
                </button>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    {selectedCategory.name} Providers
                  </h1>
                  <p className="text-gray-600">
                    {filteredProviders.length} providers available
                  </p>
                </div>
              </div>
            </div>

            {/* Providers Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredProviders.map((provider) => (
                <ServiceProviderCard
                  key={provider.id}
                  provider={provider}
                  onBookNow={handleBookNow}
                />
              ))}
            </div>

            {filteredProviders.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No providers found matching your criteria.
                </p>
                <p className="text-gray-400 mt-2">
                  Try adjusting your search or location filters.
                </p>
              </div>
            )}
          </>
        )}
      </main>

      {/* Booking Modal */}
      {selectedProvider && (
        <BookingModal
          provider={selectedProvider}
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          onSubmit={handleBookingSubmit}
        />
      )}
    </div>
  );
}

export default App;