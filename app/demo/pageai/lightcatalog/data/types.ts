import { LandingProductDetailProps } from '@/components/landing/LandingProductDetail';

export interface CatalogItemData {
  slug: string;
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    title: string; // Changed from ReactNode to string (assuming titles are simple strings)
    description: string; // Changed from ReactNode to string (for JSON compatibility, will be rendered as HTML or text)
    buttonText: string;
    buttonLink: string;
    avatarImage: string;
    avatarName: string;
    reportText: string;
  };
  intro: {
    title: string;
    description: string; // Changed from ReactNode to string
    features: {
      title: string;
      description: string;
      iconName: 'MusicIcon' | 'TheaterIcon' | 'VideoIcon' | 'BuildingIcon' | 'ZapIcon' | 'CameraIcon' | 'SettingsIcon' | 'GridIcon' | 'SunIcon' | 'ShieldIcon';
    }[];
  };
  products: (Omit<LandingProductDetailProps, 'description'> & { description: string })[]; // Override description to be string
  comparison: {
    title: string;
    columns: { key: string; label: string }[];
    data: { id?: string; [key: string]: string | undefined }[];
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
    buttons: { text: string; link: string; variant: 'primary' | 'secondary' | 'outline' }[];
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
