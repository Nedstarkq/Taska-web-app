import React from 'react';
import { Star, MapPin, Clock, Shield, CheckCircle } from 'lucide-react';
import { ServiceProvider } from '../types';

interface ServiceProviderCardProps {
  provider: ServiceProvider;
  onBookNow: (provider: ServiceProvider) => void;
}

const ServiceProviderCard: React.FC<ServiceProviderCardProps> = ({ provider, onBookNow }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src={provider.profileImage}
                alt={provider.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              {provider.verified && (
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">{provider.name}</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{provider.location}</span>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-900">{provider.rating}</span>
                  <span className="text-sm text-gray-500">({provider.reviewCount} reviews)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-gray-900">${provider.hourlyRate}</p>
            <p className="text-sm text-gray-500">per hour</p>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4">{provider.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {provider.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Shield className="w-4 h-4" />
              <span>{provider.completedJobs} jobs completed</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>Responds {provider.responseTime}</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => onBookNow(provider)}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ServiceProviderCard;