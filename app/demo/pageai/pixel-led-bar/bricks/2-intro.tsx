import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingFeatureList } from '@/components/landing/feature/LandingFeatureList';
import { MusicIcon, TheaterIcon, VideoIcon, BuildingIcon } from 'lucide-react';

export default function Intro() {
  const applications = [
    {
      title: 'Concerts & Festivals',
      description: 'High-energy pixel mapping and dynamic effects.',
      icon: <MusicIcon className="w-6 h-6" />,
    },
    {
      title: 'Theater & Touring',
      description: 'Versatile fixtures for changing stage designs.',
      icon: <TheaterIcon className="w-6 h-6" />,
    },
    {
      title: 'Broadcast Studios',
      description: 'Flicker-free performance for camera environments.',
      icon: <VideoIcon className="w-6 h-6" />,
    },
    {
      title: 'Architectural',
      description: 'Immersive installations and building lighting.',
      icon: <BuildingIcon className="w-6 h-6" />,
    },
  ];

  return (
    <>
      <LandingFeatureList
        title="What Is a 16-Zone Pixel Control LED Bar?"
        description={
          <div className="text-left">
            <p className="mb-4">
              A <strong>16-zone pixel control LED bar</strong> allows each section of the fixture to be controlled independently, enabling complex lighting effects such as color chases, waves, gradients, and video-style animations.
            </p>
            <p>
              Unlike standard LED bars that act as a single light source, pixel-controlled bars offer <strong>creative freedom and precision</strong>, making them essential for modern lighting design.
            </p>
          </div>
        }
        featureItems={applications}
        variant="secondary"
      />
    </>
  );
}
