export interface ServiceProvider {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  location: string;
  description: string;
  skills: string[];
  verified: boolean;
  profileImage: string;
  completedJobs: number;
  responseTime: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  providerCount: number;
  averagePrice: string;
}

export interface BookingRequest {
  serviceType: string;
  description: string;
  location: string;
  preferredDate: string;
  budget: string;
  urgency: 'low' | 'medium' | 'high';
}