import { LucideIcon } from 'lucide-react';

export interface LocationItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  highlight: string;
}

export interface RiskItem {
  id: string;
  title: string;
  percentage: number;
  description: string;
  icon: LucideIcon;
  colorClass: string;
}

export interface TourDetails {
  dates: string;
  duration: string;
  price: string;
  route: string;
}