import { ServiceCategory } from '../types';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'plumbing',
    name: 'Plumbing',
    icon: 'Wrench',
    description: 'Pipes, leaks, installations, repairs',
    providerCount: 145,
    averagePrice: '$65-120/hr'
  },
  {
    id: 'electrical',
    name: 'Electrical',
    icon: 'Zap',
    description: 'Wiring, outlets, lighting, repairs',
    providerCount: 89,
    averagePrice: '$70-150/hr'
  },
  {
    id: 'cctv',
    name: 'CCTV Installation',
    icon: 'Camera',
    description: 'Security cameras, monitoring systems',
    providerCount: 67,
    averagePrice: '$200-500/job'
  },
  {
    id: 'transport',
    name: 'Van & Transport',
    icon: 'Truck',
    description: 'Moving, deliveries, pickup services',
    providerCount: 123,
    averagePrice: '$45-80/hr'
  },
  {
    id: 'cleaning',
    name: 'Cleaning',
    icon: 'Sparkles',
    description: 'House, office, deep cleaning',
    providerCount: 198,
    averagePrice: '$25-45/hr'
  },
  {
    id: 'handyman',
    name: 'Handyman',
    icon: 'Hammer',
    description: 'General repairs, maintenance',
    providerCount: 156,
    averagePrice: '$40-75/hr'
  },
  {
    id: 'gardening',
    name: 'Gardening',
    icon: 'Leaf',
    description: 'Landscaping, lawn care, pruning',
    providerCount: 134,
    averagePrice: '$35-60/hr'
  },
  {
    id: 'painting',
    name: 'Painting',
    icon: 'Palette',
    description: 'Interior, exterior, touch-ups',
    providerCount: 112,
    averagePrice: '$40-80/hr'
  }
];