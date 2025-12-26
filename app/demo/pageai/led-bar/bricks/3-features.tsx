import { LandingFeatureList } from '@/components/landing/feature/LandingFeatureList';
import { 
  ZapIcon, 
  MaximizeIcon, 
  UmbrellaIcon, 
  VideoIcon, 
  WifiIcon, 
  MoveIcon 
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: '16-Zone Pixel Control',
      description: 'Individual control over 16 zones for complex pixel mapping and dynamic effects.',
      icon: <ZapIcon className="w-6 h-6" />,
    },
    {
      title: 'Motorized Zoom',
      description: 'Wide zoom range from 5.8° to 47.9°, allowing it to function as a narrow beam or wide wash.',
      icon: <MaximizeIcon className="w-6 h-6" />,
    },
    {
      title: 'IP65 Outdoor Rated',
      description: 'Rugged, weatherproof design suitable for outdoor festivals and events in any condition.',
      icon: <UmbrellaIcon className="w-6 h-6" />,
    },
    {
      title: 'Flicker-Free Operation',
      description: 'High refresh rate of 44,000Hz, ensuring completely flicker-free performance for TV and film.',
      icon: <VideoIcon className="w-6 h-6" />,
    },
    {
      title: 'Advanced Connectivity',
      description: 'Supports DMX, RDM, Kling-Net, and Art-Net for flexible integration into any rig.',
      icon: <WifiIcon className="w-6 h-6" />,
    },
    {
      title: 'Fast Tilt Movement',
      description: '200° tilt range with fast, precise movement for dramatic sweeping effects.',
      icon: <MoveIcon className="w-6 h-6" />,
    },
  ];

  return (
    <LandingFeatureList
      title="Engineered for Performance"
      description="Every feature is designed to give lighting designers maximum creative freedom."
      featureItems={features}
      withBackground
      variant="secondary"
    />
  );
}
