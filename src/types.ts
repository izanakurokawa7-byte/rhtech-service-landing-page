export interface ServiceItem {
  id: string;
  title: string;
  category: 'laptop' | 'pc' | 'rakit' | 'upgrade' | 'cleaning';
  icon: string;
  shortDesc: string;
  features: string[];
  estimatedTime: string;
  startingPrice: string;
  warranty: string;
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'cleaning' | 'rakit' | 'laptop' | 'hardware';
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  description: string;
  specsOrDetails: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  device: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
  avatarUrl?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
