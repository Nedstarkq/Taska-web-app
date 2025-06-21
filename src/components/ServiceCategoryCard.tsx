import React from 'react';
import * as Icons from 'lucide-react';
import { ServiceCategory } from '../types';

interface ServiceCategoryCardProps {
  category: ServiceCategory;
  onClick: (category: ServiceCategory) => void;
}

const ServiceCategoryCard: React.FC<ServiceCategoryCardProps> = ({ category, onClick }) => {
  const IconComponent = Icons[category.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <div
      onClick={() => onClick(category)}
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 cursor-pointer hover:shadow-md hover:border-blue-200 transition-all duration-200 group"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
            {IconComponent && <IconComponent className="w-6 h-6 text-blue-600" />}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {category.name}
            </h3>
            <p className="text-sm text-gray-500">{category.providerCount} providers</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-gray-900">{category.averagePrice}</p>
          <p className="text-xs text-gray-500">Average</p>
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4">{category.description}</p>
      <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors">
        <span>View Providers</span>
        <Icons.ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};

export default ServiceCategoryCard;