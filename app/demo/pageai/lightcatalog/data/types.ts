import { ReactNode } from 'react';
import { LandingProductDetailProps } from '@/components/landing/LandingProductDetail';

export interface CatalogItemData {
  slug: string;
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    title: ReactNode;
    description: ReactNode;
    buttonText: string;
    buttonLink: string;
    avatarImage: string;
    avatarName: string;
    reportText: string;
  };
  intro: {
    title: string;
    description: ReactNode;
    features: {
      title: string;
      description: string;
      iconName: 'MusicIcon' | 'TheaterIcon' | 'VideoIcon' | 'BuildingIcon' | 'ZapIcon' | 'CameraIcon' | 'SettingsIcon';
    }[];
  };
  products: LandingProductDetailProps[];
  comparison: {
    title: string;
    columns: { key: string; label: string }[];
    data: { id: string; [key: string]: string }[];
  };
  expertTips: {
    title: string;
    description: string;
    imageSrc: string;
    tips: { title: string; description: string }[];
  };
  faq: {
    title: string;
    description: string;
    items: { question: string; answer: string }[];
  };
  cta: {
    title: string;
    description: string;
    buttons: { text: string; link: string; variant: 'secondary' | 'outline' }[];
  };
  similarTopics: {
    title: string;
    items: {
      title: string;
      description: string;
      image: string;
      link: string;
    }[];
  };
}
